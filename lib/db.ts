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
    ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
  `;
}
