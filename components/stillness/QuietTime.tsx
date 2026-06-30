'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BreathOrb } from '@/components/three/BreathOrb';
import { playChime, primeChime } from '@/lib/chime';
import { useMeditation } from '@/lib/useMeditation';
import { verseForDate } from '@/lib/dailyVerse';
import { Icon } from '@/components/Icon';
import { hexToRgba } from '@/lib/color';

const PHASES = [
  { name: 'Be Still', minutes: 2, prompt: 'Quiet your heart. Set down the day and its weight.', icon: 'feather' },
  { name: 'Read', minutes: 4, prompt: 'Read slowly. Let a single word or phrase catch you, and stay there.', icon: 'book-open' },
  { name: 'Reflect', minutes: 3, prompt: 'What is God saying to you here? Turn it over gently.', icon: 'eye' },
  { name: 'Pray', minutes: 3, prompt: 'Speak to him honestly — then be quiet and listen.', icon: 'sparkles' },
  { name: 'Rest', minutes: 1, prompt: 'No words now. Simply be with him.', icon: 'sun' },
] as const;
const TOTAL = PHASES.reduce((a, p) => a + p.minutes, 0);

type Phase = 'idle' | 'running' | 'paused' | 'done';
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export function QuietTime({ accent = '#67E8F9' }: { accent?: string }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const { addMinutes } = useMeditation();
  const tick = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [today, setToday] = useState<ReturnType<typeof verseForDate> | null>(null);

  useEffect(() => setToday(verseForDate(new Date())), []);

  const begin = () => {
    primeChime();
    playChime(528);
    setIndex(0);
    setRemaining(PHASES[0].minutes * 60);
    setPhase('running');
  };

  useEffect(() => {
    if (phase !== 'running' || remaining <= 0) return;
    tick.current = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(tick.current);
  }, [phase, remaining]);

  useEffect(() => {
    if (phase !== 'running' || remaining !== 0) return;
    const next = index + 1;
    if (next < PHASES.length) {
      playChime(528);
      setIndex(next);
      setRemaining(PHASES[next].minutes * 60);
    } else {
      playChime(396);
      addMinutes(TOTAL);
      setPhase('done');
    }
  }, [phase, remaining, index, addMinutes]);

  const endEarly = () => {
    clearTimeout(tick.current);
    playChime(396);
    setPhase('done');
  };

  if (phase === 'idle') {
    return (
      <div className="rounded-card glass p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          A gentle {TOTAL}-minute rhythm for time with God — moving through five movements, with a
          soft bell between each.
        </p>
        <ul className="mt-4 space-y-2">
          {PHASES.map((p) => (
            <li key={p.name} className="flex items-center gap-3 rounded-control bg-white/[0.04] px-3.5 py-2.5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/8 text-light-warm">
                <Icon name={p.icon} size={15} aria-hidden />
              </span>
              <span className="flex-1 font-display text-base text-ink">{p.name}</span>
              <span className="text-xs text-ink-faint">{p.minutes} min</span>
            </li>
          ))}
        </ul>
        <button
          onClick={begin}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-card px-5 py-4 font-medium text-ink transition-transform active:scale-[0.99]"
          style={{ background: `linear-gradient(135deg, ${hexToRgba(accent, 0.32)}, rgba(255,255,255,0.05))`, border: `1px solid ${hexToRgba(accent, 0.4)}` }}
        >
          <Icon name="play" size={18} aria-hidden /> Begin quiet time · {TOTAL} min
        </button>
      </div>
    );
  }

  const cur = PHASES[index];
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center"
      style={{ background: 'rgba(2,16,15,0.92)', backdropFilter: 'blur(10px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Quiet time"
    >
      <button onClick={() => setPhase('idle')} className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-muted hover:text-ink" aria-label="Close">
        <Icon name="x" size={20} aria-hidden />
      </button>

      {phase === 'done' ? (
        <div className="animate-fade-in">
          <div className="mx-auto mb-5 h-24 w-24 animate-breathe rounded-full" style={{ background: `radial-gradient(circle at 50% 45%, #FFFFFF, ${hexToRgba('#FDE68A', 0.6)} 40%, ${hexToRgba(accent, 0.2)} 70%, transparent)` }} />
          <p className="scripture text-2xl text-ink">Amen.</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
            You spent this time with him. Go in his peace.
          </p>
          <button onClick={() => setPhase('idle')} className="pill mt-6 bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15">
            <Icon name="rotate" size={15} aria-hidden /> Again
          </button>
        </div>
      ) : (
        <>
          {/* phase progress dots */}
          <div className="mb-5 flex items-center gap-1.5">
            {PHASES.map((p, i) => (
              <span key={p.name} className="h-1.5 rounded-full transition-all" style={{ width: i === index ? 22 : 8, background: i <= index ? accent : 'rgba(255,255,255,0.18)' }} />
            ))}
          </div>
          <BreathOrb accent={accent} />
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-light-warm/90">{cur.name}</p>
          <p className="font-display text-3xl tabular-nums text-ink">{fmt(remaining)}</p>
          <p className="scripture mt-3 max-w-sm text-base leading-relaxed text-ink-muted">{cur.prompt}</p>

          {cur.name === 'Read' && today && (
            <Link href={`/act/${today.actSlug}#verses`} className="mt-4 rounded-control bg-white/[0.06] px-4 py-3 text-left ring-1 ring-white/10">
              <span className="scripture text-sm text-ink">“{today.verse.text}”</span>
              <span className="mt-1 block text-xs text-ink-faint">{today.verse.ref} — open in {today.actTitle} →</span>
            </Link>
          )}

          <div className="mt-7 flex items-center justify-center gap-3">
            {phase === 'running' ? (
              <button onClick={() => setPhase('paused')} className="pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15"><Icon name="pause" size={15} aria-hidden /> Pause</button>
            ) : (
              <button onClick={() => setPhase('running')} className="pill bg-white/14 px-5 py-2.5 text-sm text-ink ring-1 ring-white/20"><Icon name="play" size={15} aria-hidden /> Resume</button>
            )}
            <button onClick={endEarly} className="pill bg-white/8 px-5 py-2.5 text-sm text-ink-muted ring-1 ring-white/12">End</button>
          </div>
        </>
      )}
    </div>
  );
}
