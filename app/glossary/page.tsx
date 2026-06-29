import type { Metadata } from 'next';
import { PageBackdrop } from '@/components/PageBackdrop';
import { acts, glossary } from '@/content';
import { PageHeader } from '@/components/PageHeader';
import { GlossaryIndex } from '@/components/glossary/GlossaryIndex';
import type { ActLookupItem } from '@/components/people/PeopleIndex';

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Hebrew, Greek, and Latin words and theology terms that unlock the text.',
};

export default function GlossaryPage() {
  const actLookup: ActLookupItem[] = acts.map((a) => ({
    number: a.number,
    slug: a.slug,
    title: a.title,
    accent: a.accent,
  }));

  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Words that unlock the text"
        title="Glossary"
        subtitle={`${glossary.length} Hebrew, Greek, Latin, and conceptual terms — each linked to the acts where it appears.`}
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6">
        <GlossaryIndex glossary={glossary} actLookup={actLookup} />
      </div>
    </main>
  );
}
