import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/travel_app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;