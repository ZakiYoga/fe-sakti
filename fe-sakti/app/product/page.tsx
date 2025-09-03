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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ShoppingCart,
  Eye,
  Heart,
  Filter,
  Grid3X3,
  List,
  Search,
  Users,
  Download,
  ChevronDown
} from 'lucide-react'
import { productStats, sampleProducts } from '@/DataDummy/DataProduct'
import { Product } from '@/types/product.types'
import Image from 'next/image'

// Extract unique categories from products
const getCategories = (products: Product[]) => {
  const categories = ["Semua", ...Array.from(new Set(products.map(product => product.category)))]
  return categories
}

// Updated sort options with Premium First as default
const sortOptions = ["Premium First", "Terbaru", "Nama A-Z"]

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
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
              {/* Image Section */}
              <div className="w-full grid place-content-center sm:w-24 md:w-28 lg:w-32 h-48 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex-shrink-0 relative overflow-hidden mx-auto sm:mx-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="p-2 w-18 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-2">
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                        {product.category}
                      </Badge>
                      {product.isNew && (
                        <Badge className="text-xs bg-green-500">Baru</Badge>
                      )}
                      {product.isBestSeller && (
                        <Badge className="text-xs bg-orange-500">Terlaris</Badge>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    {product.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 sm:line-clamp-3">
                        {product.description}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-start sm:justify-end w-full sm:w-auto">
                    {/* View Button - Hidden on mobile to save space */}
                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="hidden sm:flex border-orange-300 text-orange-600 hover:bg-orange-50"
                    >
                      <Eye className="h-4 w-4" />
                    </Button> */}

                    {/* Buy Button */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
                          <span className="hidden xs:inline">Beli Sekarang</span>
                          <span className="inline xs:hidden">Beli</span>
                          <ChevronDown className="h-4 w-4 ml-1 sm:ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                          className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                          onClick={() => window.open('https://www.tokopedia.com/sakti-pangan-perkasa', '_blank')}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={"/images/tokopedia.png"}
                              alt='tokopedia-icon'
                              height={100}
                              width={100}
                              className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                            />
                            <span>Tokopedia</span>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                          onClick={() => window.open('https://shopee.co.id/shop/1613453160', '_blank')}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={"/images/shopee.png"}
                              alt='shopee-icon'
                              height={100}
                              width={100}
                              className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                            />
                            <span>Shopee</span>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                          onClick={() => window.open('https://vt.tiktok.com/ZSAbApqPT/?page=Mall', '_blank')}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={"/images/tiktokshop.png"}
                              alt='tiktokshop-icon'
                              height={100}
                              width={100}
                              className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                            />
                            <span>TikTok Shop</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
          <div className="aspect-square grid place-content-center bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="p-4 md:p-6 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && <Badge className="text-xs bg-green-500">Baru</Badge>}
            {product.isBestSeller && <Badge className="text-xs bg-orange-500">Terlaris</Badge>}
          </div>

          {/* <Button
            size="sm"
            variant="outline"
            className="absolute bottom-3 right-3 bg-white/90 border-orange-300 text-orange-600 hover:bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button> */}
        </div>

        <CardContent className="p-4 md:p-6">
          <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 mb-2">
            {product.category}
          </Badge>

          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* {product.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )} */}

          <div className="flex gap-2">
            {/* <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
               <Eye className="h-4 w-4" />
            </Button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Beli
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                  onClick={() => window.open('https://tokopedia.com', '_blank')}
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/tokopedia.png"}
                      alt='tokopedia-icon'
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    Tokopedia
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                  onClick={() => window.open('https://shopee.co.id', '_blank')}
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/shopee.png"}
                      alt='shopee-icon'
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    Shopee
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                  onClick={() => window.open('https://shop.tiktok.com', '_blank')}
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/tiktokshop.png"}
                      alt='tiktokshop-icon'
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    TikTok Shop
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  // Changed default sortBy to "Premium First"
  const [sortBy, setSortBy] = useState("Premium First")
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
      case "Premium First":
        // Sort by premium first, then by best seller, then by new products
        const aPriority = (a.isPremium ? 3 : 0) + (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0)
        const bPriority = (b.isPremium ? 3 : 0) + (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0)
        return bPriority - aPriority
      case "Nama A-Z":
        return a.name.localeCompare(b.name)
      case "Terbaru":
        // Assuming products have a createdAt or similar field, or prioritize isNew flag
        if (a.isNew && !b.isNew) return -1
        if (!a.isNew && b.isNew) return 1
        return 0
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
            ? 'grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'
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
      {/* <CTASection
        title="Tertarik Menjadi Distributor?"
        description="Bergabunglah dengan jaringan distribusi kami dan raih peluang bisnis yang menguntungkan bersama produk berkualitas tinggi"
        buttons={ctaButtons}
      /> */}
    </div>
  )
}