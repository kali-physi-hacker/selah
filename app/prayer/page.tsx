import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { PrayerClient } from '@/components/prayer/PrayerClient';
import { homeScenery } from '@/lib/imagery';

export const metadata: Metadata = {
  title: 'Prayer',
  description: 'A prayer room — timed prayer with instrumental, a rhythm to keep, and a place for revelations.',
};

export default function PrayerPage() {
  return (
    <main className="pb-8">
      <PageBackdrop scenery={homeScenery} accent="#FDE68A" intensity="deep" density={0.6} priority />
      <PageHeader
        eyebrow="Pray without ceasing"
        title="Prayer"
        subtitle="Come and pray — timed, with a gentle instrumental, a rhythm to keep, and room to write down what he shows you."
      />
      <div className="mt-6">
        <PrayerClient />
      </div>
    </main>
  );
}
