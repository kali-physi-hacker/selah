'use client';

import { useProgress } from '@/lib/useProgress';
import type { ActMeta } from '@/lib/actMeta';
import { Reveal } from '@/components/Reveal';
import { ActCard, type ActStatus } from './ActCard';

/**
 * The 15 acts strung along the glowing vertical thread of redemption.
 * The thread runs behind the cards and glows faintly through the frosted glass,
 * passing through each accent node.
 */
export function JourneyList({ acts }: { acts: ActMeta[] }) {
  const progress = useProgress();

  const statusFor = (slug: string): ActStatus => {
    if (!progress.hydrated) return 'unread';
    if (progress.isComplete(slug)) return 'complete';
    if (progress.isVisited(slug)) return 'in-progress';
    return 'unread';
  };

  return (
    <div className="relative">
      {/* The thread of redemption — at the node center x (≈44px) */}
      <div
        aria-hidden
        className="thread animate-thread-pulse pointer-events-none absolute bottom-6 left-[44px] top-6 w-[2px] -z-0 rounded-full"
      />
      <ul className="relative space-y-5">
        {acts.map((act, i) => (
          <Reveal as="li" key={act.slug} delay={Math.min(i * 0.04, 0.3)}>
            <ActCard act={act} status={statusFor(act.slug)} />
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
