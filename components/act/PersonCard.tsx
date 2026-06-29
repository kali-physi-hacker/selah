import Link from 'next/link';
import type { Person } from '@/content/types';
import { hexToRgba } from '@/lib/color';

function initials(name: string): string {
  // Use the first meaningful word's first letter (skip parentheticals).
  const clean = name.replace(/\(.*?\)/g, '').trim();
  return clean.charAt(0).toUpperCase();
}

/** A tappable key-person card linking into the People index. */
export function PersonCard({ person, accent }: { person: Person; accent: string }) {
  return (
    <Link
      href={`/people#${person.slug}`}
      className="group flex items-start gap-3 rounded-card glass-soft p-3.5 transition-colors hover:bg-white/10"
    >
      <span
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full font-display text-lg text-ink"
        style={{
          background: `radial-gradient(circle at 30% 25%, ${hexToRgba(accent, 0.5)}, ${hexToRgba(
            accent,
            0.18,
          )})`,
          border: `1px solid ${hexToRgba(accent, 0.4)}`,
        }}
        aria-hidden
      >
        {initials(person.name)}
      </span>
      <div className="min-w-0">
        <h4 className="font-display text-base leading-tight text-ink">{person.name}</h4>
        <p className="mt-0.5 text-sm leading-snug text-ink-muted">{person.oneLine}</p>
      </div>
    </Link>
  );
}
