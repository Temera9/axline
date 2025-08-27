/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // Disable CSS optimization to use custom CSS
  },
  images: {
    domains: ["localhost"],
    unoptimized: false,
  },
  // Disable Tailwind CSS
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
