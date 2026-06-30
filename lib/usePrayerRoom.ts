'use client';

import { useCallback, useEffect, useState } from 'react';
import { readJSON, writeJSON, STORAGE_KEYS } from './storage';

export type Cadence = 'daily' | 'thrice-weekly' | 'weekly' | 'off';
export const CADENCE_TARGET: Record<Cadence, number> = {
  daily: 7,
  'thrice-weekly': 3,
  weekly: 1,
  off: 0,
};
export const CADENCE_LABEL: Record<Cadence, string> = {
  daily: 'Daily',
  'thrice-weekly': '3× a week',
  weekly: 'Weekly',
  off: 'No rhythm',
};

export interface PrayerStats {
  totalMinutes: number;
  sessions: number;
  lastDate: string;
  days: string[]; // unique YYYY-MM-DD dates prayed
  cadence: Cadence;
}
export interface Revelation {
  id: string;
  text: string;
  date: string;
  minutes?: number;
}

const emptyStats = (): PrayerStats => ({
  totalMinutes: 0,
  sessions: 0,
  lastDate: '',
  days: [],
  cadence: 'daily',
});
const today = () => new Date().toISOString().slice(0, 10);
const newId = (p: string) => `${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;

function computeStreak(days: string[]): number {
  const set = new Set(days);
  const todayStr = today();
  const yest = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
  if (!set.has(todayStr) && !set.has(yest)) return 0;
  let cur = new Date(set.has(todayStr) ? Date.now() : Date.now() - 86_400_000);
  let streak = 0;
  while (set.has(cur.toISOString().slice(0, 10))) {
    streak += 1;
    cur = new Date(cur.getTime() - 86_400_000);
  }
  return streak;
}

/** Prayer cadence, tracked prayer time, and a revelations/visions log. Synced. */
export function usePrayerRoom() {
  const [stats, setStats] = useState<PrayerStats>(emptyStats);
  const [revelations, setRevelations] = useState<Revelation[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStats(readJSON<PrayerStats>(STORAGE_KEYS.prayerStats, emptyStats()));
    setRevelations(readJSON<Revelation[]>(STORAGE_KEYS.revelations, []));
    setHydrated(true);
    const onStorage = (e: Event) => {
      const k = (e as CustomEvent).detail?.key;
      if (k === STORAGE_KEYS.prayerStats || k === undefined)
        setStats(readJSON<PrayerStats>(STORAGE_KEYS.prayerStats, emptyStats()));
      if (k === STORAGE_KEYS.revelations || k === undefined)
        setRevelations(readJSON<Revelation[]>(STORAGE_KEYS.revelations, []));
    };
    window.addEventListener('selah:storage', onStorage);
    return () => window.removeEventListener('selah:storage', onStorage);
  }, []);

  const addRevelationEntry = (text: string, minutes?: number) => {
    const rev: Revelation = { id: newId('r'), text: text.trim(), date: new Date().toISOString(), minutes };
    setRevelations((prev) => {
      const next = [rev, ...prev];
      writeJSON(STORAGE_KEYS.revelations, next);
      return next;
    });
  };

  const addSession = useCallback((minutes: number, revelationText?: string) => {
    const t = today();
    setStats((prev) => {
      const days = prev.days.includes(t) ? prev.days : [...prev.days, t];
      const next: PrayerStats = {
        ...prev,
        totalMinutes: Math.round((prev.totalMinutes + minutes) * 10) / 10,
        sessions: prev.sessions + 1,
        lastDate: t,
        days,
      };
      writeJSON(STORAGE_KEYS.prayerStats, next);
      return next;
    });
    if (revelationText && revelationText.trim()) addRevelationEntry(revelationText, minutes);
  }, []);

  const addRevelation = useCallback((text: string) => {
    if (text.trim()) addRevelationEntry(text);
  }, []);

  const removeRevelation = useCallback((id: string) => {
    setRevelations((prev) => {
      const next = prev.filter((r) => r.id !== id);
      writeJSON(STORAGE_KEYS.revelations, next);
      return next;
    });
  }, []);

  const setCadence = useCallback((cadence: Cadence) => {
    setStats((prev) => {
      const next = { ...prev, cadence };
      writeJSON(STORAGE_KEYS.prayerStats, next);
      return next;
    });
  }, []);

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekStartStr = weekStart.toISOString().slice(0, 10);
  const daysThisWeek = stats.days.filter((d) => d >= weekStartStr).length;

  return {
    stats,
    revelations,
    hydrated,
    streak: computeStreak(stats.days),
    daysThisWeek,
    addSession,
    addRevelation,
    removeRevelation,
    setCadence,
  };
}
