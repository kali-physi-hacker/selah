import type { Metadata } from 'next';
import { PageBackdrop } from '@/components/PageBackdrop';
import { PageHeader } from '@/components/PageHeader';
import { SearchClient } from '@/components/search/SearchClient';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search across every act, verse, person, and word in the journey.',
};

export default function SearchPage() {
  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Find your way"
        title="Search"
        subtitle="Across acts, scenes, verses, people, themes, and key words — everything in the journey."
      />
      <div className="mt-6">
        <SearchClient />
      </div>
    </main>
  );
}
