import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';
import { sampleProducts as products } from '@/DataDummy';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/product',
    '/blog',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product pages
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/produk/${product.href}`,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}