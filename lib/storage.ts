/**
 * SSR-safe localStorage access.
 *
 * Everything here guards `typeof window`. On the server (and in any environment
 * without localStorage) reads return the fallback and writes are no-ops, so the
 * app renders cleanly during SSR and hydrates on the client.
 */

const isBrowser = (): boolean =>
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    // Let same-tab listeners know (the native 'storage' event only fires cross-tab).
    window.dispatchEvent(new CustomEvent('selah:storage', { detail: { key } }));
  } catch {
    /* quota or privacy mode — fail silently */
  }
}

export function removeKey(key: string): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent('selah:storage', { detail: { key } }));
  } catch {
    /* ignore */
  }
}

/** Storage keys used across the app — keep them in one place. */
export const STORAGE_KEYS = {
  progress: 'selah:progress:v1',
  bookmarks: 'selah:bookmarks:v1',
  notes: 'selah:notes:v1',
  settings: 'selah:settings:v1',
  readingPlan: 'selah:reading-plan:v1',
  sound: 'selah:sound:v1',
  installDismissed: 'selah:install-dismissed:v1',
} as const;
