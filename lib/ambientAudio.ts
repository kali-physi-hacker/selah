/**
 * Generative ambient "soaking worship" soundscape — built live with the Web
 * Audio API, so nothing copyrighted is shipped. Slow, evolving major-chord pads
 * that glide between chords under a long reverb, with a gentle breathing swell.
 *
 * To use a properly-licensed track instead, drop the file in /public/audio and
 * set AMBIENT_TRACK_SRC below — the player will use it automatically.
 */

/**
 * The soundscape registry. Add a new track by dropping a file in /public/audio
 * and appending an entry here — the picker and player pick it up automatically.
 */
export interface AmbientTrack {
  id: string;
  label: string;
  kind: 'generative' | 'file';
  src?: string;
  credit?: string;
}

export const AMBIENT_TRACKS: AmbientTrack[] = [
  {
    id: 'soaking-pad',
    label: 'Soaking Pad',
    kind: 'generative',
    credit: 'Synthesized live — evolving worship chords. Nothing copyrighted.',
  },
  {
    id: 'rest-in-jesus',
    label: 'Rest in Jesus',
    kind: 'file',
    src: '/audio/rest-in-jesus.mp3',
    credit: '“REST IN JESUS” — soaking worship instrumental by Blessed Moment.',
  },
  {
    id: 'ruach',
    label: 'Ruach',
    kind: 'file',
    src: '/audio/ruach.mp3',
    credit: 'Prophetic worship & meditation instrumental.',
  },
  {
    id: 'sabaoth',
    label: 'Sabaoth',
    kind: 'file',
    src: '/audio/sabaoth.mp3',
    credit: 'Prophetic worship & meditation instrumental.',
  },
  {
    id: 'speak-lord',
    label: 'Speak, Lord',
    kind: 'file',
    src: '/audio/speak-lord.mp3',
    credit: 'Prophetic worship — “Speak Lord, I Am Listening.”',
  },
  {
    id: 'spirit-touch-me',
    label: 'Spirit, Touch Me',
    kind: 'file',
    src: '/audio/spirit-touch-me.mp3',
    credit: 'Prophetic warfare prayer instrumental.',
  },
  {
    id: 'intercession',
    label: 'Intercession',
    kind: 'file',
    src: '/audio/intercession.mp3',
    credit: 'Soaking prayer instrumental — Herikant.',
  },
  {
    id: 'holy-fire',
    label: 'Holy Fire',
    kind: 'file',
    src: '/audio/holy-fire.mp3',
    credit: 'Deep soaking prayer — harp instrumental.',
  },
  // Drop more instrumentals here: add /public/audio/<file>.mp3 and one entry above.
];

export const DEFAULT_TRACK_ID = 'rest-in-jesus';
export const SOUND_TRACK_KEY = 'selah:sound-track:v1';
export const SOUND_VOLUME_KEY = 'selah:sound-volume:v1';
export const DEFAULT_VOLUME = 0.7; // 0..1 multiplier over each track's tuned mix level

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export const AMBIENT_ATTRIBUTION =
  'Ambient music: a generative worship pad plus a set of prophetic worship & soaking-prayer ' +
  'instrumentals (including “Rest in Jesus” by Blessed Moment, and works credited to Herikant ' +
  'and others). Choose your soundscape in Settings.';

export interface AmbientController {
  /** Start (must be called from a user gesture so the browser allows audio). */
  start: () => Promise<void>;
  stop: () => void;
  suspend: () => void;
  resume: () => void;
  dispose: () => void;
  /** Set the user volume multiplier (0..1). Safe to call before or after start. */
  setVolume: (v: number) => void;
}

