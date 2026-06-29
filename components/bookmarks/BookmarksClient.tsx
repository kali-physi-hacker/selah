'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useBookmarks } from '@/lib/useBookmarks';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

export function BookmarksClient() {
  const { bookmarks, notes, hydrated, remove, setNote } = useBookmarks();

  const verseBookmarks = useMemo(() => bookmarks.filter((b) => b.kind === 'verse'), [bookmarks]);
  const actBookmarks = useMemo(() => bookmarks.filter((b) => b.kind === 'act'), [bookmarks]);

  // Notes on verses that aren't currently bookmarked (so they aren't lost).
  const standaloneNotes = useMemo(() => {
    const bookmarkedRefs = new Set(verseBookmarks.map((b) => b.ref));
    return Object.entries(notes).filter(([ref, text]) => text.trim() && !bookmarkedRefs.has(ref));
  }, [notes, verseBookmarks]);

  if (!hydrated) {
    return (
      <div className="space-y-3 px-4 sm:px-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-card glass-soft" aria-hidden />
        ))}
      </div>
    );
  }

  const isEmpty =
    verseBookmarks.length === 0 && actBookmarks.length === 0 && standaloneNotes.length === 0;

  if (isEmpty) {
    return (
      <div className="px-6 py-16 text-center">
        <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/8 text-light-warm">
          <Icon name="bookmark" size={28} aria-hidden />
        </span>
        <h2 className="font-display text-xl text-ink">Nothing saved yet</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
          As you journey, tap the bookmark on any verse or act to keep it here — and add your own
          notes and prayers.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15 transition-colors hover:bg-white/14"
        >
          <Icon name="compass" size={16} aria-hidden /> Start exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-7 px-4 sm:px-6">
      {verseBookmarks.length > 0 && (
        <section>
          <h2 className="mb-2.5 px-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
            Saved verses · {verseBookmarks.length}
          </h2>
          <ul className="space-y-3">
            {verseBookmarks.map((b) => (
              <li key={b.id} className="rounded-card glass p-4">
                {b.text && <p className="scripture text-base leading-relaxed text-ink">“{b.text}”</p>}
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                    {b.ref} · {b.translation ?? 'WEB'}
                  </span>
                  <div className="flex items-center gap-1">
                    {b.actSlug && (
                      <Link
                        href={`/act/${b.actSlug}#verses`}
                        className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted"
                        title={`Go to ${b.actTitle ?? 'act'}`}
                      >
                        <Icon name="arrow-right" size={15} aria-hidden />
                      </Link>
                    )}
                    <button
                      onClick={() => remove(b.id)}
                      className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted"
                      aria-label="Remove bookmark"
                    >
                      <Icon name="x" size={15} aria-hidden />
                    </button>
                  </div>
                </div>
                {notes[b.ref] && (
                  <div className="mt-3 rounded-control border border-white/10 bg-white/[0.04] p-3">
                    <p className="mb-1 text-[0.65rem] uppercase tracking-wider text-ink-faint">
                      Your note
                    </p>
                    <textarea
                      value={notes[b.ref]}
                      onChange={(e) => setNote(b.ref, e.target.value)}
                      rows={2}
                      className="w-full resize-none bg-transparent text-sm text-ink-muted focus:outline-none"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {actBookmarks.length > 0 && (
        <section>
          <h2 className="mb-2.5 px-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
            Saved acts · {actBookmarks.length}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {actBookmarks.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/act/${b.actSlug}`}
                  className="flex items-center justify-between gap-2 rounded-card glass p-4 transition-colors hover:bg-white/10"
                  style={
                    b.accent
                      ? { boxShadow: `inset 0 0 0 1px ${hexToRgba(b.accent, 0.3)}` }
                      : undefined
                  }
                >
                  <span className="font-display text-base text-ink">{b.actTitle ?? b.label}</span>
                  <Icon name="chevron-right" size={18} aria-hidden className="text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {standaloneNotes.length > 0 && (
        <section>
          <h2 className="mb-2.5 px-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
            Your notes · {standaloneNotes.length}
          </h2>
          <ul className="space-y-3">
            {standaloneNotes.map(([ref, text]) => (
              <li key={ref} className="rounded-card glass-soft p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    {ref}
                  </span>
                  <button
                    onClick={() => setNote(ref, '')}
                    className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted"
                    aria-label="Clear note"
                  >
                    <Icon name="x" size={15} aria-hidden />
                  </button>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
