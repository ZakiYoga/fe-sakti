'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import CTASection from '@/components/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Users,
  Package,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Award,
  Handshake,
  Target
} from 'lucide-react'

// Interface untuk Next.js 15 App Router
interface DistribusiPageParams {
  params: Promise<Record<string, string>>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

// Data distributor
const distributorBenefits = [
  {
    icon: TrendingUp,
    title: "Margin Keuntungan Kompetitif",
    description: "Dapatkan margin keuntungan yang menguntungkan dengan sistem harga berjenjang yang adil"
  },
  {
    icon: Package,
    title: "Produk Berkualitas Tinggi",
    description: "Jual produk dengan kualitas terjamin dan sertifikasi internasional"
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Manfaatkan kekuatan brand yang sudah dikenal dan dipercaya pasar"
  },
  {
    icon: Handshake,
    title: "Dukungan Penuh",
    description: "Mendapat dukungan marketing, training, dan after-sales service"
  }
]

const requirements = [
  "Memiliki badan usaha yang legal (CV, PT, atau individual)",
  "Pengalaman minimal 2 tahun di bidang distribusi produk pangan",
  "Memiliki jaringan distribusi yang luas",
  "Modal kerja yang memadai",
  "Komitmen terhadap target penjualan",
  "Fasilitas penyimpanan yang sesuai standar"
]

const DistribusiPage: React.FC<DistribusiPageParams> = ({ params, searchParams }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    experience: '',
    message: ''
  })

  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Aplikasi distribusi berhasil dikirim!')
  }

  const ctaButtons = [
    {
      label: 'Hubungi Sales Team',
      icon: Phone,
      variant: 'default' as const,
      onClick: () => console.log('Contact sales')
    },
    {
      label: 'Download Proposal',
      icon: Package,
      variant: 'outline' as const,
      onClick: () => console.log('Download proposal')
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Mitra Distribusi"
        description="Bergabunglah dengan jaringan distribusi kami dan kembangkan bisnis Anda bersama produk berkualitas tinggi"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Benefits Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-tr from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Handshake className="h-4 w-4" />
              Keuntungan Mitra
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Menjadi Distributor Kami?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:text-lg">
              Nikmati berbagai keuntungan eksklusif yang kami tawarkan untuk mengembangkan bisnis distribusi Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {distributorBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-500 group-hover:bg-orange-200 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Application Form */}
      <section ref={sectionRef} className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        Persyaratan Distributor
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Syarat untuk bergabung sebagai mitra
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                          {requirement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      <strong>Catatan:</strong> Persyaratan dapat disesuaikan berdasarkan diskusi dan evaluasi lebih lanjut.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        Aplikasi Distributor
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Isi formulir untuk memulai kemitraan
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Nama Perusahaan *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Nama perusahaan"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Nomor Telepon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="08xxxxxxxxx"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="email@domain.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Lokasi Distribusi *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Kota/Provinsi"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Pengalaman Distribusi
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          required
                        >
                          <option value="">Pilih pengalaman</option>
                          <option value="< 1 tahun">Kurang dari 1 tahun</option>
                          <option value="1-2 tahun">1-2 tahun</option>
                          <option value="3-5 tahun">3-5 tahun</option>
                          <option value="> 5 tahun">Lebih dari 5 tahun</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Pesan Tambahan
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                        placeholder="Ceritakan lebih lanjut tentang bisnis dan rencana distribusi Anda..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Handshake className="h-5 w-5 mr-2" />
                      Kirim Aplikasi Distributor
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Siap Memulai Kemitraan?"
        description="Tim business development kami siap membantu Anda memulai perjalanan sebagai mitra distributor yang sukses"
        buttons={ctaButtons}
      />
    </div>
  )
}

export default DistribusiPage