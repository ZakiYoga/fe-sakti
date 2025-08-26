'use client'

import React, { useState, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Clock,
  Users,
  Eye,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  Calendar,
  TrendingUp,
  Loader2,
  AlertTriangle,
  RefreshCw
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { blogApi, extractApiData } from '../../lib/api'
import { Blog, BlogParams, PaginatedResponse } from '@/types/blog.types'

// Types for component props
interface BlogSectionProps {
  title?: string
  subtitle?: string
  description?: string
  className?: string
  showViewAll?: boolean
  autoScroll?: boolean
  cardVariant?: 'default' | 'featured'
  limit?: number
}

interface BlogCardProps {
  blog: Blog
  index: number
  containerWidth: number
}

interface NavButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}

// Constants
const SCROLL_THRESHOLD = 300
const DEFAULT_LIMIT = 6

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.02, y: -4 }
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

// Utility Functions
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return 'Kemarin'
  if (diffDays < 7) return `${diffDays} hari lalu`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`
  return `${Math.floor(diffDays / 30)} bulan lalu`
}

const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

// Fetcher function for SWR
const fetcher = async (url: string, params: BlogParams): Promise<PaginatedResponse<Blog>> => {
  const response = await blogApi.getAll(params)
  return extractApiData(response)
}

// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({ blog, index, containerWidth }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const cardWidth = Math.max(320, containerWidth / 4.2)
  
  const readTime = calculateReadTime(blog.content || '')
  const formattedDate = formatDate(blog.published_at)
  
  // Default image if no featured image
  const imageUrl = blog.featured_image 

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      variants={cardVariants}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="flex-none cursor-pointer"
      style={{ width: cardWidth }}
    >
      <Link href={`/blog/${blog.slug}`}>
        <Card className="group overflow-hidden border border-gray-100 bg-white hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-xl rounded-xl">
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <Image
              src={imageUrl ?? "/images/image-not-found.png"}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/images/image-not-found.png'
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            {blog.category && (
              <div className="absolute top-3 left-3">
                <Badge 
                  className="bg-white/90 text-gray-700 hover:bg-white font-medium text-xs px-3 py-1"
                >
                  {blog.category.name}
                </Badge>
              </div>
            )}

            {/* Views count on hover */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full">
                <Eye className="h-3 w-3" />
                {/* <span>{blog.views || 0}</span> */}
              </div>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-5">
            <div className="space-y-3">
              {/* Title */}
              <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 text-lg leading-snug">
                {blog.title}
              </h3>

              {/* Description/Excerpt */}
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {blog.excerpt || 'Baca artikel lengkap untuk mengetahui lebih lanjut...'}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  {/* Author info */}
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium text-gray-900">
                      {blog.user?.name || 'Admin'}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{readTime}m</span>
                  </div>
                  {/* {blog.views && (
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{blog.views}</span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

// Loading Component
const LoadingIndicator: React.FC<{ className?: string }> = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`flex-none w-80 h-96 flex items-center justify-center ${className}`}
  >
    <div className="text-center">
      <Loader2 className="w-8 h-8 text-orange-500 animate-spin mx-auto mb-3" />
      <p className="text-gray-600 text-sm">Memuat Berita lainnya...</p>
    </div>
  </motion.div>
)

// Error Component
const ErrorState: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex-none w-80 h-96 flex items-center justify-center"
  >
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Gagal Memuat Berita
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Terjadi kesalahan saat mengambil data
      </p>
      <Button
        onClick={onRetry}
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 text-white"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Coba Lagi
      </Button>
    </div>
  </motion.div>
)

// Navigation Button Component
const NavButton: React.FC<NavButtonProps> = ({ direction, onClick, disabled = false }) => (
  <Button
    variant="outline"
    size="sm"
    onClick={onClick}
    disabled={disabled}
    className="h-10 w-10 rounded-md bg-white shadow-md hover:shadow-lg border-gray-200 hover:border-orange-300 transition-all duration-300 disabled:opacity-50"
  >
    {direction === 'left' ? (
      <ChevronLeft className="h-4 w-4" />
    ) : (
      <ChevronRight className="h-4 w-4" />
    )}
  </Button>
)

// Skeleton Loading Component
const BlogSkeleton: React.FC<{ containerWidth: number }> = ({ containerWidth }) => {
  const cardWidth = Math.max(320, containerWidth / 4.2)
  
  return (
    <div className="flex gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex-none animate-pulse" style={{ width: cardWidth }}>
          <Card className="overflow-hidden border border-gray-100 bg-white rounded-xl">
            <div className="aspect-[16/10] bg-gray-200" />
            <CardContent className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div className="space-y-1">
                    <div className="h-3 bg-gray-200 rounded w-16" />
                    <div className="h-3 bg-gray-200 rounded w-20" />
                  </div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-12" />
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

// Main Blog Section Component
const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Berita Terkini",
  subtitle = "Simak Berita terbaru dari kami",
  description = "Dapatkan informasi terbaru dan terupdate tentang produk, layanan, dan berita terkini dari kami.",
  className = "",
  showViewAll = true,
  autoScroll = false,
  cardVariant = "default",
  limit = DEFAULT_LIMIT
}) => {
  // State Management
  const [containerWidth, setContainerWidth] = useState(1200)

  // Refs
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animations
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // SWR for data fetching
  const { data: blogData, error, mutate } = useSWR<PaginatedResponse<Blog>>(
    ['blogs-homepage', { page: 1, per_page: limit, status: 'published' }],
    ([url, params]: [string, BlogParams]) => fetcher(url, params),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 5 * 60 * 1000, // Refresh every 5 minutes
    }
  )

  // Effects
  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Scroll Navigation
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const cardWidth = Math.max(320, containerWidth / 4.2)
    const scrollAmount = cardWidth + 24

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }, [containerWidth])

  // Auto scroll effect
  React.useEffect(() => {
    if (!autoScroll || !blogData?.data.length) return

    const interval = setInterval(() => {
      scroll('right')
    }, 3000)

    return () => clearInterval(interval)
  }, [autoScroll, scroll, blogData?.data.length])

  const handleRetry = () => {
    mutate()
  }

  return (
    <section
      ref={sectionRef}
      className={`px-4 sm:px-8 lg:px-16 xl:px-20 py-8 lg:py-2 bg-gradient-to-br from-gray-50 to-white ${className}`}
    >
      <div ref={containerRef} className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Title and Description - 1/4 width on large screens */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/4 flex-shrink-0 items-center flex flex-col justify-center"
          >
            <div className="space-y-4">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-6xl tracking-widest font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="font-ephesis first-letter:text-3xl font-semibold text-lg sm:text-2xl tracking-wider text-orange-500">
                  Sakti
                  <span className="ml-1 text-green-500 dark:text-green-200">News</span>
                </p>
                <h2 className="text-orange-500 drop-shadow-[4px_2px_0px_rgba(0,0,0,0.7)] font-bebas-neue">
                  {title}
                </h2>
              </motion.div>

              <motion.p
                className="text-gray-600 text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {description}
              </motion.p>

              {showViewAll && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="hidden lg:block pt-4"
                >
                  <Link href="/blog" className="w-fit">
                    <Button
                      size="lg"
                      variant="press"
                      className="w-fit px-4 active:bg-orange-500 active:text-orange-50 bg-transparent border-orange-600 text-orange-500"
                    >
                      <Newspaper className="h-4 w-4" />
                      Lihat Semua Berita
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Cards Container - 3/4 width on large screens */}
          <div className="lg:w-3/4 flex-1">
            {/* Navigation Controls */}
            {blogData?.data.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex justify-between items-center my-4"
              >
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-900">{blogData.total}</span> Berita tersedia
                </div>
                <div className="flex gap-2">
                  <NavButton direction="left" onClick={() => scroll('left')} />
                  <NavButton direction="right" onClick={() => scroll('right')} />
                </div>
              </motion.div>
            )}

            {/* Blog Cards Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative"
            >
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
                style={{
                  scrollSnapType: 'x proximity',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* Loading State */}
                {!blogData && !error && (
                  <BlogSkeleton containerWidth={containerWidth * 0.75} />
                )}

                {/* Error State */}
                {error && (
                  <ErrorState onRetry={handleRetry} />
                )}

                {/* Blog Cards */}
                {blogData?.data && (
                  <AnimatePresence mode="wait">
                    {blogData.data.map((blog, index) => (
                      <motion.div
                        key={blog.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        <BlogCard
                          blog={blog}
                          index={index}
                          containerWidth={containerWidth * 0.75}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}

                {/* Empty State */}
                {blogData?.data.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-none w-full text-center py-16"
                  >
                    <div className="text-6xl mb-4">📰</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Belum Ada Berita
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Berita terbaru sedang dalam proses. Silakan kembali lagi nanti.
                    </p>
                    <Button
                      onClick={handleRetry}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Muat Ulang
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Mobile View All Button */}
            {showViewAll && blogData?.data.length && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex justify-center mt-8 lg:hidden"
              >
                <Link href="/blog">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Newspaper className="mr-2 h-4 w-4" />
                    Lihat Semua Berita
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default BlogSection