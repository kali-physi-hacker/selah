import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getAllProfiles, dbConfigured } from '@/lib/db';
import { computeXp, levelForXp, xpInputFromProfile } from '@/lib/gamification';
import type { ProfileData } from '@/lib/profile';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const firstName = (name?: string | null) => (name || 'Friend').trim().split(/\s+/)[0];

/** Global XP ranking. Returns the top 50 (no user ids) + the caller's own rank. */
export async function GET() {
  if (!dbConfigured) return NextResponse.json({ entries: [], you: null, total: 0 });

  const session = await auth();
  const youId = session?.user?.id;

  try {
    const rows = await getAllProfiles();
    const ranked = rows
      .map((r) => {
        const d = r.data as ProfileData;
        const xp = computeXp(xpInputFromProfile(d));
        return {
          userId: r.user_id,
          name: firstName(d._name),
          image: d._image ?? null,
          xp,
          level: levelForXp(xp).level,
          optOut: Boolean(d.leaderboardOptOut),
        };
      })
      .filter((e) => !e.optOut && e.xp > 0)
      .sort((a, b) => b.xp - a.xp);

    const yourIndex = youId ? ranked.findIndex((e) => e.userId === youId) : -1;
    const entries = ranked.slice(0, 50).map((e, i) => ({
      rank: i + 1,
      name: e.name,
      image: e.image,
      xp: e.xp,
      level: e.level,
      isYou: e.userId === youId,
    }));
    const you = yourIndex >= 0 ? { rank: yourIndex + 1, xp: ranked[yourIndex].xp } : null;

    return NextResponse.json({ entries, you, total: ranked.length });
  } catch {
    return NextResponse.json({ entries: [], you: null, total: 0 });
  }
}
