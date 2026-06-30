/**
 * Offline-first usage analytics. Events queue in localStorage and flush to
 * /api/analytics when online (so offline activity syncs on reconnect). We track
 * pages, feature use, and active time — never the content of prayers or notes.
 */
const ANON_KEY = 'selah:anon-id:v1';
const QUEUE_KEY = 'selah:analytics-queue:v1';
const ENDPOINT = '/api/analytics';
const MAX_QUEUE = 300;
const TICK_MS = 25_000;
const TICK_CAP = 35_000; // ignore gaps longer than this (tab was backgrounded)

interface QueuedEvent {
  type: string;
  payload: Record<string, unknown>;
  session_id: string;
  path: string;
  ts: number;
}

let anonId = '';
let sessionId = '';
let lastTick = 0;
let initialized = false;
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function uuid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function readQueue(): QueuedEvent[] {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]') as QueuedEvent[];
  } catch {
    return [];
  }
}
function writeQueue(q: QueuedEvent[]): void {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-MAX_QUEUE)));
  } catch {
    /* quota — drop */
  }
}

export function track(type: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  init();
  const q = readQueue();
  q.push({ type, payload, session_id: sessionId, path: location.pathname, ts: Date.now() });
  writeQueue(q);
  if (!flushTimer) flushTimer = setTimeout(() => { flushTimer = null; void flush(); }, 4000);
}

export async function flush(useBeacon = false): Promise<void> {
  if (typeof window === 'undefined' || !navigator.onLine) return;
  const q = readQueue();
  if (q.length === 0) return;
  const body = JSON.stringify({ anonId, events: q });
  writeQueue([]); // optimistic; restore on failure
  try {
    if (useBeacon && navigator.sendBeacon) {
      const ok = navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
      if (!ok) throw new Error('beacon failed');
    } else {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
        keepalive: true,
      });
      if (!res.ok) throw new Error('post failed');
    }
  } catch {
    writeQueue([...q, ...readQueue()]); // re-queue for the next attempt
  }
}

function tick(): void {
  const now = Date.now();
  const delta = Math.min(now - lastTick, TICK_CAP);
  lastTick = now;
  if (delta > 1000) track('tick', { ms: delta });
}

export function init(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  anonId = localStorage.getItem(ANON_KEY) || uuid();
  try {
    localStorage.setItem(ANON_KEY, anonId);
  } catch {
    /* private mode */
  }
  sessionId = uuid();
  lastTick = Date.now();

  let ref = '';
  try {
    ref = document.referrer ? new URL(document.referrer).hostname : '';
  } catch {
    /* ignore */
  }
  track('session_start', {
    ref,
    standalone: window.matchMedia('(display-mode: standalone)').matches,
    w: window.innerWidth,
  });

  setInterval(() => {
    if (document.visibilityState === 'visible') tick();
  }, TICK_MS);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      tick();
      void flush(true);
    } else {
      lastTick = Date.now();
    }
  });
  window.addEventListener('pagehide', () => {
    tick();
    void flush(true);
  });
  window.addEventListener('online', () => void flush());
}
