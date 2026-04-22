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
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '*.cs-asia-southeast1-seal.cloudshell.dev'],
}

module.exports = nextConfig 
