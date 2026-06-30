'use client';

import { useState } from 'react';
import { DailyVerse } from '@/components/DailyVerse';
import { MeditationSession } from './MeditationSession';
import { QuietTime } from './QuietTime';
import { useMeditation } from '@/lib/useMeditation';
import type { DailyVerse as DV } from '@/lib/dailyVerse';

type Tab = 'still' | 'quiet';

export function StillnessClient({ pool }: { pool: DV[] }) {
  const [tab, setTab] = useState<Tab>('still');
  const { stats, hydrated } = useMeditation();

  return (
    <div className="space-y-5 px-4 sm:px-6">
      <DailyVerse pool={pool} />

      {hydrated && stats.totalMinutes > 0 && (
        <p className="text-center text-xs text-ink-faint">
          You&rsquo;ve given {stats.totalMinutes} {stats.totalMinutes === 1 ? 'minute' : 'minutes'}{' '}
          to stillness across {stats.sessions} {stats.sessions === 1 ? 'session' : 'sessions'}.
        </p>
      )}

      <div className="grid grid-cols-2 gap-1 rounded-pill glass-soft p-1">
        {(['still', 'quiet'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="rounded-pill px-4 py-2 text-sm font-medium transition-colors"
            style={
              tab === t
                ? { background: 'rgba(255,255,255,0.16)', color: '#F0FDFA' }
                : { color: 'rgba(240,253,250,0.6)' }
            }
          >
            {t === 'still' ? 'Stillness' : 'Quiet time'}
          </button>
        ))}
      </div>

      {tab === 'still' ? (
        <MeditationSession accent="#67E8F9" />
      ) : (
        <QuietTime accent="#FDE68A" pool={pool} />
      )}
    </div>
  );
}
