'use client';

import { useReducedMotion } from 'framer-motion';
import { SceneryBackground, type SceneryBackgroundProps } from '@/components/SceneryBackground';
import { DivineField } from '@/components/three/DivineField';
import { AmbientLight } from '@/components/AmbientLight';

export interface PageBackdropProps {
  scenery?: Omit<SceneryBackgroundProps, 'accent' | 'intensity' | 'priority'>;
  accent?: string;
  intensity?: 'soft' | 'deep';
  density?: number;
  priority?: boolean;
  /** Immersive pages get the three.js field; utility pages get the light CSS base. */
  immersive?: boolean;
}

/**
 * The composed page backdrop: a photographic scene (optional) + a living layer.
 * Under prefers-reduced-motion or on non-immersive pages it falls back to the
 * calm CSS AmbientLight, so there's always a gentle base and never a hard cut.
 */
export function PageBackdrop({
  scenery,
  accent = '#67E8F9',
  intensity = 'deep',
  density = 1,
  priority = false,
  immersive = true,
}: PageBackdropProps) {
  const reduce = useReducedMotion();

  return (
    <>
      {scenery && (
        <SceneryBackground
          {...scenery}
          accent={accent}
          intensity={intensity}
          priority={priority}
        />
      )}
      {immersive && !reduce ? (
        <DivineField accent={accent} density={density} />
      ) : (
        <AmbientLight />
      )}
    </>
  );
}
