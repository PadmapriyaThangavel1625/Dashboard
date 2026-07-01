import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sbstechnologies.in",
      },
    ],
  },
};

export default nextConfig;