/* Selah service worker — offline support + PWA installability.
 * Runtime caching only (no build-time manifest needed):
 *  - navigations: network-first, fall back to cache, then the home shell
 *  - static assets (_next/static, images, icons, fonts): cache-first
 *  - optimized images (_next/image): stale-while-revalidate
 *  - audio: never intercepted (range/streaming is left to the browser)
 */
const VERSION = 'v1';
const SHELL = `selah-shell-${VERSION}`;
const STATIC = `selah-static-${VERSION}`;
const OFFLINE_URL = '/';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(SHELL).then((cache) =>
      cache.addAll(['/', '/manifest.webmanifest', '/icon.svg']).catch(() => {}),
    ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => ![SHELL, STATIC].includes(k)).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith('/_next/static') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname === '/icon.svg' ||
    url.pathname === '/icon-maskable.svg' ||
    /\.(?:css|js|woff2?|png|jpe?g|svg|webp|avif|ico)$/.test(url.pathname)
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // ignore cross-origin
  if (url.pathname.startsWith('/audio/')) return; // never intercept audio (range requests)

  // Navigations → network-first, fall back to cache, then the home shell.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(SHELL);
          cache.put(request, fresh.clone());
          return fresh;
        } catch {
          return (
            (await caches.match(request)) ||
            (await caches.match(OFFLINE_URL)) ||
            Response.error()
          );
        }
      })(),
    );
    return;
  }

  // Next image optimizer → stale-while-revalidate.
  if (url.pathname.startsWith('/_next/image')) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Static assets → cache-first.
  if (isStaticAsset(url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        try {
          const fresh = await fetch(request);
          if (fresh && fresh.status === 200) {
            const cache = await caches.open(STATIC);
            cache.put(request, fresh.clone());
          }
          return fresh;
        } catch {
          return cached || Response.error();
        }
      })(),
    );
    return;
  }

  // Everything else → stale-while-revalidate.
  event.respondWith(staleWhileRevalidate(request));
});

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.status === 200) {
        caches.open(STATIC).then((cache) => cache.put(request, fresh.clone()));
      }
      return fresh;
    })
    .catch(() => cached);
  return cached || network;
}

// Allow the page to tell a waiting SW to take over immediately.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
