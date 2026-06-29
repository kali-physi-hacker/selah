/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Optional curated imagery (off by default — the app ships with generated
    // gradients + SVG light). Enables next/image for Unsplash if the user opts in.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
