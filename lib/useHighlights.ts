'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export type HighlightColor = 'amber' | 'green' | 'sky' | 'rose';
export const HIGHLIGHT_COLORS: HighlightColor[] = ['amber', 'green', 'sky', 'rose'];

export interface HighlightMark {
  id: string;
  block: string; // the data-hl-block id
  start: number;
  end: number;
  color: HighlightColor;
  text: string;
  ref?: string; // a human label (e.g. the act/verse) for the Saved view
  createdAt: string;
}

/** Saved text highlights (offset-anchored). Synced across devices. */
export function useHighlights() {
  const [marks, setMarks] = useState<HighlightMark[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMarks(readJSON<HighlightMark[]>(STORAGE_KEYS.highlights, []));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.highlights || key === undefined)
        setMarks(readJSON<HighlightMark[]>(STORAGE_KEYS.highlights, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const add = useCallback((m: Omit<HighlightMark, 'id' | 'createdAt'>) => {
    setMarks((prev) => {
      const mark: HighlightMark = {
        ...m,
        id: `h_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
        createdAt: new Date().toISOString(),
      };
      const next = [...prev, mark];
      writeJSON(STORAGE_KEYS.highlights, next);
      return next;
    });
  }, []);

  const remove = useCallback((ids: string[]) => {
    if (ids.length === 0) return;
    setMarks((prev) => {
      const next = prev.filter((m) => !ids.includes(m.id));
      writeJSON(STORAGE_KEYS.highlights, next);
      return next;
    });
  }, []);

  return { marks, hydrated, add, remove };
}
