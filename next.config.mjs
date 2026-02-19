/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lenis"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
