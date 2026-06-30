'use client';

import type { ActMeta } from '@/lib/actMeta';
import { useGamification } from '@/lib/useGamification';
import { Icon } from '@/components/Icon';

const CIRC = 2 * Math.PI * 16;

/** The game layer: level ring, tier, XP-to-next, streak, and achievement badges. */
export function GamificationPanel({ acts }: { acts: ActMeta[] }) {
  const g = useGamification(acts);

  return (
    <div className="rounded-card glass p-5">
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 flex-none items-center justify-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 h-16 w-16 -rotate-90">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgb(var(--surface) / 0.1)" strokeWidth="2.5" />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#67E8F9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${g.level.progress * CIRC} ${CIRC}`}
              style={{ transition: 'stroke-dasharray 0.8s ease' }}
            />
          </svg>
          <div className="text-center leading-none">
            <div className="font-display text-xl text-ink">{g.level.level}</div>
            <div className="text-[0.5rem] uppercase tracking-wide text-ink-faint">level</div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-display text-lg text-ink">{g.tier}</p>
          <p className="text-xs text-ink-faint">
            {g.xp.toLocaleString()} XP · {(g.level.levelSpan - g.level.intoLevel).toLocaleString()} to
            level {g.level.level + 1}
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-aqua to-light-warm"
              style={{ width: `${Math.max(4, g.level.progress * 100)}%`, transition: 'width 0.8s ease' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2.5 rounded-control bg-white/[0.05] px-3 py-2.5">
          <Icon name="flame" size={20} aria-hidden className={g.streak > 0 ? 'text-orange-300' : 'text-ink-faint'} />
          <div className="leading-none">
            <div className="font-display text-lg text-ink">{g.streak}</div>
            <div className="mt-0.5 text-[0.62rem] text-ink-faint">day streak</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-control bg-white/[0.05] px-3 py-2.5">
          <Icon name="crown" size={20} aria-hidden className="text-light-warm" />
          <div className="leading-none">
            <div className="font-display text-lg text-ink">
              {g.unlockedCount}/{g.totalAchievements}
            </div>
            <div className="mt-0.5 text-[0.62rem] text-ink-faint">badges</div>
          </div>
        </div>
      </div>

      <p className="mb-2 mt-5 flex items-center gap-1.5 px-1 text-xs font-medium uppercase tracking-[0.16em] text-light-warm/90">
        <Icon name="crown" size={13} aria-hidden /> Achievements
      </p>
      <div className="grid grid-cols-3 gap-2">
        {g.achievements.map((a) => (
          <div
            key={a.id}
            title={a.description}
            className={`rounded-control p-2.5 text-center transition-opacity ${
              a.unlocked ? 'bg-white/[0.06]' : 'bg-white/[0.02] opacity-45'
            }`}
          >
            <span
              className={`mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full ${
                a.unlocked ? 'bg-light-warm/15 text-light-warm' : 'bg-white/5 text-ink-faint'
              }`}
            >
              <Icon name={a.unlocked ? a.icon : 'circle'} size={15} aria-hidden />
            </span>
            <p className="text-[0.66rem] font-medium leading-tight text-ink">{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
