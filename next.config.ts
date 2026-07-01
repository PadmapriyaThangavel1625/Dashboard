import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sbstechnologies.in",
        pathname: "/ecommerce/images/**",
      },
    ],
  },
};

export default nextConfig;