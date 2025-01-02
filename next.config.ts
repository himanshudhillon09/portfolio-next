import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'www.geckoboard.com',
      'bitmovin.com',
      'xdfile.com',
      // Add any other domains here
    ],
  },
};

export default nextConfig;
