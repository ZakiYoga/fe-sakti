'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Send,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Users,
  MessageSquare,
  Headphones
} from 'lucide-react'
import { ContactFormData, ContactPageProps } from '@/types/contact.types'
import { companyContactData, contactInfoData } from '@/DataDummy/DataContact'
import { MapLocation } from '@/types/map.types'
import StyledMapWrapper from '@/components/Map/StyledMapWrapper'

// Contact Info Card Component
type ContactInfo = {
  icon: React.ElementType
  title: string
  primary: string
  secondary?: string
  description?: string
}

const ContactInfoCard = ({ info, index }: { info: ContactInfo, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-500 group-hover:bg-orange-200 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <info.icon className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
            {info.title}
          </h3>
          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm sm:text-base">
            {info.primary}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
            {info.secondary}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {info.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ContactPage: React.FC<ContactPageProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        department: '',
        subject: '',
        message: ''
      })

      // Show success message (you can implement toast notification here)
      alert('Pesan berhasil dikirim! Kami akan merespons dalam 24 jam.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneCall = (): void => {
    window.location.href = `tel:${companyContactData.phones.primary}`
  }

  const handleEmailClick = (): void => {
    window.location.href = `mailto:${companyContactData.emails.info}`
  }

  // Lokasi perusahaan
  const companyMapLocation: MapLocation = {
    lat: -7.5438,
    lng: 110.893
  }

  const multipleMarkers = [
    { ...companyMapLocation, icon: 'red' as const, title: 'PT Sakti Pangan Perkasa', popup: 'Pabrik 1' },
    { lat: -7.5575836, lng: 110.8876316, icon: 'blue' as const, title: 'PT Sakti Pangan Perkasa', popup: 'Pabrik Baru' }
  ]

  // Stats data untuk contact page
  const contactStats = [
    {
      icon: Phone,
      value: "24/7",
      label: "Customer Support",
      description: "Layanan bantuan pelanggan"
    },
    {
      icon: Mail,
      value: "< 24",
      label: "Jam Respon",
      description: "Waktu respons email"
    },
    {
      icon: MapPin,
      value: "2",
      label: "Lokasi Pabrik",
      description: "Fasilitas produksi"
    },
    {
      icon: Users,
      value: "500+",
      label: "Klien Aktif",
      description: "Pelanggan terpercaya"
    }
  ]

  // CTA buttons data
  const ctaButtons = [
    {
      label: 'Hubungi via WhatsApp',
      icon: Phone,
      variant: 'default' as const,
      onClick: handlePhoneCall
    },
    {
      label: 'Kirim Email',
      icon: Mail,
      variant: 'outline' as const,
      onClick: handleEmailClick
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col ${className || ''}`}>
      <HeaderPages
        title="Hubungi Kami"
        description="Kami siap membantu Anda. Hubungi tim profesional kami untuk informasi lebih lanjut tentang produk dan layanan"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Contact Info Cards */}
      <section className="pt-6 sm:pt-8 lg:pt-16 bg-gradient-to-tr from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="h-4 w-4" />
              Informasi Kontak
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Berbagai Cara Menghubungi Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:text-lg">
              Pilih channel komunikasi yang paling nyaman untuk Anda. Tim kami siap membantu dengan respon cepat dan profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8 sm:pb-12 lg:pb-16">
            {contactInfoData.map((info, index) => (
              <ContactInfoCard key={info.title} info={info} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section ref={sectionRef} className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kirim Pesan & Temukan Lokasi Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:text-lg">
              Gunakan formulir di bawah untuk mengirim pesan atau kunjungi langsung lokasi pabrik kami
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Kirim Pesan</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Kami akan merespons dalam 24 jam</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Masukkan nama lengkap"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="nama@email.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="08xxxxxxxxx"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Perusahaan
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Nama perusahaan"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Subjek pesan"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                      disabled={isSubmitting}
                    >
                      <Send className={`h-5 w-5 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <StyledMapWrapper
                    center={companyMapLocation}
                    zoom={14}
                    markers={multipleMarkers}
                    style="minimal"
                    height={400}
                  />
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h4 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                    Informasi Lokasi
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-lg">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Alamat Lengkap</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {companyContactData.address.full}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-lg">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Jam Operasional</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Senin - Jumat: 08:00 - 17:00 WIB
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Sabtu: 08:00 - 12:00 WIB
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Info: {companyContactData.emails.info}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Support: {companyContactData.emails.support}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Butuh Bantuan Segera?"
        description="Tim customer service kami siap membantu Anda dengan respon cepat dan solusi terbaik untuk kebutuhan bisnis Anda"
        buttons={ctaButtons}
      />
    </div>
  )
}

export default ContactPage