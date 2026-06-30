import { hexToRgba } from '@/lib/color';

export interface PullQuoteProps {
  text?: string;
  reference: string;
  translation?: string;
  accent?: string;
  className?: string;
}

/**
 * A featured scripture pull-quote in the serif "scripture voice", with a soft
 * accent rule. Used at the top of each act and section.
 */
export function PullQuote({
  text,
  reference,
  translation = 'WEB',
  accent = '#67E8F9',
  className = '',
}: PullQuoteProps) {
  return (
    <figure
      className={`relative rounded-card px-5 py-5 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${hexToRgba(accent, 0.14)}, rgb(var(--surface) / 0.03))`,
        borderLeft: `2px solid ${hexToRgba(accent, 0.65)}`,
      }}
    >
      {text && (
        <blockquote className="scripture text-balance text-lg leading-relaxed text-ink text-glow-soft sm:text-xl">
          “{text}”
        </blockquote>
      )}
      <figcaption className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-faint">
        <span
          aria-hidden
          className="h-px w-6"
          style={{ background: hexToRgba(accent, 0.6) }}
        />
        {reference}
        <span className="text-ink-faint/70">· {translation}</span>
      </figcaption>
    </figure>
  );
}