// ── Chord progression (D major, lush + restful): D – A – Bm7 – Gmaj9 ──────────
// Each voice glides between the matching tone of each chord.
const PROGRESSION: number[][] = [
  [146.83, 220.0, 293.66, 369.99, 440.0], // D   (D3 A3 D4 F#4 A4)
  [146.83, 220.0, 277.18, 329.63, 440.0], // A/D (D3 A3 C#4 E4 A4)
  [146.83, 246.94, 293.66, 369.99, 440.0], // Bm7 (D3 B3 D4 F#4 A4)
  [146.83, 220.0, 293.66, 392.0, 493.88], // Gmaj9 (D3 A3 D4 G4 B4)
];
const ROOTS = [73.42, 110.0, 61.74, 98.0]; // sub-octave roots: D2 A2 B1 G2
const CHORD_SECONDS = 19;
const GLIDE = 6; // portamento between chords
const TARGET_VOLUME = 0.16;

function makeReverbImpulse(ctx: AudioContext, seconds = 4.5, decay = 3.2): AudioBuffer {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * seconds);
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      // soft, slightly diffuse exponential decay
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

class GenerativePad implements AmbientController {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private userGain: GainNode | null = null;
  private userVolume = DEFAULT_VOLUME;
  private voices: { oscA: OscillatorNode; oscB: OscillatorNode; filter: BiquadFilterNode }[] = [];
  private sub: OscillatorNode | null = null;
  private lfos: OscillatorNode[] = [];
  private chordTimer: ReturnType<typeof setInterval> | null = null;
  private chordIndex = 0;
  private started = false;

  async start() {
    if (this.started) {
      await this.ctx?.resume();
      return;
    }
    const Ctx =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    this.ctx = ctx;
    await ctx.resume();

    const now = ctx.currentTime;

    // master + breathing swell (LFO modulates master gain around a base)
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    this.master = master;

    const swell = ctx.createOscillator();
    swell.frequency.value = 0.05; // ~20s breath
    const swellDepth = ctx.createGain();
    swellDepth.gain.value = 0.05;
    swell.connect(swellDepth).connect(master.gain);
    swell.start();
    this.lfos.push(swell);

    // reverb send + dry
    const convolver = ctx.createConvolver();
    convolver.buffer = makeReverbImpulse(ctx);
    const wet = ctx.createGain();
    wet.gain.value = 0.85;
    const dry = ctx.createGain();
    dry.gain.value = 0.5;
    const bus = ctx.createGain();
    bus.connect(dry).connect(master);
    bus.connect(convolver).connect(wet).connect(master);

    // user volume stage between the mix and the speakers
    const userGain = ctx.createGain();
    userGain.gain.value = this.userVolume;
    this.userGain = userGain;
    master.connect(userGain).connect(ctx.destination);

    // a slow filter-cutoff LFO for gently shifting brightness
    const filterLfo = ctx.createOscillator();
    filterLfo.frequency.value = 0.03;
    const filterLfoDepth = ctx.createGain();
    filterLfoDepth.gain.value = 220;
    filterLfo.start();
    this.lfos.push(filterLfo);

    // pad voices
    const chord = PROGRESSION[0];
    for (let i = 0; i < chord.length; i++) {
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1100;
      filter.Q.value = 0.6;
      filterLfo.connect(filterLfoDepth).connect(filter.frequency);

      const vGain = ctx.createGain();
      // top voices quieter for a soft, airy top
      vGain.gain.value = 0.16 - i * 0.018;

      const oscA = ctx.createOscillator();
      oscA.type = 'sine';
      oscA.frequency.value = chord[i];
      oscA.detune.value = -5;
      const oscB = ctx.createOscillator();
      oscB.type = 'triangle';
      oscB.frequency.value = chord[i];
      oscB.detune.value = 6;

      oscA.connect(filter);
      oscB.connect(filter);
      filter.connect(vGain).connect(bus);
      oscA.start();
      oscB.start();
      this.voices.push({ oscA, oscB, filter });
    }

    // sub-octave root drone
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.value = ROOTS[0];
    const subGain = ctx.createGain();
    subGain.gain.value = 0.12;
    subOsc.connect(subGain).connect(bus);
    subOsc.start();
    this.sub = subOsc;

    // fade in
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(TARGET_VOLUME, now + 4);

    // schedule chord changes
    this.chordTimer = setInterval(() => this.nextChord(), CHORD_SECONDS * 1000);
    this.started = true;
  }

