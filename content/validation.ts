import { z } from 'zod';
import type { ActContent } from './types';

/**
 * Runtime/build-time validation of the content shape.
 * If any act is missing a required field, this throws at module load — so a
 * thin or malformed act fails the build loudly rather than shipping broken.
 */

const verseRef = z.object({
  ref: z.string().min(1),
  text: z.string().optional(),
  translation: z.enum(['WEB', 'KJV']).optional(),
});

const timelineEvent = z.object({
  ref: z.string().min(1),
  title: z.string().min(1),
  detail: z.string().min(1),
});

const person = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  oneLine: z.string().min(1),
  bio: z.string().min(1),
  keyRefs: z.array(z.string()),
  appearsInActs: z.array(z.number().int()),
});

const termCard = z.object({
  term: z.string().min(1),
  language: z.enum(['Hebrew', 'Greek', 'Latin', 'Concept']),
  gloss: z.string().min(1),
  detail: z.string().min(1),
});

const deepSection = z.object({
  id: z.string().min(1),
  heading: z.string().min(1),
  body: z.string().min(1),
});

const christConnection = z.object({
  summary: z.string().min(1),
  links: z.array(z.object({ ref: z.string().min(1), note: z.string().min(1) })).min(1),
});

const fullCircleLink = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  note: z.string().min(1),
});

export const actSchema = z.object({
  number: z.number().int().min(1).max(15),
  slug: z.string().min(1),
  title: z.string().min(1),
  movement: z.enum(['creation', 'fall', 'redemption', 'restoration']),
  books: z.string().min(1),
  era: z.string().min(1),
  accent: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  icon: z.string().min(1),
  isClimax: z.boolean().optional(),
  banner: z.string().optional(),
  teaser: z.string().min(1),
  featuredVerse: verseRef,
  overview: z.string().min(40),
  context: z.string().min(40),
  timeline: z.array(timelineEvent).min(4),
  deepDive: z.array(deepSection).min(3),
  people: z.array(person).min(2),
  themes: z.array(z.object({ title: z.string().min(1), body: z.string().min(1) })).min(3),
  words: z.array(termCard).min(3),
  christ: christConnection,
  memoryVerses: z.array(verseRef).min(2),
  reflection: z.object({
    meditation: z.string().min(20),
    prompts: z.array(z.string().min(1)).min(2),
  }),
  questions: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(3),
  glossaryRefs: z.array(z.string()),
  fullCircle: z.array(fullCircleLink).optional(),
});

/** Validate the full set of acts. Throws with a readable message on failure. */
export function validateActs(acts: ActContent[]): void {
  const numbers = new Set<number>();
  const slugs = new Set<string>();

  acts.forEach((act) => {
    const result = actSchema.safeParse(act);
    if (!result.success) {
      const issues = result.error.issues
        .map((i) => `  • ${i.path.join('.')}: ${i.message}`)
        .join('\n');
      throw new Error(
        `[Selah content] Act ${act?.number ?? '?'} ("${act?.slug ?? '?'}") failed validation:\n${issues}`,
      );
    }
    if (numbers.has(act.number)) {
      throw new Error(`[Selah content] Duplicate act number: ${act.number}`);
    }
    if (slugs.has(act.slug)) {
      throw new Error(`[Selah content] Duplicate act slug: ${act.slug}`);
    }
    numbers.add(act.number);
    slugs.add(act.slug);
  });

  if (acts.length !== 15) {
    throw new Error(`[Selah content] Expected 15 acts, found ${acts.length}.`);
  }
}
