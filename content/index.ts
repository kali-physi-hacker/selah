import { termSlug } from '@/lib/slug';
import { acts } from './acts';
import { movements, movementById } from './movements';
import { validateActs } from './validation';
import type { ActContent, Movement, Person, TermCard } from './types';

/**
 * The assembled, validated content graph — the single source the app reads from.
 *
 * People and Glossary are DERIVED from the acts (deduped + merged) so they can
 * never drift out of sync with the act content. A small curated layer can be
 * added later without changing the UI.
 */

// Validate at module load → fails the build loudly if an act is malformed.
validateActs(acts);

export interface GlossaryEntry extends TermCard {
  slug: string;
  actNumbers: number[];
}

export interface PersonEntry extends Person {
  /** Acts where this person actually appears in the people list. */
  actNumbers: number[];
}

/** Derive the cross-act people index: dedupe by slug, merge appearances. */
function derivePeople(): PersonEntry[] {
  const map = new Map<string, PersonEntry>();

  for (const act of acts) {
    for (const p of act.people) {
      const existing = map.get(p.slug);
      if (!existing) {
        map.set(p.slug, {
          ...p,
          appearsInActs: Array.from(new Set([...p.appearsInActs, act.number])).sort(
            (a, b) => a - b,
          ),
          actNumbers: [act.number],
        });
      } else {
        existing.actNumbers = Array.from(new Set([...existing.actNumbers, act.number])).sort(
          (a, b) => a - b,
        );
        existing.appearsInActs = Array.from(
          new Set([...existing.appearsInActs, ...p.appearsInActs, act.number]),
        ).sort((a, b) => a - b);
        existing.keyRefs = Array.from(new Set([...existing.keyRefs, ...p.keyRefs]));
        // Keep the richest bio / one-liner we encounter.
        if (p.bio.length > existing.bio.length) existing.bio = p.bio;
        if (p.oneLine.length > existing.oneLine.length) existing.oneLine = p.oneLine;
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/** Derive the glossary: dedupe terms by slug, track which acts use them. */
function deriveGlossary(): GlossaryEntry[] {
  const map = new Map<string, GlossaryEntry>();

  for (const act of acts) {
    for (const w of act.words) {
      const slug = termSlug(w.term);
      const existing = map.get(slug);
      if (!existing) {
        map.set(slug, { ...w, slug, actNumbers: [act.number] });
      } else {
        existing.actNumbers = Array.from(
          new Set([...existing.actNumbers, act.number]),
        ).sort((a, b) => a - b);
        if (w.detail.length > existing.detail.length) existing.detail = w.detail;
      }
    }
  }

  return Array.from(map.values()).sort((a, b) =>
    a.term.toLowerCase().localeCompare(b.term.toLowerCase()),
  );
}

export const people: PersonEntry[] = derivePeople();
export const glossary: GlossaryEntry[] = deriveGlossary();

// ── Lookups ────────────────────────────────────────────────────────────────

const actBySlugMap = new Map(acts.map((a) => [a.slug, a]));
const actByNumberMap = new Map(acts.map((a) => [a.number, a]));
const personBySlugMap = new Map(people.map((p) => [p.slug, p]));
const glossaryBySlugMap = new Map(glossary.map((g) => [g.slug, g]));

export function getAct(slug: string): ActContent | undefined {
  return actBySlugMap.get(slug);
}

export function getActByNumber(n: number): ActContent | undefined {
  return actByNumberMap.get(n);
}

export function getPerson(slug: string): PersonEntry | undefined {
  return personBySlugMap.get(slug);
}

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossaryBySlugMap.get(slug);
}

export function getMovement(id: string): Movement | undefined {
  return movementById[id];
}

/** Prev / next acts for continuous navigation. */
export function getAdjacentActs(n: number): {
  prev: ActContent | undefined;
  next: ActContent | undefined;
} {
  return { prev: actByNumberMap.get(n - 1), next: actByNumberMap.get(n + 1) };
}

/** Acts grouped by movement, preserving movement order. */
export function actsByMovement(): { movement: Movement; acts: ActContent[] }[] {
  return movements.map((movement) => ({
    movement,
    acts: acts.filter((a) => a.movement === movement.id),
  }));
}

export { acts, movements };
export type { ActContent, Movement, Person, TermCard };
