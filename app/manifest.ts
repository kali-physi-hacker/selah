import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Selah — An Interactive Bible Journey',
    short_name: 'Selah',
    description:
      'The whole story of God — from the first light to the last promise. A calm, cinematic journey through the entire Bible.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#021f1e',
    theme_color: '#042f2e',
    orientation: 'portrait',
    categories: ['books', 'education', 'lifestyle'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
