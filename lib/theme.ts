/**
 * Themes for different lights and moods. Applied as `data-theme` on <html>;
 * each one's look lives in globals.css (background + a dimming/warming veil).
 * Persisted locally (a per-device preference, not synced).
 */
export const THEME_KEY = 'selah:theme:v1';

export const THEMES = ['ocean', 'midnight', 'candle'] as const;
export type ThemeId = (typeof THEMES)[number];
export const DEFAULT_THEME: ThemeId = 'ocean';

export const THEME_META: Record<ThemeId, { label: string; description: string; swatch: string }> = {
  ocean: {
    label: 'Ocean',
    description: 'The luminous default — deep teal and divine light.',
    swatch: 'linear-gradient(135deg, #0e5c57, #67e8f9)',
  },
  midnight: {
    label: 'Midnight',
    description: 'Dimmed and deepened for dark, low-light spaces.',
    swatch: 'linear-gradient(135deg, #02211f, #0a3d3a)',
  },
  candle: {
    label: 'Candle',
    description: 'Warm, low-blue glow for night and rest.',
    swatch: 'linear-gradient(135deg, #1c1206, #b07a2e)',
  },
};

export function isThemeId(v: string | null | undefined): v is ThemeId {
  return !!v && (THEMES as readonly string[]).includes(v);
}
