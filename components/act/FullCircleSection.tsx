import type { FullCircleLink } from '@/content/types';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const THREAD = '#FDE68A';

/** The Eden ↔ New Creation mirror, shown inside Acts 1 and 15. */
export function FullCircleSection({ links }: { links: FullCircleLink[] }) {
  return (
    <ul className="space-y-3">
      {links.map((m) => (
        <li
          key={m.from}
          className="rounded-card p-4"
          style={{
            background: `linear-gradient(160deg, ${hexToRgba(THREAD, 0.1)}, rgba(255,255,255,0.03))`,
            border: `1px solid ${hexToRgba(THREAD, 0.2)}`,
          }}
        >
          <p className="scripture text-sm text-ink-muted">{m.from}</p>
          <p className="my-1 text-light-warm">
            <Icon name="arrow-right" size={15} aria-hidden className="inline rotate-90" />
          </p>
          <p className="scripture text-sm text-ink">{m.to}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">{m.note}</p>
        </li>
      ))}
    </ul>
  );
}
