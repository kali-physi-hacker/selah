/**
 * Appearance preferences (per-device, not synced): light/dark/system mode,
 * font size, and font style. Applied as data-* attributes on <html>; the CSS
 * for each lives in globals.css. Stored as plain strings (like the theme) so
 * the no-flash inline script can read them without JSON.
 */
export const MODE_KEY = 'selah:mode:v1';
export const FONT_SIZE_KEY = 'selah:font-size:v1';
export const FONT_KEY = 'selah:font:v1';

export const MODES = ['system', 'light', 'dark'] as const;
export type Mode = (typeof MODES)[number];
export const DEFAULT_MODE: Mode = 'dark';

export const FONT_SIZES = ['sm', 'base', 'lg', 'xl'] as const;
export type FontSize = (typeof FONT_SIZES)[number];
export const DEFAULT_FONT_SIZE: FontSize = 'base';

export const FONTS = ['sans', 'serif', 'system'] as const;
export type FontStyle = (typeof FONTS)[number];
export const DEFAULT_FONT: FontStyle = 'sans';

export const MODE_META: Record<Mode, { label: string; description: string; icon: string }> = {
  system: { label: 'System', description: 'Follow your device’s light/dark setting.', icon: 'settings' },
  light: { label: 'Light', description: 'A calm, bright reading light.', icon: 'sun' },
  dark: { label: 'Dark', description: 'The luminous ocean — the default.', icon: 'moon' },
};
export const FONT_SIZE_META: Record<FontSize, string> = {
  sm: 'Small',
  base: 'Default',
  lg: 'Large',
  xl: 'X-Large',
};
export const FONT_META: Record<FontStyle, { label: string; css: string }> = {
  sans: { label: 'Modern', css: 'var(--font-sans), system-ui, sans-serif' },
  serif: { label: 'Classic', css: 'var(--font-display), Georgia, serif' },
  system: { label: 'System', css: 'system-ui, -apple-system, sans-serif' },
};

const inList = <T extends string>(list: readonly T[], v: unknown): v is T =>
  typeof v === 'string' && (list as readonly string[]).includes(v);
export const isMode = (v: unknown): v is Mode => inList(MODES, v);
export const isFontSize = (v: unknown): v is FontSize => inList(FONT_SIZES, v);
export const isFont = (v: unknown): v is FontStyle => inList(FONTS, v);

export function resolveMode(mode: Mode): 'light' | 'dark' {
  if (mode === 'system') {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches)
      return 'light';
    return 'dark';
  }
  return mode;
}

/** Apply the saved appearance to <html> (used by the provider + on change). */
export function applyAppearance(): void {
  if (typeof document === 'undefined') return;
  const el = document.documentElement;
  const mode = (localStorage.getItem(MODE_KEY) as Mode) || DEFAULT_MODE;
  const m = isMode(mode) ? mode : DEFAULT_MODE;
  const fs = localStorage.getItem(FONT_SIZE_KEY);
  const font = localStorage.getItem(FONT_KEY);
  el.setAttribute('data-mode', m);
  el.setAttribute('data-resolved-mode', resolveMode(m));
  el.setAttribute('data-font-size', isFontSize(fs) ? fs : DEFAULT_FONT_SIZE);
  el.setAttribute('data-font', isFont(font) ? font : DEFAULT_FONT);
}

/** Set one preference (plain string) + notify listeners. */
export function setPref(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent('selah:storage', { detail: { key } }));
  } catch {
    /* ignore */
  }
}
