# Build Prompt: "Selah" — An Interactive Bible Journey & Mastery App

> Paste this entire file into Claude Code as your initial instruction. It is the
> single source of truth for the project. Working title is **Selah** (a Psalms word
> meaning a contemplative pause) — rename freely (alternatives: *Lumen*, *Sojourn*,
> *Manna*, *Scarlet Thread*). Build in the phases described at the end; do not stop
> after Phase 1 unless I tell you to.

---

## 0. Read this first — the non-negotiables

1. **No runtime AI.** Nothing in this app calls an LLM/API at runtime. There is no
   "click → generate" behavior. ALL study content is **pre-written static data**
   that ships with the repo. As you build, **you (Claude Code) generate the full
   content now** and store it in the content layer (see §6). Treat the content layer
   as the "database."
2. **Mobile-first.** Design for a ~390px phone viewport first, then scale up
   gracefully to tablet/desktop. Big touch targets, thumb-reachable nav, vertical
   scroll, swipe-friendly.
3. **Deployable on Vercel with zero config.** Next.js App Router. No required
   external services for v1. `vercel deploy` (or a GitHub import) must just work.
4. **The aesthetic is the product.** Calm, peaceful, tranquil, mindful, spiritual,
   glorious, mystical. Glassmorphism + soft light + ocean/cosmos imagery. See §3 —
   match the reference image's mood (frosted glass cards, teal/aqua gradients,
   serene light, elegant type). Every screen should feel like a deep breath.
5. **Depth is the point.** This must work as a real guide to *master the entire
   Bible* — not a summary. Every one of the 15 acts gets the full treatment defined
   in §6.3. Phasing is allowed, but the depth target per act is fixed.
6. **Scripture text must be copyright-safe.** Only quote a **public-domain**
   translation. Use the **World English Bible (WEB)** as the default (modern,
   readable, public domain) — or KJV. Never paste text from NIV/ESV/NLT/etc.

---

## 1. What we're building

A guided, cinematic, scroll-based journey through the whole Bible — **from Creation
to Revelation** — organized as **15 "acts"** along the classic four-movement arc:

**Creation → Fall → Redemption → Restoration.**

The home screen is a vertical "journey" (a glowing thread runs down through all 15
acts). Tapping an act opens a **deep-dive study view** with everything a person needs
to understand and internalize that part of scripture. A persistent "thread of
redemption" ties every act back to Christ at the center (Act 12).

Think: the calm of a meditation app + the depth of a study Bible + the flow of a
beautifully designed long-form story.

---

## 2. The 15 acts (the spine of the app)

Each act belongs to one of the four movements. This is the canonical ordering and
metadata. (Full per-act content is in §6 and §7.)

| # | Act | Books | Movement | Accent | Icon |
|---|-----|-------|----------|--------|------|
| 1 | Creation | Genesis 1–2 | Creation | teal `#1D9E75` | sun |
| 2 | The Fall | Genesis 3–11 | Fall | slate `#5F5E5A` | alert-triangle |
| 3 | The Patriarchs | Genesis 12–50 | Redemption | amber `#BA7517` | tent |
| 4 | Exodus & Deliverance | Exodus | Redemption | coral `#D85A30` | flame |
| 5 | The Law & the Wilderness | Leviticus–Deuteronomy | Redemption | blue `#185FA5` | mountain |
| 6 | The Promised Land | Joshua, Judges, Ruth | Redemption | green `#639922` | flag |
| 7 | The Kingdom Rises | 1–2 Samuel, 1 Kings 1–11 | Redemption | violet `#534AB7` | crown |
| 8 | The Kingdom Divides & Falls | 1 Kings 12 – 2 Kings | Redemption | rust `#993C1D` | trending-down |
| 9 | The Poets & the Wisdom | Job, Psalms, Proverbs, Ecclesiastes, Song | Redemption | rose `#D4537E` | feather |
| 10 | The Prophets | Isaiah–Malachi | Redemption | red `#A32D2D` | eye |
| 11 | Return & the Silence | Ezra, Nehemiah, Esther (+400 yrs) | Redemption | stone `#888780` | hourglass |
| 12 | The Messiah ⭐ | Matthew, Mark, Luke, John | Redemption | gold `#C2410C` | star |
| 13 | The Church Is Born | Acts | Restoration | amber `#BA7517` | flame |
| 14 | The Letters | Romans–Jude | Restoration | blue `#185FA5` | mail |
| 15 | Revelation ⭐ | Revelation | Restoration | gold `#BA7517` | sun |

