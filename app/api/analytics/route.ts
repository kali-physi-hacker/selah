import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { insertEvents, dbConfigured, type IncomingEvent } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_EVENTS = 300;
const TYPE_RE = /^[a-z0-9_]{1,40}$/;

/** Keep payloads tiny and free of anything sensitive (defense in depth). */
function sanitizePayload(p: unknown): Record<string, unknown> {
  if (!p || typeof p !== 'object') return {};
  const out: Record<string, unknown> = {};
  let n = 0;
  for (const [k, v] of Object.entries(p as Record<string, unknown>)) {
    if (n++ >= 12) break;
    if (typeof v === 'number' || typeof v === 'boolean') out[k.slice(0, 32)] = v;
    else if (typeof v === 'string') out[k.slice(0, 32)] = v.slice(0, 80);
  }
  return out;
}

export async function POST(req: Request) {
  if (!dbConfigured) return NextResponse.json({ ok: true }); // silently no-op when unconfigured

  let body: Record<string, unknown> | null = null;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  const anonId = typeof body?.anonId === 'string' ? body.anonId.slice(0, 64) : '';
  const raw = Array.isArray(body?.events) ? (body.events as unknown[]) : [];
  if (!anonId || raw.length === 0) return NextResponse.json({ ok: true });

  const events: IncomingEvent[] = raw
    .slice(0, MAX_EVENTS)
    .map((e) => e as Record<string, unknown>)
    .filter((e) => typeof e?.type === 'string' && TYPE_RE.test(e.type as string))
    .map((e) => ({
      type: (e.type as string).slice(0, 40),
      path: typeof e.path === 'string' ? e.path.slice(0, 120) : '',
      payload: sanitizePayload(e.payload),
      session_id: typeof e.session_id === 'string' ? e.session_id.slice(0, 64) : '',
      ts: Number.isFinite(e.ts) ? Number(e.ts) : Date.now(),
    }));

  if (events.length === 0) return NextResponse.json({ ok: true });

  let userId: string | null = null;
  try {
    const session = await auth();
    userId = session?.user?.id ?? null;
  } catch {
    userId = null;
  }

  try {
    await insertEvents(anonId, userId, events);
  } catch {
    /* analytics must never break the app — swallow */
  }
  return NextResponse.json({ ok: true });
}
