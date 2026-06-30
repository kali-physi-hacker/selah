'use client';

import { useCallback, useEffect, useState } from 'react';
import { THEME_KEY, DEFAULT_THEME, isThemeId, type ThemeId } from './theme';

/** Read/set the active theme (and apply it to <html data-theme>). */
export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const next = isThemeId(saved) ? saved : DEFAULT_THEME;
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    setHydrated(true);
  }, []);

  const setTheme = useCallback((next: ThemeId) => {
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return { theme, setTheme, hydrated };
}
