import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Required for static sites
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js Image Optimization
};
export default nextConfig;
