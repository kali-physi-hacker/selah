'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { PersonEntry } from '@/content';
import { Markdown } from '@/lib/markdown';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

export interface ActLookupItem {
  number: number;
  slug: string;
  title: string;
  accent: string;
}

function initials(name: string): string {
  return name.replace(/\(.*?\)/g, '').trim().charAt(0).toUpperCase();
}

export function PeopleIndex({
  people,
  actLookup,
}: {
  people: PersonEntry[];
  actLookup: ActLookupItem[];
}) {
  const [filter, setFilter] = useState('');
  const byNumber = useMemo(() => new Map(actLookup.map((a) => [a.number, a])), [actLookup]);

  const shown = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return people;
    return people.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.oneLine.toLowerCase().includes(q) ||
        p.bio.toLowerCase().includes(q),
    );
  }, [filter, people]);

  return (
    <div className="px-4 sm:px-6">
      <div className="glass-strong sticky top-2 z-20 flex items-center gap-3 rounded-pill px-4 py-3">
        <Icon name="search" size={18} aria-hidden className="text-ink-faint" />
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter people…"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          aria-label="Filter people"
          type="search"
        />
        <span className="flex-none text-xs text-ink-faint">{shown.length}</span>
      </div>

      <ul className="mt-5 space-y-3">
        {shown.map((person) => (
          <li
            key={person.slug}
            id={person.slug}
            className="scroll-mt-24 rounded-card glass p-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-xl text-ink"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(circle at 30% 25%, rgba(103,232,249,0.4), rgba(103,232,249,0.12))',
                  border: '1px solid rgba(103,232,249,0.3)',
                }}
              >
                {initials(person.name)}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl leading-tight text-ink">{person.name}</h2>
                <p className="mt-0.5 text-sm italic text-ink-muted">{person.oneLine}</p>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <Markdown content={person.bio} />
            </div>

            {person.keyRefs.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {person.keyRefs.map((ref) => (
                  <span
                    key={ref}
                    className="pill bg-white/6 px-2.5 py-1 text-[0.7rem] text-ink-muted ring-1 ring-white/10"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
              <span className="text-[0.7rem] uppercase tracking-wider text-ink-faint">Appears in</span>
              {person.appearsInActs
                .map((n) => byNumber.get(n))
                .filter((a): a is ActLookupItem => Boolean(a))
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/act/${a.slug}`}
                    className="pill px-2.5 py-1 text-[0.7rem] text-ink transition-colors hover:brightness-110"
                    style={{
                      background: hexToRgba(a.accent, 0.18),
                      border: `1px solid ${hexToRgba(a.accent, 0.32)}`,
                    }}
                  >
                    {a.number}. {a.title}
                  </Link>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
