import type { Metadata } from 'next';
import Link from 'next/link';
import { acts } from '@/content';
import { toMeta } from '@/lib/actMeta';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { SectionPanel } from '@/components/SectionPanel';
import { AccountClient } from '@/components/account/AccountClient';
import { ProfileStats } from '@/components/account/ProfileStats';
import { GamificationPanel } from '@/components/account/GamificationPanel';
import { LeaderboardClient } from '@/components/leaderboard/LeaderboardClient';
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

        <Link
          href="/prayer"
          className="flex items-center gap-4 rounded-card glass p-5 transition-colors hover:bg-white/[0.08]"
        >
          <span
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full"
            style={{ background: 'radial-gradient(circle at 50% 38%, rgba(255, 255, 255, 0.92), rgba(253,230,138,0.4) 60%, transparent)' }}
          >
            <Icon name="flame" size={19} aria-hidden className="text-abyss" />
          </span>
          <div className="flex-1">
            <p className="font-display text-lg text-ink">Prayer room</p>
            <p className="text-sm text-ink-muted">Timed prayer, your rhythm, requests &amp; revelations.</p>
          </div>
          <Icon name="chevron-right" size={18} aria-hidden className="text-ink-faint" />
        </Link>
      </div>
    </main>
  );
}
