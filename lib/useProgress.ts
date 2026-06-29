'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, removeKey, STORAGE_KEYS } from './storage';
import { booksExplored, TOTAL_BOOKS } from './books';

export interface ProgressState {
  completed: string[]; // act slugs marked complete
  visited: string[]; // act slugs opened
  lastActSlug?: string; // continue where you left off
  startDate: string; // ISO datetime of first use
  streak: number; // consecutive days active
  lastActiveDate: string; // YYYY-MM-DD
}

const todayKey = (): string => new Date().toISOString().slice(0, 10);

function emptyState(): ProgressState {
  return {
    completed: [],
    visited: [],
    startDate: new Date().toISOString(),
    streak: 0,
    lastActiveDate: '',
  };
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00Z').getTime();
  const db = new Date(b + 'T00:00:00Z').getTime();
  return Math.round((db - da) / 86_400_000);
}

/** Roll the streak forward for "today" (idempotent within a day). */
function withTouchedStreak(state: ProgressState): ProgressState {
  const today = todayKey();
  if (state.lastActiveDate === today) return state;
  let streak = state.streak;
  if (!state.lastActiveDate) streak = 1;
  else {
    const gap = daysBetween(state.lastActiveDate, today);
    streak = gap === 1 ? state.streak + 1 : 1;
  }
  return { ...state, streak: Math.max(streak, 1), lastActiveDate: today };
}

/**
 * The reading-progress store, persisted to localStorage and synced across
 * components in the same tab via the custom 'selah:storage' event.
 */
export function useProgress() {
  const [state, setState] = useState<ProgressState>(emptyState);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount + touch the daily streak.
  useEffect(() => {
    const loaded = readJSON<ProgressState>(STORAGE_KEYS.progress, emptyState());
    const touched = withTouchedStreak(loaded);
    setState(touched);
    setHydrated(true);
    if (touched.lastActiveDate !== loaded.lastActiveDate) {
      writeJSON(STORAGE_KEYS.progress, touched);
    }
  }, []);

  // Sync when another component writes progress.
  useEffect(() => {
    const onStorage = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.key && detail.key !== STORAGE_KEYS.progress) return;
      setState(readJSON<ProgressState>(STORAGE_KEYS.progress, emptyState()));
    };
    window.addEventListener('selah:storage', onStorage);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('selah:storage', onStorage);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setState(next);
    writeJSON(STORAGE_KEYS.progress, next);
  }, []);

  const markVisited = useCallback(
    (slug: string) => {
      setState((prev) => {
        const next = withTouchedStreak({
          ...prev,
          visited: prev.visited.includes(slug) ? prev.visited : [...prev.visited, slug],
          lastActSlug: slug,
        });
        writeJSON(STORAGE_KEYS.progress, next);
        return next;
      });
    },
    [],
  );

  const setComplete = useCallback(
    (slug: string, complete: boolean) => {
      setState((prev) => {
        const completed = complete
          ? Array.from(new Set([...prev.completed, slug]))
          : prev.completed.filter((s) => s !== slug);
        const next = withTouchedStreak({ ...prev, completed, lastActSlug: slug });
        writeJSON(STORAGE_KEYS.progress, next);
        return next;
      });
    },
    [],
  );

  const toggleComplete = useCallback(
    (slug: string) => {
      setState((prev) => {
        const isDone = prev.completed.includes(slug);
        const completed = isDone
          ? prev.completed.filter((s) => s !== slug)
          : Array.from(new Set([...prev.completed, slug]));
        const next = withTouchedStreak({ ...prev, completed, lastActSlug: slug });
        writeJSON(STORAGE_KEYS.progress, next);
        return next;
      });
    },
    [],
  );

  const reset = useCallback(() => {
    removeKey(STORAGE_KEYS.progress);
    persist(emptyState());
  }, [persist]);

  const isComplete = useCallback((slug: string) => state.completed.includes(slug), [state]);
  const isVisited = useCallback((slug: string) => state.visited.includes(slug), [state]);

  const exploredNumbers = (numbersFor: (slug: string) => number | undefined) =>
    state.completed.map(numbersFor).filter((n): n is number => typeof n === 'number');

  return {
    state,
    hydrated,
    markVisited,
    setComplete,
    toggleComplete,
    reset,
    isComplete,
    isVisited,
    completedCount: state.completed.length,
    streak: state.streak,
    lastActSlug: state.lastActSlug,
    // Helper to compute books explored given a slug→number resolver.
    booksExploredFor: (numbersFor: (slug: string) => number | undefined) =>
      booksExplored(exploredNumbers(numbersFor)),
    totalBooks: TOTAL_BOOKS,
  };
}
