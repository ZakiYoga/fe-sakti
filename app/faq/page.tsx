'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown, 
  Building2, 
  Phone,
  Package,
  Factory,
  Users,
  Award,
  HelpCircle,
  Search,
  Star,
  Clock
} from 'lucide-react'

// Types and Interfaces
interface FAQ {
  id: number
  category: string
  question: string
  answer: string
  icon: React.ComponentType<{ className?: string }>
  isPopular: boolean
}

interface FAQCardProps {
  faq: FAQ
  index: number
  isOpen: boolean
  onToggle: () => void
}

// Next.js 15 compatible interface
interface FAQPageParams {
  params: Promise<Record<string, string>>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

// FAQ Data
const faqData: FAQ[] = [
  {
    id: 1,
    category: "Perusahaan",
    question: "Apa visi dan misi PT Sakti Pangan Perkasa?",
    answer: "Visi kami adalah menjadi Perusahaan Pengelolaan Makanan yang mampu bersaing secara nasional dengan selalu melakukan inovasi. Misi kami mencakup berintegritas, profesional, kreatif dan inovatif, serta efektif dan efisien dalam setiap operasional.",
    icon: Building2,
    isPopular: true
  },
  {
    id: 2,
    category: "Produk",
    question: "Apa saja produk unggulan yang diproduksi?",
    answer: "Kami memproduksi berbagai tepung roti yang berkualitas tinggi, diantaranya : Sakti, Laskar, Pita, AkStar, 7Daun, FryFest semua produk kami telah tersertifikasi halal dan BPOM.",
    icon: Package,
    isPopular: true
  },
  {
    id: 3,
    category: "Kualitas",
    question: "Sertifikasi apa saja yang dimiliki perusahaan?",
    answer: "Kami memiliki berbagai sertifikasi diantaranya termasuk ISO 9001:2015, Sertifikasi Halal MUI, Sertifikasi BPOM.",
    icon: Award,
    isPopular: false
  },
  {
    id: 4,
    category: "Produksi",
    question: "Di mana lokasi fasilitas produksi?",
    answer: "KM9.4, Jl. Sragen - Solo No.8, Wates, Jetis, Kec. Jaten, Kabupaten Karanganyar, Jawa Tengah 57731",
    icon: Factory,
    isPopular: false
  },
  {
    id: 5,
    category: "Kontak",
    question: "Bagaimana cara menghubungi customer service?",
    answer: "Tim customer service kami dapat dihubungi melalui telepon (0271) 821919 pada jam kerja atau email official@saktipangan.co.id dengan response time maksimal 24 jam.",
    icon: Phone,
    isPopular: false
  }
]

// Categories matching the data
const categories: string[] = [
  "Semua",
  "Perusahaan", 
  "Produk", 
  "Kualitas", 
  "Produksi", 
  "Kontak"
]

// FAQ Card Component
const FAQCard: React.FC<FAQCardProps> = ({
  faq,
  index,
  isOpen,
  onToggle
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <Card className={`border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
        isOpen ? 'ring-2 ring-orange-500/20 bg-gradient-to-br from-orange-100/50 to-orange-50 dark:from-orange-900/50 dark:to-gray-900/60' : ''
      }`}>
        <motion.div
          onClick={onToggle}
          className="p-6 sm:p-8"
          whileTap={{ scale: 0.995 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-300 ${
                  isOpen 
                    ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' 
                    : 'bg-orange-100/70 text-orange-500 group-hover:bg-orange-100 group-hover:text-orange-600 dark:bg-orange-900/70 dark:text-orange-400 dark:group-hover:bg-orange-900'
                }`}>
                  <faq.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs transition-all duration-300 ${
                      isOpen 
                        ? 'border-orange-300 text-orange-700 bg-orange-50 dark:border-orange-600 dark:text-orange-300 dark:bg-orange-900/50' 
                        : 'border-orange-300 text-orange-600 group-hover:border-orange-400 group-hover:text-orange-700 dark:border-orange-600 dark:text-orange-400'
                    }`}
                  >
                    {faq.category}
                  </Badge>
                  {faq.isPopular && (
                    <Badge className="text-xs bg-orange-500 hover:bg-orange-600 text-white">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              
              <h3 className={`font-bold text-lg sm:text-xl leading-tight transition-colors duration-300 ${
                isOpen 
                  ? 'text-orange-700 dark:text-orange-300' 
                  : 'text-gray-900 group-hover:text-orange-800 dark:text-white dark:group-hover:text-orange-300'
              }`}>
                {faq.question}
              </h3>
            </div>
            
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-2 sm:p-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                isOpen 
                  ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' 
                  : 'bg-orange-100/70 text-orange-500 group-hover:bg-orange-100 group-hover:text-orange-600 dark:bg-orange-900/70 dark:text-orange-400'
              }`}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                <div className="pl-16 sm:pl-20">
                  <div className="border-l-4 border-orange-200 dark:border-orange-700 pl-4 sm:pl-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

const FAQPage: React.FC<FAQPageParams> = ({ params, searchParams }) => {
  const [openItems, setOpenItems] = useState<number[]>([1])
  const [activeCategory, setActiveCategory] = useState<string>("Semua")
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqData)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const toggleItem = (id: number): void => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filterByCategory = (category: string): void => {
    setActiveCategory(category)
    let filtered = category === "Semua" 
      ? faqData 
      : faqData.filter(faq => faq.category === category)
    
    if (searchTerm) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredFAQs(filtered)
    setOpenItems([])
  }

  const handleSearch = (term: string): void => {
    setSearchTerm(term)
    let filtered = activeCategory === "Semua" 
      ? faqData 
      : faqData.filter(faq => faq.category === activeCategory)
    
    if (term) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(term.toLowerCase()) ||
        faq.answer.toLowerCase().includes(term.toLowerCase())
      )
    }
    
    setFilteredFAQs(filtered)
  }

  const expandAll = (): void => setOpenItems(filteredFAQs.map(faq => faq.id))
  const collapseAll = (): void => setOpenItems([])

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="FAQ"
        description="Temukan jawaban untuk pertanyaan yang sering diajukan tentang PT Sakti Pangan Perkasa"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Main FAQ Section */}
      <section ref={sectionRef} className="py-8 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Filter & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => filterByCategory(category)}
                    className={`transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-orange-500 hover:bg-orange-600 text-white scale-105'
                        : 'bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 border-gray-300 hover:border-orange-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-orange-900/20 dark:border-gray-600'
                    }`}
                  >
                    {category}
                    {category !== "Semua" && (
                      <span className="ml-2 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                        {faqData.filter(faq => faq.category === category).length}
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={expandAll}
                  className="bg-white hover:bg-green-50 text-green-700 hover:text-green-800 border-green-300 hover:border-green-400 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-green-900/20 dark:border-green-600"
                >
                  Buka Semua
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={collapseAll}
                  className="bg-white hover:bg-red-50 text-red-700 hover:text-red-800 border-red-300 hover:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-red-900/20 dark:border-red-600"
                >
                  Tutup Semua
                </Button>
              </div>
            </div>

            <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
              Menampilkan {filteredFAQs.length} dari {faqData.length} pertanyaan
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-4 lg:space-y-6"
          >
            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={`${activeCategory}-${faq.id}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <FAQCard
                      faq={faq}
                      index={index}
                      isOpen={openItems.includes(faq.id)}
                      onToggle={() => toggleItem(faq.id)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Tidak ada pertanyaan yang cocok dengan pencarian Anda
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                    Coba gunakan kata kunci yang berbeda atau pilih kategori lain
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage