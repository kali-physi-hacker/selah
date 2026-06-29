/**
 * Per-act scenery — license-clean photography (Unsplash License) that ships in
 * /public/images, layered behind the glass with a dark luminous overlay so the
 * ocean/cosmos glows through without competing with text.
 *
 * Mood per act follows §3 of the build spec (dawn → dimming → fire → storm →
 * radiant gold → new-dawn cosmos).
 */
export interface Scenery {
  src: string;
  /** object-position for the cover crop */
  position: string;
}

const img = (name: string): string => `/images/${name}.jpg`;

export const homeScenery: Scenery = { src: img('aqua-wave'), position: '50% 45%' };

export const actScenery: Record<number, Scenery> = {
  1: { src: img('ocean-dawn'), position: '50% 62%' }, // first light
  2: { src: img('deep-sea'), position: '50% 50%' }, // the dimming
  3: { src: img('forest-path'), position: '50% 50%' }, // the long journey
  4: { src: img('sunset-wave'), position: '50% 55%' }, // the sea parts, fire-gold
  5: { src: img('snow-peaks'), position: '50% 45%' }, // Sinai
  6: { src: img('still-lake'), position: '50% 55%' }, // crossing into rest
  7: { src: img('snow-peaks'), position: '50% 60%' }, // Zion, the kingdom
  8: { src: img('red-desert'), position: '50% 55%' }, // desolation, exile
  9: { src: img('starry-night'), position: '50% 40%' }, // the contemplative night
  10: { src: img('storm'), position: '50% 50%' }, // storm warnings
  11: { src: img('cosmos-glow'), position: '50% 50%' }, // the silent, waiting heavens
  12: { src: img('golden-sunrise'), position: '50% 50%' }, // the radiant dawn (brightest)
  13: { src: img('aqua-wave'), position: '50% 55%' }, // the gospel surging out
  14: { src: img('still-lake'), position: '50% 50%' }, // calm instruction
  15: { src: img('cosmos-figure'), position: '50% 45%' }, // new creation, glory
};

export const aboutScenery: Scenery = { src: img('still-lake'), position: '50% 55%' };

export function sceneryForAct(n: number): Scenery {
  return actScenery[n] ?? homeScenery;
}

/** Attribution — Unsplash License (no per-photo credit required, given gratefully). */
export const IMAGE_CREDIT =
  'Photography from Unsplash (unsplash.com), used freely under the Unsplash License.';
