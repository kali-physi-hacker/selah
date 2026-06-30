/**
 * A soft singing-bowl bell synthesized with the Web Audio API — for the start,
 * end, and phase transitions of meditation / quiet-time sessions. Must be first
 * triggered from a user gesture (browser audio policy).
 */
let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const C =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!ctx) ctx = new C();
  return ctx;
}

export function playChime(base = 528, gain = 0.22): void {
  const c = getCtx();
  if (!c) return;
  c.resume().catch(() => {});
  const now = c.currentTime;
  const master = c.createGain();
  master.gain.value = 1;
  master.connect(c.destination);

  // a fundamental + two inharmonic partials gives a warm bell
  const partials = [
    { ratio: 1, amp: 1 },
    { ratio: 2.0, amp: 0.32 },
    { ratio: 2.76, amp: 0.16 },
  ];
  for (const p of partials) {
    const osc = c.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = base * p.ratio;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain * p.amp, now + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 3.4);
    osc.connect(g).connect(master);
    osc.start(now);
    osc.stop(now + 3.6);
  }
}

/** Unlock the audio context within a gesture (so later timed chimes can play). */
export function primeChime(): void {
  getCtx()?.resume().catch(() => {});
}
