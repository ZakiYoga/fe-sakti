'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Clock,
  Users,
  Heart,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'
import { generateBlogPosts } from '../../DataDummy/DataBlog'
import { BlogCardProps, BlogPost, BlogSectionProps, LoadingIndicatorProps, NavButtonProps } from '@/types/blog.types'
import Link from 'next/link'

// Constants
const LOAD_MORE_COUNT = 6
const MAX_POSTS = 24
const SCROLL_THRESHOLD = 300
const LOAD_DELAY = 800

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
const generateMorePosts = (startId: number, count: number): BlogPost[] => {
  const basePosts = generateBlogPosts()
  return Array.from({ length: count }, (_, i) => {
    const basePost = basePosts[i % basePosts.length]
    return {
      ...basePost,
      id: startId + i,
      title: `${basePost.title} - Edisi ${Math.floor(startId / LOAD_MORE_COUNT) + 1}`,
      publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      likes: Math.floor(Math.random() * 500) + 50,
      views: Math.floor(Math.random() * 2000) + 200,
    }
  })
}

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


// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({ post, index, containerWidth }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const cardWidth = Math.max(320, containerWidth / 4.2)

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
      <Card className="group overflow-hidden border border-gray-100 bg-white hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-xl rounded-xl">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-gray-700 hover:bg-white font-medium text-xs px-3 py-1">
              {post.category}
            </Badge>
          </div>

          {/* Featured Badge */}
          {post.isFeatured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            </div>
          )}

          {/* Quick Stats */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full">
              <Heart className="h-3 w-3" />
              <span>{post.likes}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-5">
          <div className="space-y-3">
            {/* Title */}
            <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 text-lg leading-snug">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <Image
                  width={32}
                  height={32}
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-xs">
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-gray-500">{formatDate(post.publishedAt)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}m</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Loading Component
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`flex-none w-80 h-96 flex items-center justify-center ${className}`}
  >
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto mb-3"
      />
      <p className="text-gray-600 text-sm">Memuat Berita lainnya...</p>
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

// Main Blog Section Component
const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Berita Terkini",
  subtitle = "Simak Berita terbaru dari kami",
  description = "Dapatkan informasi terbaru dan terupdate tentang produk, layanan, dan berita terkini dari kami.",
  className = "",
  showViewAll = true,
  autoScroll = false,
  cardVariant = "default"
}) => {
  // State Management
  const [posts, setPosts] = useState<BlogPost[]>(generateBlogPosts())
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [containerWidth, setContainerWidth] = useState(1200)

  // Refs
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animations
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Effects
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Load More Posts Function
  const loadMorePosts = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    setTimeout(() => {
      const newPosts = generateMorePosts(posts.length + 1, LOAD_MORE_COUNT)
      setPosts(prev => [...prev, ...newPosts])
      setLoading(false)

      if (posts.length >= MAX_POSTS) {
        setHasMore(false)
      }
    }, LOAD_DELAY)
  }, [posts.length, loading, hasMore])

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
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      scroll('right')
    }, 3000)

    return () => clearInterval(interval)
  }, [autoScroll, scroll])

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
              {/* <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">
                  {subtitle}
                </Badge>
              </motion.div> */}

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
                <h2 className="text-orange-500 drop-shadow-[4px_2px_0px_rgba(0,0,0,0.7)] font-bebas-neue ">
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
                  <Link href="/about" className="w-fit">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-end items-center my-4"
            >
              {/* <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">{posts.length}</span> Berita tersedia
              </div> */}
              <div className="flex gap-2">
                <NavButton direction="left" onClick={() => scroll('left')} />
                <NavButton direction="right" onClick={() => scroll('right')} />
              </div>
            </motion.div>

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
                <AnimatePresence mode="wait">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <BlogCard
                        post={post}
                        index={index}
                        containerWidth={containerWidth * 0.75}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && <LoadingIndicator />}
              </div>
            </motion.div>

            {/* Mobile View All Button */}
            {showViewAll && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex justify-center mt-8 lg:hidden"
              >
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Newspaper className="mr-2 h-4 w-4" />
                  Lihat Semua Berita
                </Button>
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