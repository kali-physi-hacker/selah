'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { readJSON, writeJSON, STORAGE_KEYS } from '@/lib/storage';
import { Icon } from '@/components/Icon';

interface Entry {
  rank: number;
  name: string;
  image: string | null;
  xp: number;
  level: number;
  isYou: boolean;
}

const medal = (rank: number) => (rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null);

export function LeaderboardClient() {
  const { status } = useSession();
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [you, setYou] = useState<{ rank: number; xp: number } | null>(null);
  const [optOut, setOptOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOptOut(readJSON<boolean>(STORAGE_KEYS.leaderboardOptOut, false));
  }, []);

  useEffect(() => {
    if (status !== 'authenticated') {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const res = await fetch('/api/leaderboard');
        const j = await res.json();
        if (!cancelled) {
          setEntries(j.entries ?? []);
          setYou(j.you ?? null);
        }
      } catch {
        if (!cancelled) setEntries([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [status, optOut]);

  const toggleOptOut = () => {
    const v = !optOut;
    setOptOut(v);
    writeJSON(STORAGE_KEYS.leaderboardOptOut, v);
  };

  if (status !== 'authenticated') {
    return (
      <p className="py-2 text-center text-sm text-ink-muted">
        Sign in to join the global leaderboard and climb the ranks.
      </p>
    );
  }

  if (loading) {
    return <div className="h-40 animate-pulse rounded-card glass-soft" aria-hidden />;
  }

  if (optOut) {
    return (
      <div className="text-center">
        <p className="text-sm text-ink-muted">You&rsquo;re hidden from the leaderboard.</p>
        <button onClick={toggleOptOut} className="mt-3 rounded-pill bg-white/12 px-4 py-2 text-sm text-ink ring-1 ring-white/15">
          Join the leaderboard
        </button>
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-1.5">
        {entries && entries.length > 0 ? (
          entries.map((e) => (
            <li
              key={`${e.rank}-${e.name}`}
              className={`flex items-center gap-3 rounded-control px-3 py-2 ${
                e.isYou ? 'bg-aqua/15 ring-1 ring-aqua/40' : 'bg-white/[0.04]'
              }`}
            >
              <span className="w-6 flex-none text-center text-sm tabular-nums text-ink-muted">
                {medal(e.rank) ?? e.rank}
              </span>
              {e.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={e.image} alt="" referrerPolicy="no-referrer" className="h-8 w-8 flex-none rounded-full object-cover ring-1 ring-white/20" />
              ) : (
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-sm text-ink">
                  {e.name.charAt(0)}
                </span>
              )}
              <span className="min-w-0 flex-1 truncate text-sm text-ink">
                {e.name} {e.isYou && <span className="text-xs text-aqua">(you)</span>}
              </span>
              <span className="flex-none text-xs text-ink-faint">Lv {e.level}</span>
              <span className="w-16 flex-none text-right text-sm tabular-nums text-ink">
                {e.xp.toLocaleString()}
              </span>
            </li>
          ))
        ) : (
          <li className="py-2 text-center text-sm text-ink-faint">
            No one&rsquo;s on the board yet — earn some XP to be first!
          </li>
        )}
      </ul>

      {you && you.rank > 50 && (
        <p className="mt-3 rounded-control bg-aqua/10 px-3 py-2 text-center text-xs text-ink-muted">
          You&rsquo;re #{you.rank} with {you.xp.toLocaleString()} XP — keep going.
        </p>
      )}

      <button onClick={toggleOptOut} className="mt-3 flex items-center gap-1.5 px-1 text-xs text-ink-faint hover:text-ink-muted">
        <Icon name="eye" size={13} aria-hidden /> Hide me from the leaderboard
      </button>
    </div>
  );
}
