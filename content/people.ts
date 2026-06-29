/**
 * Cross-act figure index.
 *
 * Derived from the acts (deduped + merged) in content/index.ts so it stays in
 * sync automatically. Re-exported here to match the content layer's structure
 * and to give a single, stable import path for the /people screen.
 */
export { people, getPerson } from './index';
export type { PersonEntry } from './index';
