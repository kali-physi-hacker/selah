'use client';

import { useEffect, useState } from 'react';
import { AMBIENT_TRACKS, DEFAULT_TRACK_ID, SOUND_TRACK_KEY } from '@/lib/ambientAudio';
import { readJSON, writeJSON } from '@/lib/storage';
import { Icon } from '@/components/Icon';

/** Choose the background instrumental. Switches live if sound is already playing. */
export function SoundPicker() {
  const [selected, setSelected] = useState<string>(DEFAULT_TRACK_ID);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSelected(readJSON<string>(SOUND_TRACK_KEY, DEFAULT_TRACK_ID));
    setHydrated(true);
  }, []);

  const choose = (id: string) => {
    setSelected(id);
    writeJSON(SOUND_TRACK_KEY, id); // → 'selah:storage' → the player switches if playing
  };

  return (
    <div>
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
