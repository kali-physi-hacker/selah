/**
 * Turn a glossary term (or any label) into a stable kebab slug.
 *   "imago Dei"      -> "imago-dei"
 *   "tohu wabohu"    -> "tohu-wabohu"
 *   "adam / adamah"  -> "adam-adamah"
 *   "Elohim"         -> "elohim"
 *
 * Our terms are ASCII transliterations, so a simple lowercase + non-alphanumeric
 * collapse is all we need.
 */
export function termSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
