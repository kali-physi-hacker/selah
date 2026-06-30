'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { verseForDate, type DailyVerse as DV } from '@/lib/dailyVerse';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

/** "Today's light" — a calm, stable verse for the day, linking into its act. */
export function DailyVerse() {
  const [dv, setDv] = useState<DV | null>(null);

  useEffect(() => {
    setDv(verseForDate(new Date()));
  }, []);

  if (!dv) return <div className="h-[7.5rem] animate-pulse rounded-card glass-soft" aria-hidden />;

  const { verse, actSlug, actTitle, accent } = dv;
  return (
    <Link
      href={`/act/${actSlug}#verses`}
      className="block rounded-card glass p-5 transition-colors hover:bg-white/[0.08]"
      style={{ borderLeft: `2px solid ${hexToRgba(accent, 0.6)}` }}
    >
      <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-light-warm/90">
        <Icon name="sparkles" size={13} aria-hidden /> Today&rsquo;s light
      </p>
      <p className="scripture text-balance text-lg leading-relaxed text-ink">“{verse.text}”</p>
      <p className="mt-3 flex items-center justify-between text-xs text-ink-faint">
        <span>
          {verse.ref} · {verse.translation ?? 'WEB'}
        </span>
        <span className="flex items-center gap-1">
          from {actTitle} <Icon name="chevron-right" size={13} aria-hidden />
        </span>
      </p>
    </Link>
  );
}
