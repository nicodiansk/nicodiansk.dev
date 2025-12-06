/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nicodiansk.dev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nicodiansk.dev/' : '',
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
