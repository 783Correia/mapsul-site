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
        hostname: "vetsulvet.com.br",
      },
    ],
  },
};

export default nextConfig;
