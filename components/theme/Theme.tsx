import { THEME_KEY, DEFAULT_THEME } from '@/lib/theme';
import {
  MODE_KEY,
  DEFAULT_MODE,
  FONT_SIZE_KEY,
  DEFAULT_FONT_SIZE,
  FONT_KEY,
  DEFAULT_FONT,
} from '@/lib/appearance';

/**
 * Applies all appearance prefs (theme, light/dark/system mode, font size, font
 * style) to <html> from localStorage before first paint — no flash. In <head>.
 */
export function ThemeScript() {
  const js = `(function(){try{var d=document.documentElement;
d.setAttribute('data-theme',localStorage.getItem('${THEME_KEY}')||'${DEFAULT_THEME}');
var m=localStorage.getItem('${MODE_KEY}')||'${DEFAULT_MODE}';
var r=m==='system'?(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):m;
d.setAttribute('data-mode',m);
d.setAttribute('data-resolved-mode',r);
d.setAttribute('data-font-size',localStorage.getItem('${FONT_SIZE_KEY}')||'${DEFAULT_FONT_SIZE}');
d.setAttribute('data-font',localStorage.getItem('${FONT_KEY}')||'${DEFAULT_FONT}');
}catch(e){document.documentElement.setAttribute('data-resolved-mode','dark');}})();`;
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
