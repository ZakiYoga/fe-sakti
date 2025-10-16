/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/product/:slug*',
        destination: '/products/:slug*',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
