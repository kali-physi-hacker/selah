'use client';

import { useEffect, useRef, useState } from 'react';
import { BreathOrb } from '@/components/three/BreathOrb';
import { playChime, primeChime } from '@/lib/chime';
import { useMeditation } from '@/lib/useMeditation';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const DURATIONS = [1, 3, 5, 10, 15, 20];
const PROMPTS = [
  'Be still, and know that I am God.',
  'Breathe slowly. You are held.',
  'Let the noise settle. He is here.',
  'Release your striving. Receive his peace.',
  'You are known. You are loved. Rest.',
];

type Phase = 'idle' | 'running' | 'paused' | 'done';
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export function MeditationSession({ accent = '#67E8F9' }: { accent?: string }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [minutes, setMinutes] = useState(5);
  const [remaining, setRemaining] = useState(0);
  const { addMinutes } = useMeditation();
  const tick = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const begin = () => {
    primeChime();
    playChime(528);
    setRemaining(minutes * 60);
    setPhase('running');
  };

  // one-second countdown while running
  useEffect(() => {
    if (phase !== 'running' || remaining <= 0) return;
    tick.current = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(tick.current);
  }, [phase, remaining]);

  // completion
  useEffect(() => {
    if (phase === 'running' && remaining === 0) {
      playChime(396);
      addMinutes(minutes);
      setPhase('done');
    }
  }, [phase, remaining, minutes, addMinutes]);

  const endEarly = () => {
    clearTimeout(tick.current);
    const done = minutes - Math.ceil(remaining / 60);
    if (done > 0) addMinutes(done);
    playChime(396);
    setPhase('done');
  };
  const close = () => setPhase('idle');

  const promptIndex = Math.min(
    PROMPTS.length - 1,
    Math.floor(((minutes * 60 - remaining) / 25) % PROMPTS.length),
  );

  if (phase === 'idle') {
    return (
      <div className="rounded-card glass p-5">
        <p className="mb-1 text-sm leading-relaxed text-ink-muted">
          A timed space to breathe and be still — with a soft bell to begin and end.
        </p>
        <p className="mb-3 mt-4 text-xs uppercase tracking-[0.18em] text-ink-faint">How long?</p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((m) => (
            <button
              key={m}
              onClick={() => setMinutes(m)}
              aria-pressed={minutes === m}
              className="rounded-pill px-4 py-2 text-sm font-medium transition-colors"
              style={
                minutes === m
                  ? { background: hexToRgba(accent, 0.3), color: '#F0FDFA', boxShadow: `inset 0 0 0 1px ${hexToRgba(accent, 0.5)}` }
                  : { background: 'rgba(255,255,255,0.06)', color: 'rgba(240,253,250,0.7)' }
              }
            >
              {m} min
            </button>
          ))}
        </div>
        <button
          onClick={begin}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-card px-5 py-4 font-medium text-ink transition-transform active:scale-[0.99]"
          style={{ background: `linear-gradient(135deg, ${hexToRgba(accent, 0.32)}, rgba(255,255,255,0.05))`, border: `1px solid ${hexToRgba(accent, 0.4)}` }}
        >
          <Icon name="play" size={18} aria-hidden /> Begin {minutes}-minute stillness
        </button>
      </div>
    );
  }

  // running / paused / done → focused overlay
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center"
      style={{ background: 'rgba(2,16,15,0.9)', backdropFilter: 'blur(10px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Stillness"
    >
      <button
        onClick={close}
        className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink"
        aria-label="Close"
      >
        <Icon name="x" size={20} aria-hidden />
      </button>

      {phase === 'done' ? (
        <div className="animate-fade-in">
          <div
            className="mx-auto mb-5 h-24 w-24 animate-breathe rounded-full"
            style={{ background: `radial-gradient(circle at 50% 45%, #FFFFFF, ${hexToRgba('#FDE68A', 0.6)} 40%, ${hexToRgba(accent, 0.2)} 70%, transparent)` }}
          />
          <p className="scripture text-2xl text-ink">Well done.</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
            You gave {minutes} {minutes === 1 ? 'minute' : 'minutes'} to stillness. Carry his
            peace with you.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => setPhase('idle')} className="pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15">
              <Icon name="rotate" size={15} aria-hidden /> Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <BreathOrb accent={accent} />
          <p className="mt-2 font-display text-4xl tabular-nums text-ink">{fmt(remaining)}</p>
          <p key={promptIndex} className="scripture mt-3 max-w-xs animate-fade-in text-base text-ink-muted">
            {PROMPTS[promptIndex]}
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            {phase === 'running' ? (
              <button onClick={() => setPhase('paused')} className="pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15">
                <Icon name="pause" size={15} aria-hidden /> Pause
              </button>
            ) : (
              <button onClick={() => setPhase('running')} className="pill bg-white/14 px-5 py-2.5 text-sm text-ink ring-1 ring-white/20">
                <Icon name="play" size={15} aria-hidden /> Resume
              </button>
            )}
            <button onClick={endEarly} className="pill bg-white/8 px-5 py-2.5 text-sm text-ink-muted ring-1 ring-white/12">
              End
            </button>
          </div>
        </>
      )}
    </div>
  );
}
