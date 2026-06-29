import type { Metadata } from 'next';
import { PageBackdrop } from '@/components/PageBackdrop';
import { PageHeader } from '@/components/PageHeader';
import { BookmarksClient } from '@/components/bookmarks/BookmarksClient';

export const metadata: Metadata = {
  title: 'Saved',
  description: 'Your saved verses, acts, and personal notes.',
};

export default function BookmarksPage() {
  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Kept close"
        title="Saved"
        subtitle="Verses and acts you've bookmarked, with your own notes and prayers. Stored privately on this device."
      />
      <div className="mt-6">
        <BookmarksClient />
      </div>
    </main>
  );
}
