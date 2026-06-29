import Link from 'next/link';
import { Icon } from '@/components/Icon';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/8 text-light-warm">
        <Icon name="compass" size={30} aria-hidden />
      </span>
      <p className="scripture text-lg text-ink-muted">“He leads me beside still waters.”</p>
      <h1 className="mt-4 font-display text-3xl text-ink">This path doesn't exist</h1>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
        The page you're looking for isn't part of the journey — but the whole story is just a tap away.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-pill bg-white/10 px-5 py-2.5 text-sm text-ink ring-1 ring-white/15 transition-colors hover:bg-white/14"
      >
        <Icon name="arrow-left" size={16} aria-hidden /> Return to the journey
      </Link>
    </main>
  );
}
