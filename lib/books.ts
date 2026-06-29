/**
 * Canonical books covered by each act, so "X of 66 books explored" is a real
 * count of the unique books a reader has journeyed through. Chronicles is folded
 * into the monarchy acts (it retells that history), so the 15 acts span the full
 * 66-book Protestant canon.
 */
export const ACT_BOOKS: Record<number, string[]> = {
  1: ['Genesis'],
  2: ['Genesis'],
  3: ['Genesis'],
  4: ['Exodus'],
  5: ['Leviticus', 'Numbers', 'Deuteronomy'],
  6: ['Joshua', 'Judges', 'Ruth'],
  7: ['1 Samuel', '2 Samuel', '1 Kings', '1 Chronicles'],
  8: ['1 Kings', '2 Kings', '2 Chronicles'],
  9: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
  10: [
    'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel',
    'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
    'Haggai', 'Zechariah', 'Malachi',
  ],
  11: ['Ezra', 'Nehemiah', 'Esther'],
  12: ['Matthew', 'Mark', 'Luke', 'John'],
  13: ['Acts'],
  14: [
    'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
    '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude',
  ],
  15: ['Revelation'],
};

export const TOTAL_BOOKS = 66;

/** Count unique books across a set of explored act numbers. */
export function booksExplored(actNumbers: Iterable<number>): number {
  const set = new Set<string>();
  for (const n of actNumbers) {
    for (const b of ACT_BOOKS[n] ?? []) set.add(b);
  }
  return set.size;
}
