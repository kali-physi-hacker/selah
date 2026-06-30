'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export interface Prayer {
  id: string;
  text: string;
  createdAt: string;
  answered: boolean;
  answeredAt?: string;
}

/** A simple prayer journal — requests you can mark answered. Synced when signed in. */
export function usePrayer() {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPrayers(readJSON<Prayer[]>(STORAGE_KEYS.prayer, []));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.prayer || key === undefined)
        setPrayers(readJSON<Prayer[]>(STORAGE_KEYS.prayer, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const add = useCallback((text: string) => {
    const t = text.trim();
    if (!t) return;
    const prayer: Prayer = {
      id: `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
      text: t,
      createdAt: new Date().toISOString(),
      answered: false,
    };
    setPrayers((prev) => {
      const next = [prayer, ...prev];
      writeJSON(STORAGE_KEYS.prayer, next);
      return next;
    });
  }, []);

  const toggleAnswered = useCallback((id: string) => {
    setPrayers((prev) => {
      const next = prev.map((p) =>
        p.id === id
          ? { ...p, answered: !p.answered, answeredAt: !p.answered ? new Date().toISOString() : undefined }
          : p,
      );
      writeJSON(STORAGE_KEYS.prayer, next);
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setPrayers((prev) => {
      const next = prev.filter((p) => p.id !== id);
      writeJSON(STORAGE_KEYS.prayer, next);
      return next;
    });
  }, []);

  return { prayers, hydrated, add, toggleAnswered, remove };
}
