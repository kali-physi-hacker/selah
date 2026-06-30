'use client';

import { useState } from 'react';
import type { VerseRef } from '@/content/types';
import { useBookmarks, verseBookmarkId, type Bookmark } from '@/lib/useBookmarks';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';
import { FlashcardPractice } from './FlashcardPractice';

interface Props {
  verses: VerseRef[];
  actSlug: string;
  actTitle: string;
  accent: string;
}

/** One memory verse with bookmark + personal note. */
function VerseRow({
  verse,
  actSlug,
  actTitle,
  accent,
}: {
  verse: VerseRef;
  actSlug: string;
  actTitle: string;
  accent: string;
}) {
  const { has, toggle, getNote, setNote, hydrated } = useBookmarks();
  const [noteOpen, setNoteOpen] = useState(false);
  const id = verseBookmarkId(verse.ref);
  const saved = hydrated && has(id);
  const note = getNote(verse.ref);

  const bookmark: Bookmark = {
    id,
    kind: 'verse',
    ref: verse.ref,
    label: verse.ref,
    text: verse.text,
    translation: verse.translation,
    actSlug,
    actTitle,
    createdAt: new Date().toISOString(),
  };

  return (
    <li
      className="rounded-card p-4"
      style={{ background: hexToRgba(accent, 0.07), border: `1px solid ${hexToRgba(accent, 0.18)}` }}
    >
      {verse.text && (
        <p
          data-hl-block={`${actSlug}:verse-${verse.ref}`}
          className="scripture text-base leading-relaxed text-ink"
        >
          “{verse.text}”
        </p>
      )}
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
          {verse.ref} · {verse.translation ?? 'WEB'}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setNoteOpen((o) => !o)}
            aria-expanded={noteOpen}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              note ? 'text-aqua' : 'text-ink-faint hover:text-ink-muted'
            }`}
            title={note ? 'Edit your note' : 'Add a note'}
          >
            <Icon name={note ? 'bookmark-check' : 'quote'} size={16} aria-hidden />
            <span className="sr-only">Note</span>
          </button>
          <button
            onClick={() => toggle(bookmark)}
            aria-pressed={saved}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              saved ? 'text-light-warm' : 'text-ink-faint hover:text-ink-muted'
            }`}
            title={saved ? 'Remove bookmark' : 'Add to bookmarks'}
          >
            <Icon name={saved ? 'bookmark-check' : 'bookmark'} size={16} aria-hidden />
            <span className="sr-only">{saved ? 'Remove bookmark' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {noteOpen && (
        <div className="mt-3">
          <textarea
            value={note}
            onChange={(e) => setNote(verse.ref, e.target.value)}
            placeholder="A thought, a prayer, what this stirs in you…"
            rows={3}
            className="w-full resize-none rounded-control border border-white/12 bg-white/5 p-3 text-sm text-ink placeholder:text-ink-faint focus:border-white/25 focus:outline-none"
          />
          <p className="mt-1 text-[0.7rem] text-ink-faint">Saved on this device as you type.</p>
        </div>
      )}
    </li>
  );
}

export function MemoryVerses({ verses, actSlug, actTitle, accent }: Props) {
  const [practicing, setPracticing] = useState(false);
  const withText = verses.filter((v) => v.text);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-ink-muted">
          {verses.length} verse{verses.length === 1 ? '' : 's'} to hide in your heart.
        </p>
        {withText.length > 0 && (
          <button
            onClick={() => setPracticing(true)}
            className="pill bg-white/8 px-3 py-1.5 text-xs text-ink ring-1 ring-white/15 transition-colors hover:bg-white/12"
          >
            <Icon name="play" size={14} aria-hidden /> Practice
          </button>
        )}
      </div>

      <ul className="space-y-3">
        {verses.map((v) => (
          <VerseRow key={v.ref} verse={v} actSlug={actSlug} actTitle={actTitle} accent={accent} />
        ))}
      </ul>

      {practicing && (
        <FlashcardPractice verses={withText} accent={accent} onClose={() => setPracticing(false)} />
      )}
    </div>
  );
}
