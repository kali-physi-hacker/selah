import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { NotesClient } from '@/components/notes/NotesClient';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Your own notes — thoughts, study, and what you receive.',
};

export default function NotesPage() {
  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Write it down"
        title="Notes"
        subtitle="A quiet place for your own words — what you're learning, praying, and receiving. Saved on this device, synced if you sign in."
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6 px-4 sm:px-6">
        <NotesClient />
      </div>
    </main>
  );
}
