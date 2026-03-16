import type { NextConfig } from "next";

/**
 * DramaBox API Configuration:
 * To enable the real API, create a .env.local file with:
 * NEXT_PUBLIC_DRAMABOX_TOKEN=your_api_token_here
 */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        // DramaBox main image CDN
        protocol: 'https',
        hostname: 'hwztchapter.dramaboxdb.com',
        port: '',
        pathname: '/**',
      },
      {
        // DramaBox alternative CDN
        protocol: 'https',
        hostname: '*.dramaboxdb.com',
        port: '',
        pathname: '/**',
      },
      {
        // Alternative image CDN
        protocol: 'https',
        hostname: '*.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

// export default withPWA(nextConfig);
export default nextConfig;
