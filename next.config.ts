import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // Optimisation radicale du polling pour Docker Compose Watch (Action: Sync)
    config.watchOptions = {
      poll: 100, // On scanne toutes les 100ms
      aggregateTimeout: 100,
    };
    return config;
  },
};

export default nextConfig;
