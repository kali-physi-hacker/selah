'use client';

import { SessionProvider } from 'next-auth/react';
import { ProfileSync } from './ProfileSync';

/** Wraps the app in the Auth.js session context and mounts the cloud sync. */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProfileSync />
      {children}
    </SessionProvider>
  );
}
