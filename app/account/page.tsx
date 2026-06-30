import type { Metadata } from 'next';
import { acts } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { SectionPanel } from '@/components/SectionPanel';
import { AccountClient } from '@/components/account/AccountClient';
import { ProfileStats } from '@/components/account/ProfileStats';
import { GamificationPanel } from '@/components/account/GamificationPanel';
import { LeaderboardClient } from '@/components/leaderboard/LeaderboardClient';
import { PrayerJournal } from '@/components/prayer/PrayerJournal';
import { Icon } from '@/components/Icon';
import { AUTH_ENABLED } from '@/lib/authEnabled';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Your journey, your prayers, and optional cross-device sync.',
};

export default function AccountPage() {
  const meta = acts.map(toMeta);

  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Your journey"
        title="Account"
        subtitle="Your progress and prayers — kept on this device, and synced across devices if you sign in."
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6 space-y-5 px-4 sm:px-6">
        <GamificationPanel acts={meta} />

        <div className="rounded-card glass p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
            Your journey so far
          </p>
          <ProfileStats acts={meta} />
        </div>

        {AUTH_ENABLED && (
          <SectionPanel id="leaderboard" eyebrow="Around the world" title="Leaderboard" icon="crown">
            <LeaderboardClient />
          </SectionPanel>
        )}

        {AUTH_ENABLED ? (
          <AccountClient />
        ) : (
          <div className="rounded-card glass-soft p-5 text-center">
            <Icon name="info" size={22} aria-hidden className="mx-auto mb-2 text-ink-muted" />
            <p className="text-sm leading-relaxed text-ink-muted">
              Everything is saved privately on this device. Cross-device sign-in can be enabled
              later — until then, your journey lives here.
            </p>
          </div>
        )}

        <SectionPanel id="prayer" eyebrow="Lift them up" title="Prayer journal" icon="sparkles">
          <PrayerJournal />
        </SectionPanel>
      </div>
    </main>
  );
}
