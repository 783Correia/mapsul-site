/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lenis"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mapsul.com.br",
      },
    ],
  },
};

export default nextConfig;
