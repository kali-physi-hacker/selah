'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { init, track } from '@/lib/analytics';

/** Starts analytics (session + active-time tracking) and logs page views. */
export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (pathname) track('page_view');
  }, [pathname]);

  return null;
}
