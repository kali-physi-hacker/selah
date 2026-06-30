import { acts } from '@/content';
import type { VerseRef } from '@/content/types';

export interface DailyVerse {
  verse: VerseRef;
  actSlug: string;
  actTitle: string;
  accent: string;
}

/** Every quotable verse across the journey (featured + memory), deduped. */
const ALL: DailyVerse[] = (() => {
  const seen = new Set<string>();
  const out: DailyVerse[] = [];
  for (const a of acts) {
    for (const verse of [a.featuredVerse, ...a.memoryVerses]) {
      if (!verse.text) continue;
      const key = verse.ref + '|' + verse.text.slice(0, 24);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ verse, actSlug: a.slug, actTitle: a.title, accent: a.accent });
    }
  }
  return out;
})();

export const totalDailyVerses = ALL.length;

/** A stable verse for a given calendar day (no randomness — same all day). */
export function verseForDate(d: Date): DailyVerse {
  const dayNumber = Math.floor(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000,
  );
  return ALL[((dayNumber % ALL.length) + ALL.length) % ALL.length];
}
