'use client';

import { useEffect } from 'react';
import { applyAppearance, resolveMode, MODE_KEY, DEFAULT_MODE, type Mode } from '@/lib/appearance';

/** Keeps appearance in sync app-wide: re-applies on pref changes, and follows
 *  the device's light/dark setting when mode is "system". */
export function AppearanceProvider() {
  useEffect(() => {
    applyAppearance();

    const onStorage = () => applyAppearance();
    window.addEventListener('selah:storage', onStorage);

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onScheme = () => {
      const mode = (localStorage.getItem(MODE_KEY) as Mode) || DEFAULT_MODE;
      if (mode === 'system') {
        document.documentElement.setAttribute('data-resolved-mode', resolveMode('system'));
      }
    };
    mq.addEventListener('change', onScheme);

    return () => {
      window.removeEventListener('selah:storage', onStorage);
      mq.removeEventListener('change', onScheme);
    };
  }, []);

  return null;
}
