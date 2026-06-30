'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ActMeta } from './actMeta';
import { useProgress } from './useProgress';
import { useBookmarks } from './useBookmarks';
import { useMeditation } from './useMeditation';
import { usePrayer } from './usePrayer';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';
import {
  computeXp,
  levelForXp,
  tierForLevel,
  ACHIEVEMENTS,
  type AchInput,
} from './gamification';

/** Live XP, level, tier, streak, and (sticky) achievements from local state. */
export function useGamification(acts: ActMeta[]) {
  const progress = useProgress();
  const { bookmarks } = useBookmarks();
  const { stats } = useMeditation();
  const { prayers } = usePrayer();
  const [persisted, setPersisted] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPersisted(readJSON<string[]>(STORAGE_KEYS.achievements, []));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent).detail?.key;
      if (key === STORAGE_KEYS.achievements || key === undefined)
        setPersisted(readJSON<string[]>(STORAGE_KEYS.achievements, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const numberBySlug = useMemo(() => new Map(acts.map((a) => [a.slug, a.number])), [acts]);
  const booksExplored = progress.hydrated
    ? progress.booksExploredFor((s) => numberBySlug.get(s))
    : 0;

  const input: AchInput = {
    actsVisited: progress.state.visited.length,
    actsCompleted: progress.completedCount,
    meditationMinutes: stats.totalMinutes,
    meditationSessions: stats.sessions,
    prayers: prayers.length,
    answeredPrayers: prayers.filter((p) => p.answered).length,
    bookmarks: bookmarks.length,
    booksExplored,
    streak: progress.streak,
  };

  const xp = computeXp(input);
  const level = levelForXp(xp);
  const tier = tierForLevel(level.level);

  const passing = ACHIEVEMENTS.filter((a) => a.test(input)).map((a) => a.id);
  const mergedIds = useMemo(
    () => Array.from(new Set([...persisted, ...passing])),
    [persisted, passing.join(',')], // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Once unlocked, an achievement stays unlocked (persist new ones).
  useEffect(() => {
    if (!hydrated) return;
    if (mergedIds.length > persisted.length) {
      writeJSON(STORAGE_KEYS.achievements, mergedIds);
      setPersisted(mergedIds);
    }
  }, [hydrated, mergedIds, persisted.length]);

  const unlocked = new Set(mergedIds);
  const achievements = ACHIEVEMENTS.map((a) => ({ ...a, unlocked: unlocked.has(a.id) }));

  return {
    hydrated: hydrated && progress.hydrated,
    xp,
    level,
    tier,
    streak: progress.streak,
    booksExplored,
    achievements,
    unlockedCount: unlocked.size,
    totalAchievements: ACHIEVEMENTS.length,
  };
}
