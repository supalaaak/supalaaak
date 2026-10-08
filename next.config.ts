import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  output: 'export', // Required for static sites
  basePath: '/supalaaak', // Only if not using a custom domain
  assetPrefix: '/supalaaak',
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js Image Optimization
};
export default nextConfig;
