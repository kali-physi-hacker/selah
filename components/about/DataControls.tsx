'use client';

import { useState } from 'react';
import { removeKey, STORAGE_KEYS } from '@/lib/storage';
import { Icon } from '@/components/Icon';

/** Privacy-respecting data controls — clear locally-stored progress & saves. */
export function DataControls() {
  const [cleared, setCleared] = useState(false);

  const clearAll = () => {
    Object.values(STORAGE_KEYS).forEach((k) => removeKey(k));
    setCleared(true);
    setTimeout(() => setCleared(false), 2500);
  };

  return (
    <div className="rounded-card glass-soft p-4">
      <h3 className="font-display text-base text-ink">Your data</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
        Everything — your progress, streak, bookmarks, and notes — is stored only on this device,
        in your browser. No account, no server, no tracking.
      </p>
      <button
        onClick={clearAll}
        className="mt-3 inline-flex items-center gap-2 rounded-pill bg-white/8 px-4 py-2 text-sm text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12"
      >
        <Icon name={cleared ? 'check' : 'rotate'} size={15} aria-hidden />
        {cleared ? 'Cleared' : 'Reset all progress & saves'}
      </button>
    </div>
  );
}
