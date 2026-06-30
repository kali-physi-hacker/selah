'use client';

import { useState } from 'react';
import { PrayerSession } from './PrayerSession';
import { PrayerJournal } from './PrayerJournal';
import {
  usePrayerRoom,
  CADENCE_LABEL,
  CADENCE_TARGET,
  type Cadence,
} from '@/lib/usePrayerRoom';
import { SectionPanel } from '@/components/SectionPanel';
import { Icon } from '@/components/Icon';

const CADENCES: Cadence[] = ['daily', 'thrice-weekly', 'weekly', 'off'];

function revWhen(iso: string): string {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (d <= 0) return 'today';
  if (d === 1) return 'yesterday';
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
}

export function PrayerClient() {
  const { stats, revelations, hydrated, streak, daysThisWeek, addRevelation, removeRevelation, setCadence } =
    usePrayerRoom();
  const [rev, setRev] = useState('');

  const target = CADENCE_TARGET[stats.cadence];
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay() + i);
    return d.toISOString().slice(0, 10);
  });
  const prayed = new Set(stats.days);

  const submitRev = () => {
    addRevelation(rev);
    setRev('');
  };

  return (
    <div className="space-y-5 px-4 sm:px-6">
      <PrayerSession />

      {/* Cadence + consistency */}
      <SectionPanel id="cadence" eyebrow="A rhythm of prayer" title="Cadence" icon="flame" accent="#FDE68A">
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-control bg-white/[0.05] p-3 text-center">
            <Icon name="flame" size={18} aria-hidden className={`mx-auto mb-1 ${streak > 0 ? 'text-orange-300' : 'text-ink-faint'}`} />
            <div className="font-display text-xl text-ink">{streak}</div>
            <div className="text-[0.62rem] text-ink-faint">day streak</div>
          </div>
          <div className="rounded-control bg-white/[0.05] p-3 text-center">
            <Icon name="hourglass" size={18} aria-hidden className="mx-auto mb-1 text-ink-faint" />
            <div className="font-display text-xl text-ink">{stats.totalMinutes}</div>
            <div className="text-[0.62rem] text-ink-faint">total minutes</div>
          </div>
          <div className="rounded-control bg-white/[0.05] p-3 text-center">
            <Icon name="check-circle" size={18} aria-hidden className="mx-auto mb-1 text-ink-faint" />
            <div className="font-display text-xl text-ink">{stats.sessions}</div>
            <div className="text-[0.62rem] text-ink-faint">prayers</div>
          </div>
        </div>

        {/* this week */}
        <div className="mb-4 rounded-control bg-white/[0.04] p-3.5">
          <div className="mb-2 flex items-center justify-between text-xs text-ink-muted">
            <span>This week</span>
            {target > 0 && (
              <span className={daysThisWeek >= target ? 'text-aqua' : 'text-ink-faint'}>
                {daysThisWeek}/{target} days{daysThisWeek >= target ? ' ✓' : ''}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            {weekDays.map((d, i) => (
              <span
                key={d}
                title={d}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[0.6rem]"
                style={prayed.has(d) ? { background: 'rgba(253,230,138,0.25)', color: '#FDE68A' } : { background: 'rgba(255,255,255,0.05)', color: 'rgba(240,253,250,0.4)' }}
              >
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
              </span>
            ))}
          </div>
        </div>

        <p className="mb-2 text-xs uppercase tracking-[0.16em] text-ink-faint">Your rhythm</p>
        <div className="flex flex-wrap gap-2">
          {CADENCES.map((c) => (
            <button
              key={c}
              onClick={() => setCadence(c)}
              aria-pressed={hydrated && stats.cadence === c}
              className={`rounded-pill px-3.5 py-1.5 text-sm transition-colors ${
                hydrated && stats.cadence === c ? 'bg-white/16 text-ink ring-1 ring-white/20' : 'bg-white/6 text-ink-muted hover:bg-white/10'
              }`}
            >
              {CADENCE_LABEL[c]}
            </button>
          ))}
        </div>
      </SectionPanel>

      {/* Revelations & visions */}
      <SectionPanel id="revelations" eyebrow="What he shows you" title="Revelations & visions" icon="eye" accent="#FDE68A">
        <div className="rounded-control border border-white/12 bg-white/[0.04] p-3">
          <textarea
            value={rev}
            onChange={(e) => setRev(e.target.value)}
            placeholder="A word, a picture, an impression you received…"
            rows={2}
            className="w-full resize-none bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
          <div className="mt-1 flex justify-end">
            <button onClick={submitRev} disabled={!rev.trim()} className="flex items-center gap-1.5 rounded-pill bg-white/12 px-4 py-1.5 text-sm text-ink ring-1 ring-white/15 transition-opacity disabled:opacity-40">
              <Icon name="plus" size={15} aria-hidden /> Add
            </button>
          </div>
        </div>

        {hydrated && revelations.length === 0 && (
          <p className="mt-4 text-center text-sm text-ink-faint">
            What God reveals in prayer will gather here.
          </p>
        )}
        <ul className="mt-3 space-y-2">
          {revelations.map((r) => (
            <li key={r.id} className="rounded-card glass-soft p-3.5">
              <p className="scripture text-sm leading-relaxed text-ink">{r.text}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[0.7rem] text-ink-faint">
                  {revWhen(r.date)}
                  {r.minutes ? ` · in ${r.minutes}-min prayer` : ''}
                </span>
                <button onClick={() => removeRevelation(r.id)} className="rounded-full p-1.5 text-ink-faint hover:text-ink-muted" aria-label="Remove">
                  <Icon name="x" size={14} aria-hidden />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </SectionPanel>

      {/* Requests */}
      <SectionPanel id="requests" eyebrow="Lift them up" title="Prayer requests" icon="mail" accent="#FDE68A">
        <PrayerJournal />
      </SectionPanel>
    </div>
  );
}
