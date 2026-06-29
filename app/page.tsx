import { acts } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { Hero } from '@/components/journey/Hero';
import { ProgressCard } from '@/components/journey/ProgressCard';
import { JourneyList } from '@/components/journey/JourneyList';
import { FullCircleFinale } from '@/components/journey/FullCircleFinale';
import { PageBackdrop } from '@/components/PageBackdrop';
import { homeScenery } from '@/lib/imagery';
import { Reveal } from '@/components/Reveal';

export default function HomePage() {
  const meta = acts.map(toMeta);

  return (
    <main className="px-4 pb-8 sm:px-6">
      <PageBackdrop scenery={homeScenery} accent="#67E8F9" intensity="soft" density={1.1} priority />
      <Hero />

      <Reveal className="mt-6">
        <ProgressCard acts={meta} />
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
        Every word ships with the app — no account, no tracking, no noise.
      </p>
    </main>
  );
}
