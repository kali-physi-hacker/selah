/**
 * DEV-TIME ONLY scripture verification via getbible.net (WEB).
 * Fetches each needed chapter once (deduped) and compares every featured +
 * memory verse to the canonical WEB text. Never shipped, never run in-app.
 */
import { acts } from '../content/index';

const BOOKS: Record<string, number> = {
  genesis: 1, exodus: 2, leviticus: 3, numbers: 4, deuteronomy: 5, joshua: 6,
  judges: 7, ruth: 8, '1 samuel': 9, '2 samuel': 10, '1 kings': 11, '2 kings': 12,
  '1 chronicles': 13, '2 chronicles': 14, ezra: 15, nehemiah: 16, esther: 17,
  job: 18, psalm: 19, psalms: 19, proverbs: 20, ecclesiastes: 21,
  'song of solomon': 22, 'song of songs': 22, isaiah: 23, jeremiah: 24,
  lamentations: 25, ezekiel: 26, daniel: 27, hosea: 28, joel: 29, amos: 30,
  obadiah: 31, jonah: 32, micah: 33, nahum: 34, habakkuk: 35, zephaniah: 36,
  haggai: 37, zechariah: 38, malachi: 39, matthew: 40, mark: 41, luke: 42,
  john: 43, acts: 44, romans: 45, '1 corinthians': 46, '2 corinthians': 47,
  galatians: 48, ephesians: 49, philippians: 50, colossians: 51,
  '1 thessalonians': 52, '2 thessalonians': 53, '1 timothy': 54, '2 timothy': 55,
  titus: 56, philemon: 57, hebrews: 58, james: 59, '1 peter': 60, '2 peter': 61,
  '1 john': 62, '2 john': 63, '3 john': 64, jude: 65, revelation: 66,
};

const norm = (s: string) =>
  s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();
const wordsOnly = (s: string) =>
  norm(s).toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function parseRef(ref: string) {
  const m = ref.replace(/[–—]/g, '-').match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const book = BOOKS[m[1].toLowerCase()];
  if (!book) return null;
  return { book, chapter: +m[2], start: +m[3], end: m[4] ? +m[4] : +m[3] };
}

const chapterCache = new Map<string, Map<number, string>>();

async function getChapter(book: number, chapter: number): Promise<Map<number, string> | null> {
  const key = `${book}/${chapter}`;
  if (chapterCache.has(key)) return chapterCache.get(key)!;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(`https://api.getbible.net/v2/web/${key}.json`);
      if (res.ok) {
        const data = (await res.json()) as { verses: { verse: number; text: string }[] };
        const map = new Map<number, string>();
        for (const v of data.verses) map.set(v.verse, v.text);
        chapterCache.set(key, map);
        return map;
      }
    } catch {
      /* retry */
    }
    await sleep(1500 * (attempt + 1));
  }
  return null;
}

async function main() {
  const items: { actNo: number; kind: string; ref: string; text: string }[] = [];
  for (const act of acts) {
    if (act.featuredVerse.text)
      items.push({ actNo: act.number, kind: 'featured', ref: act.featuredVerse.ref, text: act.featuredVerse.text });
    for (const v of act.memoryVerses)
      if (v.text) items.push({ actNo: act.number, kind: 'memory', ref: v.ref, text: v.text });
  }

  let exact = 0, punct = 0;
  const wordDiffs: string[] = [];
  const errors: string[] = [];

  for (const item of items) {
    const p = parseRef(item.ref);
    if (!p) { errors.push(`${item.ref}: unparseable`); continue; }
    const ch = await getChapter(p.book, p.chapter);
    if (!ch) { errors.push(`Act ${item.actNo} ${item.ref}: fetch failed`); continue; }
    const parts: string[] = [];
    for (let v = p.start; v <= p.end; v++) parts.push(ch.get(v) ?? '');
    const web = norm(parts.join(' '));
    const ours = norm(item.text);
    if (web === ours) exact++;
    else if (wordsOnly(web) === wordsOnly(ours)) punct++;
    else wordDiffs.push(`✗ Act ${item.actNo} [${item.kind}] ${item.ref}\n   ours: ${ours}\n   web:  ${web}`);
    await sleep(150);
  }

  console.log(`\nExact: ${exact}/${items.length} · Punctuation-only: ${punct} · Word diffs: ${wordDiffs.length} · Errors: ${errors.length}\n`);
  if (wordDiffs.length) { console.log('── WORD DIFFERENCES ──'); wordDiffs.forEach((m) => console.log(m + '\n')); }
  if (errors.length) { console.log('── ERRORS ──'); errors.forEach((m) => console.log('  ' + m)); }
}

main();
