import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { StillnessClient } from '@/components/stillness/StillnessClient';
import { homeScenery } from '@/lib/imagery';

export const metadata: Metadata = {
  title: 'Stillness',
  description: 'A timed space to breathe, be still, and keep a quiet time with God.',
};

export default function StillnessPage() {
  return (
    <main className="pb-8">
      <PageBackdrop scenery={homeScenery} accent="#67E8F9" intensity="deep" density={0.7} priority />
      <PageHeader
        eyebrow="Be still, and know"
        title="Stillness"
        subtitle="Step out of the noise. Breathe, be quiet, and rest in his presence — a timed stillness, or a guided quiet time."
      />
      <div className="mt-6">
        <StillnessClient />
      </div>
    </main>
  );
}
