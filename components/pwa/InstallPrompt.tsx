'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Icon } from '@/components/Icon';
import { readJSON, writeJSON, STORAGE_KEYS } from '@/lib/storage';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type Mode = 'android' | 'ios' | null;

const isStandalone = (): boolean =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as unknown as { standalone?: boolean }).standalone === true;

const isMobile = (): boolean => window.matchMedia('(max-width: 767px)').matches;

const isIOS = (): boolean =>
  /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
  !/crios|fxios|edgios/i.test(window.navigator.userAgent); // Safari only — others can't add to home screen

/**
 * A gentle "Install Selah" prompt for mobile.
 * - Android/Chromium: captures `beforeinstallprompt` and offers a one-tap Install.
 * - iOS Safari: shows the "Share → Add to Home Screen" steps (no programmatic API).
 * Hidden once installed or dismissed; mobile-only so desktop keeps its native affordance.
 */
export function InstallPrompt() {
  const [mode, setMode] = useState<Mode>(null);
  const [visible, setVisible] = useState(false);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isStandalone()) return; // already installed
    if (readJSON<boolean>(STORAGE_KEYS.installDismissed, false)) return;

    // iOS has no install event — detect and show the manual steps.
    let iosTimer: ReturnType<typeof setTimeout> | undefined;
    if (isIOS() && isMobile()) {
      iosTimer = setTimeout(() => {
        setMode('ios');
        setVisible(true);
      }, 1800);
    }

    const onBeforeInstall = (e: Event) => {
      if (!isMobile()) return; // let desktop use its native install affordance
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setMode('android');
      setVisible(true);
      if (iosTimer) clearTimeout(iosTimer);
    };

    const onInstalled = () => {
      setVisible(false);
      writeJSON(STORAGE_KEYS.installDismissed, true);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      if (iosTimer) clearTimeout(iosTimer);
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    writeJSON(STORAGE_KEYS.installDismissed, true);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
    writeJSON(STORAGE_KEYS.installDismissed, true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[60] flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:hidden"
          initial={reduce ? { opacity: 0 } : { y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Install Selah"
        >
          <div className="glass-strong flex w-full max-w-md items-center gap-3 rounded-card p-3 shadow-glass-lg">
            <Image
              src="/icons/icon-192.png"
              alt=""
              width={44}
              height={44}
              className="flex-none rounded-[12px]"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-base leading-tight text-ink">Install Selah</p>
              {mode === 'ios' ? (
                <p className="mt-0.5 flex items-center gap-1 text-xs leading-snug text-ink-muted">
                  Tap
                  <Icon name="share" size={14} aria-hidden className="mx-0.5 text-aqua" />
                  then <span className="text-ink">“Add to Home Screen”</span>
                </p>
              ) : (
                <p className="mt-0.5 text-xs leading-snug text-ink-muted">
                  Add it to your home screen for a full-screen, app-like journey.
                </p>
              )}
            </div>

            {mode === 'android' && (
              <button
                onClick={install}
                className="flex flex-none items-center gap-1.5 rounded-pill bg-white/16 px-4 py-2 text-sm font-medium text-ink ring-1 ring-white/25 transition-transform active:scale-95"
              >
                <Icon name="download" size={16} aria-hidden />
                Install
              </button>
            )}

            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-ink-faint hover:text-ink-muted"
            >
              <Icon name="x" size={18} aria-hidden />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
