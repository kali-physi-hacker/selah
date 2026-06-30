'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { ActMeta } from '@/lib/actMeta';
import type { ReadingDay } from '@/lib/readingPlan';
import { PLAN_LENGTH } from '@/lib/readingPlan';
import { useProgress } from '@/lib/useProgress';
import { useReadingPlan } from '@/lib/useReadingPlan';
import { ProgressRing } from '@/components/ProgressRing';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

type Mode = 'path' | 'explore';

export function ReadClient({ plan, acts }: { plan: ReadingDay[]; acts: ActMeta[] }) {
  const progress = useProgress();
  const readingPlan = useReadingPlan();
  const [mode, setMode] = useState<Mode>('path');

  const bySlug = useMemo(() => new Map(acts.map((a) => [a.slug, a])), [acts]);
  const numbersFor = (slug: string) => bySlug.get(slug)?.number;

  const todayDay = useMemo(
    () => plan.find((d) => !readingPlan.isDone(d.day)),
    [plan, readingPlan],
  );

  const books = progress.hydrated ? progress.booksExploredFor(numbersFor) : 0;

  return (
    <div className="px-4 sm:px-6">
      {/* Progress summary */}
      <div className="rounded-card glass-strong p-5">
        <div className="flex items-center gap-5">
          <ProgressRing value={progress.completedCount} max={15} accent="#67E8F9">
            <span className="font-display text-2xl text-ink">{progress.completedCount}</span>
            <span className="text-[0.62rem] uppercase tracking-wider text-ink-faint">of 15 acts</span>
          </ProgressRing>
          <div className="flex-1 space-y-3">
            <Stat icon="sparkles" label="day streak" value={progress.hydrated ? progress.streak : 0} />
            <Stat icon="book-open" label="of 66 books" value={books} />
            <Stat
              icon="check-circle"
              label="readings done"
              value={`${readingPlan.hydrated ? readingPlan.doneCount : 0}/${PLAN_LENGTH}`}
            />
          </div>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="mt-5 grid grid-cols-2 gap-1 rounded-pill glass-soft p-1">
        {(['path', 'explore'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="rounded-pill px-4 py-2 text-sm font-medium transition-colors"
            style={
              mode === m
                ? { background: 'rgb(var(--surface) / 0.16)', color: 'rgb(var(--ink))' }
                : { color: 'rgb(var(--ink) / 0.6)' }
            }
          >
            {m === 'path' ? 'Master in 30 days' : 'Free explore'}
          </button>
        ))}
      </div>

      {mode === 'path' ? (
        <PathView plan={plan} readingPlan={readingPlan} todayDay={todayDay} />
      ) : (
        <ExploreView acts={acts} progress={progress} />
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: string; label: string; value: number | string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/8 text-ink-muted">
        <Icon name={icon} size={16} aria-hidden />
      </span>
      <span className="font-display text-xl text-ink">{value}</span>
      <span className="text-sm text-ink-faint">{label}</span>
    </div>
  );
}

function PathView({
  plan,
  readingPlan,
  todayDay,
}: {
  plan: ReadingDay[];
  readingPlan: ReturnType<typeof useReadingPlan>;
  todayDay?: ReadingDay;
}) {
  return (
    <div className="mt-5">
      {todayDay ? (
        <div className="mb-5">
          <p className="mb-2 px-1 text-xs uppercase tracking-[0.18em] text-ink-faint">Today's reading</p>
          <div
            className="rounded-card p-5"
            style={{
              background: `linear-gradient(135deg, ${hexToRgba(todayDay.accent, 0.28)}, ${hexToRgba(
                todayDay.accent,
                0.08,
              )})`,
              border: `1px solid ${hexToRgba(todayDay.accent, 0.35)}`,
            }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              Day {todayDay.day} · Act {todayDay.actNumber}
            </span>
            <h3 className="mt-1 font-display text-2xl text-ink">{todayDay.actTitle}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">{todayDay.books}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{todayDay.focus}</p>
            <div className="mt-4 flex items-center gap-2">
              <Link
                href={`/act/${todayDay.actSlug}`}
                className="flex items-center gap-2 rounded-pill bg-white/14 px-4 py-2.5 text-sm font-medium text-ink ring-1 ring-white/20 transition-transform active:scale-[0.98]"
              >
                Read now <Icon name="arrow-right" size={16} aria-hidden />
              </Link>
              <button
                onClick={() => readingPlan.toggleDay(todayDay.day)}
                className="flex items-center gap-2 rounded-pill bg-white/8 px-4 py-2.5 text-sm text-ink-muted ring-1 ring-white/12"
              >
                <Icon name="check" size={16} aria-hidden /> Mark done
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-5 rounded-card glass-strong p-6 text-center">
          <Icon name="sparkles" size={28} aria-hidden className="mx-auto mb-2 text-light-warm" />
          <h3 className="font-display text-xl text-ink">You've walked the whole story</h3>
          <p className="mx-auto mt-1 max-w-xs text-sm text-ink-muted">
            From the first light to the last promise. Return any time — there is always more to see.
          </p>
          <button
            onClick={readingPlan.reset}
            className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-white/8 px-4 py-2 text-sm text-ink-muted ring-1 ring-white/12"
          >
            <Icon name="rotate" size={15} aria-hidden /> Begin again
          </button>
        </div>
      )}

      <p className="mb-2.5 px-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
        The 30-day path
      </p>
      <ul className="space-y-2">
        {plan.map((d) => {
          const done = readingPlan.hydrated && readingPlan.isDone(d.day);
          return (
            <li
              key={d.day}
              className="flex items-center gap-3 rounded-card glass-soft p-3"
              style={done ? { opacity: 0.6 } : undefined}
            >
              <button
                onClick={() => readingPlan.toggleDay(d.day)}
                aria-pressed={done}
                aria-label={`Mark day ${d.day} ${done ? 'not done' : 'done'}`}
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors"
                style={{
                  background: done ? hexToRgba(d.accent, 0.35) : 'rgb(var(--surface) / 0.06)',
                  border: `1px solid ${hexToRgba(d.accent, done ? 0.5 : 0.2)}`,
                }}
              >
                <Icon name={done ? 'check' : 'circle'} size={16} aria-hidden className="text-ink" />
              </button>
              <Link href={`/act/${d.actSlug}`} className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-base text-ink">
                    Day {d.day} · {d.actTitle}
                  </span>
                </div>
                <p className="truncate text-xs text-ink-faint">{d.focus}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ExploreView({
  acts,
  progress,
}: {
  acts: ActMeta[];
  progress: ReturnType<typeof useProgress>;
}) {
  return (
    <div className="mt-5">
      <p className="mb-3 px-1 text-sm text-ink-muted">
        Wander freely — open any act in any order. Your progress is saved as you go.
      </p>
      <ul className="space-y-2">
        {acts.map((a) => {
          const done = progress.hydrated && progress.isComplete(a.slug);
          const visited = progress.hydrated && progress.isVisited(a.slug);
          return (
            <li key={a.slug}>
              <Link
                href={`/act/${a.slug}`}
                className="flex items-center gap-3 rounded-card glass-soft p-3.5 transition-colors hover:bg-white/10"
              >
                <span
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full font-display text-sm text-ink"
                  style={{
                    background: hexToRgba(a.accent, 0.25),
                    border: `1px solid ${hexToRgba(a.accent, 0.4)}`,
                  }}
                >
                  {a.number}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-display text-base text-ink">{a.title}</span>
                  <p className="truncate text-xs text-ink-faint">{a.books}</p>
                </div>
                {done ? (
                  <Icon name="check-circle" size={18} aria-hidden className="text-aqua" />
                ) : visited ? (
                  <Icon name="circle" size={18} aria-hidden className="text-ink-faint" />
                ) : (
                  <Icon name="chevron-right" size={18} aria-hidden className="text-ink-faint" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
