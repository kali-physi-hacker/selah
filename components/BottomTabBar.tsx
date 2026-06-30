'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';
import { AUTH_ENABLED } from '@/lib/authEnabled';
import { AccountAvatar } from '@/components/auth/AccountAvatar';

const TABS = [
  { href: '/', label: 'Journey', icon: 'compass' },
  { href: '/read', label: 'Read', icon: 'book-open' },
  { href: '/search', label: 'Search', icon: 'search' },
  { href: '/bookmarks', label: 'Saved', icon: 'bookmark' },
  ...(AUTH_ENABLED ? [{ href: '/account', label: 'Account', icon: 'account' }] : []),
  { href: '/about', label: 'More', icon: 'more' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  if (href === '/about') {
    // "More" stands in for the secondary pages
    return ['/about', '/glossary', '/people'].some((p) => pathname.startsWith(p));
  }
  return pathname.startsWith(href);
}

/**
 * The slim glass bottom tab bar (mobile-first). On desktop it floats, centered
 * and pill-shaped, at the bottom of the viewport.
 */
export function BottomTabBar() {
  const pathname = usePathname() ?? '/';

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
    >
      <ul className="glass-strong flex w-full max-w-md items-stretch justify-between rounded-pill px-1.5 py-1.5 shadow-glass-lg">
        {TABS.map((tab) => {
          const active = isActive(pathname, tab.href);
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-current={active ? 'page' : undefined}
                className="group relative flex flex-col items-center gap-0.5 rounded-pill px-1 py-1.5 text-[0.62rem] font-medium transition-colors"
              >
                <span
                  className={`flex h-9 w-full items-center justify-center rounded-pill transition-all ${
                    active ? 'bg-white/12' : 'group-hover:bg-white/6'
                  }`}
                >
                  {tab.href === '/account' ? (
                    <AccountAvatar size={22} active={active} />
                  ) : (
                    <Icon
                      name={tab.icon}
                      size={20}
                      strokeWidth={active ? 2.1 : 1.7}
                      aria-hidden
                      className={active ? 'text-aqua' : 'text-ink-muted'}
                    />
                  )}
                </span>
                <span className={active ? 'text-ink' : 'text-ink-faint'}>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
