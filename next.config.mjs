// GitHub Pages serves the site under /nicodiansk.dev. Override with PAGES_BASE_PATH
// (e.g. empty string) to preview the production build at the server root.
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.PAGES_BASE_PATH ?? (isProd ? '/nicodiansk.dev' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
