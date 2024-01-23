/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  // basePath: '/interactive-rating-component',
  images: {
    unoptimized: true,
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
};

export default nextConfig;
