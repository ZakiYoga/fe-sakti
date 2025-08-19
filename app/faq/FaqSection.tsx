'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { FAQCardProps, FAQItem, FAQSectionProps } from '@/types/faq.types'
import { faqData } from '../(homepage)/DataFaq'

// FAQ Categories
const categories = [
  "Semua",
  "Perusahaan", 
  "Produk", 
  "Kualitas", 
  "Produksi", 
  "Kemitraan",
  "Lokasi",
  "Kontak"
]

// FAQ Card Component
const FAQCard: React.FC<FAQCardProps> = ({ faq, index, isOpen, onToggle }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ scale: 1.01, y: -2 }}
      className="w-full"
    >
      <Card className={`group overflow-hidden transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm ${
        isOpen 
          ? 'shadow-2xl ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 to-white' 
          : 'shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-gray-50/50 hover:to-white'
      }`}>
        <motion.div
          onClick={onToggle}
          className="p-6 cursor-pointer"
          whileTap={{ scale: 0.995 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isOpen 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}
                >
                  <faq.icon className="h-5 w-5" />
                </motion.div>
                
                <div className="flex gap-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs transition-all duration-300 ${
                      isOpen 
                        ? 'border-blue-300 text-blue-700 bg-blue-50' 
                        : 'border-gray-300 text-gray-600 group-hover:border-blue-300 group-hover:text-blue-700'
                    }`}
                  >
                    {faq.category}
                  </Badge>
                  {faq.isPopular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Badge className="text-xs bg-orange-500 hover:bg-orange-600 text-white">
                        Popular
                      </Badge>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <h3 className={`font-semibold text-lg leading-tight transition-colors duration-300 ${
                isOpen 
                  ? 'text-blue-900' 
                  : 'text-gray-900 group-hover:text-blue-800'
              }`}>
                {faq.question}
              </h3>
            </div>
            
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`p-2 rounded-full transition-all duration-300 ${
                isOpen 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <CardContent className="px-6 pb-6 pt-0">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="pl-14"
                >
                  <div className="border-l-4 border-blue-200 pl-4">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

// Main FAQ Section Component
const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Temukan jawaban untuk pertanyaan yang sering diajukan tentang perusahaan kami",
  companyName = "PT Sakti Pangan Perkasa",
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<number[]>([1]) // FAQ pertama terbuka by default
  const [activeCategory, setActiveCategory] = useState<string>("Semua")
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqData)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Toggle FAQ item
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Filter FAQs by category
  const filterByCategory = (category: string) => {
    setActiveCategory(category)
    if (category === "Semua") {
      setFilteredFAQs(faqData)
    } else {
      setFilteredFAQs(faqData.filter(faq => faq.category === category))
    }
    // Reset open items when filtering
    setOpenItems([])
  }

  // Expand all FAQs
  const expandAll = () => {
    setOpenItems(filteredFAQs.map(faq => faq.id))
  }

  // Collapse all FAQs
  const collapseAll = () => {
    setOpenItems([])
  }

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Building2 className="h-5 w-5" />
            {companyName}
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Category Filter & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => filterByCategory(category)}
                    className={`transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {category}
                    {category !== "Semua" && (
                      <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        {faqData.filter(faq => faq.category === category).length}
                      </span>
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={expandAll}
                  className="bg-white hover:bg-green-50 text-green-700 hover:text-green-800 border-green-300 hover:border-green-400 transition-all duration-300"
                >
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Buka Semua
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={collapseAll}
                  className="bg-white hover:bg-red-50 text-red-700 hover:text-red-800 border-red-300 hover:border-red-400 transition-all duration-300"
                >
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Tutup Semua
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center text-gray-600 text-sm"
          >
            Menampilkan {filteredFAQs.length} dari {faqData.length} pertanyaan
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
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
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Phone,
                  title: "Telepon",
                  info: "(021) 8934-5678",
                  description: "Senin - Jumat, 08:00 - 17:00",
                  color: "blue"
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "info@saktipangan.co.id",
                  description: "Response dalam 24 jam",
                  color: "green"
                },
                {
                  icon: MapPin,
                  title: "Kunjungi Kami",
                  info: "Jababeka, Cikarang",
                  description: "Jawa Barat, Indonesia",
                  color: "orange"
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-${contact.color}-100 text-${contact.color}-600 mb-4`}>
                    <contact.icon className="h-7 w-7" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">{contact.title}</h4>
                  <p className="font-medium text-gray-800 mb-1">{contact.info}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection