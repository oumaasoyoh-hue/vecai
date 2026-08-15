import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  allowedDevOrigins: ['192.168.89.233:3000', 'localhost:3000'],

  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
};

export default nextConfig;