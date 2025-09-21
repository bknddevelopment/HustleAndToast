/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/HustleAndToast',
  assetPrefix: '/HustleAndToast',
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig