import type { ProfileData } from './profile';

/**
 * The XP / level engine. Pure and dependency-free so it can run identically on
 * the client (live UI) and the server (leaderboard ranking). XP is derived from
 * cumulative, mostly-monotonic activity so it never mysteriously drops.
 */
export interface XpInput {
  actsVisited: number;
  actsCompleted: number;
  meditationMinutes: number;
  meditationSessions: number;
  prayers: number;
  answeredPrayers: number;
  bookmarks: number;
}

export const XP_WEIGHTS: Record<keyof XpInput, number> = {
  actsVisited: 30,
  actsCompleted: 120,
  meditationMinutes: 5,
  meditationSessions: 12,
  prayers: 12,
  answeredPrayers: 30,
  bookmarks: 6,
};

export function computeXp(i: XpInput): number {
  return Math.round(
    i.actsVisited * XP_WEIGHTS.actsVisited +
      i.actsCompleted * XP_WEIGHTS.actsCompleted +
      i.meditationMinutes * XP_WEIGHTS.meditationMinutes +
      i.meditationSessions * XP_WEIGHTS.meditationSessions +
      i.prayers * XP_WEIGHTS.prayers +
      i.answeredPrayers * XP_WEIGHTS.answeredPrayers +
      i.bookmarks * XP_WEIGHTS.bookmarks,
  );
}

export interface LevelInfo {
  level: number;
  intoLevel: number; // XP earned within the current level
  levelSpan: number; // XP needed to clear the current level
  nextLevelXp: number; // total XP at which the next level begins
  progress: number; // 0..1 within the current level
}

/** Growing-cost level curve: each level costs ~35% more than the last. */
export function levelForXp(xp: number): LevelInfo {
  let level = 1;
  let need = 250;
  let acc = 0;
  while (xp >= acc + need) {
    acc += need;
    level += 1;
    need = Math.round(need * 1.35);
  }
  return {
    level,
    intoLevel: xp - acc,
    levelSpan: need,
    nextLevelXp: acc + need,
    progress: Math.min(1, (xp - acc) / need),
  };
}

const TIERS: { min: number; name: string }[] = [
  { min: 20, name: 'Saint' },
  { min: 15, name: 'Shepherd' },
  { min: 10, name: 'Steward' },
  { min: 6, name: 'Disciple' },
  { min: 3, name: 'Pilgrim' },
  { min: 1, name: 'Seeker' },
];
export function tierForLevel(level: number): string {
  return TIERS.find((t) => level >= t.min)?.name ?? 'Seeker';
}

/** Pull the XP inputs out of a synced profile (used server-side for ranking). */
export function xpInputFromProfile(data: ProfileData | undefined): XpInput {
  const prayers = data?.prayer ?? [];
  return {
    actsVisited: data?.progress?.visited?.length ?? 0,
    actsCompleted: data?.progress?.completed?.length ?? 0,
    meditationMinutes: data?.meditation?.totalMinutes ?? 0,
    meditationSessions: data?.meditation?.sessions ?? 0,
    prayers: prayers.length,
    answeredPrayers: prayers.filter((p) => p.answered).length,
    bookmarks: data?.bookmarks?.length ?? 0,
  };
}

// ── Achievements ─────────────────────────────────────────────────────────────
export interface AchInput extends XpInput {
  booksExplored: number;
  streak: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  test: (s: AchInput) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-light', title: 'First Light', description: 'Open your first act', icon: 'compass', test: (s) => s.actsVisited >= 1 },
  { id: 'first-prayer', title: 'First Prayer', description: 'Write your first prayer', icon: 'sparkles', test: (s) => s.prayers >= 1 },
  { id: 'be-still', title: 'Be Still', description: '10 minutes of stillness', icon: 'feather', test: (s) => s.meditationMinutes >= 10 },
  { id: 'treasure', title: 'Treasure', description: 'Save 5 verses or acts', icon: 'bookmark', test: (s) => s.bookmarks >= 5 },
  { id: 'pilgrim', title: 'Pilgrim', description: 'Complete 5 acts', icon: 'flag', test: (s) => s.actsCompleted >= 5 },
  { id: 'devoted', title: 'Devoted', description: 'Keep a 7-day streak', icon: 'flame', test: (s) => s.streak >= 7 },
  { id: 'soaked', title: 'Soaked', description: '60 minutes of stillness', icon: 'feather', test: (s) => s.meditationMinutes >= 60 },
  { id: 'intercessor', title: 'Intercessor', description: 'Lift up 10 prayers', icon: 'mail', test: (s) => s.prayers >= 10 },
  { id: 'answered', title: 'Answered', description: 'Mark 5 prayers answered', icon: 'check-circle', test: (s) => s.answeredPrayers >= 5 },
  { id: 'explorer', title: 'Explorer', description: 'Explore 20 books', icon: 'book-open', test: (s) => s.booksExplored >= 20 },
  { id: 'faithful', title: 'Faithful', description: 'Keep a 30-day streak', icon: 'flame', test: (s) => s.streak >= 30 },
  { id: 'whole-story', title: 'Full Circle', description: 'Complete all 15 acts', icon: 'crown', test: (s) => s.actsCompleted >= 15 },
  { id: 'still-waters', title: 'Still Waters', description: '300 minutes of stillness', icon: 'feather', test: (s) => s.meditationMinutes >= 300 },
  { id: 'whole-bible', title: 'Whole Counsel', description: 'Explore all 66 books', icon: 'book-open', test: (s) => s.booksExplored >= 66 },
];
