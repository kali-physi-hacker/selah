'use client';

import { useEffect } from 'react';

/**
 * Registers the service worker (production only — in dev it would fight Next's
 * HMR and cache stale chunks). Enables offline support and helps satisfy the
 * PWA install criteria.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        /* registration failed — app still works, just no offline */
      });
    };

    if (document.readyState === 'complete') register();
    else {
      window.addEventListener('load', register, { once: true });
      return () => window.removeEventListener('load', register);
    }
  }, []);

  return null;
}
