import Link from 'next/link';
import { Icon } from './Icon';

/** A calm, consistent header for the secondary screens. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  back,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
}) {
  return (
    <header className="px-5 pt-10 sm:pt-12">
      {back && (
        <Link
          href={back.href}
          className="mb-5 inline-flex items-center gap-1.5 rounded-pill bg-white/8 px-3 py-1.5 text-xs text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12"
        >
          <Icon name="chevron-left" size={15} aria-hidden /> {back.label}
        </Link>
      )}
      {eyebrow && (
        <p className="mb-1.5 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink-faint">
          <Icon name="sparkles" size={13} aria-hidden className="text-light-warm" />
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-3xl leading-tight text-ink text-glow-soft sm:text-4xl">
        {title}
      </h1>
      {subtitle && <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">{subtitle}</p>}
    </header>
  );
}
