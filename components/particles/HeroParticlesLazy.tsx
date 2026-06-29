'use client';

import dynamic from 'next/dynamic';

/**
 * Client-only, lazily-loaded wrapper so tsparticles is never part of the home
 * route's First Load JS — it streams in after mount.
 */
export const HeroParticlesLazy = dynamic(
  () => import('./HeroParticles').then((m) => m.HeroParticles),
  { ssr: false },
);
