import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { acts, getAct, getAdjacentActs } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { Markdown } from '@/lib/markdown';
import { ActHeader } from '@/components/act/ActHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { sceneryForAct } from '@/lib/imagery';
import { BreathOrb } from '@/components/three/BreathOrb';
import { VisitTracker } from '@/components/act/VisitTracker';
import { SectionNav, type NavSection } from '@/components/act/SectionNav';
import { SectionPanel } from '@/components/SectionPanel';
import { Timeline } from '@/components/act/Timeline';
import { PersonCard } from '@/components/act/PersonCard';
import { TermFlashCard } from '@/components/act/TermFlashCard';
import { ChristPanel } from '@/components/act/ChristPanel';
import { MemoryVerses } from '@/components/act/MemoryVerses';
import { Reflection } from '@/components/act/Reflection';
import { QandA } from '@/components/act/QandA';
import { FullCircleSection } from '@/components/act/FullCircleSection';
import { ActFooter } from '@/components/act/ActFooter';
import { Reveal } from '@/components/Reveal';

// The 15 acts are the only valid slugs — anything else is a true 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return acts.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const act = getAct(params.slug);
  if (!act) return { title: 'Not found' };
  return {
    title: `${act.number}. ${act.title}`,
    description: `${act.teaser} — ${act.books}.`,
  };
}

export default function ActPage({ params }: { params: { slug: string } }) {
  const act = getAct(params.slug);
  if (!act) notFound();

  const { prev, next } = getAdjacentActs(act.number);

  const sections: NavSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'story', label: 'Story' },
    { id: 'people', label: 'People' },
    { id: 'themes', label: 'Themes' },
    { id: 'words', label: 'Words' },
    { id: 'christ', label: 'Christ' },
    { id: 'verses', label: 'Verses' },
    { id: 'reflect', label: 'Reflect' },
    { id: 'questions', label: 'Q&A' },
  ];
  if (act.fullCircle?.length) sections.push({ id: 'full-circle', label: 'Full circle' });

  return (
    <main className="pb-10">
      <PageBackdrop
        scenery={sceneryForAct(act.number)}
        accent={act.accent}
        intensity="deep"
        density={act.isClimax ? 1.2 : 0.85}
        priority
      />
      <VisitTracker slug={act.slug} />
      <ActHeader act={act} />

      <div className="mt-5">
        <SectionNav sections={sections} accent={act.accent} />
      </div>

      <div className="mt-5 space-y-5 px-4 sm:px-6">
        {/* Overview + Context */}
        <SectionPanel id="overview" eyebrow="The big picture" title="Overview" icon="compass" accent={act.accent}>
          <Markdown content={act.overview} />
          <div className="mt-5 rounded-control border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Context · authorship, setting, purpose
            </p>
            <Markdown content={act.context} />
          </div>
        </SectionPanel>

        {/* Story = timeline + deep-dive teaching */}
        <Reveal>
          <SectionPanel id="story" eyebrow="What happens & what it means" title="The story unfolds" icon="book-open" accent={act.accent}>
            <Timeline events={act.timeline} accent={act.accent} />
            <div className="mt-7 space-y-7">
              {act.deepDive.map((section) => (
                <article key={section.id} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                  <h3 className="mb-1.5 font-display text-lg leading-snug text-ink">
                    {section.heading}
                  </h3>
                  <Markdown content={section.body} />
                </article>
              ))}
            </div>
          </SectionPanel>
        </Reveal>

        {/* People */}
        <Reveal>
          <SectionPanel id="people" eyebrow="Key figures" title="People" icon="users" accent={act.accent}>
            <div className="grid gap-3 sm:grid-cols-2">
              {act.people.map((p) => (
                <PersonCard key={p.slug} person={p} accent={act.accent} />
              ))}
            </div>
          </SectionPanel>
        </Reveal>

        {/* Themes */}
        <Reveal>
          <SectionPanel id="themes" eyebrow="Major threads" title="Themes" icon="sparkles" accent={act.accent}>
            <ul className="space-y-3">
              {act.themes.map((t) => (
                <li key={t.title} className="rounded-control bg-white/[0.04] p-4">
                  <h4 className="font-display text-base text-ink">{t.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{t.body}</p>
                </li>
              ))}
            </ul>
          </SectionPanel>
        </Reveal>

        {/* Words */}
        <Reveal>
          <SectionPanel id="words" eyebrow="Words that unlock the text" title="Key words" icon="languages" accent={act.accent}>
            <div className="grid gap-3 sm:grid-cols-2">
              {act.words.map((w) => (
                <TermFlashCard key={w.term} term={w} />
              ))}
            </div>
          </SectionPanel>
        </Reveal>

        {/* Christ */}
        <Reveal>
          <SectionPanel id="christ" eyebrow="The scarlet thread" title="How it points to Christ" icon="star" accent={act.accent}>
            <ChristPanel christ={act.christ} />
          </SectionPanel>
        </Reveal>

        {/* Verses */}
        <Reveal>
          <SectionPanel id="verses" eyebrow="Hide them in your heart" title="Memory verses" icon="bookmark" accent={act.accent}>
            <MemoryVerses
              verses={act.memoryVerses}
              actSlug={act.slug}
              actTitle={act.title}
              accent={act.accent}
            />
          </SectionPanel>
        </Reveal>

        {/* Reflect */}
        <Reveal>
          <SectionPanel id="reflect" eyebrow="Be still" title="Reflect" icon="feather" accent={act.accent}>
            <BreathOrb accent={act.accent} />
            <Reflection reflection={act.reflection} />
          </SectionPanel>
        </Reveal>

        {/* Q&A */}
        <Reveal>
          <SectionPanel id="questions" eyebrow="Honest questions, handled fairly" title="Common questions" icon="info" accent={act.accent}>
            <QandA items={act.questions} />
          </SectionPanel>
        </Reveal>

        {/* Full circle (Acts 1 & 15) */}
        {act.fullCircle?.length ? (
          <Reveal>
            <SectionPanel id="full-circle" eyebrow="Where it began ↔ where it comes home" title="The full circle" icon="sun" accent={act.accent}>
              <FullCircleSection links={act.fullCircle} />
            </SectionPanel>
          </Reveal>
        ) : null}

        {/* Footer nav */}
        <div className="pt-2">
          <ActFooter
            slug={act.slug}
            accent={act.accent}
            prev={prev ? toMeta(prev) : undefined}
            next={next ? toMeta(next) : undefined}
          />
        </div>
      </div>
    </main>
  );
}
