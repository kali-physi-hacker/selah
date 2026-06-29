# Audio

By default, Selah plays a **generative** ambient "soaking worship" soundscape synthesized
live in the browser (Web Audio API) — so nothing copyrighted is shipped. See
`lib/ambientAudio.ts`.

## Using your own (licensed) track instead

If you have a track you own or are licensed to distribute (e.g. a royalty-free worship pad,
or one you've cleared with the artist):

1. Drop the audio file here, e.g. `public/audio/ambient.mp3`.
2. In `lib/ambientAudio.ts`, set:

   ```ts
   export const AMBIENT_TRACK_SRC: string | null = '/audio/ambient.mp3';
   ```

The player will loop it (with fades) automatically instead of the generative engine.

> ⚠️ Do **not** rip audio from YouTube or other streaming services — it violates their terms
> and, for a publicly-deployed app, the creator's copyright. Use audio you own or that is
> explicitly licensed for redistribution (CC0 / royalty-free with redistribution rights).
