import Link from 'next/link';
import { getAct } from '@/content';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';

/**
 * The full-circle motif that closes the home journey: Eden lost ↔ Eden restored.
 * Sourced from Act 1's `fullCircle` mirror so it stays in sync with the content.
 */
export function FullCircleFinale() {
  const creation = getAct('creation');
  const mirrors = creation?.fullCircle ?? [];

  return (
    <section className="relative mt-12 px-1">
      <Reveal className="overflow-hidden rounded-card glass-strong p-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 w-40 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(253,224,138,0.4), transparent)' }}
        />
        <p className="text-xs uppercase tracking-[0.28em] text-light-warm/90">The story comes home</p>
        <h2 className="mx-auto mt-2 max-w-md text-balance font-display text-2xl leading-tight text-ink sm:text-3xl">
          Eden lost becomes Eden restored — and greater
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          The story ends where it began, only made new. What was guarded is given freely;
          what was broken is healed; and God dwells with his people forever.
        </p>

        <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left">
          {mirrors.map((m) => (
            <li key={m.from} className="rounded-control bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm text-ink">
                <span className="scripture text-ink-muted">{m.from}</span>
              </div>
              <div className="my-1 flex items-center gap-2 text-light-warm">
                <Icon name="arrow-right" size={15} aria-hidden className="rotate-90" />
              </div>
              <div className="scripture text-sm text-ink">{m.to}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">{m.note}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/act/creation"
            className="pill bg-white/8 px-4 py-2 text-sm text-ink ring-1 ring-white/15 transition-colors hover:bg-white/12"
          >
            <Icon name="sun" size={15} aria-hidden /> Begin at Creation
          </Link>
          <Link
            href="/act/revelation"
            className="pill bg-white/8 px-4 py-2 text-sm text-ink ring-1 ring-white/15 transition-colors hover:bg-white/12"
          >
            See the ending <Icon name="arrow-right" size={15} aria-hidden />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
