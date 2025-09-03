"use client";
import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogApi, extractApiData, handleApiError } from '@/lib/api';
import { Blog } from '@/types/blog.types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import HeaderPages from '@/components/HeaderPages';
import CTASection from '@/components/CTASection';
import { 
  Calendar, 
  User, 
  Eye, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Link2,
  Clock,
  Tag,
  Loader2,
  AlertTriangle,
  RefreshCw,
  Bell,
  Mail,
  ArrowRight
} from 'lucide-react';

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch blog detail
        const response = await blogApi.getBySlug(slug);
        const blogData = extractApiData(response);
        
        if (!blogData) {
          notFound();
        }

        setBlog(blogData);

        // Optionally fetch related blogs
        try {
          const relatedResponse = await blogApi.getAll({ 
            per_page: 3, 
            category: blogData.category?.slug 
          });
          const relatedData = extractApiData(relatedResponse);
          // Filter out current blog from related
          const filtered = relatedData.data?.filter((item: Blog) => item.id !== blogData.id) || [];
          setRelatedBlogs(filtered.slice(0, 3));
        } catch (relatedError) {
          console.warn('Failed to fetch related blogs:', relatedError);
        }

      } catch (err) {
        const apiError = handleApiError(err);
        if (apiError.status === 404) {
          notFound();
        }
        setError(apiError.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
  }, [slug]);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  type SharePlatform = 'facebook' | 'twitter' | 'linkedin' | 'copy';

  const handleShare = (platform: SharePlatform) => {
    const url = window.location.href;
    const title = blog?.title || '';
    
    const shareUrls: Record<SharePlatform, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      // You can add a toast notification here
      alert('Link berhasil disalin!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  // CTA buttons for newsletter subscription
  const ctaButtons = [
    {
      label: 'Berlangganan Newsletter',
      icon: Bell,
      variant: 'default' as const,
      onClick: () => console.log('Subscribe to newsletter')
    },
    {
      label: 'Hubungi Tim Editorial',
      icon: Mail,
      variant: 'outline' as const,
      onClick: () => console.log('Contact editorial team')
    }
  ];

  // Loading state with consistent styling
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeaderPages
          title="Memuat Artikel..."
          description="Sedang mengambil artikel terbaru untuk Anda"
          backgroundImage="/images/bg-header.png"
          height="md"
          className="py-16"
        />
        
        <div className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">Memuat artikel...</p>
              </div>
              
              {/* Loading Skeleton */}
              <div className="animate-pulse space-y-8">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
                <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="flex gap-4 items-center">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20" />
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-24" />
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16" />
                </div>
                <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Error state with consistent styling
  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeaderPages
          title="Artikel Tidak Ditemukan"
          description="Maaf, artikel yang Anda cari tidak dapat ditemukan"
          backgroundImage="/images/bg-header.png"
          height="md"
          className="py-16"
        />
        
        <div className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-6">
                <AlertTriangle className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Artikel Tidak Ditemukan
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                {error}
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleRetry}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Coba Lagi
                </Button>
                <Link href="/blog">
                  <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali ke Blog
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with consistent styling */}
      <HeaderPages
        title="Sakti News"
        description={blog.title}
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Main Content */}
      <div className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Blog
              </Button>
            </Link>
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Article Meta */}
            <div className="space-y-6">
              {/* Category Badge */}
              {blog.category && (
                <div>
                  <Badge 
                    variant="outline" 
                    className="text-sm border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800"
                  >
                    {blog.category.name}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {blog.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blog.published_at)}
                </div>
                {blog.user && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blog.user.name}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {blog.views.toLocaleString()} views
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {calculateReadingTime(blog.content)} min read
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {blog.featured_image && (
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={blog.featured_image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Excerpt */}
            {blog.excerpt && (
              <div className="text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed bg-orange-50 dark:bg-gray-800/60 p-6 rounded-lg border-l-4 border-orange-500">
                {blog.excerpt}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-orange">
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-gray-800 dark:text-gray-200 leading-relaxed"
              />
            </div>

            {/* Share Buttons */}
            <Card className="border border-transparent bg-orange-50 dark:bg-gray-900/60 shadow-lg p-6 hover:border-orange-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bagikan Artikel Ini</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sebarkan informasi bermanfaat ini kepada yang lain</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="border-blue-200 bg-blue-600 fill-white text-white hover:bg-blue-700 hover:text-white dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="border-sky-200 bg-sky-500 text-white hover:bg-sky-600 hover:text-white dark:border-sky-800 dark:text-sky-400 dark:hover:bg-sky-900/20"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('linkedin')}
                    className="border-blue-200 text-sky-400 hover:text-sky-300 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('copy')}
                    className="border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Artikel Terkait
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Baca juga artikel lainnya yang mungkin menarik untuk Anda
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="h-full"
                  >
                    <Card className="group h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {relatedBlog.featured_image && (
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={relatedBlog.featured_image}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          {relatedBlog.category && (
                            <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 bg-orange-50/50 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800">
                              {relatedBlog.category.name}
                            </Badge>
                          )}
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="h-3 w-3" />
                            {formatDate(relatedBlog.published_at)}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-2">
                          <Link href={`/blog/${relatedBlog.slug}`}>
                            {relatedBlog.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                          {relatedBlog.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <Link
                            href={`/blog/${relatedBlog.slug}`}
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm group-hover:gap-3 transition-all"
                          >
                            Baca Selengkapnya
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Eye className="h-3 w-3" />
                            {relatedBlog.views}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;