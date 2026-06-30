import Link from 'next/link';
import { acts } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { Hero } from '@/components/journey/Hero';
import { ProgressCard } from '@/components/journey/ProgressCard';
import { JourneyList } from '@/components/journey/JourneyList';
import { FullCircleFinale } from '@/components/journey/FullCircleFinale';
import { PageBackdrop } from '@/components/PageBackdrop';
import { homeScenery } from '@/lib/imagery';
import { Reveal } from '@/components/Reveal';
import { DailyVerse } from '@/components/DailyVerse';
import { buildDailyVersePool } from '@/lib/dailyVerse';
import { Icon } from '@/components/Icon';

export default function HomePage() {
  const meta = acts.map(toMeta);
  const versePool = buildDailyVersePool(acts);

  return (
    <main className="px-4 pb-8 sm:px-6">
      <PageBackdrop scenery={homeScenery} accent="#67E8F9" intensity="soft" density={1.1} priority />
      <Hero />

      <Reveal className="mt-6">
        <ProgressCard acts={meta} />
      </Reveal>

      <Reveal className="mt-4">
        <DailyVerse pool={versePool} />
      </Reveal>

      <Reveal className="mt-4">
        <Link
          href="/stillness"
          className="flex items-center gap-4 rounded-card glass p-5 transition-colors hover:bg-white/[0.08]"
        >
          <span
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full"
            style={{ background: 'radial-gradient(circle at 50% 38%, rgba(255,255,255,0.92), rgba(103,232,249,0.32) 60%, transparent)' }}
          >
            <Icon name="feather" size={20} aria-hidden className="text-abyss" />
          </span>
          <div className="flex-1">
            <p className="font-display text-lg text-ink">Enter stillness</p>
            <p className="text-sm text-ink-muted">Breathe, be still, and keep a quiet time.</p>
          </div>
          <Icon name="chevron-right" size={18} aria-hidden className="text-ink-faint" />
        </Link>
      </Reveal>

      <div className="mt-9 mb-4 flex items-center gap-3 px-1">
        <h2 className="font-display text-lg text-ink">The journey</h2>
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-ink-faint">15 acts · Creation to Revelation</span>
      </div>

      <JourneyList acts={meta} />

      <FullCircleFinale />

      <p className="mt-10 text-center text-xs leading-relaxed text-ink-faint">
        Scripture quoted from the World English Bible (public domain).
        <br />
        Every word ships with the app — no account needed, just you and the Word.
      </p>
    </main>
  );
}
