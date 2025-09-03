'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  BookOpen, 
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  ChevronRight,
  Filter
} from 'lucide-react'

import useSWR from 'swr'
import { blogApi } from '../../lib/api';

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  views: number
  comments: number
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Inovasi Terbaru dalam Industri Pangan: Teknologi Food Processing Modern",
    excerpt: "Mengenal lebih dekat teknologi terbaru yang kami terapkan untuk menghasilkan produk pangan berkualitas tinggi dengan standar internasional.",
    content: "Content lengkap artikel...",
    author: "Tim R&D Sakti Pangan",
    date: "2024-01-15",
    readTime: "5 menit",
    category: "Teknologi",
    tags: ["inovasi", "teknologi", "food processing"],
    image: "/images/blog/blog1.jpg",
    views: 1250,
    comments: 23,
    featured: true
  },
  {
    id: 2,
    title: "Komitmen Kualitas: Sertifikasi ISO dan HACCP PT Sakti Pangan Perkasa",
    excerpt: "Perjalanan kami dalam meraih berbagai sertifikasi internasional untuk memastikan kualitas dan keamanan produk pangan.",
    content: "Content lengkap artikel...",
    author: "Quality Assurance Team",
    date: "2024-01-10",
    readTime: "7 menit",
    category: "Kualitas",
    tags: ["sertifikasi", "ISO", "HACCP", "kualitas"],
    image: "/images/blog/blog2.jpg",
    views: 980,
    comments: 17,
    featured: true
  },
  {
    id: 3,
    title: "Sustainability dalam Industri Pangan: Langkah Menuju Masa Depan Hijau",
    excerpt: "Inisiatif ramah lingkungan dan program keberlanjutan yang kami jalankan untuk menjaga kelestarian alam.",
    content: "Content lengkap artikel...",
    author: "Environmental Team",
    date: "2024-01-05",
    readTime: "6 menit",
    category: "Lingkungan",
    tags: ["sustainability", "ramah lingkungan", "green technology"],
    image: "/images/blog/blog3.jpg",
    views: 756,
    comments: 12,
    featured: false
  },
  {
    id: 4,
    title: "Kemitraan Strategis: Membangun Ekosistem Pangan Indonesia",
    excerpt: "Bagaimana kami membangun kemitraan dengan petani lokal dan distributor untuk memperkuat rantai pasok pangan nasional.",
    content: "Content lengkap artikel...",
    author: "Partnership Team",
    date: "2023-12-28",
    readTime: "4 menit",
    category: "Partnership",
    tags: ["kemitraan", "petani lokal", "rantai pasok"],
    image: "/images/blog/blog4.jpg",
    views: 643,
    comments: 8,
    featured: false
  }
]

const categories = ["Semua", "Teknologi", "Kualitas", "Lingkungan", "Partnership"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Filter posts based on search and category
  React.useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== "Semua") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <HeaderPages
        title="Blog & Berita"
        description="Temukan informasi terkini, artikel menarik, dan update terbaru dari PT Sakti Pangan Perkasa"
        backgroundImage="/images/bg-header.png"
        height="md"
      />

      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300'
                    }`}
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-gray-600 text-sm">
              Menampilkan {filteredPosts.length} artikel
            </div>
          </motion.div>

          {/* Featured Posts */}
          {selectedCategory === "Semua" && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-500 mr-3" />
                Artikel Unggulan
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-orange-50/30">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                            Unggulan
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('id-ID')}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50">
                            Baca Selengkapnya
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-orange-500 mr-3" />
              {selectedCategory === "Semua" ? "Semua Artikel" : `Kategori: ${selectedCategory}`}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Tidak ada artikel yang ditemukan</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="bg-white/90 text-orange-600 border-orange-200">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('id-ID')}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            {post.comments}
                          </div>
                        </div>

                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <User className="h-3 w-3 mr-1" />
                            {post.author.split(' ').slice(0, 2).join(' ')}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-orange-50">
                              <Share2 className="h-4 w-4 text-gray-400 hover:text-orange-500" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 text-xs">
                              Baca
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Muat Artikel Lainnya
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}