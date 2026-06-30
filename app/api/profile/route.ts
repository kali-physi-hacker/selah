import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getProfile, saveProfile, dbConfigured } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Fetch the signed-in user's synced profile. */
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  if (!dbConfigured) {
    return NextResponse.json({ error: 'storage not configured' }, { status: 503 });
  }
  try {
    const data = await getProfile(session.user.id);
    return NextResponse.json({ data: data ?? {} });
  } catch {
    return NextResponse.json({ error: 'read failed' }, { status: 500 });
  }
}

/** Persist the signed-in user's synced profile. Body: { data: {...} }. */
export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  if (!dbConfigured) {
    return NextResponse.json({ error: 'storage not configured' }, { status: 503 });
  }
  const body = (await req.json().catch(() => null)) as { data?: Record<string, unknown> } | null;
  const data = body?.data;
  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: 'bad request' }, { status: 400 });
  }
  // Enrich with the display name/avatar (server-trusted) so the leaderboard can
  // render without the client ever sending — or being able to spoof — identity.
  const enriched = {
    ...data,
    _name: session.user.name ?? null,
    _image: session.user.image ?? null,
  };
  try {
    await saveProfile(session.user.id, enriched);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'write failed' }, { status: 500 });
  }
}
