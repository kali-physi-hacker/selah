'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

const newId = () => `n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;

/** A free-form notebook — titled notes, newest first. Synced across devices. */
export function useNotebook() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setNotes(readJSON<Note[]>(STORAGE_KEYS.notebook, []));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.notebook || key === undefined)
        setNotes(readJSON<Note[]>(STORAGE_KEYS.notebook, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  /** Create (no id) or update (existing id). Returns the note's id. */
  const upsert = useCallback((input: { id?: string; title: string; body: string }): string => {
    const now = new Date().toISOString();
    const id = input.id ?? newId();
    setNotes((prev) => {
      const exists = prev.some((n) => n.id === id);
      const next = exists
        ? prev.map((n) => (n.id === id ? { ...n, title: input.title, body: input.body, updatedAt: now } : n))
        : [{ id, title: input.title, body: input.body, createdAt: now, updatedAt: now }, ...prev];
      writeJSON(STORAGE_KEYS.notebook, next);
      return next;
    });
    return id;
  }, []);

  const remove = useCallback((id: string) => {
    setNotes((prev) => {
      const next = prev.filter((n) => n.id !== id);
      writeJSON(STORAGE_KEYS.notebook, next);
      return next;
    });
  }, []);

  return { notes, hydrated, upsert, remove };
}
