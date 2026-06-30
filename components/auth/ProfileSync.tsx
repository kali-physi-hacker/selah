'use client';

import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import {
  readLocalProfile,
  writeLocalProfile,
  mergeProfiles,
  SYNCED_KEYS,
  type ProfileData,
} from '@/lib/profile';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/**
 * Keeps the signed-in user's localStorage in step with their cloud profile.
 *  - On sign-in: pull the cloud copy (retrying through slow cold starts), merge
 *    it with whatever is local (so logged-out work is preserved), write the
 *    merge locally, push it back.
 *  - Only AFTER that restore completes do we allow local changes to push up.
 *    This is critical: on a fresh install, local is empty and hooks (e.g. the
 *    day-1 streak) write immediately — without this gate that near-empty state
 *    could overwrite the real cloud profile before it loads ("new account" bug).
 * Renders nothing. Only mounted when auth is enabled (inside SessionProvider).
 */
export function ProfileSync() {
  const { status } = useSession();
  const pulling = useRef(false);
  const ready = useRef(false); // true only once the cloud profile is pulled + merged
  const suppress = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const push = (data: ProfileData) =>
    fetch('/api/profile', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ data }),
    }).catch(() => {});

  // Pull + merge once per authenticated session, retrying through cold starts.
  useEffect(() => {
    if (status !== 'authenticated') {
      pulling.current = false;
      ready.current = false;
      return;
    }
    if (pulling.current) return;
    pulling.current = true;
    let cancelled = false;

    (async () => {
      for (let attempt = 0; attempt < 6 && !cancelled; attempt++) {
        try {
          const res = await fetch('/api/profile');
          if (res.status === 401) {
            await sleep(700); // session cookie not propagated yet
            continue;
          }
          if (res.status === 503) {
            // storage not configured — nothing to sync, but local must still work
            ready.current = true;
            return;
          }
          if (!res.ok) {
            await sleep(900); // transient / cold start
            continue;
          }
          const { data: cloud } = (await res.json()) as { data: ProfileData };
          if (cancelled) return;
          const merged = mergeProfiles(readLocalProfile(), cloud ?? {});
          suppress.current = true;
          writeLocalProfile(merged);
          setTimeout(() => (suppress.current = false), 300);
          await push(merged);
          ready.current = true; // restored — now safe to sync local changes upward
          return;
        } catch {
          await sleep(900);
        }
      }
      // Never restored (cloud unreachable). Leave ready=false so we never
      // overwrite the cloud copy with un-restored local data this session.
    })();

    return () => {
      cancelled = true;
    };
  }, [status]);

  // Debounced push on local changes — gated until the restore has completed.
  useEffect(() => {
    if (status !== 'authenticated') return;
    const onChange = (e: Event) => {
      const key = (e as CustomEvent).detail?.key as string | undefined;
      if (key && !SYNCED_KEYS.includes(key)) return;
      if (suppress.current || !ready.current) return;
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (ready.current) push(readLocalProfile());
      }, 1500);
    };
    window.addEventListener('selah:storage', onChange);
    return () => {
      window.removeEventListener('selah:storage', onChange);
      clearTimeout(timer.current);
    };
  }, [status]);

  return null;
}
