import { movements } from '@/content/movements';
import { MovementPill } from '@/components/MovementPill';
import { Icon } from '@/components/Icon';
import { OrbitRing } from '@/components/hero/OrbitRing';
import { HeroParticlesLazy } from '@/components/particles/HeroParticlesLazy';

/**
 * The home hero — a luminous invitation. App name, a one-line welcome, the
 * orbiting ring of meditative words around a divine-light center (the reference
 * motif), interactive particles, and the four-movement arc as glowing pills.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pt-12 pb-2 text-center sm:pt-16">
      <HeroParticlesLazy />

      <div className="relative animate-fade-up">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-faint">
          <Icon name="sparkles" size={14} aria-hidden className="text-light-warm" />
          An interactive Bible journey
        </p>
        <h1 className="font-display text-6xl font-light leading-none text-ink text-glow-soft sm:text-7xl">
          Selah
        </h1>
        <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
          The whole story of God — from the first light to the last promise.
        </p>
      </div>

      {/* The orbiting ring of meditative words around the divine light */}
      <div className="relative my-6 flex items-center justify-center">
        <OrbitRing accent="#67E8F9" size={296} />
      </div>

      {/* The four-movement arc */}
      <div className="relative flex flex-wrap items-center justify-center gap-2">
        {movements.map((m, i) => (
          <div key={m.id} className="flex items-center gap-2">
            <MovementPill label={m.title} accent={m.accent} />
            {i < movements.length - 1 && (
              <Icon name="chevron-right" size={13} aria-hidden className="text-ink-faint" />
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
