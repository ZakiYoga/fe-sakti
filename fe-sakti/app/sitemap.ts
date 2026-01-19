import { MetadataRoute } from 'next'
import { defaultSEO } from '@/config/seo'

// Gunakan alias agar jelas sumber datanya
import { sampleProducts as products } from '@/DataDummy'
import { generateDummyBlogs as getBlogs } from '@/DataDummy/DataBlog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = defaultSEO.openGraph?.url ?? 'https://www.saktipangan.co.id'

  // Static pages
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/blog',
    '/contact',
    '/faq',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? ('daily' as const) : ('weekly' as const),
    priority: path === '' ? 1 : 0.8,
  }))

  // Dynamic product pages (pakai alias products)
  const productRoutes = products.map((item) => ({
    url: `${baseUrl}/products/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages (pakai alias getBlogs)
  const blogs = getBlogs()
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at ?? post.published_at ?? new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
