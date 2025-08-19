'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
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
  Award,
  Truck,
  Shield
} from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  description: string
  image: string
  rating: number
  reviews: number
  inStock: boolean
  isNew: boolean
  isBestSeller: boolean
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Coconut Oil 500ml",
    category: "Minyak Kelapa",
    price: 85000,
    originalPrice: 95000,
    description: "Minyak kelapa murni berkualitas premium, diekstrak dari kelapa pilihan dengan teknologi cold press untuk mempertahankan nutrisi alami.",
    image: "/images/product-coconut-oil.jpg",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    features: ["100% Murni", "Cold Press", "Tanpa Pengawet", "Halal"]
  },
  {
    id: 2,
    name: "Organic Palm Sugar 1kg",
    category: "Gula Aren",
    price: 65000,
    description: "Gula aren organik murni tanpa campuran, diproduksi dari nira kelapa segar dengan proses tradisional yang terjaga kualitasnya.",
    image: "/images/product-palm-sugar.jpg",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    isNew: true,
    isBestSeller: false,
    features: ["Organik", "Tanpa Pewarna", "Rendah Kalori", "Natural"]
  },
  {
    id: 3,
    name: "Traditional Soy Sauce 250ml",
    category: "Kecap",
    price: 25000,
    originalPrice: 30000,
    description: "Kecap tradisional dengan cita rasa autentik, dibuat dari kedelai pilihan melalui proses fermentasi alami selama berbulan-bulan.",
    image: "/images/product-soy-sauce.jpg",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    features: ["Fermentasi Alami", "Kedelai Pilihan", "Tanpa MSG", "Halal"]
  },
  {
    id: 4,
    name: "Instant Spice Mix - Rendang",
    category: "Bumbu Instan",
    price: 15000,
    description: "Bumbu rendang instan dengan komposisi rempah-rempah pilihan, memberikan cita rasa rendang autentik dalam waktu singkat.",
    image: "/images/product-rendang-spice.jpg",
    rating: 4.9,
    reviews: 324,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    features: ["Rempah Pilihan", "Praktis", "Cita Rasa Autentik", "Tanpa Pengawet"]
  },
  {
    id: 5,
    name: "Virgin Coconut Oil 1L",
    category: "Minyak Kelapa",
    price: 145000,
    originalPrice: 165000,
    description: "Minyak kelapa virgin (VCO) premium dengan kandungan asam laurat tinggi, baik untuk konsumsi dan perawatan tubuh.",
    image: "/images/product-vco.jpg",
    rating: 4.8,
    reviews: 198,
    inStock: false,
    isNew: false,
    isBestSeller: true,
    features: ["Virgin Quality", "High Lauric Acid", "Multi Purpose", "Certified"]
  },
  {
    id: 6,
    name: "Healthy Cooking Oil 2L",
    category: "Minyak Goreng",
    price: 45000,
    description: "Minyak goreng sehat dengan kandungan vitamin E, cocok untuk berbagai jenis masakan dengan titik asap tinggi.",
    image: "/images/product-cooking-oil.jpg",
    rating: 4.5,
    reviews: 267,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    features: ["Vitamin E", "High Smoke Point", "Cholesterol Free", "Heart Healthy"]
  }
]

const categories = ["Semua", "Minyak Kelapa", "Gula Aren", "Kecap", "Bumbu Instan", "Minyak Goreng"]
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
        <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="text-orange-500 text-3xl font-bold">
                  {product.name.charAt(0)}
                </div>
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
                      {!product.inStock && <Badge variant="destructive" className="text-xs">Habis</Badge>}
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.map((feature) => (
                        <span key={feature} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
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
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Beli' : 'Habis'}
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
      <Card className="group h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
            <div className="text-orange-500 text-6xl font-bold">
              {product.name.charAt(0)}
            </div>
          </div>
          
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && <Badge className="text-xs bg-green-500">Baru</Badge>}
            {product.isBestSeller && <Badge className="text-xs bg-orange-500">Terlaris</Badge>}
            {!product.inStock && <Badge variant="destructive" className="text-xs">Habis</Badge>}
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

          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
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

          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 2).map((feature) => (
              <span key={feature} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Beli' : 'Habis'}
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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
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

  const stats = [
    { icon: Award, label: "Produk Berkualitas", value: "50+" },
    { icon: Truck, label: "Pengiriman Cepat", value: "24 Jam" },
    { icon: Shield, label: "Jaminan Halal", value: "100%" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Produk Kami"
        description="Temukan beragam produk pangan berkualitas premium yang telah dipercaya oleh ribuan pelanggan di seluruh Indonesia"
        backgroundImage="/images/bg-header.png"
        height="md"
        overlay="gradient"
      />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Katalog Produk</h2>
                <p className="text-gray-600">Menampilkan {filteredProducts.length} dari {products.length} produk</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full sm:w-80"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-300 text-orange-600 hover:bg-orange-50'}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-300 text-orange-600 hover:bg-orange-50'}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {category}
                    {category !== "Semua" && (
                      <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        {products.filter(product => product.category === category).length}
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid/List */}
          <div className={`${
            viewMode === 'grid' 
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

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ingin Menjadi Mitra Bisnis?
            </h2>
            <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan jaringan distribusi kami dan raih kesempatan bisnis yang menguntungkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Hubungi Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-orange-600">
                Download Katalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}