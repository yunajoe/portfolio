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
};

export default nextConfig;
