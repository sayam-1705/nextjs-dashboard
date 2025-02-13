import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
  trailingSlash: true, // Ensures correct routing
  reactStrictMode: true,
};

export default nextConfig;
