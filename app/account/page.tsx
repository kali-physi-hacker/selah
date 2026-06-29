import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PageBackdrop } from '@/components/PageBackdrop';
import { AccountClient } from '@/components/account/AccountClient';
import { Icon } from '@/components/Icon';
import { AUTH_ENABLED } from '@/lib/authEnabled';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Optionally sign in to sync your bookmarks and progress across devices.',
};

export default function AccountPage() {
  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <PageHeader
        eyebrow="Optional sign-in"
        title="Account"
        subtitle="Selah is yours to use freely without an account. Signing in only adds cross-device sync for your bookmarks, notes, and progress."
        back={{ href: '/about', label: 'More' }}
      />
      <div className="mt-6 px-4 sm:px-6">
        {AUTH_ENABLED ? (
          <AccountClient />
        ) : (
          <div className="rounded-card glass-strong p-6 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-ink-muted">
              <Icon name="info" size={24} aria-hidden />
            </span>
            <h2 className="font-display text-xl text-ink">Sign-in isn't enabled yet</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              For now, everything you save lives privately on this device. Once Google sign-in is
              configured, you'll be able to back up and sync your journey here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
