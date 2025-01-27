import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.geckoboard.com",
        port: "",
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "bitmovin.com",
        port: "",
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "xdfile.com",
        port: "",
        pathname: "/**", // Match all paths
      },
      // Add any other domains here with similar structure
    ],
  },
};

export default nextConfig;
