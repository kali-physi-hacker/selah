'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import type { ActMeta } from '@/lib/actMeta';
import { useProgress } from '@/lib/useProgress';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

function daysSince(iso: string): number {
  const start = new Date(iso).getTime();
  const now = Date.now();
  return Math.max(1, Math.floor((now - start) / 86_400_000) + 1);
}

/**
 * The repurposed "985+ students" element → the reader's progress card.
 * Day of the journey, books explored, streak, and a "continue" CTA.
 */
export function ProgressCard({ acts }: { acts: ActMeta[] }) {
  const progress = useProgress();
  const bySlug = useMemo(() => new Map(acts.map((a) => [a.slug, a])), [acts]);
  const numbersFor = (slug: string) => bySlug.get(slug)?.number;

  // Avoid hydration flicker: render a calm skeleton until localStorage is read.
  if (!progress.hydrated) {
    return <div className="h-[8.5rem] w-full animate-pulse rounded-card glass-soft" aria-hidden />;
  }

  const day = daysSince(progress.state.startDate);
  const books = progress.booksExploredFor(numbersFor);
  const completed = progress.completedCount;
  const continueAct =
    (progress.lastActSlug && bySlug.get(progress.lastActSlug)) ||
    acts.find((a) => !progress.isComplete(a.slug)) ||
    acts[0];

  const stats = [
    { label: completed === 1 ? 'act complete' : 'acts complete', value: `${completed}/15` },
    { label: 'of 66 books', value: `${books}` },
    { label: progress.streak === 1 ? 'day streak' : 'day streak', value: `${progress.streak}` },
  ];

  return (
    <div className="rounded-card glass-strong p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">Your journey</p>
          <p className="mt-1 font-display text-lg text-ink">
            Day {day} · {completed === 0 ? 'just beginning' : `${completed} of 15 explored`}
          </p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-light-warm/15 text-light-warm">
          <Icon name="sparkles" size={22} aria-hidden />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-control bg-white/5 px-3 py-2.5 text-center"
          >
            <div className="font-display text-xl text-ink">{s.value}</div>
            <div className="text-[0.65rem] leading-tight text-ink-faint">{s.label}</div>
          </div>
        ))}
      </div>

      {continueAct && (
        <Link
          href={`/act/${continueAct.slug}`}
          className="mt-4 flex items-center justify-between rounded-control px-4 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.99]"
          style={{
            background: `linear-gradient(135deg, ${hexToRgba(continueAct.accent, 0.35)}, ${hexToRgba(
              continueAct.accent,
              0.12,
            )})`,
            border: `1px solid ${hexToRgba(continueAct.accent, 0.4)}`,
          }}
        >
          <span className="flex flex-col">
            <span className="text-[0.65rem] uppercase tracking-wider text-ink-muted">
              {completed === 0 ? 'Begin the journey' : 'Continue where you left off'}
            </span>
            <span className="font-display text-base">
              {continueAct.number}. {continueAct.title}
            </span>
          </span>
          <Icon name="arrow-right" size={20} aria-hidden />
        </Link>
      )}
    </div>
  );
}
