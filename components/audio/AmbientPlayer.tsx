'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createAmbient, type AmbientController } from '@/lib/ambientAudio';
import { readJSON, writeJSON, STORAGE_KEYS } from '@/lib/storage';
import { Icon } from '@/components/Icon';

/**
 * The ambient soundscape control — a small glass toggle, off by default.
 * Audio only ever starts from a user gesture (browser policy). If the listener
 * had it on previously, it resumes on their first interaction. Suspends when the
 * tab is hidden. Lives in the layout so the soundscape continues across routes.
 */
export function AmbientPlayer() {
  const [on, setOn] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const ctrlRef = useRef<AmbientController | null>(null);
  const startedRef = useRef(false);

  const enable = useCallback(async () => {
    if (startedRef.current) return;
    try {
      ctrlRef.current = createAmbient();
      await ctrlRef.current.start();
      startedRef.current = true;
    } catch {
      /* audio blocked — leave off */
    }
  }, []);

  const disable = useCallback(() => {
    ctrlRef.current?.stop();
    ctrlRef.current = null;
    startedRef.current = false;
  }, []);

  // Load saved preference; if "on", arm a one-time gesture to resume.
  useEffect(() => {
    const saved = readJSON<boolean>(STORAGE_KEYS.sound, false);
    setOn(saved);
    setHydrated(true);
    if (!saved) return;

    const resume = () => {
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('keydown', resume);
      void enable();
    };
    window.addEventListener('pointerdown', resume, { once: true });
    window.addEventListener('keydown', resume, { once: true });
    return () => {
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('keydown', resume);
    };
  }, [enable]);

  // The soundscape keeps playing when you leave the app / switch tabs — like a
  // music player. (We only nudge a Web-Audio context back awake if a browser
  // auto-suspended it; HTML-audio file playback continues on its own.)
  useEffect(() => {
    const onVis = () => {
      if (startedRef.current && !document.hidden && on) ctrlRef.current?.resume();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [on]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    writeJSON(STORAGE_KEYS.sound, next);
    if (next) void enable();
    else disable();
  };

  if (!hydrated) return null;

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Turn off ambient sound' : 'Turn on ambient sound'}
      title={on ? 'Ambient sound on' : 'Play ambient soundscape'}
      className="glass-strong fixed bottom-[6.75rem] left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-ink-muted shadow-glass transition-colors hover:text-ink md:bottom-6"
    >
      {/* breathing pulse ring when playing */}
      {on && (
        <span
          aria-hidden
          className="absolute inset-0 animate-breathe rounded-full"
          style={{ boxShadow: '0 0 22px 2px rgba(103,232,249,0.5)' }}
        />
      )}
      {on ? (
        <EqualizerIcon />
      ) : (
        <Icon name="volume-off" size={20} aria-hidden />
      )}
    </button>
  );
}

/** A tiny animated three-bar equalizer shown while sound is on. */
function EqualizerIcon() {
  return (
    <span aria-hidden className="relative flex h-4 items-end gap-[2px]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-[2.5px] rounded-full bg-aqua"
          style={{
            height: '100%',
            animation: `eq 1.1s ease-in-out ${i * 0.18}s infinite alternate`,
            transformOrigin: 'bottom',
          }}
        />
      ))}
      <style>{`@keyframes eq { 0% { transform: scaleY(0.35); } 100% { transform: scaleY(1); } }`}</style>
    </span>
  );
}
