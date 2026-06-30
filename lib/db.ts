import { neon } from '@neondatabase/serverless';

/**
 * Tiny profile store on Postgres (Neon). One row per user holding a JSON blob of
 * their synced data (progress, bookmarks, notes, reading plan). Connection is
 * lazy and the table is created on first use, so nothing breaks at build time or
 * when the database isn't configured yet.
 */
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  '';

export const dbConfigured = Boolean(connectionString);

type SqlClient = ReturnType<typeof neon>;
let client: SqlClient | null = null;

function db(): SqlClient {
  if (!connectionString) throw new Error('No database connection string configured.');
  if (!client) client = neon(connectionString);
  return client;
}

let tableReady: Promise<void> | null = null;
function ensureTable(): Promise<void> {
  if (!tableReady) {
    tableReady = (async () => {
      await db()`
        CREATE TABLE IF NOT EXISTS profiles (
          user_id    TEXT PRIMARY KEY,
          data       JSONB NOT NULL DEFAULT '{}'::jsonb,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
      // Keep the previous version of every profile for recovery (one-step undo).
      await db()`ALTER TABLE profiles ADD COLUMN IF NOT EXISTS prev_data JSONB`;
    })().catch((e) => {
      tableReady = null; // allow a retry on the next request
      throw e;
    });
  }
  return tableReady;
}

export async function getProfile(userId: string): Promise<Record<string, unknown> | null> {
  await ensureTable();
  const rows = (await db()`SELECT data FROM profiles WHERE user_id = ${userId}`) as {
    data: Record<string, unknown>;
  }[];
  return rows[0]?.data ?? null;
}

export async function saveProfile(
  userId: string,
  data: Record<string, unknown>,
): Promise<void> {
  await ensureTable();
  await db()`
    INSERT INTO profiles (user_id, data, updated_at)
    VALUES (${userId}, ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (user_id)
      DO UPDATE SET prev_data = profiles.data, data = EXCLUDED.data, updated_at = now()
  `;
}

/** Restore a user's previous profile version (recovery from a bad write). */
export async function restorePreviousProfile(userId: string): Promise<boolean> {
  await ensureTable();
  const rows = (await db()`
    UPDATE profiles
       SET data = prev_data, prev_data = data, updated_at = now()
     WHERE user_id = ${userId} AND prev_data IS NOT NULL
    RETURNING user_id
  `) as { user_id: string }[];
  return rows.length > 0;
}

/** Every profile's data blob — used to rank the leaderboard (XP is computed in JS). */
export async function getAllProfiles(): Promise<
  { user_id: string; data: Record<string, unknown> }[]
> {
  await ensureTable();
  return (await db()`SELECT user_id, data FROM profiles`) as {
    user_id: string;
    data: Record<string, unknown>;
  }[];
}

// ── Analytics events ─────────────────────────────────────────────────────────
let eventsReady: Promise<void> | null = null;
function ensureEventsTable(): Promise<void> {
  if (!eventsReady) {
    eventsReady = (async () => {
      await db()`
        CREATE TABLE IF NOT EXISTS events (
          id         BIGSERIAL PRIMARY KEY,
          anon_id    TEXT,
          user_id    TEXT,
          type       TEXT NOT NULL,
          path       TEXT,
          payload    JSONB NOT NULL DEFAULT '{}'::jsonb,
          session_id TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
      await db()`CREATE INDEX IF NOT EXISTS events_created_idx ON events (created_at)`;
      await db()`CREATE INDEX IF NOT EXISTS events_type_idx ON events (type)`;
    })().catch((e) => {
      eventsReady = null;
      throw e;
    });
  }
  return eventsReady;
}

export interface IncomingEvent {
  type: string;
  path: string;
  payload: Record<string, unknown>;
  session_id: string;
  ts: number;
}

/** Insert a whole batch in a single query (jsonb_to_recordset fan-out). */
export async function insertEvents(
  anonId: string,
  userId: string | null,
  events: IncomingEvent[],
): Promise<void> {
  if (events.length === 0) return;
  await ensureEventsTable();
  const json = JSON.stringify(events);
  await db()`
    INSERT INTO events (anon_id, user_id, type, path, payload, session_id, created_at)
    SELECT ${anonId}, ${userId}, x.type, x.path, x.payload, x.session_id, to_timestamp(x.ts / 1000.0)
    FROM jsonb_to_recordset(${json}::jsonb)
      AS x(type text, path text, payload jsonb, session_id text, ts bigint)
  `;
}

export interface AnalyticsSummary {
  totals: {
    events: number;
    events24h: number;
    events7d: number;
    users: number;
    users24h: number;
    users7d: number;
    sessions: number;
    sessions7d: number;
    signedIn: number;
  };
  totalMinutes: number;
  avgSessionMinutes: number;
  byType: { type: string; n: number }[];
  topPages: { path: string; n: number }[];
  dau: { day: string; users: number }[];
  recent: {
    type: string;
    path: string;
    payload: Record<string, unknown>;
    anon: string;
    signedIn: boolean;
    at: string;
  }[];
}

const num = (v: unknown) => Number(v ?? 0) || 0;

/** Aggregate analytics for the admin dashboard. */
export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  await ensureEventsTable();
  const sql = db();

  const totalsRows = (await sql`
    SELECT
      count(*) AS events,
      count(*) FILTER (WHERE created_at > now() - interval '24 hours') AS events_24h,
      count(*) FILTER (WHERE created_at > now() - interval '7 days') AS events_7d,
      count(DISTINCT anon_id) AS users,
      count(DISTINCT anon_id) FILTER (WHERE created_at > now() - interval '24 hours') AS users_24h,
      count(DISTINCT anon_id) FILTER (WHERE created_at > now() - interval '7 days') AS users_7d,
      count(DISTINCT session_id) AS sessions,
      count(DISTINCT session_id) FILTER (WHERE created_at > now() - interval '7 days') AS sessions_7d,
      count(DISTINCT user_id) FILTER (WHERE user_id IS NOT NULL) AS signed_in
    FROM events
  `) as Record<string, unknown>[];
  const t = totalsRows[0] ?? {};

  const timeRows = (await sql`
    SELECT
      COALESCE(SUM((payload->>'ms')::bigint), 0) AS total_ms,
      COALESCE(AVG(s), 0) AS avg_ms
    FROM (
      SELECT session_id, SUM((payload->>'ms')::bigint) AS s
      FROM events WHERE type = 'tick' GROUP BY session_id
    ) q
  `) as Record<string, unknown>[];

  const byType = (await sql`
    SELECT type, count(*) AS n FROM events GROUP BY type ORDER BY n DESC
  `) as Record<string, unknown>[];

  const topPages = (await sql`
    SELECT path, count(*) AS n FROM events
    WHERE type = 'page_view' AND path <> ''
    GROUP BY path ORDER BY n DESC LIMIT 12
  `) as Record<string, unknown>[];

  const dau = (await sql`
    SELECT to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day,
           count(DISTINCT anon_id) AS users
    FROM events WHERE created_at > now() - interval '7 days'
    GROUP BY day ORDER BY day
  `) as Record<string, unknown>[];

  const recent = (await sql`
    SELECT type, path, payload, anon_id, user_id, to_char(created_at, 'YYYY-MM-DD HH24:MI') AS at
    FROM events ORDER BY created_at DESC LIMIT 60
  `) as Record<string, unknown>[];

  return {
    totals: {
      events: num(t.events),
      events24h: num(t.events_24h),
      events7d: num(t.events_7d),
      users: num(t.users),
      users24h: num(t.users_24h),
      users7d: num(t.users_7d),
      sessions: num(t.sessions),
      sessions7d: num(t.sessions_7d),
      signedIn: num(t.signed_in),
    },
    totalMinutes: Math.round(num(timeRows[0]?.total_ms) / 60000),
    avgSessionMinutes: Math.round((num(timeRows[0]?.avg_ms) / 60000) * 10) / 10,
    byType: byType.map((r) => ({ type: String(r.type), n: num(r.n) })),
    topPages: topPages.map((r) => ({ path: String(r.path), n: num(r.n) })),
    dau: dau.map((r) => ({ day: String(r.day), users: num(r.users) })),
    recent: recent.map((r) => ({
      type: String(r.type),
      path: String(r.path ?? ''),
      payload: (r.payload as Record<string, unknown>) ?? {},
      anon: String(r.anon_id ?? '').slice(0, 8),
      signedIn: Boolean(r.user_id),
      at: String(r.at ?? ''),
    })),
  };
}
