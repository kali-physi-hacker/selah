import { acts, glossary, people } from './index';
import type { SearchRecord } from './types';

/** Cap body text so the client search bundle stays lean (enough to match + preview). */
function snippet(text: string | undefined, max = 180): string | undefined {
  if (!text) return undefined;
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length <= max ? clean : clean.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

/**
 * A flat index across everything, built for client-side fuzzy search (fuse.js).
 * Records cover acts, scenes (timeline), people, terms, themes, verses, and Q&A.
 */
function buildSearchIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];

  for (const act of acts) {
    records.push({
      id: `act:${act.slug}`,
      kind: 'act',
      title: act.title,
      subtitle: act.books,
      body: snippet(`${act.teaser} ${act.overview}`),
      href: `/act/${act.slug}`,
      actNumber: act.number,
      actSlug: act.slug,
    });

    // Featured + memory verses
    const verses = [act.featuredVerse, ...act.memoryVerses];
    for (const v of verses) {
      records.push({
        id: `verse:${act.slug}:${v.ref}`,
        kind: 'verse',
        title: v.ref,
        subtitle: act.title,
        body: snippet(v.text, 240),
        href: `/act/${act.slug}#verses`,
        actNumber: act.number,
        actSlug: act.slug,
        ref: v.ref,
      });
    }

    // Scenes (timeline)
    for (const ev of act.timeline) {
      records.push({
        id: `scene:${act.slug}:${ev.ref}`,
        kind: 'scene',
        title: ev.title,
        subtitle: ev.ref,
        body: snippet(ev.detail),
        href: `/act/${act.slug}#story`,
        actNumber: act.number,
        actSlug: act.slug,
        ref: ev.ref,
      });
    }

    // Themes
    for (const t of act.themes) {
      records.push({
        id: `theme:${act.slug}:${t.title}`,
        kind: 'theme',
        title: t.title,
        subtitle: act.title,
        body: snippet(t.body),
        href: `/act/${act.slug}#themes`,
        actNumber: act.number,
        actSlug: act.slug,
      });
    }

    // Questions
    for (const q of act.questions) {
      records.push({
        id: `question:${act.slug}:${q.q}`,
        kind: 'question',
        title: q.q,
        subtitle: act.title,
        body: snippet(q.a),
        href: `/act/${act.slug}#questions`,
        actNumber: act.number,
        actSlug: act.slug,
      });
    }
  }

  for (const p of people) {
    records.push({
      id: `person:${p.slug}`,
      kind: 'person',
      title: p.name,
      subtitle: p.oneLine,
      body: snippet(p.bio),
      href: `/people#${p.slug}`,
    });
  }

  for (const g of glossary) {
    records.push({
      id: `term:${g.slug}`,
      kind: 'term',
      title: g.term,
      subtitle: g.gloss,
      body: snippet(g.detail),
      href: `/glossary#${g.slug}`,
    });
  }

  return records;
}

export const searchIndex: SearchRecord[] = buildSearchIndex();
