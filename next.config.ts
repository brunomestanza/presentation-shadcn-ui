import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('http://github.com/brunomestanza.png')]
  }
};

export default nextConfig;
