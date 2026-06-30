import type { ChristConnection } from '@/content/types';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const THREAD = '#FDE68A'; // the scarlet/gold redemption thread

/**
 * "How it points to Christ" — the scarlet-thread tie-in, marked with the
 * redemption-thread accent so it reads as the golden cord running through
 * every act toward the center (Act 12).
 */
export function ChristPanel({ christ }: { christ: ChristConnection }) {
  return (
    <div
      className="rounded-card p-5"
      style={{
        background: `linear-gradient(160deg, ${hexToRgba(THREAD, 0.12)}, rgb(var(--surface) / 0.03))`,
        border: `1px solid ${hexToRgba(THREAD, 0.25)}`,
      }}
    >
      <p className="leading-relaxed text-ink">{christ.summary}</p>

      <ul className="mt-5 space-y-2.5">
        {christ.links.map((link) => (
          <li key={link.ref} className="relative flex gap-3 pl-1">
            <span
              aria-hidden
              className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
              style={{ background: hexToRgba(THREAD, 0.22), color: THREAD }}
            >
              <Icon name="sparkles" size={11} />
            </span>
            <div>
              <span className="scripture text-sm font-medium text-light-warm">{link.ref}</span>
              <span className="text-ink-faint"> — </span>
              <span className="text-sm leading-relaxed text-ink-muted">{link.note}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
