'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Icon } from '@/components/Icon';

/** The official multi-color Google "G". */
function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export function AccountClient() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="h-40 animate-pulse rounded-card glass-soft" aria-hidden />;
  }

  if (status === 'authenticated' && session?.user) {
    const { name, email, image } = session.user;
    return (
      <div className="space-y-4">
        <div className="rounded-card glass-strong p-5">
          <div className="flex items-center gap-4">
            {image ? (
              // OAuth avatars: a plain <img> avoids the image-optimizer host allowlist,
              // and no-referrer stops Google (lh3.googleusercontent.com) returning 403.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt=""
                width={56}
                height={56}
                referrerPolicy="no-referrer"
                className="h-14 w-14 flex-none rounded-full object-cover ring-1 ring-white/20"
              />
            ) : (
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white/10 font-display text-2xl text-ink">
                {(name ?? email ?? '?').charAt(0).toUpperCase()}
              </span>
            )}
            <div className="min-w-0">
              {name && <p className="font-display text-xl text-ink">{name}</p>}
              {email && <p className="truncate text-sm text-ink-muted">{email}</p>}
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-aqua">
                <Icon name="check-circle" size={13} aria-hidden /> Synced
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Your bookmarks, notes, and progress are saved to your account and follow you across
            devices — automatically.
          </p>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: '/account' })}
          className="flex w-full items-center justify-center gap-2 rounded-control bg-white/8 px-5 py-3 text-sm font-medium text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12 hover:text-ink"
        >
          <Icon name="arrow-left" size={16} aria-hidden /> Sign out
        </button>
      </div>
    );
  }

  // unauthenticated
  return (
    <div className="rounded-card glass-strong p-6 text-center">
      <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-light-warm">
        <Icon name="sparkles" size={26} aria-hidden />
      </span>
      <h2 className="font-display text-xl text-ink">Keep your journey with you</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
        Selah works fully without an account. Sign in with Google to back up your bookmarks,
        notes, and progress and sync them across all your devices.
      </p>
      <button
        onClick={() => signIn('google', { callbackUrl: '/account' })}
        className="mx-auto mt-5 flex items-center justify-center gap-3 rounded-pill bg-white px-6 py-3 text-sm font-medium text-[#1f1f1f] shadow-glass transition-transform active:scale-[0.98]"
      >
        <GoogleMark />
        Continue with Google
      </button>
      <p className="mt-3 text-xs text-ink-faint">
        Anonymous progress on this device will be merged into your account.
      </p>
    </div>
  );
}
