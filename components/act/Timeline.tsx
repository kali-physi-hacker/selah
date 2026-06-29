'use client';

import { useState } from 'react';
import type { TimelineEvent } from '@/content/types';
import { hexToRgba } from '@/lib/color';
import { Icon } from '@/components/Icon';

/**
 * A horizontally-scrollable timeline of the act's events. Each node shows its
 * scripture ref + title; tapping expands the detail. On wider screens it reads
 * as a connected horizontal strip; the connecting line glows in the accent.
 */
export function Timeline({ events, accent }: { events: TimelineEvent[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative">
      <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2">
        {events.map((ev, i) => {
          const isOpen = open === i;
          return (
            <button
              key={`${ev.ref}-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group relative flex snap-start flex-col rounded-card p-4 text-left transition-all"
              style={{
                minWidth: isOpen ? '17rem' : '13rem',
                background: hexToRgba(accent, isOpen ? 0.16 : 0.08),
                border: `1px solid ${hexToRgba(accent, isOpen ? 0.4 : 0.2)}`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-[0.7rem] font-semibold"
                  style={{ background: hexToRgba(accent, 0.45), color: '#F0FDFA' }}
                >
                  {i + 1}
                </span>
                <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint">
                  {ev.ref}
                </span>
              </div>
              <h4 className="mt-2 font-display text-base leading-snug text-ink">{ev.title}</h4>
              <p
                className={`mt-1 text-sm leading-relaxed text-ink-muted transition-all ${
                  isOpen ? 'opacity-100' : 'line-clamp-2 opacity-80'
                }`}
              >
                {ev.detail}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] text-ink-faint">
                {isOpen ? 'Less' : 'More'}
                <Icon
                  name="chevron-down"
                  size={13}
                  aria-hidden
                  className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                />
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-2 flex items-center gap-1.5 px-1 text-[0.7rem] text-ink-faint">
        <Icon name="arrow-right" size={13} aria-hidden /> Swipe through the moments
      </p>
    </div>
  );
}
