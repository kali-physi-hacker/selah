'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { GlossaryEntry } from '@/content';
import type { ActLookupItem } from '@/components/people/PeopleIndex';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const LANG_COLOR: Record<string, string> = {
  Hebrew: '#67E8F9',
  Greek: '#FDE68A',
  Latin: '#D4537E',
  Concept: '#A7F3D0',
};

const LANGS = ['All', 'Hebrew', 'Greek', 'Latin', 'Concept'] as const;

export function GlossaryIndex({
  glossary,
  actLookup,
}: {
  glossary: GlossaryEntry[];
  actLookup: ActLookupItem[];
}) {
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState<(typeof LANGS)[number]>('All');
  const byNumber = useMemo(() => new Map(actLookup.map((a) => [a.number, a])), [actLookup]);

  const shown = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return glossary.filter((g) => {
      if (lang !== 'All' && g.language !== lang) return false;
      if (!q) return true;
      return (
        g.term.toLowerCase().includes(q) ||
        g.gloss.toLowerCase().includes(q) ||
        g.detail.toLowerCase().includes(q)
      );
    });
  }, [filter, lang, glossary]);

  return (
    <div className="px-4 sm:px-6">
      <div className="glass-strong sticky top-2 z-20 rounded-card p-2">
        <div className="flex items-center gap-3 px-2 py-1">
          <Icon name="search" size={18} aria-hidden className="text-ink-faint" />
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter terms…"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            aria-label="Filter glossary"
            type="search"
          />
          <span className="flex-none text-xs text-ink-faint">{shown.length}</span>
        </div>
        <div className="no-scrollbar mt-1 flex gap-1 overflow-x-auto">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="whitespace-nowrap rounded-pill px-3 py-1 text-xs font-medium transition-colors"
              style={
                lang === l
                  ? { background: 'rgb(var(--surface) / 0.16)', color: 'rgb(var(--ink))' }
                  : { color: 'rgb(var(--ink) / 0.55)' }
              }
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {shown.map((g) => {
          const color = LANG_COLOR[g.language] ?? '#67E8F9';
          return (
            <li key={g.slug} id={g.slug} className="scroll-mt-28 rounded-card glass p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl italic text-ink">{g.term}</h2>
                <span
                  className="pill flex-none text-[0.62rem] uppercase tracking-wider"
                  style={{ background: hexToRgba(color, 0.2), color: 'rgb(var(--ink))' }}
                >
                  {g.language}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-ink-muted">{g.gloss}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{g.detail}</p>

              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
                <span className="text-[0.7rem] uppercase tracking-wider text-ink-faint">In</span>
                {g.actNumbers
                  .map((n) => byNumber.get(n))
                  .filter((a): a is ActLookupItem => Boolean(a))
                  .map((a) => (
                    <Link
                      key={a.slug}
                      href={`/act/${a.slug}#words`}
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
          );
        })}
      </ul>
    </div>
  );
}
