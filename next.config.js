/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Diperlukan untuk Cloudflare Page
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'akamai', // Image Optimizati
    path: '',
  },
  trailingSlash: true,
}

module.exports = nextConfig
