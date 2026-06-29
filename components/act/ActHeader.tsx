import Link from 'next/link';
import type { ActContent } from '@/content/types';
import { AccentNode } from '@/components/AccentNode';
import { MovementPill } from '@/components/MovementPill';
import { PullQuote } from '@/components/PullQuote';
import { Icon } from '@/components/Icon';
import { SaveActButton } from './SaveActButton';
import { accentGradient, hexToRgba } from '@/lib/color';

const MOVEMENT_LABEL: Record<string, string> = {
  creation: 'Creation',
  fall: 'Fall',
  redemption: 'Redemption',
  restoration: 'Restoration',
};

/** The act detail header — accent glow, node, title, books, featured verse. */
export function ActHeader({ act }: { act: ActContent }) {
  return (
    <header className="relative overflow-hidden px-4 pt-5 sm:px-6">
      {/* accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 h-72"
        style={{ background: accentGradient(act.accent, 0.3) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: hexToRgba(act.accent, act.isClimax ? 0.42 : 0.28) }}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-pill bg-white/8 px-3 py-1.5 text-xs text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12"
          >
            <Icon name="chevron-left" size={15} aria-hidden /> The journey
          </Link>
          <SaveActButton slug={act.slug} title={act.title} accent={act.accent} />
        </div>

        <div className="mt-5 flex items-start gap-4 animate-fade-up">
          <AccentNode icon={act.icon} accent={act.accent} size={act.isClimax ? 68 : 60} halo={act.isClimax} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
                Act {act.number}
              </span>
              <MovementPill label={MOVEMENT_LABEL[act.movement]} accent={act.accent} />
            </div>
            <h1 className="mt-1.5 font-display text-3xl leading-tight text-ink text-glow-soft sm:text-4xl">
              {act.title}
            </h1>
            <p className="mt-1 text-sm text-ink-muted">
              {act.books} · <span className="italic">{act.era}</span>
            </p>
          </div>
        </div>

        {act.isClimax && act.banner && (
          <div
            className="mt-4 flex items-center gap-2 rounded-control px-4 py-2.5 text-sm animate-fade-up"
            style={{
              background: hexToRgba('#FDE68A', 0.12),
              border: `1px solid ${hexToRgba('#FDE68A', 0.28)}`,
            }}
          >
            <Icon name="sparkles" size={16} aria-hidden className="text-light-warm" />
            <span className="scripture text-light-warm">{act.banner}</span>
          </div>
        )}

        <div className="mt-5 animate-fade-up">
          <PullQuote
            text={act.featuredVerse.text}
            reference={act.featuredVerse.ref}
            translation={act.featuredVerse.translation}
            accent={act.accent}
          />
        </div>
      </div>
    </header>
  );
}
