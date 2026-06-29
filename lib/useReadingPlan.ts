'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, removeKey, STORAGE_KEYS } from './storage';

/** Tracks which days of the 30-day reading plan are checked off. */
export function useReadingPlan() {
  const [doneDays, setDoneDays] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDoneDays(readJSON<number[]>(STORAGE_KEYS.readingPlan, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.readingPlan || key === undefined)
        setDoneDays(readJSON<number[]>(STORAGE_KEYS.readingPlan, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const toggleDay = useCallback((day: number) => {
    setDoneDays((prev) => {
      const next = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort((a, b) => a - b);
      writeJSON(STORAGE_KEYS.readingPlan, next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    removeKey(STORAGE_KEYS.readingPlan);
    setDoneDays([]);
  }, []);

  const isDone = useCallback((day: number) => doneDays.includes(day), [doneDays]);

  return { doneDays, hydrated, toggleDay, reset, isDone, doneCount: doneDays.length };
}
