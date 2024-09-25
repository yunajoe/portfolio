/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },

  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //     };
  //   }
  // },
};

export default nextConfig;
