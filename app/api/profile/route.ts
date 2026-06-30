import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getProfile, saveProfile, dbConfigured } from '@/lib/db';
import { mergeProfiles, profileRichness, type ProfileData } from '@/lib/profile';

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

  // Anti-clobber safety net: a near-empty payload must never overwrite a
  // substantial cloud profile (the fresh-install race). In that case we
  // merge-preserve the existing data instead of replacing it. Normal edits
  // (incl. ordinary deletions) replace as usual.
  const incoming = data as ProfileData;
  let toSave: ProfileData = incoming;
  try {
    const existing = (await getProfile(session.user.id)) as ProfileData | null;
    if (existing && profileRichness(existing) >= 3 && profileRichness(incoming) <= 1) {
      toSave = mergeProfiles(incoming, existing);
    }
  } catch {
    /* read failed — fall back to the incoming payload */
  }

  // Enrich with the display name/avatar (server-trusted) so the leaderboard can
  // render without the client ever sending — or being able to spoof — identity.
  const enriched = {
    ...toSave,
    _name: session.user.name ?? null,
    _image: session.user.image ?? null,
    _email: session.user.email ?? null,
  };
  try {
    await saveProfile(session.user.id, enriched);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'write failed' }, { status: 500 });
  }
}
