import type { Metadata } from 'next';
import { PageBackdrop } from '@/components/PageBackdrop';
import { acts } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { buildReadingPlan } from '@/lib/readingPlan';
import { PageHeader } from '@/components/PageHeader';
import { ReadClient } from '@/components/read/ReadClient';

export const metadata: Metadata = {
  title: 'Read',
  description: 'Your reading plan and progress — master the whole Bible in 30 days, or explore freely.',
};

export default function ReadPage() {
  const plan = buildReadingPlan(acts);
  const meta = acts.map(toMeta);

  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Your path"
        title="Read"
        subtitle="Master the whole story in 30 days, or wander freely. Every step is saved on this device."
      />
      <div className="mt-6">
        <ReadClient plan={plan} acts={meta} />
      </div>
    </main>
  );
}
