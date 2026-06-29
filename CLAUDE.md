# CLAUDE.md — working notes for this repo

**Selah** is a static, mobile-first Next.js (App Router) app: a calm, glassmorphic journey
through the whole Bible in 15 acts. No runtime AI, no backend — all study content is
pre-written static TypeScript in `/content`, which acts as the "database".

## Commands

```bash
npm run dev               # dev server
npm run build             # production build (validates content via zod at import)
npm run start             # serve the production build  (needs a prior `npm run build`)
npm run lint              # eslint
npm run typecheck         # tsc --noEmit
npm run validate-content  # counts + zod validation of the content graph
npx tsx scripts/verify-getbible.ts   # dev-only: check every featured/memory verse vs the WEB
```

> ⚠️ `next dev` and `next build` share the `.next` directory. Running `next dev` clobbers a
> production build, so `next start` will then fail with "Could not find a production build".
> Re-run `npm run build` before `npm run start`.

## Architecture

- **`/content` is the source of truth.** `content/types.ts` defines the shape; each act is a
  self-contained `ActContent` document in `content/acts/NN-slug.ts`.
- **People and Glossary are derived**, not hand-maintained: `content/index.ts` aggregates each
  act's `people[]` and `words[]` (deduped + merged), so they never drift. `content/people.ts`
  and `content/glossary.ts` just re-export the derived data.
- **Validation runs at import** (`content/validation.ts`, zod) — a malformed/thin act fails the
  build loudly.
- **Search**: `content/search-index.ts` builds a flat, body-truncated index; `SearchClient`
  lazy-loads it + fuse.js so `/search` stays light.
- **State**: `localStorage` only, via SSR-safe wrappers in `lib/storage.ts` and the hooks
  `lib/useProgress.ts`, `lib/useBookmarks.ts`, `lib/useReadingPlan.ts`. Always guard `window`.

### Adding or editing an act

1. Edit/create `content/acts/NN-slug.ts` exporting a typed `ActContent`.
2. Register it in `content/acts/index.ts` (import + add to the `acts` array).
3. `npm run validate-content` then `npm run build`.

## Conventions / guardrails

- **Scripture: current World English Bible (WEB) only**, public domain. The content uses the
  *modern* WEB edition (e.g. "today" not "this day", "offspring" not "seed"). bible-api.com and
  eBible.org serve this edition; getbible.net serves an older one — prefer the former when
  verifying. KJV is allowed if `translation: 'KJV'` is set. Never quote NIV/ESV/NLT/etc.
- **Tone is ecumenical**: on disputed matters (creation days, eschatology, etc.) present the
  major historic Christian views charitably; don't assert one.
- **Design system**: glass/ocean tokens live in `tailwind.config.ts` + `app/globals.css`
  (`.glass`, `.glass-strong`, `.thread`, `.halo`, accent helpers in `lib/color.ts`). Per-act
  accent colors come from each act's `accent` field. Honor `prefers-reduced-motion`.
- **Server vs client**: keep pages as Server Components; isolate interactivity (motion, hooks,
  localStorage) in `'use client'` leaf components. Pass `ActMeta` (not full `ActContent`) into
  client components to keep bundles lean.
- **Visual layer** (`components/three/*`, `components/particles/*`, `SceneryBackground`,
  `PageBackdrop`, `OrbitRing`, `SmoothScroll`): every animated layer MUST (1) be skipped under
  `useReducedMotion()` with a static fallback, (2) lazy-load its heavy lib via `await import()`
  inside an effect (three.js) or `next/dynamic({ssr:false})` (tsparticles) so it stays out of
  First Load JS, and (3) pause on `document.hidden`. `PageBackdrop` composes scenery + field;
  `immersive={false}` gives utility pages the light CSS `AmbientLight` instead of WebGL.
- **Scenery/images**: per-act mood map in `lib/imagery.ts`; files live in `/public/images`
  (Unsplash License — credited on the About page). Re-fetch/replace by editing that map.
