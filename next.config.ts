import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Three.js / R3F ship large chunks; keep them out of the main bundle.
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
