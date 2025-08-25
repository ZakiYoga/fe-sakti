'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Star,
  ShoppingCart,
  Eye,
  Heart,
  Filter,
  Grid3X3,
  List,
  Search,
  Users,
  Download
} from 'lucide-react'
import { productStats, sampleProducts } from '@/DataDummy/DataProduct'
import { Product } from '@/types/product.types'
import Image from 'next/image'

// Extract unique categories from products
const getCategories = (products: Product[]) => {
  const categories = ["Semua", ...Array.from(new Set(products.map(product => product.category)))]
  return categories
}

const sortOptions = ["Terbaru", "Nama A-Z", "Harga Terendah", "Harga Tertinggi", "Rating Tertinggi"]

const ProductCard = ({ product, index, viewMode }: { product: Product, index: number, viewMode: 'grid' | 'list' }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  if (viewMode === 'list') {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.01 }}
        className="w-full"
      >
        <Card className="group border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                        {product.category}
                      </Badge>
                      {product.isNew && <Badge className="text-xs bg-green-500">Baru</Badge>}
                      {product.isBestSeller && <Badge className="text-xs bg-orange-500">Terlaris</Badge>}
                    </div>

                    <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors mb-2">
                      {product.name}
                    </h3>

                    {product.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mb-4">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-orange-600">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Beli Sekarang
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="h-full"
    >
      <Card className="group h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && <Badge className="text-xs bg-green-500">Baru</Badge>}
            {product.isBestSeller && <Badge className="text-xs bg-orange-500">Terlaris</Badge>}
          </div>

          {product.originalPrice && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive" className="text-xs bg-red-500">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </Badge>
            </div>
          )}

          <Button
            size="sm"
            variant="outline"
            className="absolute bottom-3 right-3 bg-white/90 border-orange-300 text-orange-600 hover:bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="p-6">
          <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 mb-2">
            {product.category}
          </Badge>

          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                  }`}
              />
            ))}
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="mb-4">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through block">
                Rp {product.originalPrice.toLocaleString('id-ID')}
              </span>
            )}
            <span className="text-xl font-bold text-orange-600">
              Rp {product.price.toLocaleString('id-ID')}
            </span>
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Beli
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [sortBy, setSortBy] = useState("Terbaru")
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState("")

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const categories = getCategories(sampleProducts)

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    switch (sortBy) {
      case "Nama A-Z":
        return a.name.localeCompare(b.name)
      case "Harga Terendah":
        return a.price - b.price
      case "Harga Tertinggi":
        return b.price - a.price
      case "Rating Tertinggi":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  // Calculate total products per category
  const getCategoryCount = (category: string) => {
    if (category === "Semua") return sampleProducts.length
    return sampleProducts.filter(product => product.category === category).length
  }

  // Data untuk CTA Section
  const ctaButtons = [
    {
      label: 'Hubungi Sales',
      icon: Users,
      variant: 'default' as const,
      onClick: () => console.log('Navigate to contact sales')
    },
    {
      label: 'Download Katalog',
      icon: Download,
      variant: 'outline' as const,
      onClick: () => console.log('Download catalog')
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Katalog Produk"
        description="Temukan beragam produk tepung roti berkualitas premium dari brand terpercaya untuk kebutuhan kuliner Anda"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Stats Section - Menggunakan komponen yang sudah dipisahkan */}
      <StatsSection
        title="Mengapa Memilih Produk Kami?"
        description="Komitmen kami terhadap kualitas dan kepuasan pelanggan tercermin dalam setiap produk yang kami hasilkan"
        stats={productStats}
        showIcons={true}
      />

      {/* Products Section */}
      <section ref={sectionRef} className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Filters Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Produk Tepung Roti Sakti</h2>
                <p className="text-gray-600 dark:text-gray-300">Menampilkan {filteredProducts.length} dari {sampleProducts.length} produk tersedia</p>
              </div>

              {/* Search and View Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full sm:w-80 transition-all duration-300"
                  />
                </div>

                <div className="flex w-full justify-end lg:justify-start items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setViewMode('grid')}
                    className={`transition-all duration-300 ${viewMode === 'grid'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border-orange-300 text-orange-600 hover:bg-orange-50'
                      }`}
                  >
                    <Grid3X3 className="h-8 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setViewMode('list')}
                    className={`transition-all duration-300 ${viewMode === 'list'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border-orange-300 text-orange-600 hover:bg-orange-50'
                      }`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filter and Sort */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${selectedCategory === category
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-gray-800 hover:bg-orange-50 text-gray-700 dark:text-gray-300 hover:text-orange-600 border-gray-300 hover:border-orange-300'
                      }`}
                  >
                    {category}
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${selectedCategory === category
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                      {getCategoryCount(category)}
                    </span>
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm transition-all duration-300 dark:bg-gray-800 dark:text-white"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid/List */}
          <div className={`${viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
            }`}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Produk Tidak Ditemukan</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("Semua")
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Tertarik Menjadi Distributor?"
        description="Bergabunglah dengan jaringan distribusi kami dan raih peluang bisnis yang menguntungkan bersama produk berkualitas tinggi"
        buttons={ctaButtons}
      />
    </div>
  )
}