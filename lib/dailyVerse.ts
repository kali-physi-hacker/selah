import type { VerseRef } from '@/content/types';

export interface DailyVerse {
  verse: VerseRef;
  actSlug: string;
  actTitle: string;
  accent: string;
}

// The minimal shape we need from each act — keeps this module free of the full
// content graph so it can be used in client components without bundling it.
interface ActLike {
  slug: string;
  title: string;
  accent: string;
  featuredVerse: VerseRef;
  memoryVerses: VerseRef[];
}

/**
 * Build the pool of quotable verses (featured + memory, deduped). Call this on
 * the SERVER (where `acts` is already imported) and pass the result to client
 * components as a prop — never import `@/content` into a client component.
 */
export function buildDailyVersePool(acts: ActLike[]): DailyVerse[] {
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
}

/** A stable verse for a given calendar day (no randomness — same all day). */
export function verseForDate(d: Date, pool: DailyVerse[]): DailyVerse | null {
  if (pool.length === 0) return null;
  const dayNumber = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
  return pool[((dayNumber % pool.length) + pool.length) % pool.length];
}
