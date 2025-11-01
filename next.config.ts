import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output:'export',
  trailingSlash: true, 
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
