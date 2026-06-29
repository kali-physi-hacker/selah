'use client';

import { useEffect } from 'react';
import { useProgress } from '@/lib/useProgress';

/** Marks an act as visited (in-progress) when its page mounts. */
export function VisitTracker({ slug }: { slug: string }) {
  const { markVisited } = useProgress();
  useEffect(() => {
    markVisited(slug);
  }, [slug, markVisited]);
  return null;
}
