/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdn.bubble.io"
      }
    ]
  }
};

export default nextConfig;
