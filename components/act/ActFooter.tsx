'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { ActMeta } from '@/lib/actMeta';
import { useProgress } from '@/lib/useProgress';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

interface Props {
  slug: string;
  accent: string;
  prev?: ActMeta;
  next?: ActMeta;
}

/** Mark-complete action + continuous prev/next navigation between acts. */
export function ActFooter({ slug, accent, prev, next }: Props) {
  const progress = useProgress();
  const reduce = useReducedMotion();
  const done = progress.hydrated && progress.isComplete(slug);

  return (
    <div className="space-y-5">
      <motion.button
        onClick={() => progress.toggleComplete(slug)}
        aria-pressed={done}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2.5 rounded-card px-5 py-4 font-medium transition-colors"
        style={{
          background: done
            ? hexToRgba(accent, 0.3)
            : `linear-gradient(135deg, ${hexToRgba(accent, 0.22)}, rgb(var(--surface) / 0.04))`,
          border: `1px solid ${hexToRgba(accent, done ? 0.55 : 0.3)}`,
          color: 'rgb(var(--ink))',
        }}
      >
        <Icon name={done ? 'check-circle' : 'circle'} size={20} aria-hidden />
        {done ? 'Act explored — well done' : 'Mark this act as explored'}
      </motion.button>

      <div className="grid grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/act/${prev.slug}`}
            className="group flex flex-col rounded-card glass-soft p-4 transition-colors hover:bg-white/10"
          >
            <span className="flex items-center gap-1 text-[0.7rem] uppercase tracking-wider text-ink-faint">
              <Icon name="chevron-left" size={13} aria-hidden /> Previous
            </span>
            <span className="mt-1 font-display text-sm text-ink">
              {prev.number}. {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/act/${next.slug}`}
            className="group flex flex-col rounded-card glass-soft p-4 text-right transition-colors hover:bg-white/10"
          >
            <span className="flex items-center justify-end gap-1 text-[0.7rem] uppercase tracking-wider text-ink-faint">
              Next <Icon name="chevron-right" size={13} aria-hidden />
            </span>
            <span className="mt-1 font-display text-sm text-ink">
              {next.number}. {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/read"
            className="group flex flex-col rounded-card glass-soft p-4 text-right transition-colors hover:bg-white/10"
          >
            <span className="flex items-center justify-end gap-1 text-[0.7rem] uppercase tracking-wider text-ink-faint">
              Finish <Icon name="sparkles" size={13} aria-hidden />
            </span>
            <span className="mt-1 font-display text-sm text-ink">Your progress</span>
          </Link>
        )}
      </div>
    </div>
  );
}
