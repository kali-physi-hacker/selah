'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { VerseRef } from '@/content/types';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

/**
 * A lightweight, calm flashcard practice for memory verses.
 * Shows the reference; tap to reveal the text. Move through the set at your pace.
 */
export function FlashcardPractice({
  verses,
  accent,
  onClose,
}: {
  verses: VerseRef[];
  accent: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const reduce = useReducedMotion();
  const verse = verses[index];

  const next = () => {
    setRevealed(false);
    setIndex((i) => (i + 1) % verses.length);
  };
  const prev = () => {
    setRevealed(false);
    setIndex((i) => (i - 1 + verses.length) % verses.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setRevealed((r) => !r);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verses.length]);

  if (!verse) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'rgba(2,31,30,0.78)', backdropFilter: 'blur(8px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Memory verse practice"
    >
      <div className="w-full max-w-md">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">
            Practice · {index + 1} of {verses.length}
          </span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink"
            aria-label="Close practice"
          >
            <Icon name="x" size={18} aria-hidden />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.button
            key={index}
            onClick={() => setRevealed((r) => !r)}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[16rem] w-full flex-col items-center justify-center rounded-card p-6 text-center glass-strong"
            style={{ border: `1px solid ${hexToRgba(accent, 0.35)}` }}
          >
            <span className="font-display text-2xl text-light-warm">{verse.ref}</span>
            <div className="my-4 h-px w-12" style={{ background: hexToRgba(accent, 0.5) }} />
            {revealed ? (
              <p className="scripture text-lg leading-relaxed text-ink">“{verse.text}”</p>
            ) : (
              <p className="flex items-center gap-2 text-sm text-ink-faint">
                <Icon name="eye" size={16} aria-hidden /> Tap to reveal · then recite
              </p>
            )}
          </motion.button>
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink"
            aria-label="Previous verse"
          >
            <Icon name="chevron-left" size={20} aria-hidden />
          </button>
          <button
            onClick={() => setRevealed((r) => !r)}
            className="pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15"
          >
            {revealed ? 'Hide' : 'Reveal'}
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink"
            aria-label="Next verse"
          >
            <Icon name="chevron-right" size={20} aria-hidden />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
