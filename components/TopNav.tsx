'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AUTH_ENABLED } from '@/lib/authEnabled';
import { AccountAvatar } from '@/components/auth/AccountAvatar';

const LINKS = [
  { href: '/', label: 'Journey' },
  { href: '/stillness', label: 'Stillness' },
  { href: '/read', label: 'Read' },
  { href: '/search', label: 'Search' },
  { href: '/bookmarks', label: 'Saved' },
  { href: '/people', label: 'People' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/about', label: 'About' },
  ...(AUTH_ENABLED ? [{ href: '/account', label: 'Account' }] : []),
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/' || pathname.startsWith('/act');
  return pathname.startsWith(href);
}

/**
 * Desktop chrome — a slim glass top bar (the mobile bottom tab bar is hidden at
 * md+). Wordmark links home; the journey/act pages map to "Journey".
 */
export function TopNav() {
  const pathname = usePathname() ?? '/';

  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden justify-center px-4 pt-3 md:flex">
      <nav
        aria-label="Primary"
        className="glass-strong flex w-full max-w-5xl items-center justify-between rounded-pill px-5 py-2.5 shadow-glass"
      >
        <Link href="/" className="font-display text-xl text-ink text-glow-soft">
          Selah
        </Link>
        <ul className="flex items-center gap-1">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-1.5 rounded-pill py-1.5 text-sm font-medium transition-colors ${
                    l.href === '/account' ? 'pl-1.5 pr-3' : 'px-3.5'
                  } ${active ? 'bg-white/14 text-ink' : 'text-ink-faint hover:bg-white/6 hover:text-ink-muted'}`}
                >
                  {l.href === '/account' && <AccountAvatar size={22} active={active} />}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
