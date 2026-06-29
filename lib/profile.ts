import { readJSON, writeJSON, STORAGE_KEYS } from './storage';
import type { ProgressState } from './useProgress';
import type { Bookmark, NotesMap } from './useBookmarks';

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
}

export const SYNCED_KEYS: string[] = [
  STORAGE_KEYS.progress,
  STORAGE_KEYS.bookmarks,
  STORAGE_KEYS.notes,
  STORAGE_KEYS.readingPlan,
];

export function readLocalProfile(): ProfileData {
  return {
    progress: readJSON<ProgressState | undefined>(STORAGE_KEYS.progress, undefined),
    bookmarks: readJSON<Bookmark[] | undefined>(STORAGE_KEYS.bookmarks, undefined),
    notes: readJSON<NotesMap | undefined>(STORAGE_KEYS.notes, undefined),
    readingPlan: readJSON<number[] | undefined>(STORAGE_KEYS.readingPlan, undefined),
  };
}

export function writeLocalProfile(p: ProfileData): void {
  if (p.progress) writeJSON(STORAGE_KEYS.progress, p.progress);
  if (p.bookmarks) writeJSON(STORAGE_KEYS.bookmarks, p.bookmarks);
  if (p.notes) writeJSON(STORAGE_KEYS.notes, p.notes);
  if (p.readingPlan) writeJSON(STORAGE_KEYS.readingPlan, p.readingPlan);
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

/** Merge two profiles. `local` takes precedence on genuine conflicts. */
export function mergeProfiles(local: ProfileData, cloud: ProfileData): ProfileData {
  return {
    progress: mergeProgress(local.progress, cloud.progress),
    bookmarks: mergeBookmarks(local.bookmarks, cloud.bookmarks),
    notes: { ...(cloud.notes ?? {}), ...(local.notes ?? {}) },
    readingPlan: union(local.readingPlan, cloud.readingPlan).sort((x, y) => x - y),
  };
}
