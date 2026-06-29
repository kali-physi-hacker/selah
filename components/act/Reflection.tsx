import type { Reflection as ReflectionType } from '@/content/types';
import { Icon } from '@/components/Icon';

/**
 * The Reflect section — a short calming meditation/prayer in the scripture voice,
 * followed by gentle reflection prompts. The app's quiet, breathing center.
 */
export function Reflection({ reflection }: { reflection: ReflectionType }) {
  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-card glass-soft p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(closest-side, rgba(253,224,138,0.25), transparent)' }}
        />
        <div className="mb-2 flex items-center gap-2 text-light-warm">
          <Icon name="sparkles" size={16} aria-hidden />
          <span className="text-xs uppercase tracking-[0.2em]">A moment to breathe</span>
        </div>
        <p className="scripture whitespace-pre-line text-lg leading-relaxed text-ink">
          {reflection.meditation}
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-ink-faint">
          To carry with you
        </h3>
        <ul className="space-y-2.5">
          {reflection.prompts.map((prompt, i) => (
            <li key={i} className="flex gap-3 rounded-control bg-white/5 p-3.5">
              <span className="font-display text-lg text-aqua/80">{i + 1}</span>
              <p className="text-sm leading-relaxed text-ink-muted">{prompt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
