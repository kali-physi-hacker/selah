'use client';

import { useState } from 'react';
import { useNotebook, type Note } from '@/lib/useNotebook';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';

const preview = (body: string) => body.replace(/\s+/g, ' ').trim().slice(0, 120);
function when(iso: string): string {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (d <= 0) return 'today';
  if (d === 1) return 'yesterday';
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
}

export function NotesClient() {
  const { notes, hydrated, upsert, remove } = useNotebook();
  const [editing, setEditing] = useState<Note | 'new' | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const open = (n: Note | 'new') => {
    setEditing(n);
    setTitle(n === 'new' ? '' : n.title);
    setBody(n === 'new' ? '' : n.body);
  };

  const save = () => {
    if (!title.trim() && !body.trim()) {
      setEditing(null);
      return;
    }
    const isNew = editing === 'new';
    upsert({
      id: editing && editing !== 'new' ? editing.id : undefined,
      title: title.trim() || 'Untitled',
      body,
    });
    if (isNew) track('note_add');
    setEditing(null);
  };

  if (editing) {
    const existing = editing !== 'new';
    return (
      <div className="rounded-card glass p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full bg-transparent font-display text-xl text-ink placeholder:text-ink-faint focus:outline-none"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write freely — a thought, a study note, a word you received…"
          rows={12}
          autoFocus
          className="mt-3 w-full resize-none bg-transparent text-sm leading-relaxed text-ink placeholder:text-ink-faint focus:outline-none"
        />
        <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
          <div>
            {existing && (
              <button
                onClick={() => {
                  remove((editing as Note).id);
                  setEditing(null);
                }}
                className="flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm text-rose-300/80 hover:bg-white/8"
              >
                <Icon name="x" size={14} aria-hidden /> Delete
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setEditing(null)} className="rounded-pill px-3 py-1.5 text-sm text-ink-muted hover:bg-white/8">
              Cancel
            </button>
            <button onClick={save} className="rounded-pill bg-white/14 px-4 py-1.5 text-sm text-ink ring-1 ring-white/20">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => open('new')}
        className="flex w-full items-center justify-center gap-2 rounded-card glass px-5 py-4 font-medium text-ink transition-colors hover:bg-white/[0.08]"
      >
        <Icon name="plus" size={18} aria-hidden /> New note
      </button>

      {hydrated && notes.length === 0 && (
        <p className="mt-5 text-center text-sm text-ink-faint">
          Nothing yet. Capture what you&rsquo;re learning, praying, or wrestling with — it stays on
          this device (and syncs if you sign in).
        </p>
      )}

      <ul className="mt-3 space-y-2">
        {notes.map((n) => (
          <li key={n.id}>
            <button
              onClick={() => open(n)}
              className="w-full rounded-card glass-soft p-4 text-left transition-colors hover:bg-white/10"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="truncate font-display text-base text-ink">{n.title}</p>
                <span className="flex-none text-[0.7rem] text-ink-faint">{when(n.updatedAt)}</span>
              </div>
              {n.body.trim() && (
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">{preview(n.body)}</p>
              )}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-5 px-1 text-center text-xs text-ink-faint">
        Looking for notes on a specific verse? Those live with your bookmarks in Saved.
      </p>
    </div>
  );
}
