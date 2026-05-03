import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  turbopack: {
    root: __dirname,
  },

  trailingSlash: false,

  htmlLimitedBots: /.*/,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/assets'],
  },

  images: {
    qualities: [25, 50, 75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.games.funox.com',
      },

      {
        protocol: 'https',
        hostname: 'www.kidsafeseal.com',
      },
    ],
    // If you see "resolved to private ip" errors locally,
    // you might need to set unoptimized: true to skip the proxy.
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
