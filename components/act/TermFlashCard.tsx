'use client';

import { useState } from 'react';
import type { TermCard } from '@/content/types';
import { hexToRgba } from '@/lib/color';
import { Icon } from '@/components/Icon';

const LANG_COLOR: Record<string, string> = {
  Hebrew: '#67E8F9',
  Greek: '#FDE68A',
  Latin: '#D4537E',
  Concept: '#A7F3D0',
};

/**
 * A flip-style key-word card. Front: term + gloss. Back: the deeper note.
 * Flips on tap; fully keyboard-accessible (it's a button).
 */
export function TermFlashCard({ term }: { term: TermCard }) {
  const [flipped, setFlipped] = useState(false);
  const color = LANG_COLOR[term.language] ?? '#67E8F9';

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group relative min-h-[8.5rem] w-full rounded-card p-4 text-left transition-all"
      style={{
        background: hexToRgba(color, flipped ? 0.14 : 0.08),
        border: `1px solid ${hexToRgba(color, flipped ? 0.38 : 0.22)}`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="pill text-[0.62rem] uppercase tracking-wider"
          style={{ background: hexToRgba(color, 0.2), color: '#F0FDFA' }}
        >
          {term.language}
        </span>
        <Icon
          name="rotate"
          size={14}
          aria-hidden
          className="text-ink-faint transition-colors group-hover:text-ink-muted"
        />
      </div>

      {!flipped ? (
        <div className="mt-2">
          <h4 className="font-display text-xl italic text-ink">{term.term}</h4>
          <p className="mt-1 text-sm text-ink-muted">{term.gloss}</p>
          <p className="mt-3 text-[0.7rem] text-ink-faint">Tap to unfold</p>
        </div>
      ) : (
        <div className="mt-2">
          <h4 className="font-display text-sm italic text-ink-muted">{term.term}</h4>
          <p className="mt-1 text-sm leading-relaxed text-ink">{term.detail}</p>
        </div>
      )}
    </button>
  );
}
