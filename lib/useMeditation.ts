'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export interface MeditationStats {
  totalMinutes: number;
  sessions: number;
  lastDate: string; // YYYY-MM-DD
}

export function emptyMeditation(): MeditationStats {
  return { totalMinutes: 0, sessions: 0, lastDate: '' };
}

/** Tracks cumulative minutes spent in stillness / quiet-time sessions. */
export function useMeditation() {
  const [stats, setStats] = useState<MeditationStats>(emptyMeditation);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStats(readJSON<MeditationStats>(STORAGE_KEYS.meditation, emptyMeditation()));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.meditation || key === undefined)
        setStats(readJSON<MeditationStats>(STORAGE_KEYS.meditation, emptyMeditation()));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const addMinutes = useCallback((minutes: number) => {
    setStats((prev) => {
      const next: MeditationStats = {
        totalMinutes: Math.round((prev.totalMinutes + minutes) * 10) / 10,
        sessions: prev.sessions + 1,
        lastDate: new Date().toISOString().slice(0, 10),
      };
      writeJSON(STORAGE_KEYS.meditation, next);
      return next;
    });
  }, []);

  return { stats, hydrated, addMinutes };
}