Acts 12 and 15 are the two "luminous" climaxes — give them a slightly larger node, a
soft halo/glow, and a small banner ("The turning point of all history" / "Where the
story comes home").

**The full-circle motif** (use on the home screen finale and inside Acts 1 & 15):
Eden lost → Eden restored. "In the beginning…" (Gen 1:1) ↔ "…all things new" (Rev
21:5); tree of life guarded (Gen 3:24) ↔ freely given (Rev 22:2); river out of Eden
(Gen 2:10) ↔ river of life from the throne (Rev 22:1); God walks in the garden (Gen
3:8) ↔ God dwells with us forever (Rev 21:3).

---

## 3. Visual & UX direction (study the reference image)

The user provided a reference: a mindfulness app screen — *"Embrace the light of
divine energy."* Key cues to carry over:

- **Glassmorphism.** Frosted, semi-transparent cards (`backdrop-blur`), thin
  light borders, soft inner glow, content floating over a luminous background.
- **Palette: ocean + divine light.** Deep teal → aqua → soft cyan gradients, with
  **warm gold/white "divine light"** accents and glows. Calm, never harsh.
- **Serene, ethereal imagery.** Water, light, sky, cosmos, mist. Imagery sits behind
  a soft gradient/overlay so text stays readable.
- **Elegant typography.** A refined display face for headings + a clean sans for
  body. Scripture quotes set in a serif "voice."
- **Soft social-proof / stat card** (the "985+ students" element) → repurpose as the
  user's **progress card** ("Day 3 of your journey · 12 of 66 books explored ·
  4-day streak").
- **Calm motion.** Gentle fades, slow parallax, soft scale on press, smooth shared-
  element expansion when opening an act. Nothing snappy or aggressive. Easing should
  feel like breathing (long, eased-out curves).

### Design tokens (Tailwind theme — implement in `tailwind.config.ts` + CSS vars)

```
Background base:    radial/linear gradients of #042F2E → #0E5C57 → #14B8A6 → #67E8F9
Glass surface:      rgba(255,255,255,0.08–0.14) + backdrop-blur(20–28px)
Glass border:       rgba(255,255,255,0.18)
Divine light:       soft radial glows in #FDE68A / #FCD34D / #FFFFFF at low opacity
Text on dark:       #F0FDFA (primary), rgba(240,253,250,0.72) (secondary)
Per-act accent:     from the table in §2 (used for nodes, glows, section accents)
Radius:             cards 24px, controls 16px, pills 999px
Shadow:             soft, large, low-opacity teal-tinted glows (no hard drop shadows)
```

### Typography (use `next/font`, all from Google Fonts = free + Vercel-friendly)

- **Display / headings:** `Fraunces` (or `Cormorant Garamond`) — elegant, spiritual.
- **UI / body:** `Inter` (or `Geist`).
- **Scripture voice:** the serif display face in italic for pull-quotes.
- Sentence case for UI; scripture rendered as-is.

### Per-act "mood"

Give each act a distinct background treatment (gradient + optional image + accent
glow) matching its tone, so scrolling the journey *feels* like the story shifting:

- Creation → luminous dawn / first light, soft teal-gold.
- The Fall → light dimming, cooler shadow tones.
- Exodus → fire and desert warmth.
- Wisdom → deep contemplative indigo/rose.
- Prophets → storm light, amber warnings.
- The Messiah → radiant gold sunrise (the brightest screen in the app).
- Revelation → brilliant new-dawn white-gold.

### Imagery sourcing (keep it license-clean)

Default to **generated gradients + layered SVG light/cosmos shapes** (reliable, fast,
zero licensing). Optionally allow curated **Unsplash** imagery via `next/image`
(configure `remotePatterns` for `images.unsplash.com`); store an `imageCredit` field
per image and render attribution. Provide an easy switch so the user can drop in their
own art later. Do **not** ship copyrighted/branded art.

### Motion library

`framer-motion`. Use `layoutId` shared-element transitions so an act card on the home
journey morphs smoothly into the act detail header. Respect
`prefers-reduced-motion`.

---

## 4. Tech stack

- **Next.js 14+ (App Router) + TypeScript** — Vercel-native.
- **Tailwind CSS** (+ a few CSS variables for the gradient/glass system).
- **framer-motion** for animation.
- **lucide-react** for icons (map the icon names in §2).
- **next/font** (Google Fonts) for typography.
- **Content as static TS modules** in `/content` (the "DB"). Strongly typed.
- **State/persistence:** `localStorage` only (progress, bookmarks, settings). No
  backend in v1. Wrap access so it's SSR-safe.
- **Search:** client-side fuzzy search over the content index (e.g. `fuse.js`).
- **Testing/quality:** TypeScript strict mode, ESLint, Prettier.
- **Optional, gated behind an env flag (do NOT require it):** a future migration path
  to **Vercel Postgres + Prisma** or a headless CMS. Structure the content layer so it
  could be swapped for a DB later, but ship static for v1.

> Note: `localStorage`/`sessionStorage` is fine in the deployed app (it's NOT an
> artifact sandbox). Just guard it for SSR (`typeof window !== 'undefined'`).

---

## 5. App structure & screens

```
/                     Home — the vertical journey (hero + 15 acts + full-circle finale)
/act/[slug]           Act detail — the deep-dive study view
/read                 Reading plan / progress dashboard
/search               Search across all content
/bookmarks            Saved verses, acts, and notes (localStorage)
/glossary             Key terms index (Hebrew/Greek words, theology terms)
/people               Index of key figures across the Bible (links into acts)
/about                What this is + how to use it
```

**Global chrome (mobile):** a slim glass **bottom tab bar** — Journey · Read · Search
· Saved · More. On desktop, a left rail or top bar.

### 5.1 Home (`/`)

- **Hero:** full-bleed luminous gradient, app name, a one-line invitation
  ("The whole story of God — from the first light to the last promise"), and the
  four-movement arc as glowing pills (Creation → Fall → Redemption → Restoration).
- **Progress card** (glass): the repurposed "985+" element — current act, books
  explored, streak, "Continue where you left off" CTA.
- **The journey:** the 15 acts as glass cards strung along a glowing vertical
  **thread of redemption** (subtle animated gradient line). Each card shows: act
  number, movement tag, accent-colored icon node, title, era/books, a one-line
  teaser, and a progress check (read / in-progress / unread). Acts 12 & 15 are
  visually elevated (halo). Tap → `/act/[slug]` (shared-element transition).
- **Full-circle finale section:** the Eden ↔ New Creation mirror (see §2).
- Gentle scroll-reveal as each act enters the viewport; active act subtly brightens.

### 5.2 Act detail (`/act/[slug]`) — the deep dive

This is the heart of the app. Header morphs in from the tapped card (accent glow,
icon, title, books, movement). Below, the full study content (§6.3) rendered as
**calm, swipeable/anchored sections**. Use a sticky segmented control or a soft
in-page section nav so a long act stays navigable on mobile:

`Overview · Story · People · Themes · Words · Christ · Verses · Reflect · Q&A`

Each section is a glass panel. Include:
- A **featured verse** pull-quote at the top (serif voice, accent rule).
- An **interactive timeline** of the act's events (horizontal scroll on mobile),
  each node a scripture ref that expands the moment.
- **Key people** as tappable cards (image/initial, one-line, link to `/people`).
- **Key words** (Hebrew/Greek) as flip-style term cards.
- **"How it points to Christ"** panel (the scarlet-thread tie-in) — visually marked
  with the redemption-thread accent.
- **Memory verses** with a one-tap "add to bookmarks" and a lightweight flashcard
  practice mode.
- **Reflect** (a short meditation/prayer + 2–4 reflection prompts — calm tone).
- **Q&A / common questions** (addresses misconceptions; presents major interpretive
  views fairly where Christians differ — see §6.4).
- **Prev/next act** navigation that keeps the journey feeling continuous.
- A **"mark act complete"** action that updates progress.

### 5.3 Reading plan / progress (`/read`)

- A suggested path (e.g., "Master the Bible in 30 days" — group the 15 acts into
  daily readings) and a free-explore mode.
- Progress ring, streak, completed acts, "today's reading" card.
- All persisted in `localStorage`.

### 5.4 Search, Bookmarks, Glossary, People

- **Search:** fuzzy over act titles, scenes, people, verses, glossary. Calm results
  list, grouped by type.
- **Bookmarks:** saved verses/acts/notes; user can add a short personal note to any
  verse (localStorage).
- **Glossary & People:** generated from the content index; each entry links back to
  every act it appears in.

---

## 6. The content layer (the "database") — generate ALL of this now

### 6.1 Where it lives

```
/content
  movements.ts        the 4 movements
  acts/
    01-creation.ts
    02-the-fall.ts
    ... (15 files)
  people.ts           cross-act figure index (derived + curated)
  glossary.ts         Hebrew/Greek + theology terms
  index.ts            assembles + exports a typed, validated content graph
  search-index.ts     flat index built from the above for fuse.js
```

Validate the shape at build time (zod or a TS assertion) so missing fields fail loudly.

### 6.2 Types (implement in `/content/types.ts`)

```ts
export type MovementId = 'creation' | 'fall' | 'redemption' | 'restoration';

export interface Movement {
  id: MovementId;
  title: string;            // "Redemption"
  tagline: string;          // one line
  accent: string;           // hex
  summary: string;          // 2–3 sentences
}

export interface VerseRef {
  ref: string;              // "Genesis 1:1"
  text?: string;            // WEB/KJV text (public domain) — include for featured/memory verses
  translation?: 'WEB' | 'KJV';
}

export interface TimelineEvent {
  ref: string;              // "Genesis 1:3"
  title: string;            // "Light pierces the darkness"
  detail: string;           // 1–3 sentences
}

export interface Person {
  slug: string;             // "abraham"
  name: string;
  oneLine: string;
  bio: string;              // 1–2 paragraphs
  keyRefs: string[];
  appearsInActs: number[];
}

export interface TermCard {
  term: string;             // "bara" / "imago Dei"
  language: 'Hebrew' | 'Greek' | 'Latin' | 'Concept';
  gloss: string;            // short
  detail: string;           // deeper note + why it matters
}

export interface DeepSection {
  id: string;               // "seven-days"
  heading: string;
  body: string;             // rich markdown; multiple paragraphs
}

export interface ChristConnection {
  summary: string;          // the scarlet-thread tie-in for this act
  links: { ref: string; note: string }[]; // e.g. John 1:1–3 → "Christ is the agent of creation"
}

export interface ActContent {
  number: number;           // 1–15
  slug: string;             // "creation"
  title: string;            // "Creation"
  movement: MovementId;
  books: string;            // "Genesis 1–2"
  era: string;              // "the beginning"
  accent: string;           // hex
  icon: string;             // lucide name
  isClimax?: boolean;       // acts 12 & 15
  teaser: string;           // one line for the journey card
  featuredVerse: VerseRef;  // big pull-quote
  overview: string;         // 2–4 paragraphs: the big picture
  context: string;          // authorship/date/genre/setting/purpose, fairly stated
  timeline: TimelineEvent[];// the act's events in order, with refs
  deepDive: DeepSection[];  // the long-form teaching (this is where depth lives)
  people: Person[];         // key figures in this act
  themes: { title: string; body: string }[];
  words: TermCard[];        // Hebrew/Greek key terms
  christ: ChristConnection;
  memoryVerses: VerseRef[]; // with text (WEB/KJV)
  reflection: {
    meditation: string;     // a short calming meditation/prayer (mindful tone)
    prompts: string[];      // 2–4 reflection questions
  };
  questions: { q: string; a: string }[]; // common questions / misconceptions, fairly handled
  glossaryRefs: string[];   // term slugs
  fullCircle?: { from: string; to: string; note: string }[]; // acts 1 & 15
}
```

### 6.3 Depth target — every act must include ALL of:

1. **Overview** — 2–4 paragraphs, the big picture and why it matters.
2. **Context** — traditional authorship/date, genre, historical/cultural setting,
   purpose. State scholarly views fairly where relevant; don't flatten them.
3. **Timeline** — every major event in order, each with a scripture ref + 1–3
   sentence detail (aim 6–14 events per act).
4. **Deep dive** — the long-form teaching: 4–8 substantial sections unpacking the
   key passages, structures, and meaning. This is the "master the Bible" core.
5. **Key people** — 3–8 figures, each with a real mini-bio + key refs.
6. **Themes** — 3–6 major theological themes with explanation.
7. **Key words** — 3–8 Hebrew/Greek terms that unlock the text.
8. **How it points to Christ** — the scarlet-thread connection + specific NT links.
9. **Memory verses** — 3–5, with full public-domain text.
10. **Reflection** — a short calming meditation/prayer + 2–4 reflection prompts.
11. **Common questions** — 3–6 Q&As addressing real misconceptions; where Christians
    genuinely differ (e.g. age of the earth, end-times views), present the main
    positions charitably rather than asserting one.
12. **Glossary + cross-references** wired into the global indices.

> Build all 15 to this standard. Act 1 below is written out **in full** as the gold
> standard for tone and depth. Acts 2–15 have seed skeletons in §7 — **expand each to
> the same depth** as Act 1. Do not ship thin acts.

### 6.4 Tone & doctrinal stance

- Warm, reverent, calm, accessible — never preachy, never dry. Like a wise,
  gentle guide.
- **Ecumenical and fair.** This should serve Catholic, Orthodox, and Protestant
  readers. On disputed matters (creation timeframe, predestination, eschatology,
  baptism, etc.), present the major historic Christian views respectfully and let
  the reader weigh them. Don't push a single tradition's distinctives as the only
  reading.
- Cite scripture constantly. Quote only public-domain translations (WEB default).

---

## 6.5 GOLD-STANDARD CONTENT — Act 1: Creation (write this out fully in `01-creation.ts`)

Use this as the literal content for Act 1 and the depth/tone benchmark for the rest.

**Slug:** `creation` · **Books:** Genesis 1–2 · **Movement:** Creation · **Accent:**
`#1D9E75` · **Icon:** `sun` · **Era:** the beginning

**Featured verse:** Genesis 1:1 (WEB) — "In the beginning, God created the heavens and
the earth."

**Teaser:** Out of nothing, by a word, everything begins — and it is good.

**Overview (write ~3 paragraphs):**
Genesis opens not with an argument for God but with the assumption of him: before
anything exists, God simply *is*, and he speaks the universe into being. Genesis 1
is a cosmic overture — ordered, rhythmic, almost liturgical — declaring that the
heavens and the earth are not accidents or the leftovers of warring gods (as Israel's
neighbors believed), but the deliberate, good work of one sovereign Creator. Genesis 2
then zooms in from the cosmos to a single garden and a single couple, trading the wide
lens for an intimate one: the God who flung stars into space also kneels in the dirt to
form a human and breathe life into him. Together the two accounts give us both the
*majesty* and the *tenderness* of the Creator. The chapters establish the foundation
for everything that follows: who God is, what the world is for, who we are, and why we
matter.

**Context (write ~2 paragraphs):**
Traditionally ascribed to Moses, Genesis is the first book of the Torah/Pentateuch. Its
opening chapters are written in elevated, structured Hebrew prose — neither a modern
science textbook nor a myth, but a theological proclamation crafted to be read,
remembered, and sung. Read against its Ancient Near Eastern backdrop, Genesis 1 is
strikingly subversive: where surrounding cultures told of gods birthing the world
through violence and chaos, and of the sun, moon, and sea as deities to be feared,
Genesis calmly demotes them to *creations* — the sun and moon are merely "lights," the
great sea creatures merely "made." Humanity, far from being slave labor for the gods
(as in some Mesopotamian accounts), is crowned as God's image-bearing royalty. Note for
the reader: faithful Christians hold several views on *how* to read the "days"
(see Q&A) — Genesis's primary aim is to reveal *who* creates and *why*, more than the
mechanism or timetable.

**Timeline (the seven days — use these events):**
- Gen 1:1–2 — "In the beginning": the formless, empty deep; the Spirit of God hovers.
- Gen 1:3–5 — **Day 1:** Light; God separates light from darkness — day and night.
- Gen 1:6–8 — **Day 2:** The expanse (sky); waters above separated from waters below.
- Gen 1:9–13 — **Day 3:** Dry land and seas; the earth brings forth vegetation.
- Gen 1:14–19 — **Day 4:** Sun, moon, and stars set as lights and signs for seasons.
- Gen 1:20–23 — **Day 5:** Sea creatures and birds; the first blessing — "be fruitful."
- Gen 1:24–31 — **Day 6:** Land animals, then humanity in God's image; "very good."
- Gen 2:1–3 — **Day 7:** God rests, and blesses and sanctifies the seventh day.
- Gen 2:7 — The intimate account: God forms the man from dust, breathes in life.
- Gen 2:8–17 — Eden planted; the tree of life and the tree of knowledge; the command.
- Gen 2:18–25 — The animals named; woman formed from the man's side; marriage instituted.

**Deep dive (write these sections in full):**

1. **"In the beginning" — creation from nothing.** Unpack Gen 1:1–2: God pre-exists
   creation; the universe has a beginning and a Beginner. The Hebrew *bara* ("create")
   is used in the OT only with God as subject — a making only God can do. The earth
   begins *tohu wabohu* (formless and empty), and the *ruach* of God (Spirit / wind /
   breath) hovers over the waters — ordering is about to begin. The doctrine the church
   drew from this: *creatio ex nihilo*, creation out of nothing — the world is not God,
   not eternal, and not an accident; it is gift.

2. **The architecture of the seven days (forming & filling).** Show the elegant
   literary structure: Days 1–3 *form* three empty realms; Days 4–6 *fill* them.
   Day 1 (light) ↔ Day 4 (sun, moon, stars). Day 2 (sky & seas) ↔ Day 5 (birds &
   fish). Day 3 (land & plants) ↔ Day 6 (land animals & humans). The account is a
   masterwork of order, building to its climax in humanity and resolving in rest. Note
   the refrain "and God saw that it was good" — creation is declared good *seven* times,
   capped by "very good." Goodness is woven into the fabric of the world.

3. **The two accounts, one Creator.** Explain that Gen 1:1–2:3 (the cosmic, ordered
   account, where God is *Elohim*) and Gen 2:4–25 (the intimate, garden account, where
   he is *Yahweh Elohim*, the LORD God) are complementary, not contradictory — wide
   lens then close-up. Genesis 1 answers "what is the world?"; Genesis 2 answers "what
   is it to be human, in relationship?"

4. **Made in the image of God (imago Dei).** The crown of the account (Gen 1:26–27):
   humanity — male and female together — is made in God's image and likeness. Develop
   the main dimensions the church has seen here: (a) **representation/royalty** — like a
   king's image set in a land to mark his rule, humans represent God and are given
   *dominion* to steward creation (1:28); (b) **relationship** — "male and female" and
   the capacity to know and walk with God; we are made for communion; (c) **moral and
   spiritual capacity** — reason, conscience, creativity, worship. Draw out the
   staggering implications: every human being — regardless of age, ability, status,
   or usefulness — bears inherent, equal dignity. This single verse grounds human
   rights, the worth of the vulnerable, and the call to treat others as image-bearers.

5. **Vocation: work, dominion, and the garden.** Before the fall, before sin, there is
   *work* — God places the human in Eden "to cultivate it and keep it" (2:15). Dominion
   (1:28) is not exploitation but stewardship: caring for creation as God's deputy.
   Work is a gift and a calling, part of being human, not a curse.

6. **The garden, the trees, and the first command.** Eden as God's generous provision;
   the tree of life and the tree of the knowledge of good and evil (2:9); the single
   prohibition (2:16–17) — real freedom within loving boundaries, and the dignity of a
   genuine choice. A river flows out of Eden (2:10) — remember this; it returns in
   Revelation 22.

7. **Marriage and the first community.** From the man's side God forms the woman — not
   from his head to rule him nor his feet to be trampled, but his side, to stand beside
   him (a classic and beloved reading). "Bone of my bones" (2:23); "they shall become
   one flesh" (2:24) institutes marriage and human companionship — "it is not good for
   the man to be alone" is the *first* "not good" in a chapter of goodness.

8. **Sabbath: the gift of rest.** God rests on the seventh day (2:2–3) — not from
   exhaustion but to bless and sanctify rest, weaving a rhythm of work and rest into
   creation itself. Sabbath dignifies rest, limits human striving, and points forward
   to the deeper rest found in Christ (Hebrews 4).

**Key people:**
- **God (Elohim / Yahweh Elohim)** — the sole Creator; sovereign, personal, good;
  speaks the world into being and forms humanity by hand.
- **Adam** — the first human, formed from the dust (*adamah*, "ground"), given breath,
  vocation, and a command; head of humanity. Refs: Gen 1:26–28; 2:7,15–25.
- **Eve** — the first woman, formed from the man's side, "the mother of all living"
  (named in Gen 3:20); equal image-bearer and companion. Refs: Gen 1:27; 2:18–25.

**Themes:** (1) God as Creator — the world is gift, not accident. (2) The goodness of
creation — matter matters; the physical world is declared good. (3) Human dignity &
the image of God. (4) Vocation & stewardship. (5) Order out of chaos. (6) Sabbath rest.
(7) Marriage & community.

**Key words:**
- *bara* (Hebrew) — "to create"; used only of God's unique creative act.
- *tohu wabohu* (Hebrew) — "formless and empty"; the unordered starting state.
- *ruach* (Hebrew) — "spirit / wind / breath"; the Spirit of God hovering (1:2).
- *Elohim* (Hebrew) — the majestic name for God in Genesis 1.
- *imago Dei* (Latin/Concept) — "image of God"; humanity's defining dignity.
- *adam / adamah* (Hebrew) — wordplay: the human (*adam*) from the ground (*adamah*).
- *yom* (Hebrew) — "day"; note its range of meaning, central to the days debate.

**How it points to Christ (scarlet thread):**
Summary: The New Testament reaches back to Genesis 1 and reveals that the One through
whom God created is the eternal Son. The story that begins "in the beginning, God
created" is reread "in the beginning was the Word" — and that Word steps into the very
creation he made. He is the true image of God, the last Adam, the light, and the giver
of the true Sabbath rest; and the gospel itself is described as a *new* creation.
Links:
- John 1:1–3 — "In the beginning was the Word… all things were made through him."
- Colossians 1:15–16 — Christ is the image of the invisible God; all things created
  through and for him.
- Hebrews 1:2 — through the Son, God made the universe.
- John 8:12 — "I am the light of the world" (echo of Day 1).
- 1 Corinthians 15:45 — Christ, the "last Adam," a life-giving spirit.
- 2 Corinthians 5:17 — in Christ, "a new creation"; the old has gone.
- Hebrews 4:9–10 — the Sabbath rest that remains for God's people.

**Memory verses (WEB, include full text):**
- Gen 1:1 — "In the beginning, God created the heavens and the earth."
- Gen 1:27 — "God created man in his own image. In God's image he created him; male
  and female he created them."
- Gen 1:31 — "God saw everything that he had made, and, behold, it was very good."
- Gen 2:24 — "Therefore a man will leave his father and his mother, and will join with
  his wife, and they will be one flesh."

**Reflection:**
- *Meditation:* "Be still, and know that the same God who set the stars in place and
  called the light out of darkness formed you with care and called you good. You are not
  an accident. Breathe slowly. You are known, you are made on purpose, and you bear his
  image." (Keep it gentle and calming — the app's whole tone.)
- *Prompts:* What does it change to believe you were made *on purpose* and called
  *good*? Where in your life are you invited to *steward* rather than exploit? What
  would it look like to receive rest as a gift this week? Who around you do you find
  hardest to treat as an image-bearer of God?

**Common questions (write fair, charitable answers):**
- *Do the "days" mean six 24-hour days?* Lay out the main faithful views without
  forcing one: young-earth/calendar-day, day-age, the literary "framework" view, and
  analogical-day. Note that Genesis's main concern is theological (who and why) and that
  sincere Christians differ here.
- *Does Genesis conflict with science?* Explain how many Christians read Genesis as
  answering different questions (meaning, purpose, the Creator) than physics or biology,
  and survey the range (concordist, non-concordist, etc.) charitably.
- *Are chapters 1 and 2 two contradictory creation stories?* Explain the
  complementary wide-lens / close-up reading.
- *What does "image of God" actually mean for me?* Summarize dignity, vocation,
  relationship — and its implications for how we treat every person.

**Full-circle (Act 1 ↔ Act 15):**
- "In the beginning…" (Gen 1:1) → "Behold, I make all things new" (Rev 21:5).
- A river flows out of Eden (Gen 2:10) → the river of life from the throne (Rev 22:1).
- The tree of life in the garden (Gen 2:9) → the tree of life in the city (Rev 22:2).
- God walks with humanity in the garden (Gen 3:8, foreshadowed) → God dwells with his
  people forever (Rev 21:3).

---

## 7. Seed skeletons for Acts 2–15 (EXPAND each to Act-1 depth)

For every act below, you are given the slug, books, accent, icon, featured verse,
teaser, key timeline beats (with refs), key people, themes, key words, the Christ
connection, and memory verses. **Generate the full `overview`, `context`, multi-
section `deepDive`, full `people` bios, `themes` bodies, `words` details, `reflection`
(meditation + prompts), and `questions` (with fair handling of disputes) to match the
depth and tone of Act 1.** Quote only public-domain translations (WEB default).

### Act 2 — The Fall · `the-fall` · Genesis 3–11 · slate `#5F5E5A` · alert-triangle
- **Featured:** Gen 3:15 (WEB) — the first promise of a deliverer.
- **Teaser:** One choice fractures everything — and God makes the first promise.
- **Timeline:** Gen 3:1–6 the serpent's deception and the fruit; 3:7–13 shame and
  blame; **3:15** the protoevangelium (the seed who crushes the serpent); 3:16–19 the
  curses; 3:22–24 exile from Eden, the way to the tree of life barred; 4:1–16 Cain
  murders Abel; 6:5–8 the wickedness of humanity, Noah finds favor; 6–9 the flood and
  the ark; 9:8–17 the rainbow covenant; 11:1–9 Babel and the scattering.
- **People:** Adam & Eve (after the fall), the serpent, Cain & Abel, Noah.
- **Themes:** the entrance of sin; shame and broken relationship; the spread/escalation
  of sin; judgment *and* mercy (God still clothes, still promises, still preserves a
  remnant); covenant; human pride.
- **Words:** *nachash* (serpent), *arum* (crafty), *protoevangelium* (concept — "first
  gospel"), *qayin/hevel* (Cain/Abel), covenant (*berith*).
- **Christ:** Gen 3:15 → Christ the promised seed who crushes the serpent
  (Rom 16:20; Gal 4:4; Heb 2:14); Noah's ark → salvation through judgment
  (1 Pet 3:20–21); the second Adam reverses the first Adam's fall (Rom 5:12–21).
- **Memory:** Gen 3:15; Gen 6:8.

### Act 3 — The Patriarchs · `the-patriarchs` · Genesis 12–50 · amber `#BA7517` · tent
- **Featured:** Gen 12:3 (WEB) — "in you all the families of the earth will be blessed."
- **Teaser:** God calls one family to bless the whole world.
- **Timeline:** 12:1–3 the call of Abram; 15:1–6 the covenant of the stars, Abram
  believes (counted righteous); 17 covenant + circumcision, Abraham/Sarah named;
  18 the visitors; 21 Isaac born; 22 the binding of Isaac, the ram provided; 25:19–34
  Jacob and Esau; 28:10–22 Jacob's ladder; 32:22–32 wrestling, renamed Israel; 37
  Joseph sold; 39–41 Joseph in Egypt, prison to palace; 45 the reconciliation; 50:20
  "you meant evil… God meant it for good."
- **People:** Abraham, Sarah, Isaac, Rebekah, Jacob/Israel, Esau, Joseph.
- **Themes:** covenant and promise; faith and righteousness; election to bless others;
  God's providence through human failure; the birth of the nation of Israel.
- **Words:** *berith* (covenant), *lekh-lekha* ("go!", 12:1), *hesed* (loyal love),
  *El Shaddai*, *Israel* ("struggles with God").
- **Christ:** the offspring/seed promise → Christ (Gal 3:16); Abraham's faith credited
  as righteousness → justification by faith (Rom 4); Isaac/the ram → the Father
  providing the Lamb (John 1:29); Joseph as a type (betrayed, exalted, saves many).
- **Memory:** Gen 12:2–3; Gen 15:6; Gen 50:20.

### Act 4 — Exodus & Deliverance · `exodus` · Exodus · coral `#D85A30` · flame
- **Featured:** Exodus 3:14 (WEB) — "I AM WHO I AM."
- **Teaser:** God hears, God remembers, God comes down to rescue.
- **Timeline:** 1 Israel enslaved; 2 Moses born, drawn from the Nile, flees;
  3 the burning bush, the divine name; 7–11 the ten plagues; 12 the Passover and the
  exodus; 14 the parting of the Red Sea; 16 manna; 19–20 Sinai and the Ten
  Commandments; 24 the covenant ratified; 25–31 the tabernacle instructions;
  32 the golden calf; 34 covenant renewed; 40 the glory fills the tabernacle.
- **People:** Moses, Aaron, Miriam, Pharaoh, Jethro.
- **Themes:** redemption/deliverance; the revealed name and character of God;
  Passover and substitution; covenant and law; God's presence dwelling with his people.
- **Words:** *YHWH* (the divine name), *ehyeh* ("I AM"), *pesach* (Passover),
  *mishkan* (tabernacle), *kavod* (glory).
- **Christ:** the Passover lamb → Christ our Passover (1 Cor 5:7; John 19:36); the
  exodus → redemption from slavery to sin; manna → the bread of life (John 6); "I AM"
  → Jesus' I AM sayings (John 8:58).
- **Memory:** Ex 3:14; Ex 20:2–3; Ex 14:14.

### Act 5 — The Law & the Wilderness · `law-and-wilderness` · Leviticus–Deuteronomy · blue `#185FA5` · mountain
- **Featured:** Deut 6:4–5 (WEB) — the Shema.
- **Teaser:** A holy God teaches a freed people how to live and love.
- **Timeline:** Lev 16 the Day of Atonement and the scapegoat; Lev 19 holiness ("love
  your neighbor", 19:18); Num 13–14 the twelve spies and 40 years of wandering;
  Num 21:4–9 the bronze serpent; Deut 6:4–9 the Shema; Deut 28 blessings and curses;
  Deut 30 "choose life"; Deut 34 Moses sees the land and dies on Nebo.
- **People:** Moses, Aaron, Joshua, Caleb, Korah.
- **Themes:** holiness; atonement and sacrifice; the law as covenant gift; testing and
  faithfulness in the wilderness; love of God and neighbor as the law's heart.
- **Words:** *qadosh* (holy), *kippur* (atonement), *torah* (instruction/law),
  *shema* ("hear"), *hesed*.
- **Christ:** the sacrificial system and Day of Atonement → Christ our high priest and
  once-for-all sacrifice (Hebrews 9–10); the bronze serpent lifted up → the Son lifted
  up (John 3:14–15); the law fulfilled in Christ (Matt 5:17).
- **Memory:** Deut 6:4–5; Lev 19:18; Deut 30:19.

### Act 6 — The Promised Land · `promised-land` · Joshua, Judges, Ruth · green `#639922` · flag
- **Featured:** Joshua 24:15 (WEB) — "as for me and my house, we will serve Yahweh."
- **Teaser:** Promise becomes possession — then the long cycle of forgetting begins.
- **Timeline:** Josh 1 "be strong and courageous"; Josh 3 crossing the Jordan; Josh 6
  Jericho; Josh 24 covenant renewal; Judg 2:11–19 the cycle (sin → oppression → cry →
  judge → rest → repeat); Judg 4–5 Deborah; Judg 6–8 Gideon; Judg 13–16 Samson;
  Judg 21:25 "everyone did what was right in his own eyes"; Ruth 1 loyalty in famine;
  Ruth 4 Boaz the kinsman-redeemer, the line to David.
- **People:** Joshua, Rahab, Deborah, Gideon, Samson, Ruth, Naomi, Boaz.
- **Themes:** faithfulness and courage; covenant obedience and its erosion; the cycle of
  sin and deliverance; God's faithfulness through a dark era; redemption and inclusion
  (Rahab, Ruth — outsiders brought in).
- **Words:** *herem* (devotion to destruction — handle thoughtfully and in context),
  *shophet* (judge/deliverer), *go'el* (kinsman-redeemer), *hesed*.
- **Christ:** Joshua (same name as "Jesus", *Yeshua*) leads into rest → Christ leads to
  true rest; Rahab and Ruth in the genealogy of Jesus (Matt 1); the kinsman-redeemer →
  Christ our Redeemer.
- **Memory:** Josh 1:9; Josh 24:15; Ruth 1:16.

### Act 7 — The Kingdom Rises · `kingdom-rises` · 1–2 Samuel, 1 Kings 1–11 · violet `#534AB7` · crown
- **Featured:** 1 Sam 16:7 (WEB) — "Yahweh looks at the heart."
- **Teaser:** Israel gets its king — and God promises a throne that never ends.
- **Timeline:** 1 Sam 3 Samuel called; 1 Sam 8 the people demand a king; 1 Sam 10 Saul
  anointed; 1 Sam 16 David anointed; 1 Sam 17 David and Goliath; 2 Sam 5 David king over
  all Israel; 2 Sam 6 the ark to Jerusalem; **2 Sam 7** the Davidic covenant (an eternal
  throne); 2 Sam 11–12 Bathsheba and Nathan's rebuke; 1 Kings 3 Solomon's wisdom;
  1 Kings 6–8 the temple built and dedicated; 1 Kings 11 Solomon's decline.
- **People:** Samuel, Saul, David, Jonathan, Bathsheba, Nathan, Solomon.
- **Themes:** kingship and the heart; the Davidic covenant; worship and the temple;
  wisdom; the corrupting pull of power and compromise.
- **Words:** *mashiach* (anointed one / messiah), *nephesh*, *hesed*, *chokmah*
  (wisdom), *beth* (house — temple/dynasty wordplay in 2 Sam 7).
- **Christ:** the Davidic covenant → Jesus, son of David, whose kingdom has no end
  (Luke 1:32–33; Matt 1:1); "messiah/anointed" → Christ; a greater-than-Solomon
  (Matt 12:42); the true temple (John 2:19–21).
- **Memory:** 1 Sam 16:7; 2 Sam 7:12–13; Ps 51:10 (tie-in).

### Act 8 — The Kingdom Divides & Falls · `kingdom-falls` · 1 Kings 12 – 2 Kings · rust `#993C1D` · trending-down
- **Featured:** 1 Kings 18:21 (WEB) — "How long will you waver between two opinions?"
- **Teaser:** A kingdom split, prophets ignored, and two exiles.
- **Timeline:** 1 Kings 12 the kingdom splits (Israel north / Judah south); 1 Kings
  17–18 Elijah and the drought, Carmel; 1 Kings 19 the still small voice; 2 Kings 2
  Elijah taken up, Elisha's mantle; 2 Kings 5 Naaman healed; 2 Kings 17 Israel falls to
  Assyria (722 BC); 2 Kings 22–23 Josiah's reforms; 2 Kings 25 Jerusalem and the temple
  destroyed by Babylon (586 BC), the exile begins.
- **People:** Jeroboam, Rehoboam, Elijah, Elisha, Ahab, Jezebel, Hezekiah, Josiah.
- **Themes:** divided loyalty and idolatry; the prophetic word; judgment and patience;
  the consequences of forsaking the covenant; faithful remnant.
- **Words:** *baal* (idolatry), *navi* (prophet), *galut* (exile), *shuv* (return/repent).
- **Christ:** the prophets pointing forward; Elijah → John the Baptist (Matt 17:11–13);
  exile and the longing for restoration that Christ answers.
- **Memory:** 1 Kings 18:21; 2 Kings 17:13 (tie-in to repentance).

### Act 9 — The Poets & the Wisdom · `wisdom` · Job, Psalms, Proverbs, Ecclesiastes, Song · rose `#D4537E` · feather
- **Featured:** Psalm 23:1 (WEB) — "Yahweh is my shepherd: I shall lack nothing."
- **Teaser:** The heart of God's people — in grief, praise, wisdom, and love.
- **Timeline (thematic, not chronological — note this):** Job 1–2 the test; Job 38–42
  God answers from the whirlwind; Ps 22 forsakenness; Ps 23 the shepherd; Ps 51
  repentance; Ps 119 love of the law; Prov 1:7 the fear of the LORD; Eccl 1:2 "vanity";
  Eccl 12:13 the conclusion; Song 8:6–7 love strong as death.
- **People:** Job, David (psalmist), Solomon (wisdom), Asaph, the sons of Korah.
- **Themes:** honest prayer (lament and praise); suffering and trust; the fear of the
  LORD as the start of wisdom; the limits of life "under the sun"; covenant love.
- **Words:** *tehillim* (psalms/praises), *hevel* (vapor/"vanity"), *yirah* (fear/awe),
  *chokmah* (wisdom), *hesed*.
- **Christ:** Ps 22 → the cross (Matt 27:46); Ps 110 → Christ's reign (Heb 1); the
  shepherd → the Good Shepherd (John 10); Christ as the wisdom of God (1 Cor 1:24,30).
- **Memory:** Ps 23:1; Prov 1:7; Prov 3:5–6; Eccl 12:13.

### Act 10 — The Prophets · `the-prophets` · Isaiah–Malachi · red `#A32D2D` · eye
- **Featured:** Isaiah 53:5 (WEB) — "he was pierced for our transgressions."
- **Teaser:** Watchmen call a wandering people home — and foretell the One who comes.
- **Timeline:** Isa 6 Isaiah's call; Isa 9:6 the child is born; **Isa 53** the suffering
  servant; Jer 1 Jeremiah called; **Jer 31:31–34** the new covenant; Ezek 37 the valley
  of dry bones; Dan 3 the fiery furnace; Dan 6 the lions' den; Dan 7 the Son of Man;
  Hosea's relentless love; Joel 2:28 the Spirit poured out; Jonah 1–2 mercy to Nineveh;
  Mic 5:2 Bethlehem; Mal 4:2 the sun of righteousness rises.
- **People:** Isaiah, Jeremiah, Ezekiel, Daniel, Hosea, Jonah, the "minor" prophets.
- **Themes:** call to repentance and justice; judgment and hope; the new covenant; the
  Day of the LORD; the promised Messiah; God's heart for the nations.
- **Words:** *navi* (prophet), *teshuvah* (repentance/return), *mishpat/tzedakah*
  (justice/righteousness), the new *berith* (covenant), *ruach* (Spirit).
- **Christ:** Isa 53 → the crucifixion; Mic 5:2 → born in Bethlehem; Jer 31 → the new
  covenant in his blood (Luke 22:20); Dan 7 Son of Man → Jesus' favorite self-title;
  Joel 2 → Pentecost (Acts 2).
- **Memory:** Isa 9:6; Isa 53:5–6; Jer 29:11; Mic 6:8.

### Act 11 — Return & the Silence · `return-and-silence` · Ezra, Nehemiah, Esther (+400 yrs) · stone `#888780` · hourglass
- **Featured:** Esther 4:14 (WEB) — "for such a time as this."
- **Teaser:** A remnant returns, the walls rise, and then heaven goes quiet — waiting.
- **Timeline:** Ezra 1 Cyrus' decree, the exiles return; Ezra 3 the altar and temple
  foundation; Ezra 6 the second temple completed; Neh 1–2 Nehemiah's burden; Neh 6:15
  the walls finished in 52 days; Neh 8 Ezra reads the law, revival; Esth 3–4 the threat
  and Esther's courage; Esth 7 deliverance (Purim); then ~400 years of prophetic silence
  between Malachi and Matthew (rise of synagogues, the Septuagint, Roman rule — set the
  stage for the gospel).
- **People:** Zerubbabel, Ezra, Nehemiah, Esther, Mordecai.
- **Themes:** restoration and rebuilding; the word of God recentered; hidden providence
  (God's name never appears in Esther, yet he is everywhere); faithful waiting; God
  preparing the world for the Messiah.
- **Words:** *shuv* (return), *Purim* (lots), *hashgachah* (providence — concept),
  "the silence" (intertestamental period — concept).
- **Christ:** the rebuilt temple anticipates the true temple; the preserved people
  anticipate the Messiah's coming; "the fullness of time" (Gal 4:4) when he finally
  comes.
- **Memory:** Esth 4:14; Neh 8:10 ("the joy of Yahweh is your strength").

### Act 12 — The Messiah ⭐ · `the-messiah` · Matthew, Mark, Luke, John · gold `#C2410C` · star · **isClimax**
- **Featured:** John 1:14 (WEB) — "The Word became flesh, and lived among us."
- **Teaser:** Every promise meets its yes — God himself, with us.
- **Banner:** "The turning point of all history."
- **Timeline:** Luke 1–2 / Matt 1–2 the incarnation and birth; Matt 3 baptism; Matt 4
  the temptation; Matt 5–7 the Sermon on the Mount; the miracles (e.g. John 6 feeding,
  Mark 4 stilling the storm); the parables (Luke 15); the I AM sayings (John 6,8,10,11,
  14,15); Matt 16 Peter's confession; Matt 17 the transfiguration; John 11 raising
  Lazarus; Matt 21 the triumphal entry; Luke 22 the Last Supper; Matt 26 Gethsemane;
  John 18–19 the trial and crucifixion ("It is finished", John 19:30); Matt 28 / John
  20 the resurrection; Matt 28:18–20 the Great Commission; Acts 1:9 the ascension.
- **People:** Jesus, Mary, Joseph, John the Baptist, the twelve, Mary Magdalene, Pilate.
- **Themes:** incarnation (God with us); the kingdom of God; the upside-down way of
  Jesus; substitutionary death and bodily resurrection; the new covenant; commission to
  the nations. Note for the reader: the four Gospels offer four complementary
  portraits — Matthew (the King/fulfillment), Mark (the Servant), Luke (the Savior of
  all), John (the divine Son).
- **Words:** *Yeshua* (Jesus, "the LORD saves"), *Christos/Messiah* (anointed),
  *euangelion* (gospel/good news), *basileia* (kingdom), *Logos* (Word), *agape* (love).
- **Christ:** this *is* Christ — the center where the whole scarlet thread converges:
  the seed of Gen 3:15, the offspring of Abraham, the Passover lamb, the prophet greater
  than Moses, the son of David, the suffering servant of Isaiah 53, the Son of Man of
  Daniel 7 — all in one person.
- **Memory:** John 1:14; John 3:16; John 14:6; Luke 19:10; John 19:30.

### Act 13 — The Church Is Born · `the-church` · Acts · amber `#BA7517` · flame
- **Featured:** Acts 1:8 (WEB) — "you will be my witnesses… to the uttermost parts of
  the earth."
- **Teaser:** The Spirit falls, and the good news catches fire across the world.
- **Timeline:** Acts 1 the ascension and waiting; **Acts 2** Pentecost, the Spirit
  poured out, 3,000 believe; Acts 2:42–47 the early church; Acts 4 boldness and
  opposition; Acts 6–7 Stephen, the first martyr; Acts 8 the gospel spreads
  (Samaria, the Ethiopian); **Acts 9** Saul's conversion; Acts 10 Cornelius — the
  gospel to the Gentiles; Acts 13–14 Paul's first journey; Acts 15 the Jerusalem
  council; Acts 16–20 further journeys; Acts 27–28 to Rome.
- **People:** Peter, John, Stephen, Philip, Saul/Paul, Barnabas, James, Cornelius,
  Lydia, Priscilla & Aquila.
- **Themes:** the Holy Spirit empowering the church; the gospel breaking every barrier
  (ethnic, social, geographic); community, generosity, and worship; suffering and
  mission; the unstoppable spread of the word.
- **Words:** *ekklesia* (church/assembly), *pneuma* (Spirit), *koinonia* (fellowship),
  *martys* (witness/martyr), *baptizo* (baptize).
- **Christ:** the risen Christ, now ascended, pours out his Spirit and builds his church
  (his body); the mission is *his* mission continuing through his people.
- **Memory:** Acts 1:8; Acts 2:38; Acts 4:12.

### Act 14 — The Letters · `the-letters` · Romans–Jude · blue `#185FA5` · mail
- **Featured:** Romans 8:37–39 (WEB) — "more than conquerors… nothing can separate us
  from the love of God."
- **Teaser:** Letters that teach the young church how to believe, love, and endure.
- **Timeline (themes, not events — note this):** Rom 3–5 justified by faith;
  Rom 8 life in the Spirit, no separation from God's love; Rom 12 living sacrifice;
  1 Cor 13 the way of love; 1 Cor 15 the resurrection; Gal 5:22–23 the fruit of the
  Spirit; Eph 2:8–10 saved by grace through faith; Phil 2 the humility of Christ;
  Phil 4 peace and contentment; Col 1 the supremacy of Christ; Heb 11 the hall of
  faith; Heb 12 running the race; Jas 2 faith that works; 1 Pet 1 living hope;
  1 John 4 God is love.
- **People:** Paul, Peter, James, John, Jude, Timothy, Titus (and the churches
  addressed).
- **Themes:** grace and faith; justification and new life in the Spirit; the church as
  Christ's body; love as the mark of believers; perseverance and hope; sound doctrine
  and holy living.
- **Words:** *charis* (grace), *pistis* (faith), *dikaiosyne* (righteousness/
  justification), *agape* (love), *sarx/pneuma* (flesh/Spirit), *soter* (savior).
- **Christ:** the letters unfold the *meaning* of Christ's death and resurrection — what
  the cross accomplished and how to live in light of it; Christ supreme over all
  (Colossians), our great high priest (Hebrews), our righteousness and life.
- **Memory:** Rom 5:8; Rom 8:38–39; Eph 2:8–9; Phil 4:6–7; Heb 11:1.

### Act 15 — Revelation ⭐ · `revelation` · Revelation · gold `#BA7517` · sun · **isClimax**
- **Featured:** Revelation 21:5 (WEB) — "Behold, I am making all things new."
- **Teaser:** The story comes home — every tear wiped away, all things new.
- **Banner:** "Where the story comes home."
- **Timeline:** Rev 1 John on Patmos, the vision of the risen Christ; Rev 2–3 the seven
  churches; Rev 4–5 the throne room, the Lamb who was slain is worthy; Rev 6–16 the
  seals, trumpets, and bowls (note: written in apocalyptic symbol); Rev 17–18 the fall
  of Babylon; Rev 19 the marriage supper of the Lamb and his return; Rev 20 the defeat
  of evil and the final judgment; Rev 21 the new heaven and new earth, the New
  Jerusalem; Rev 21:4 no more death or tears; Rev 22:1–5 the river and tree of life,
  paradise restored; Rev 22:20 "Surely I come quickly. Amen."
- **People:** the risen Christ (the Lamb), John, the saints; symbolic figures (handle
  as symbols).
- **Themes:** the worship of heaven; Christ's victory over evil; judgment and justice;
  the renewal of all things; God dwelling with his people forever; hope for the
  suffering church. Note for the reader: Revelation is apocalyptic literature rich in
  symbol; faithful Christians read its structure in several ways (futurist, historicist,
  preterist, idealist) — present these fairly and keep the focus on its central, shared
  message: **Christ wins, and God makes all things new.**
- **Words:** *apokalypsis* (unveiling/revelation), *arnion* (the Lamb), *thronos*
  (throne), the New *Yerushalayim* (Jerusalem), *Maranatha* ("Come, Lord!").
- **Christ:** the slain-yet-standing Lamb is the center of heaven's worship; the
  returning King; the Alpha and Omega (Rev 22:13) — the one who was in the beginning
  (Act 1) brings the story to its glorious end.
- **Memory:** Rev 21:3–4; Rev 21:5; Rev 22:20.
- **Full-circle (Act 15 ↔ Act 1):** the same four mirrors as Act 1 — explicitly close
  the loop here so the app *ends where it began, only restored and greater.*

---

## 8. Build phases (work through these in order; keep going)

**Phase 1 — Foundation & the look.**
- Scaffold Next.js (App Router) + TS + Tailwind + framer-motion + lucide-react +
  next/font. Configure for Vercel.
- Build the design system: gradient/glass tokens, typography, the per-act accent map,
  reusable `GlassCard`, `AccentNode`, `PullQuote`, `SectionPanel`, bottom tab bar.
- Implement the content types (§6.2) and validation.
- Write **Act 1 (Creation) content in full** (§6.5) and at least the seed objects for
  all 15 acts so the journey renders end-to-end.
- Build the **Home journey** screen (hero, progress card, the threaded 15 acts,
  full-circle finale) and the **Act detail** screen with all sections, rendering Act 1
  completely. Shared-element transition home → act.
- localStorage progress + "mark complete." Deploy to Vercel.

**Phase 2 — Full content.**
- Generate the complete, Act-1-depth content for **Acts 2–15** (§7) into their files.
- Build the People and Glossary indices from the content; wire cross-links.

**Phase 3 — Study tools.**
- Search (fuse.js) across everything. Bookmarks + personal notes. Reading plan /
  progress dashboard ("Master the Bible in 30 days" path + free explore). Memory-verse
  flashcard practice.

**Phase 4 — Polish.**
- Motion polish (parallax, scroll-reveal, reduced-motion). Per-act mood backgrounds.
- Accessibility pass (contrast on glass, focus states, semantics, alt text). Performance
  (next/image, lazy-load, route-level code-splitting, Lighthouse ≥ 90 mobile). PWA
  niceties (installable, offline-friendly since content is static) if time allows.
- Final Vercel deploy; confirm a clean production build.

---

## 9. Acceptance criteria

- Loads beautifully on a 390px phone first; scales up cleanly.
- All 15 acts present; each meets the §6.3 depth target; Act 1 matches §6.5 exactly.
- Tapping any act opens a rich, calm, fully-populated deep dive — **no AI calls,
  no network fetch for content** (everything ships static).
- The aesthetic reads as calm, glassy, luminous, mindful — matching the reference mood.
- Progress, bookmarks, and notes persist locally across reloads.
- Only public-domain scripture text appears anywhere.
- `npm run build` passes; the app deploys on Vercel with no required external services.

---

## 10. Notes & guardrails

- Keep the tone reverent, warm, and ecumenical; present genuinely disputed matters
  (creation timeframe, eschatology, etc.) fairly rather than asserting one camp.
- Don't invent scripture references — every ref must be real and correct. Quote text
  only from WEB or KJV.
- Don't ship copyrighted/branded imagery; prefer gradients + SVG, optional Unsplash
  with attribution and configured `remotePatterns`.
- Guard all `localStorage`/`window` access for SSR.
- Structure `/content` so it could later move to Vercel Postgres + Prisma or a CMS
  **without** changing the UI — but **do not** add a DB requirement for v1.

Build it well. Make every screen feel like a quiet, glorious place to dwell.
