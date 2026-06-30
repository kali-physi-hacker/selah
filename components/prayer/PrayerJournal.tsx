'use client';

import { useState } from 'react';
import { usePrayer } from '@/lib/usePrayer';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';

function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  return new Date(iso).toLocaleDateString();
}

export function PrayerJournal() {
  const { prayers, hydrated, add, toggleAnswered, remove } = usePrayer();
  const [text, setText] = useState('');

  const submit = () => {
    if (!text.trim()) return;
    add(text);
    track('prayer_add'); // event only — never the prayer's content
    setText('');
  };

  const open = prayers.filter((p) => !p.answered);
  const answered = prayers.filter((p) => p.answered);

  return (
    <div>
      <div className="rounded-control border border-white/12 bg-white/[0.04] p-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="A request, a thanksgiving, a name to lift up…"
          rows={2}
          className="w-full resize-none bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
        />
        <div className="mt-1 flex justify-end">
          <button
            onClick={submit}
            disabled={!text.trim()}
            className="flex items-center gap-1.5 rounded-pill bg-white/12 px-4 py-1.5 text-sm text-ink ring-1 ring-white/15 transition-opacity disabled:opacity-40"
          >
            <Icon name="plus" size={15} aria-hidden /> Add prayer
          </button>
        </div>
      </div>

      {hydrated && prayers.length === 0 && (
        <p className="mt-4 text-center text-sm text-ink-faint">
          Your prayers will gather here — and you can mark them answered as God moves.
        </p>
      )}

      {open.length > 0 && (
        <ul className="mt-4 space-y-2">
          {open.map((p) => (
            <li key={p.id} className="rounded-card glass-soft p-3.5">
              <p className="text-sm leading-relaxed text-ink">{p.text}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[0.7rem] text-ink-faint">{timeAgo(p.createdAt)}</span>
                <div className="flex items-center gap-1">
                  <button onClick={() => toggleAnswered(p.id)} className="flex items-center gap-1 rounded-pill px-2.5 py-1 text-xs text-aqua hover:bg-white/8" title="Mark answered">
                    <Icon name="check-circle" size={14} aria-hidden /> Answered
                  </button>
                  <button onClick={() => remove(p.id)} className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted" aria-label="Remove">
                    <Icon name="x" size={14} aria-hidden />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {answered.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 flex items-center gap-1.5 px-1 text-xs font-medium uppercase tracking-[0.16em] text-light-warm/90">
            <Icon name="sparkles" size={13} aria-hidden /> Answered · {answered.length}
          </p>
          <ul className="space-y-2">
            {answered.map((p) => (
              <li key={p.id} className="rounded-card bg-white/[0.03] p-3.5 ring-1 ring-white/8">
                <p className="text-sm leading-relaxed text-ink-muted line-through decoration-aqua/40">{p.text}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[0.7rem] text-aqua/80">answered {p.answeredAt ? timeAgo(p.answeredAt) : ''}</span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => toggleAnswered(p.id)} className="rounded-pill px-2.5 py-1 text-xs text-ink-faint hover:text-ink-muted">Undo</button>
                    <button onClick={() => remove(p.id)} className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted" aria-label="Remove">
                      <Icon name="x" size={14} aria-hidden />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
