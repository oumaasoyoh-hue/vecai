/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.89.233:3000", "localhost:3000"],
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;