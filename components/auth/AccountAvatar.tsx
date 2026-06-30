'use client';

import { useSession } from 'next-auth/react';
import { Icon } from '@/components/Icon';

/**
 * The user's Google avatar when signed in; the account icon otherwise.
 * Only rendered where auth is enabled (inside the session provider).
 */
export function AccountAvatar({
  size = 20,
  active = false,
}: {
  size?: number;
  active?: boolean;
}) {
  const { data } = useSession();
  const image = data?.user?.image;

  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt=""
        referrerPolicy="no-referrer"
        className={`rounded-full object-cover ${active ? 'ring-2 ring-aqua' : 'ring-1 ring-white/25'}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <Icon
      name="account"
      size={size}
      strokeWidth={active ? 2.1 : 1.7}
      aria-hidden
      className={active ? 'text-aqua' : 'text-ink-muted'}
    />
  );
}
