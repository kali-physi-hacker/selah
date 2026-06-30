'use client';

import { useEffect, useRef, useState } from 'react';
import {
  createAmbient,
  DEFAULT_TRACK_ID,
  SOUND_TRACK_KEY,
  SOUND_VOLUME_KEY,
  DEFAULT_VOLUME,
  type AmbientController,
} from '@/lib/ambientAudio';
import { readJSON } from '@/lib/storage';
import { playChime, primeChime } from '@/lib/chime';
import { usePrayerRoom } from '@/lib/usePrayerRoom';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const ACCENT = '#FDE68A';
// Multiples of 3 & 7 for the shorter watches, then long hours of prayer.
const DURATIONS = [3, 7, 12, 21, 30, 60, 120, 180];
const durLabel = (m: number) => (m % 60 === 0 && m >= 60 ? `${m / 60}h` : `${m} min`);
const fmt = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${m}:${String(sec).padStart(2, '0')}`;
};
type Phase = 'idle' | 'running' | 'paused' | 'done';

export function PrayerSession() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [duration, setDuration] = useState(7);
  const [isCustom, setIsCustom] = useState(false);
  const [customMin, setCustomMin] = useState(45);
  const [elapsed, setElapsed] = useState(0);
  const [revelation, setRevelation] = useState('');
  const [revealOpen, setRevealOpen] = useState(false);
  const [sound, setSound] = useState(true);
  const [savedMin, setSavedMin] = useState(0);
  const { addSession } = usePrayerRoom();
  const tick = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const ctrl = useRef<AmbientController | null>(null);

  const startAudio = async () => {
    if (ctrl.current) return;
    try {
      ctrl.current = createAmbient(readJSON<string>(SOUND_TRACK_KEY, DEFAULT_TRACK_ID));
      await ctrl.current.start();
      ctrl.current.setVolume(readJSON<number>(SOUND_VOLUME_KEY, DEFAULT_VOLUME));
    } catch {
      /* audio blocked */
    }
  };
  const stopAudio = () => {
    ctrl.current?.stop();
    ctrl.current = null;
  };
  useEffect(() => () => stopAudio(), []);

  const begin = () => {
    primeChime();
    playChime(528);
    setElapsed(0);
    setRevelation('');
    setRevealOpen(false);
    setPhase('running');
    if (sound) void startAudio();
    track('prayer_start', { minutes: duration });
  };

  const finish = () => {
    clearTimeout(tick.current);
    stopAudio();
    playChime(396);
    const minutes = Math.max(1, Math.round(elapsed / 60));
    addSession(minutes, revelation);
    track('prayer_complete', { minutes });
    setSavedMin(minutes);
    setPhase('done');
  };

  // one-second count-up while running
  useEffect(() => {
    if (phase !== 'running') return;
    tick.current = setTimeout(() => setElapsed((e) => e + 1), 1000);
    return () => clearTimeout(tick.current);
  }, [phase, elapsed]);

  // auto-finish for a set duration
  useEffect(() => {
    if (phase === 'running' && duration > 0 && elapsed >= duration * 60) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, elapsed, duration]);

  const toggleSound = () => {
    setSound((s) => {
      const next = !s;
      if (phase === 'running') {
        if (next) void startAudio();
        else stopAudio();
      }
      return next;
    });
  };

  const display = duration > 0 ? Math.max(0, duration * 60 - elapsed) : elapsed;

  if (phase === 'idle') {
    return (
      <div className="rounded-card glass p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          Enter prayer with a gentle instrumental — from a short watch to long hours. Capture any
          revelation or vision as it comes.
        </p>
        <p className="mb-3 mt-4 text-xs uppercase tracking-[0.18em] text-ink-faint">How long?</p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((m) => {
            const active = !isCustom && duration === m;
            return (
              <button
                key={m}
                onClick={() => {
                  setDuration(m);
                  setIsCustom(false);
                }}
                aria-pressed={active}
                className="rounded-pill px-4 py-2 text-sm font-medium transition-colors"
                style={
                  active
                    ? { background: hexToRgba(ACCENT, 0.28), color: 'rgb(var(--ink))', boxShadow: `inset 0 0 0 1px ${hexToRgba(ACCENT, 0.5)}` }
                    : { background: 'rgb(var(--surface) / 0.06)', color: 'rgb(var(--ink) / 0.7)' }
                }
              >
                {durLabel(m)}
              </button>
            );
          })}
          <button
            onClick={() => {
              setIsCustom(true);
              setDuration(customMin);
            }}
            aria-pressed={isCustom}
            className="rounded-pill px-4 py-2 text-sm font-medium transition-colors"
            style={
              isCustom
                ? { background: hexToRgba(ACCENT, 0.28), color: 'rgb(var(--ink))', boxShadow: `inset 0 0 0 1px ${hexToRgba(ACCENT, 0.5)}` }
                : { background: 'rgb(var(--surface) / 0.06)', color: 'rgb(var(--ink) / 0.7)' }
            }
          >
            Custom
          </button>
        </div>

        {isCustom && (
          <div className="mt-3 flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={600}
              value={customMin}
              onChange={(e) => {
                const v = Math.max(1, Math.min(600, Number(e.target.value) || 1));
                setCustomMin(v);
                setDuration(v);
              }}
              aria-label="Custom minutes"
              className="w-24 rounded-control border border-white/15 bg-white/[0.06] px-3 py-2 text-sm text-ink focus:border-white/30 focus:outline-none"
            />
            <span className="text-sm text-ink-muted">minutes</span>
          </div>
        )}
        <label className="mt-4 flex items-center gap-2.5 text-sm text-ink-muted">
          <input type="checkbox" checked={sound} onChange={toggleSound} className="h-4 w-4 accent-light-warm" />
          Play instrumental during prayer
        </label>
        <button
          onClick={begin}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-card px-5 py-4 font-medium text-ink transition-transform active:scale-[0.99]"
          style={{ background: `linear-gradient(135deg, ${hexToRgba(ACCENT, 0.34)}, rgb(var(--surface) / 0.05))`, border: `1px solid ${hexToRgba(ACCENT, 0.45)}` }}
        >
          <Icon name="play" size={18} aria-hidden /> Begin prayer · {durLabel(duration)}
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center"
      style={{ background: 'rgba(8,6,2,0.94)', backdropFilter: 'blur(12px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Prayer"
    >
      <button onClick={() => (phase === 'done' ? setPhase('idle') : finish())} className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink" aria-label="End prayer">
        <Icon name="x" size={20} aria-hidden />
      </button>

      {phase === 'done' ? (
        <div className="animate-fade-in">
          <div className="mx-auto mb-5 h-24 w-24 animate-breathe rounded-full" style={{ background: `radial-gradient(circle at 50% 42%, #FFFFFF, ${hexToRgba(ACCENT, 0.7)} 40%, ${hexToRgba('#F59E0B', 0.25)} 70%, transparent)` }} />
          <p className="scripture text-2xl text-ink">Amen.</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
            {savedMin} {savedMin === 1 ? 'minute' : 'minutes'} in his presence
            {revelation.trim() ? ' · revelation saved' : ''}. Carry it with you.
          </p>
          <button onClick={() => setPhase('idle')} className="pill mt-6 bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15">
            <Icon name="rotate" size={15} aria-hidden /> Again
          </button>
        </div>
      ) : (
        <>
          <div className="animate-breathe rounded-full" style={{ width: 150, height: 150, background: `radial-gradient(circle at 50% 42%, #FFFFFF, ${hexToRgba(ACCENT, 0.6)} 38%, ${hexToRgba('#F59E0B', 0.22)} 64%, transparent 76%)` }} aria-hidden />
          <p className="mt-3 font-display text-4xl tabular-nums text-ink">{fmt(display)}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-light-warm/90">
            {duration > 0 ? 'remaining' : 'in prayer'}
          </p>

          {revealOpen ? (
            <textarea
              value={revelation}
              onChange={(e) => setRevelation(e.target.value)}
              placeholder="Write the revelation, vision, or word you're receiving…"
              rows={4}
              autoFocus
              className="mt-5 w-full max-w-sm resize-none rounded-control border border-white/15 bg-white/[0.06] p-3 text-sm text-ink placeholder:text-ink-faint focus:border-white/30 focus:outline-none"
            />
          ) : (
            <button onClick={() => setRevealOpen(true)} className="mt-5 flex items-center gap-2 rounded-pill bg-white/8 px-4 py-2 text-sm text-ink-muted ring-1 ring-white/12 hover:text-ink">
              <Icon name="feather" size={15} aria-hidden /> Capture a revelation
            </button>
          )}

          <div className="mt-7 flex items-center justify-center gap-3">
            {phase === 'running' ? (
              <button onClick={() => setPhase('paused')} className="pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15"><Icon name="pause" size={15} aria-hidden /> Pause</button>
            ) : (
              <button onClick={() => setPhase('running')} className="pill bg-white/14 px-5 py-2.5 text-sm text-ink ring-1 ring-white/20"><Icon name="play" size={15} aria-hidden /> Resume</button>
            )}
            <button onClick={toggleSound} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-ink-muted ring-1 ring-white/12" aria-label={sound ? 'Mute' : 'Unmute'}>
              <Icon name={sound ? 'volume-on' : 'volume-off'} size={16} aria-hidden />
            </button>
            <button onClick={finish} className="pill bg-white/8 px-5 py-2.5 text-sm text-ink-muted ring-1 ring-white/12">End</button>
          </div>
        </>
      )}
    </div>
  );
}
