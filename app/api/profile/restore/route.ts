import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { restorePreviousProfile, dbConfigured } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Swap the signed-in user's profile with its previous saved version (recovery). */
export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  if (!dbConfigured) {
    return NextResponse.json({ error: 'storage not configured' }, { status: 503 });
  }
  try {
    const restored = await restorePreviousProfile(session.user.id);
    return NextResponse.json({ ok: true, restored });
  } catch {
    return NextResponse.json({ error: 'restore failed' }, { status: 500 });
  }
}
