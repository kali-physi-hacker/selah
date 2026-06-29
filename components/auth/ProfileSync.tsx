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

/**
 * Keeps the signed-in user's localStorage in step with their cloud profile.
 *  - On sign-in: pull the cloud copy, merge it with whatever is local (so
 *    logged-out progress is preserved), write the merge locally, push it back.
 *  - On any later local change: debounce-push the profile to the cloud.
 * Renders nothing. Only mounted when auth is enabled (inside SessionProvider).
 */
export function ProfileSync() {
  const { status } = useSession();
  const pulled = useRef(false);
  const suppress = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const push = (data: ProfileData) =>
    fetch('/api/profile', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ data }),
    }).catch(() => {});

  // Pull + merge once per authenticated session.
  useEffect(() => {
    if (status !== 'authenticated') {
      pulled.current = false;
      return;
    }
    if (pulled.current) return;
    pulled.current = true;
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/api/profile');
        if (!res.ok || cancelled) return;
        const { data: cloud } = (await res.json()) as { data: ProfileData };
        const merged = mergeProfiles(readLocalProfile(), cloud ?? {});
        suppress.current = true;
        writeLocalProfile(merged);
        window.setTimeout(() => (suppress.current = false), 250);
        await push(merged);
      } catch {
        /* offline or not configured — local still works */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status]);

  // Debounced push on local changes.
  useEffect(() => {
    if (status !== 'authenticated') return;
    const onChange = (e: Event) => {
      const key = (e as CustomEvent).detail?.key as string | undefined;
      if (key && !SYNCED_KEYS.includes(key)) return;
      if (suppress.current) return;
      clearTimeout(timer.current);
      timer.current = setTimeout(() => push(readLocalProfile()), 1500);
    };
    window.addEventListener('selah:storage', onChange);
    return () => {
      window.removeEventListener('selah:storage', onChange);
      clearTimeout(timer.current);
    };
  }, [status]);

  return null;
}
