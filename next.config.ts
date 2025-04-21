import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    MAKE_URL: process.env.MAKE_URL,
  },
};

export default nextConfig;
