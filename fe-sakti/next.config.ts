import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Strict Mode untuk development best practices
  reactStrictMode: true,
  
  // SWC minification untuk build yang lebih cepat
  swcMinify: true,
  
  // 🚀 CRITICAL: Enable standalone output untuk Docker
  // Ini menghasilkan minimal server yang bisa di-copy langsung
  output: 'standalone',
  
  // ⚠️ OPTIONAL: Explicitly expose env variables (redundant untuk NEXT_PUBLIC_*)
  // Bisa dihapus karena NEXT_PUBLIC_* sudah otomatis ter-expose
  // Tapi tidak masalah jika tetap ada (tidak harmful)
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_BUKUTAMU_URL: process.env.NEXT_PUBLIC_API_BUKUTAMU_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  
  // Image optimization configuration
  images: {
    // Remote patterns untuk Next.js Image component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.saktipangan.co.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mms.saktipangan.co.id',
        port: '',
        pathname: '/**',
      },
      // Hanya untuk development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
    ],
    
    // ⚠️ PENTING: Set unoptimized jika ada masalah dengan image optimization
    // atau jika tidak menggunakan Next.js Image Optimization API
    unoptimized: true,
  },
  
  // ESLint configuration untuk build
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors saat build
  },
  
  // Disable x-powered-by header untuk security
  poweredByHeader: false,
  
  // Optional: Compress responses
  compress: true,
  
  // Optional: Generate ETags untuk caching
  generateEtags: true,
};

export default nextConfig;