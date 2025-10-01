import { MetadataRoute } from 'next';
import { defaultSEO } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: `${defaultSEO.openGraph?.url}/sitemap.xml`,
  };
}