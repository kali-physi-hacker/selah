'use client';

import { useEffect, useState } from 'react';
import {
  AMBIENT_TRACKS,
  DEFAULT_TRACK_ID,
  SOUND_TRACK_KEY,
  SOUND_VOLUME_KEY,
  DEFAULT_VOLUME,
} from '@/lib/ambientAudio';
import { readJSON, writeJSON } from '@/lib/storage';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';

/** Choose the background instrumental + its volume. Both apply live while playing. */
export function SoundPicker() {
  const [selected, setSelected] = useState<string>(DEFAULT_TRACK_ID);
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSelected(readJSON<string>(SOUND_TRACK_KEY, DEFAULT_TRACK_ID));
    setVolume(readJSON<number>(SOUND_VOLUME_KEY, DEFAULT_VOLUME));
    setHydrated(true);
  }, []);

  const choose = (id: string) => {
    setSelected(id);
    writeJSON(SOUND_TRACK_KEY, id); // → 'selah:storage' → the player switches if playing
    track('sound_change', { id });
  };

  const changeVolume = (pct: number) => {
    const v = Math.min(1, Math.max(0, pct / 100));
    setVolume(v);
    writeJSON(SOUND_VOLUME_KEY, v); // → 'selah:storage' → the player adjusts live
  };

  return (
    <div>
      <div className="mb-3 rounded-card glass-soft p-3.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-ink">
            <Icon name={volume === 0 ? 'volume-off' : 'volume-on'} size={15} aria-hidden /> Volume
          </span>
          <span className="text-xs tabular-nums text-ink-faint">{Math.round(volume * 100)}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(volume * 100)}
          onChange={(e) => changeVolume(Number(e.target.value))}
          aria-label="Instrumental volume"
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-aqua"
        />
      </div>
      <ul className="space-y-2">
        {AMBIENT_TRACKS.map((t) => {
          const active = hydrated && selected === t.id;
          return (
            <li key={t.id}>
              <button
                onClick={() => choose(t.id)}
                aria-pressed={active}
                className={`flex w-full items-center gap-3 rounded-card p-3.5 text-left transition-colors ${
                  active ? 'glass-strong ring-1 ring-aqua/50' : 'glass-soft hover:bg-white/10'
                }`}
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/8 text-light-warm">
                  <Icon name={t.kind === 'generative' ? 'sparkles' : 'volume-on'} size={16} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base text-ink">{t.label}</p>
                  {t.credit && <p className="truncate text-xs text-ink-faint">{t.credit}</p>}
                </div>
                {active && <Icon name="check-circle" size={18} aria-hidden className="flex-none text-aqua" />}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 px-1 text-xs leading-relaxed text-ink-faint">
        Tap the sound button (lower-left of any screen) to play or pause. More instrumentals
        can be added any time.
      </p>
    </div>
  );
}
