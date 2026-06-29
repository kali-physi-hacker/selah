'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
  once?: boolean;
}

/**
 * Gentle scroll-reveal: content breathes up into view as it enters the viewport.
 * Honors prefers-reduced-motion (renders static, fully visible).
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
