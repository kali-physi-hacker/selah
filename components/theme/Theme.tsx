import { THEME_KEY, DEFAULT_THEME } from '@/lib/theme';

/**
 * Sets <html data-theme> from localStorage before first paint, so there's no
 * flash of the default theme. Rendered in <head>.
 */
export function ThemeScript() {
  const js = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');document.documentElement.setAttribute('data-theme',t||'${DEFAULT_THEME}');}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}

/**
 * A fixed, per-theme veil that dims (Midnight) or warms (Candle) the bright
 * background layers for low-light comfort. Sits above the scenery/field but
 * below content, so text stays crisp. Styled by data-theme in globals.css.
 */
export function ThemeVeil() {
  return <div aria-hidden className="theme-veil pointer-events-none fixed inset-0 -z-[5]" />;
}
