/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/dist',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
