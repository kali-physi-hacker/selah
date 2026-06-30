import { readJSON, writeJSON, STORAGE_KEYS } from './storage';
import type { ProgressState } from './useProgress';
import type { Bookmark, NotesMap } from './useBookmarks';
import type { Prayer } from './usePrayer';
import type { MeditationStats } from './useMeditation';

/**
 * The synced profile = the subset of local state we mirror to the cloud for
 * signed-in users. localStorage stays the live source of truth for the UI; this
 * just keeps the cloud copy in step and merges the two on sign-in so nothing a
 * person saved while logged out is ever lost.
 */
export interface ProfileData {
  progress?: ProgressState;
  bookmarks?: Bookmark[];
  notes?: NotesMap;
  readingPlan?: number[];
  prayer?: Prayer[];
  meditation?: MeditationStats;
  achievements?: string[];
  // server-enriched (for the leaderboard) — never written from the client
  _name?: string;
  _image?: string;
  leaderboardOptOut?: boolean;
}

export const SYNCED_KEYS: string[] = [
  STORAGE_KEYS.progress,
  STORAGE_KEYS.bookmarks,
  STORAGE_KEYS.notes,
  STORAGE_KEYS.readingPlan,
  STORAGE_KEYS.prayer,
  STORAGE_KEYS.meditation,
  STORAGE_KEYS.achievements,
  STORAGE_KEYS.leaderboardOptOut,
];

export function readLocalProfile(): ProfileData {
  return {
    progress: readJSON<ProgressState | undefined>(STORAGE_KEYS.progress, undefined),
    bookmarks: readJSON<Bookmark[] | undefined>(STORAGE_KEYS.bookmarks, undefined),
    notes: readJSON<NotesMap | undefined>(STORAGE_KEYS.notes, undefined),
    readingPlan: readJSON<number[] | undefined>(STORAGE_KEYS.readingPlan, undefined),
    prayer: readJSON<Prayer[] | undefined>(STORAGE_KEYS.prayer, undefined),
    meditation: readJSON<MeditationStats | undefined>(STORAGE_KEYS.meditation, undefined),
    achievements: readJSON<string[] | undefined>(STORAGE_KEYS.achievements, undefined),
    leaderboardOptOut: readJSON<boolean | undefined>(STORAGE_KEYS.leaderboardOptOut, undefined),
  };
}

export function writeLocalProfile(p: ProfileData): void {
  if (p.progress) writeJSON(STORAGE_KEYS.progress, p.progress);
  if (p.bookmarks) writeJSON(STORAGE_KEYS.bookmarks, p.bookmarks);
  if (p.notes) writeJSON(STORAGE_KEYS.notes, p.notes);
  if (p.readingPlan) writeJSON(STORAGE_KEYS.readingPlan, p.readingPlan);
  if (p.prayer) writeJSON(STORAGE_KEYS.prayer, p.prayer);
  if (p.meditation) writeJSON(STORAGE_KEYS.meditation, p.meditation);
  if (p.achievements) writeJSON(STORAGE_KEYS.achievements, p.achievements);
  if (typeof p.leaderboardOptOut === 'boolean')
    writeJSON(STORAGE_KEYS.leaderboardOptOut, p.leaderboardOptOut);
}

const union = <T>(a?: T[], b?: T[]): T[] => Array.from(new Set([...(a ?? []), ...(b ?? [])]));
const earlier = (a?: string, b?: string): string => (!a ? b! : !b ? a : a < b ? a : b);
const later = (a?: string, b?: string): string => (!a ? b! : !b ? a : a > b ? a : b);

function mergeProgress(a?: ProgressState, b?: ProgressState): ProgressState | undefined {
  if (!a) return b;
  if (!b) return a;
  const lastActiveDate = later(a.lastActiveDate, b.lastActiveDate);
  return {
    completed: union(a.completed, b.completed),
    visited: union(a.visited, b.visited),
    streak: Math.max(a.streak ?? 0, b.streak ?? 0),
    startDate: earlier(a.startDate, b.startDate),
    lastActiveDate,
    lastActSlug:
      (a.lastActiveDate >= b.lastActiveDate ? a.lastActSlug : b.lastActSlug) ??
      a.lastActSlug ??
      b.lastActSlug,
  };
}

function mergeBookmarks(a?: Bookmark[], b?: Bookmark[]): Bookmark[] {
  const byId = new Map<string, Bookmark>();
  // cloud first, then local — local (more recent edits) wins on conflict
  for (const bm of b ?? []) byId.set(bm.id, bm);
  for (const bm of a ?? []) byId.set(bm.id, bm);
  return Array.from(byId.values()).sort((x, y) => (x.createdAt < y.createdAt ? 1 : -1));
}

function mergePrayers(a?: Prayer[], b?: Prayer[]): Prayer[] {
  const byId = new Map<string, Prayer>();
  for (const p of b ?? []) byId.set(p.id, p);
  for (const p of a ?? []) {
    const existing = byId.get(p.id);
    byId.set(
      p.id,
      existing
        ? { ...p, answered: p.answered || existing.answered, answeredAt: p.answeredAt ?? existing.answeredAt }
        : p,
    );
  }
  return Array.from(byId.values()).sort((x, y) => (x.createdAt < y.createdAt ? 1 : -1));
}

function mergeMeditation(a?: MeditationStats, b?: MeditationStats): MeditationStats | undefined {
  if (!a) return b;
  if (!b) return a;
  return {
    totalMinutes: Math.max(a.totalMinutes, b.totalMinutes),
    sessions: Math.max(a.sessions, b.sessions),
    lastDate: later(a.lastDate, b.lastDate),
  };
}

/** Merge two profiles. `local` takes precedence on genuine conflicts. */
export function mergeProfiles(local: ProfileData, cloud: ProfileData): ProfileData {
  return {
    progress: mergeProgress(local.progress, cloud.progress),
    bookmarks: mergeBookmarks(local.bookmarks, cloud.bookmarks),
    notes: { ...(cloud.notes ?? {}), ...(local.notes ?? {}) },
    readingPlan: union(local.readingPlan, cloud.readingPlan).sort((x, y) => x - y),
    prayer: mergePrayers(local.prayer, cloud.prayer),
    meditation: mergeMeditation(local.meditation, cloud.meditation),
    achievements: union(local.achievements, cloud.achievements),
    leaderboardOptOut: local.leaderboardOptOut ?? cloud.leaderboardOptOut,
  };
}
