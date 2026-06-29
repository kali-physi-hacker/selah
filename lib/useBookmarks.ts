'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export interface Bookmark {
  id: string; // `verse:Genesis 1:1` | `act:creation`
  kind: 'verse' | 'act';
  ref: string; // verse ref or act slug
  label: string;
  text?: string;
  translation?: string;
  actSlug?: string;
  actTitle?: string;
  accent?: string;
  createdAt: string;
}

export type NotesMap = Record<string, string>; // keyed by verse ref

export function verseBookmarkId(ref: string): string {
  return `verse:${ref}`;
}
export function actBookmarkId(slug: string): string {
  return `act:${slug}`;
}

/** Saved verses/acts + personal notes, persisted to localStorage. */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [notes, setNotes] = useState<NotesMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setBookmarks(readJSON<Bookmark[]>(STORAGE_KEYS.bookmarks, []));
    setNotes(readJSON<NotesMap>(STORAGE_KEYS.notes, {}));
    setHydrated(true);
  }, []);

  useEffect(() => {
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.bookmarks || key === undefined)
        setBookmarks(readJSON<Bookmark[]>(STORAGE_KEYS.bookmarks, []));
      if (key === STORAGE_KEYS.notes || key === undefined)
        setNotes(readJSON<NotesMap>(STORAGE_KEYS.notes, {}));
    };
    window.addEventListener('selah:storage', onStorage);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('selah:storage', onStorage);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const has = useCallback((id: string) => bookmarks.some((b) => b.id === id), [bookmarks]);

  const toggle = useCallback((bm: Bookmark) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === bm.id);
      const next = exists ? prev.filter((b) => b.id !== bm.id) : [{ ...bm }, ...prev];
      writeJSON(STORAGE_KEYS.bookmarks, next);
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setBookmarks((prev) => {
      const next = prev.filter((b) => b.id !== id);
      writeJSON(STORAGE_KEYS.bookmarks, next);
      return next;
    });
  }, []);

  const setNote = useCallback((ref: string, note: string) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (note.trim()) next[ref] = note;
      else delete next[ref];
      writeJSON(STORAGE_KEYS.notes, next);
      return next;
    });
  }, []);

  const getNote = useCallback((ref: string) => notes[ref] ?? '', [notes]);

  return { bookmarks, notes, hydrated, has, toggle, remove, setNote, getNote };
}
