'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type FuseType from 'fuse.js';
import type { SearchKind, SearchRecord } from '@/content/types';
import { Icon } from '@/components/Icon';

const KIND_META: Record<SearchKind, { label: string; icon: string; order: number }> = {
  act: { label: 'Acts', icon: 'book-open', order: 0 },
  scene: { label: 'Scenes', icon: 'sparkles', order: 1 },
  verse: { label: 'Verses', icon: 'quote', order: 2 },
  person: { label: 'People', icon: 'users', order: 3 },
  theme: { label: 'Themes', icon: 'sparkles', order: 4 },
  term: { label: 'Words', icon: 'languages', order: 5 },
  question: { label: 'Questions', icon: 'info', order: 6 },
};

const SUGGESTIONS = ['Image of God', 'Passover', 'covenant', 'resurrection', 'David', 'grace', 'Eden'];

export function SearchClient() {
  const [query, setQuery] = useState('');
  const [fuse, setFuse] = useState<FuseType<SearchRecord> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lazy-load fuse.js + the search index so they don't weigh down the route.
  useEffect(() => {
    let active = true;
    Promise.all([import('fuse.js'), import('@/content/search-index')]).then(
      ([{ default: Fuse }, { searchIndex }]) => {
        if (!active) return;
        setFuse(
          new Fuse(searchIndex, {
            keys: [
              { name: 'title', weight: 0.5 },
              { name: 'subtitle', weight: 0.25 },
              { name: 'ref', weight: 0.15 },
              { name: 'body', weight: 0.1 },
            ],
            threshold: 0.38,
            ignoreLocation: true,
            minMatchCharLength: 2,
          }),
        );
      },
    );
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2 || !fuse) return [];
    return fuse.search(q, { limit: 40 }).map((r) => r.item);
  }, [query, fuse]);

  const grouped = useMemo(() => {
    const map = new Map<SearchKind, SearchRecord[]>();
    for (const r of results) {
      const arr = map.get(r.kind) ?? [];
      arr.push(r);
      map.set(r.kind, arr);
    }
    return Array.from(map.entries()).sort(
      ([a], [b]) => KIND_META[a].order - KIND_META[b].order,
    );
  }, [results]);

  const showEmpty = !!fuse && query.trim().length >= 2 && results.length === 0;
  const preparing = !fuse && query.trim().length >= 2;

  return (
    <div className="px-4 sm:px-6">
      <div className="glass-strong sticky top-2 z-20 flex items-center gap-3 rounded-pill px-4 py-3">
        <Icon name="search" size={20} aria-hidden className="text-ink-faint" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search acts, verses, people, words…"
          className="w-full bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none"
          aria-label="Search"
          type="search"
          enterKeyHint="search"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-ink-muted"
            aria-label="Clear search"
          >
            <Icon name="x" size={15} aria-hidden />
          </button>
        )}
      </div>

      {/* Suggestions */}
      {query.trim().length < 2 && (
        <div className="mt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Try searching for</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="pill bg-white/8 px-3.5 py-1.5 text-sm text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12 hover:text-ink"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {preparing && (
        <p className="mt-8 text-center text-sm text-ink-faint">Preparing search…</p>
      )}

      {showEmpty && (
        <div className="mt-10 text-center text-ink-muted">
          <Icon name="search" size={28} aria-hidden className="mx-auto mb-3 text-ink-faint" />
          <p>No matches for “{query}”.</p>
          <p className="mt-1 text-sm text-ink-faint">Try a name, a theme, or a book.</p>
        </div>
      )}

      {grouped.length > 0 && (
        <div className="mt-5 space-y-6">
          {grouped.map(([kind, items]) => (
            <section key={kind}>
              <h2 className="mb-2.5 flex items-center gap-2 px-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
                <Icon name={KIND_META[kind].icon} size={14} aria-hidden />
                {KIND_META[kind].label}
                <span className="text-ink-faint/60">· {items.length}</span>
              </h2>
              <ul className="space-y-2">
                {items.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={r.href}
                      className="block rounded-card glass-soft p-3.5 transition-colors hover:bg-white/10"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-base leading-snug text-ink">
                          {r.title}
                        </span>
                        {r.subtitle && (
                          <span className="flex-none text-xs text-ink-faint">{r.subtitle}</span>
                        )}
                      </div>
                      {r.body && (
                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                          {r.body}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
