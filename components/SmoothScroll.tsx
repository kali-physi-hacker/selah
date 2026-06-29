'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';
import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Buttery smooth scrolling via Lenis — the "calm, smooth" feel across the whole
 * app. Skipped under prefers-reduced-motion. Exposes the instance on
 * window.__lenis so in-page anchor nav (SectionNav) can scroll smoothly too.
 */
export function SmoothScroll() {
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let lenis: Lenis | null = null;
    let disposed = false;

    (async () => {
      const Lenis = (await import('lenis')).default;
      if (disposed) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic — calm settle
        smoothWheel: true,
        touchMultiplier: 1.4,
      });
      window.__lenis = lenis;
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      if (window.__lenis === lenis) window.__lenis = undefined;
    };
  }, [reduce]);

  // Reset scroll to top on route change (Lenis intercepts native scroll restore).
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
