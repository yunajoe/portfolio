/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "https://unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This will match any hostname
        // hostname: "assets.example.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
