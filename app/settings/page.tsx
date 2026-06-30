import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { SectionPanel } from '@/components/SectionPanel';
import { ThemePicker } from '@/components/theme/ThemePicker';
import { SoundPicker } from '@/components/audio/SoundPicker';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Set the light and the sound of your time in Selah.',
};

export default function SettingsPage() {
  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Make it yours"
        title="Settings"
        subtitle="Shape the light and the sound of your time here — saved on this device."
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6 space-y-5 px-4 sm:px-6">
        <SectionPanel id="theme" eyebrow="For your space & the hour" title="Theme" icon="sun">
          <p className="mb-4 text-sm leading-relaxed text-ink-muted">
            Selah is calm and dark by design. For dim rooms or late nights, Midnight deepens the
            light and Candle warms it (gentler on tired eyes).
          </p>
          <ThemePicker />
        </SectionPanel>

        <SectionPanel id="sound" eyebrow="A soundscape to rest in" title="Instrumental" icon="volume-on">
          <SoundPicker />
        </SectionPanel>
      </div>
    </main>
  );
}
