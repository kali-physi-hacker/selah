'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { ActMeta } from '@/lib/actMeta';
import { AccentNode } from '@/components/AccentNode';
import { Icon } from '@/components/Icon';
import { MovementPill } from '@/components/MovementPill';
import { hexToRgba } from '@/lib/color';

export type ActStatus = 'complete' | 'in-progress' | 'unread';

const MOVEMENT_LABEL: Record<string, string> = {
  creation: 'Creation',
  fall: 'Fall',
  redemption: 'Redemption',
  restoration: 'Restoration',
};

function StatusBadge({ status, accent }: { status: ActStatus; accent: string }) {
  if (status === 'complete') {
    return (
      <span className="flex items-center gap-1 text-[0.65rem] font-medium text-aqua">
        <Icon name="check-circle" size={14} aria-hidden /> Explored
      </span>
    );
  }
  if (status === 'in-progress') {
    return (
      <span className="flex items-center gap-1 text-[0.65rem] font-medium" style={{ color: accent }}>
        <Icon name="circle" size={14} aria-hidden /> In progress
      </span>
    );
  }
  return null;
}

export function ActCard({ act, status }: { act: ActMeta; status: ActStatus }) {
  const reduce = useReducedMotion();

  return (
    <Link href={`/act/${act.slug}`} className="group block focus:outline-none">
      <motion.article
        whileTap={reduce ? undefined : { scale: 0.985 }}
        whileHover={reduce ? undefined : { y: -3 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className={`relative flex gap-4 rounded-card glass p-4 transition-shadow group-hover:shadow-glass-lg ${
          act.isClimax ? 'glass-strong' : ''
        }`}
        style={
          act.isClimax
            ? { boxShadow: `0 0 50px -12px ${hexToRgba(act.accent, 0.55)}` }
            : undefined
        }
      >
        {/* Node on the thread */}
        <div className="flex w-14 flex-none flex-col items-center pt-1">
          <AccentNode
            icon={act.icon}
            accent={act.accent}
            size={act.isClimax ? 56 : 48}
            halo={act.isClimax}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Act {act.number}
            </span>
            <MovementPill label={MOVEMENT_LABEL[act.movement]} accent={act.accent} />
          </div>

          <h3 className="mt-1 font-display text-xl leading-tight text-ink">
            {act.title}
            {act.isClimax && (
              <Icon
                name="sparkles"
                size={15}
                aria-hidden
                className="ml-1.5 inline-block -translate-y-0.5 text-light-warm"
              />
            )}
          </h3>

          {act.isClimax && act.banner && (
            <p className="mt-0.5 text-[0.72rem] italic text-light-warm/90">{act.banner}</p>
          )}

          <p className="mt-1 text-xs text-ink-faint">{act.books}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{act.teaser}</p>

          <div className="mt-3 flex items-center justify-between">
            <StatusBadge status={status} accent={act.accent} />
            <span className="ml-auto flex items-center gap-1 text-[0.7rem] text-ink-faint transition-colors group-hover:text-ink-muted">
              Open <Icon name="chevron-right" size={14} aria-hidden />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