  private nextChord() {
    const ctx = this.ctx;
    if (!ctx) return;
    this.chordIndex = (this.chordIndex + 1) % PROGRESSION.length;
    const chord = PROGRESSION[this.chordIndex];
    const t = ctx.currentTime;
    this.voices.forEach((v, i) => {
      v.oscA.frequency.setTargetAtTime(chord[i], t, GLIDE / 3);
      v.oscB.frequency.setTargetAtTime(chord[i], t, GLIDE / 3);
    });
    this.sub?.frequency.setTargetAtTime(ROOTS[this.chordIndex], t, GLIDE / 3);
  }

  suspend() {
    this.ctx?.suspend();
  }
  resume() {
    this.ctx?.resume();
  }
  setVolume(v: number) {
    this.userVolume = clamp01(v);
    if (this.userGain && this.ctx) {
      this.userGain.gain.setTargetAtTime(this.userVolume, this.ctx.currentTime, 0.1);
    }
  }

  stop() {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master) return;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    if (this.chordTimer) {
      clearInterval(this.chordTimer);
      this.chordTimer = null;
    }
    // tear down after the fade
    setTimeout(() => this.dispose(), 2600);
  }

  dispose() {
    if (this.chordTimer) clearInterval(this.chordTimer);
    this.chordTimer = null;
    try {
      this.voices.forEach((v) => {
        v.oscA.stop();
        v.oscB.stop();
      });
      this.sub?.stop();
      this.lfos.forEach((l) => l.stop());
    } catch {
      /* already stopped */
    }
    this.voices = [];
    this.sub = null;
    this.lfos = [];
    this.ctx?.close().catch(() => {});
    this.ctx = null;
    this.master = null;
    this.userGain = null;
    this.started = false;
  }
}

const FILE_BASE = TARGET_VOLUME * 2.2; // tuned background level at full user volume

class FilePad implements AmbientController {
  private el: HTMLAudioElement | null = null;
  private fade: ReturnType<typeof setInterval> | null = null;
  private userVolume = DEFAULT_VOLUME;

  constructor(private src: string) {}

  private rampVolume(to: number, ms: number, then?: () => void) {
    const el = this.el;
    if (!el) return;
    if (this.fade) clearInterval(this.fade);
    const from = el.volume;
    const steps = Math.max(1, Math.round(ms / 50));
    let i = 0;
    this.fade = setInterval(() => {
      i++;
      el.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
      if (i >= steps) {
        if (this.fade) clearInterval(this.fade);
        this.fade = null;
        then?.();
      }
    }, 50);
  }

  async start() {
    if (!this.el) {
      const el = new Audio(this.src);
      el.loop = true;
      el.volume = 0;
      this.el = el;
    }
    await this.el.play();
    this.rampVolume(FILE_BASE * this.userVolume, 2500); // gentle background level
  }
  suspend() {
    this.el?.pause();
  }
  resume() {
    this.el?.play().catch(() => {});
  }
  setVolume(v: number) {
    this.userVolume = clamp01(v);
    if (this.el) this.rampVolume(FILE_BASE * this.userVolume, 250);
  }
  stop() {
    this.rampVolume(0, 1500, () => this.dispose());
  }
  dispose() {
    if (this.fade) clearInterval(this.fade);
    this.fade = null;
    this.el?.pause();
    this.el = null;
  }
}

export function createAmbient(trackId?: string): AmbientController {
  const track =
    AMBIENT_TRACKS.find((t) => t.id === trackId) ??
    AMBIENT_TRACKS.find((t) => t.id === DEFAULT_TRACK_ID) ??
    AMBIENT_TRACKS[0];
  if (track.kind === 'file' && track.src) return new FilePad(track.src);
  return new GenerativePad();
}
