/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // unoptimized: true,
    domains: ['images.microcms-assets.io'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.microcms-assets.io',
      port: '',
      pathname: '/assets/**',
    }]
  }
}

module.exports = nextConfig
