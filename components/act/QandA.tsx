'use client';

import { useState } from 'react';
import type { QandA as QA } from '@/content/types';
import { Markdown } from '@/lib/markdown';
import { Icon } from '@/components/Icon';

/**
 * Common-questions accordion. Calm, fair handling of misconceptions and
 * genuinely-disputed matters. Answers may contain light markdown.
 */
export function QandA({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="overflow-hidden rounded-card glass-soft">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 p-4 text-left"
            >
              <span className="font-display text-base leading-snug text-ink">{item.q}</span>
              <Icon
                name="chevron-down"
                size={18}
                aria-hidden
                className={`flex-none text-ink-faint transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-0">
                <div className="border-t border-white/10 pt-3 text-sm">
                  <Markdown content={item.a} />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
