/**
 * Selah content types — the shape of the "database".
 *
 * Everything the app renders comes from these strongly-typed static modules.
 * No runtime AI, no network fetch for content. See §6 of the build spec.
 *
 * The shape is intentionally DB-friendly: each Act is a self-contained document
 * that could later be persisted to Postgres/CMS without touching the UI.
 */

export type MovementId = 'creation' | 'fall' | 'redemption' | 'restoration';

export interface Movement {
  id: MovementId;
  title: string; // "Redemption"
  tagline: string; // one line
  accent: string; // hex
  summary: string; // 2–3 sentences
}

export type Translation = 'WEB' | 'KJV';

export interface VerseRef {
  ref: string; // "Genesis 1:1"
  text?: string; // WEB/KJV text (public domain) — include for featured/memory verses
  translation?: Translation;
}

export interface TimelineEvent {
  ref: string; // "Genesis 1:3"
  title: string; // "Light pierces the darkness"
  detail: string; // 1–3 sentences
}

export interface Person {
  slug: string; // "abraham"
  name: string;
  oneLine: string;
  bio: string; // 1–2 paragraphs
  keyRefs: string[];
  appearsInActs: number[];
}

export type TermLanguage = 'Hebrew' | 'Greek' | 'Latin' | 'Concept';

export interface TermCard {
  term: string; // "bara" / "imago Dei"
  language: TermLanguage;
  gloss: string; // short
  detail: string; // deeper note + why it matters
}

export interface DeepSection {
  id: string; // "seven-days"
  heading: string;
  body: string; // rich markdown; multiple paragraphs
}

export interface ChristLink {
  ref: string;
  note: string; // e.g. John 1:1–3 → "Christ is the agent of creation"
}

export interface ChristConnection {
  summary: string; // the scarlet-thread tie-in for this act
  links: ChristLink[];
}

export interface Theme {
  title: string;
  body: string;
}

export interface QandA {
  q: string;
  a: string;
}

export interface Reflection {
  meditation: string; // a short calming meditation/prayer (mindful tone)
  prompts: string[]; // 2–4 reflection questions
}

export interface FullCircleLink {
  from: string;
  to: string;
  note: string;
}

export interface ActContent {
  number: number; // 1–15
  slug: string; // "creation"
  title: string; // "Creation"
  movement: MovementId;
  books: string; // "Genesis 1–2"
  era: string; // "the beginning"
  accent: string; // hex
  icon: string; // lucide name
  isClimax?: boolean; // acts 12 & 15
  banner?: string; // for climax acts
  teaser: string; // one line for the journey card
  featuredVerse: VerseRef; // big pull-quote
  overview: string; // 2–4 paragraphs: the big picture
  context: string; // authorship/date/genre/setting/purpose, fairly stated
  timeline: TimelineEvent[]; // the act's events in order, with refs
  deepDive: DeepSection[]; // the long-form teaching (this is where depth lives)
  people: Person[]; // key figures in this act
  themes: Theme[];
  words: TermCard[]; // Hebrew/Greek key terms
  christ: ChristConnection;
  memoryVerses: VerseRef[]; // with text (WEB/KJV)
  reflection: Reflection;
  questions: QandA[]; // common questions / misconceptions, fairly handled
  glossaryRefs: string[]; // term slugs
  fullCircle?: FullCircleLink[]; // acts 1 & 15
}

/** A flat record built for fuzzy search across everything. */
export type SearchKind =
  | 'act'
  | 'person'
  | 'term'
  | 'verse'
  | 'theme'
  | 'scene'
  | 'question';

export interface SearchRecord {
  id: string;
  kind: SearchKind;
  title: string;
  subtitle?: string;
  body?: string;
  /** Where to navigate when chosen. */
  href: string;
  /** Act number this record belongs to (for grouping / accent). */
  actNumber?: number;
  actSlug?: string;
  ref?: string;
}

/** The assembled, validated content graph the app reads from. */
export interface ContentGraph {
  movements: Movement[];
  acts: ActContent[];
  people: Person[];
  glossary: TermCard[];
}
