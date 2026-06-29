import type { Metadata } from 'next';
import { PageBackdrop } from '@/components/PageBackdrop';
import { acts, people } from '@/content';
import { PageHeader } from '@/components/PageHeader';
import { PeopleIndex, type ActLookupItem } from '@/components/people/PeopleIndex';

export const metadata: Metadata = {
  title: 'People',
  description: 'The key figures of scripture, across every act of the journey.',
};

export default function PeoplePage() {
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
        eyebrow="The cast of the story"
        title="People"
        subtitle={`${people.length} figures who carry the story — from the first family to the apostles. Each links into the acts where they appear.`}
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6">
        <PeopleIndex people={people} actLookup={actLookup} />
      </div>
    </main>
  );
}
