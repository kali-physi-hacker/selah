# Selah — An Interactive Bible Journey

> _“Selah” is a word scattered through the Psalms — most likely a contemplative pause._

A calm, cinematic, scroll-based journey through the **whole Bible**, from Creation to
Revelation, organized as **15 acts** along the classic four-movement arc:
**Creation → Fall → Redemption → Restoration.**

Built to work as a real guide to _master the entire Bible_ — every act carries the depth
of a study Bible with the quiet of a place made for prayer. A golden thread of redemption
ties every act back to Christ at the center (Act 12).

## Highlights

- **No runtime AI, no backend.** Every word of study content is pre-written, strongly-typed
  static data in `/content` (the "database"). Nothing is fetched or generated at runtime.
- **Mobile-first, glassmorphic.** Ocean + divine-light palette, frosted glass, soft motion.
  Designed for a ~390px phone first, scaling gracefully to tablet/desktop.
- **Deep content.** All 15 acts include overview, context, an interactive timeline,
  4–8 deep-dive teaching sections, key people, themes, Hebrew/Greek words, the "scarlet
  thread" to Christ, memory verses, a reflection, and charitably-handled questions.
- **Study tools.** Fuzzy search across everything, bookmarks + personal notes, a
  "Master the Bible in 30 days" reading plan, and memory-verse flashcard practice.
- **Private by default.** Progress, bookmarks, notes, and streaks live only in `localStorage`.
- **Public-domain scripture only.** All quoted text is the **World English Bible (WEB)**.

## Living visuals

The calm is layered, and every motion layer is **lazy-loaded, client-only, and disabled
under `prefers-reduced-motion`** (which falls back to a still, equally-beautiful scene):

- **Photographic scenery** — a curated, license-clean ocean/cosmos image per act (shipped in
  `/public/images`), dimmed by a luminous teal overlay so it glows behind the frosted glass.
- **three.js `DivineField`** — a drifting field of soft light "motes", tinted to each act's
  accent, with a gentle pointer parallax (`components/three/DivineField.tsx`).
- **three.js `BreathOrb`** — a breathing orb in each act's Reflect section that paces your
  breath with a synced caption.
- **tsparticles** — interactive motes on the hero that brighten and gather toward touch.
- **Orbiting ring** — meditative words curving around a divine-light center (the reference motif).
- **Lenis** — buttery smooth scrolling across the whole app.
- **Ambient soundscape** — an opt-in "soaking worship" background score. Off by default,
  gesture-started, persisted, fades in/out, pauses when the tab is hidden, and continues across
  navigation. The player (`lib/ambientAudio.ts`) supports two sources, chosen by
  `AMBIENT_TRACK_SRC`: a **licensed audio file** in `public/audio/` (currently configured — loaded
  lazily on first enable, range-streamed), or a **generative** Web-Audio pad fallback (set the
  const to `null`) that synthesizes evolving major chords live, so nothing copyrighted is required.
  Credit the track's artist on the About page. See `public/audio/README.md`.

All of this is deferred out of First Load JS (three.js and tsparticles stream in after mount),
so routes stay ≤151 kB First Load and the app remains fast on a phone.

## Tech stack

- **Next.js 14 (App Router) + TypeScript** (strict mode)
- **Tailwind CSS** with a custom glass/ocean design system (`tailwind.config.ts` + `globals.css`)
- **framer-motion** for calm, reduced-motion-aware animation
- **three.js** (ambient light field + breathing orb) · **tsparticles** (hero motes) · **lenis** (smooth scroll)
- **lucide-react** icons · **next/font** (Fraunces + Inter) · **fuse.js** search · **zod** content validation
- **next/image** with photographic scenery in `/public/images` (Unsplash License)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Script                     | What it does                                                        |
| -------------------------- | ------------------------------------------------------------------- |
| `npm run dev`              | Start the dev server                                                |
| `npm run build`            | Production build (also validates content via zod at module load)    |
| `npm run start`            | Serve the production build                                          |
| `npm run lint`             | ESLint                                                              |
| `npm run typecheck`        | `tsc --noEmit`                                                      |
| `npm run validate-content` | Validate the content graph + report act/people/glossary counts      |
| `npx tsx scripts/verify-getbible.ts` | Dev-only: cross-check every featured/memory verse against the WEB |

## Deploy to Vercel

Zero config. Either:

- **Import the repo** at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js, or
- **CLI:** `npm i -g vercel && vercel`

No environment variables or external services are required for v1.

## Project structure

```
app/                 Routes (App Router)
  page.tsx           Home — the vertical journey
  act/[slug]/        Act detail — the deep-dive study view
  read/ search/ bookmarks/ glossary/ people/ about/
components/          Design system + per-screen UI
content/             The "database": types, 15 acts, derived people & glossary, search index
  acts/01-creation.ts … 15-revelation.ts
lib/                 SSR-safe storage, hooks (progress, bookmarks, reading plan), helpers
```

## Content as a (future) database

The content layer is intentionally DB-shaped: each act is a self-contained, validated
document. People and glossary indices are _derived_ from the acts, so they never drift.
This could later be moved to Vercel Postgres + Prisma or a headless CMS **without changing
the UI** — but ships fully static for v1.

## A note on tone

Selah aims to serve Catholic, Orthodox, and Protestant readers alike. Where Christians have
genuinely differed — the days of creation, eschatology, and more — it presents the major
historic views charitably and lets the reader weigh them.

---

_Scripture quoted from the World English Bible (public domain). Made as a quiet place to dwell._
