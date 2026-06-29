import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { BottomTabBar } from '@/components/BottomTabBar';
import { TopNav } from '@/components/TopNav';
import { SmoothScroll } from '@/components/SmoothScroll';
import { AmbientPlayer } from '@/components/audio/AmbientPlayer';
import { ServiceWorkerRegister } from '@/components/pwa/ServiceWorkerRegister';
import { InstallPrompt } from '@/components/pwa/InstallPrompt';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { AUTH_ENABLED } from '@/lib/authEnabled';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Selah — An Interactive Bible Journey',
    template: '%s · Selah',
  },
  description:
    'The whole story of God — from the first light to the last promise. A calm, cinematic journey through the entire Bible, in 15 acts.',
  applicationName: 'Selah',
  keywords: ['Bible', 'scripture', 'study', 'journey', 'devotional', 'meditation', 'Selah'],
  authors: [{ name: 'Selah' }],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Selah',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Selah — An Interactive Bible Journey',
    description:
      'The whole story of God — from the first light to the last promise. 15 acts, from Creation to Revelation.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#042f2e',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const content = (
    // Mobile: room for the bottom tab bar. Desktop: room for the top bar.
    <div id="content" className="relative mx-auto min-h-dvh w-full max-w-3xl pb-28 md:pb-16 md:pt-20">
      {children}
    </div>
  );

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-pill focus:bg-white/15 focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:ring-1 focus:ring-white/30"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ServiceWorkerRegister />
        <InstallPrompt />
        <TopNav />
        {AUTH_ENABLED ? <AuthProvider>{content}</AuthProvider> : content}
        <AmbientPlayer />
        <BottomTabBar />
      </body>
    </html>
  );
}
