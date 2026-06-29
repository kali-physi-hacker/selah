import type { ActContent } from '@/content/types';

export interface ReadingDay {
  day: number;
  actNumber: number;
  actSlug: string;
  actTitle: string;
  books: string;
  accent: string;
  focus: string;
}

/** How many days each act spans in the 30-day path (weighted by depth). */
const DAY_SPANS: Record<number, number> = {
  1: 2, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 1,
  9: 2, 10: 3, 11: 1, 12: 4, 13: 2, 14: 3, 15: 2,
};

/** Focus labels for a reading, depending on how many days the act spans. */
const FOCUS: Record<number, string[]> = {
  1: ['The whole act — read it slowly'],
  2: ['Overview, the story & its people', 'Themes, key words, Christ & reflect'],
  3: ['Overview & the unfolding story', 'People, themes & key words', 'How it points to Christ, the verses & reflect'],
  4: [
    'Overview & the story begins',
    'The teaching & the deep dive',
    'The turning point & key people',
    'Christ, the memory verses & reflect',
  ],
};

/**
 * Build the "Master the Bible in 30 days" path — the 15 acts grouped into 30
 * daily readings, deeper acts given more days.
 */
export function buildReadingPlan(acts: ActContent[]): ReadingDay[] {
  const days: ReadingDay[] = [];
  let day = 1;
  for (const act of acts) {
    const span = DAY_SPANS[act.number] ?? 1;
    const focuses = FOCUS[span] ?? FOCUS[1];
    for (let i = 0; i < span; i++) {
      days.push({
        day: day++,
        actNumber: act.number,
        actSlug: act.slug,
        actTitle: act.title,
        books: act.books,
        accent: act.accent,
        focus: focuses[i] ?? focuses[focuses.length - 1],
      });
    }
  }
  return days;
}

export const PLAN_LENGTH = 30;
