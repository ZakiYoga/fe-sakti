'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageCircle,
  Building2,
  Globe
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    primary: "(021) 8934-5678",
    secondary: "(021) 8934-5679",
    description: "Senin - Jumat: 08:00 - 17:00",
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@saktipangan.co.id",
    secondary: "sales@saktipangan.co.id",
    description: "Response dalam 24 jam",
    color: "green"
  },
  {
    icon: MapPin,
    title: "Alamat Kantor",
    primary: "Jl. Industri Raya No. 123",
    secondary: "Jababeka, Cikarang Utara",
    description: "Bekasi, Jawa Barat 17530",
    color: "orange"
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    primary: "Senin - Jumat: 08:00 - 17:00",
    secondary: "Sabtu: 08:00 - 14:00",
    description: "Minggu & Hari Libur: Tutup",
    color: "purple"
  }
]

const departments = [
  "Sales & Marketing",
  "Customer Service",
  "Kemitraan Bisnis",
  "Keluhan & Saran",
  "Media & Pers",
  "Lainnya"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    subject: '',
    message: ''
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Hubungi Kami"
        description="Kami siap membantu Anda. Hubungi tim profesional kami untuk informasi lebih lanjut tentang produk dan layanan"
        backgroundImage="/images/bg-header.png"
        height="md"
        overlay="gradient"
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai cara untuk menghubungi kami. Pilih channel yang paling nyaman untuk Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full"
              >
                <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${info.color}-100 text-${info.color}-600 mb-4`}>
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{info.title}</h3>
                    <p className="font-semibold text-gray-800 mb-1">{info.primary}</p>
                    <p className="text-gray-600 mb-2">{info.secondary}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Kirim Pesan</h3>
                      <p className="text-gray-600">Kami akan merespons dalam 24 jam</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Perusahaan
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Departemen Tujuan
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Pilih Departemen</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <Card className="border-0 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                    <p className="text-orange-700 font-semibold">Peta Lokasi</p>
                    <p className="text-orange-600 text-sm">Jababeka, Cikarang Utara</p>
                  </div>
                </div>
              </Card>

              {/* Additional Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Informasi Tambahan</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Kantor Pusat</p>
                        <p className="text-gray-600 text-sm">
                          Fasilitas lengkap dengan ruang meeting, showroom produk, dan area parkir luas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Akses Transportasi</p>
                        <p className="text-gray-600 text-sm">
                          Mudah dijangkau dari Jakarta via Tol Jakarta-Cikampek, exit Cikarang Utara
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white p-4 h-auto">
                  <Phone className="h-5 w-5 mb-2" />
                  <span className="text-sm">Telepon Langsung</span>
                </Button>
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 p-4 h-auto">
                  <Mail className="h-5 w-5 mb-2" />
                  <span className="text-sm">Email Kami</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}