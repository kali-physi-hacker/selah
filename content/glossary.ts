/**
 * Hebrew / Greek / Latin + theology terms.
 *
 * Derived from each act's `words` (deduped by slug) in content/index.ts, with a
 * record of which acts use each term. Re-exported here for the /glossary screen.
 */
export { glossary, getGlossaryEntry } from './index';
export type { GlossaryEntry } from './index';
