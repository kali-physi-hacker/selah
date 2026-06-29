'use client';

import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

/**
 * A small, interactive layer of luminous motes for the hero (tsparticles).
 * They drift slowly and brighten / gather toward touch — the "calm interaction".
 * Skipped under prefers-reduced-motion.
 */
export function HeroParticles({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let active = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => active && setReady(true));
    return () => {
      active = false;
    };
  }, [reduce]);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: 'transparent' },
      particles: {
        number: { value: 34, density: { enable: true, width: 420, height: 420 } },
        color: { value: ['#FFFFFF', '#FDE68A', '#67E8F9'] },
        opacity: {
          value: { min: 0.15, max: 0.7 },
          animation: { enable: true, speed: 0.6, sync: false, startValue: 'random' },
        },
        size: { value: { min: 0.6, max: 2.6 } },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'top',
          random: true,
          straight: false,
          outModes: { default: 'out', bottom: 'out', top: 'out' },
        },
        shadow: { enable: true, blur: 6, color: '#FDE68A' },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'bubble' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          bubble: { distance: 110, size: 4, duration: 2, opacity: 0.9 },
          push: { quantity: 2 },
        },
      },
    }),
    [],
  );

  if (reduce || !ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className={`pointer-events-none absolute inset-0 ${className ?? ''}`}
    />
  );
}
