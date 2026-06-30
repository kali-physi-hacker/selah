'use client';

import { useMemo } from 'react';
import type { ActMeta } from '@/lib/actMeta';
import { useProgress } from '@/lib/useProgress';
import { useBookmarks } from '@/lib/useBookmarks';
import { useMeditation } from '@/lib/useMeditation';
import { usePrayer } from '@/lib/usePrayer';
import { Icon } from '@/components/Icon';

/** A calm snapshot of the journey — works signed-in or out (reads local state). */
export function ProfileStats({ acts }: { acts: ActMeta[] }) {
  const progress = useProgress();
  const { bookmarks } = useBookmarks();
  const { stats } = useMeditation();
  const { prayers } = usePrayer();

  const numberBySlug = useMemo(() => new Map(acts.map((a) => [a.slug, a.number])), [acts]);
  const books = progress.hydrated ? progress.booksExploredFor((s) => numberBySlug.get(s)) : 0;

  const items = [
    { icon: 'sparkles', value: progress.hydrated ? progress.streak : 0, label: 'day streak' },
    { icon: 'check-circle', value: `${progress.completedCount}/15`, label: 'acts explored' },
    { icon: 'book-open', value: `${books}/66`, label: 'books' },
    { icon: 'feather', value: stats.totalMinutes, label: 'still minutes' },
    { icon: 'bookmark', value: bookmarks.length, label: 'saved' },
    { icon: 'account', value: prayers.length, label: 'prayers' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((s) => (
        <div key={s.label} className="rounded-control bg-white/[0.05] p-3 text-center">
          <Icon name={s.icon} size={16} aria-hidden className="mx-auto mb-1 text-ink-faint" />
          <div className="font-display text-xl text-ink">{s.value}</div>
          <div className="text-[0.62rem] leading-tight text-ink-faint">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
