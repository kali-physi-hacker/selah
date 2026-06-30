'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  MODE_KEY,
  FONT_SIZE_KEY,
  FONT_KEY,
  DEFAULT_MODE,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT,
  isMode,
  isFontSize,
  isFont,
  applyAppearance,
  setPref,
  type Mode,
  type FontSize,
  type FontStyle,
} from './appearance';

export function useAppearance() {
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE);
  const [fontSize, setFontSizeState] = useState<FontSize>(DEFAULT_FONT_SIZE);
  const [font, setFontState] = useState<FontStyle>(DEFAULT_FONT);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const m = localStorage.getItem(MODE_KEY);
    if (isMode(m)) setModeState(m);
    const fs = localStorage.getItem(FONT_SIZE_KEY);
    if (isFontSize(fs)) setFontSizeState(fs);
    const f = localStorage.getItem(FONT_KEY);
    if (isFont(f)) setFontState(f);
    setHydrated(true);
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    setPref(MODE_KEY, m);
    applyAppearance();
  }, []);
  const setFontSize = useCallback((fs: FontSize) => {
    setFontSizeState(fs);
    setPref(FONT_SIZE_KEY, fs);
    applyAppearance();
  }, []);
  const setFont = useCallback((f: FontStyle) => {
    setFontState(f);
    setPref(FONT_KEY, f);
    applyAppearance();
  }, []);

  return { mode, fontSize, font, hydrated, setMode, setFontSize, setFont };
}
