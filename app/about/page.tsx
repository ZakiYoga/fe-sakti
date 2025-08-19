'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Factory,
  Leaf,
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Play,
  ChevronRight,
  CheckCircle,
  Star,
  User
} from 'lucide-react'

// Company Stats
const companyStats = [
  { icon: Calendar, label: "Tahun Berdiri", value: "2015", description: "Lebih dari 8 tahun pengalaman" },
  { icon: Users, label: "Karyawan", value: "250+", description: "Tim profesional berpengalaman" },
  { icon: Factory, label: "Fasilitas Produksi", value: "3", description: "Lokasi strategis di Indonesia" },
  { icon: Globe, label: "Jangkauan Pasar", value: "15+", description: "Provinsi di Indonesia" }
]

// Company Values
const companyValues = [
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Komitmen terhadap standar kualitas tertinggi dalam setiap produk yang kami hasilkan",
    color: "blue"
  },
  {
    icon: Leaf,
    title: "Berkelanjutan",
    description: "Praktik bisnis yang ramah lingkungan dan mendukung keberlanjutan ekosistem",
    color: "green"
  },
  {
    icon: Heart,
    title: "Kepuasan Pelanggan",
    description: "Mengutamakan kepuasan dan kepercayaan pelanggan sebagai prioritas utama",
    color: "red"
  },
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    description: "Terus berinovasi mengembangkan produk dan layanan yang lebih baik",
    color: "yellow"
  }
]

// Timeline Data
const timeline = [
  {
    year: "2015",
    title: "Pendirian Perusahaan",
    description: "PT Sakti Pangan Perkasa didirikan dengan visi menjadi produsen pangan terkemuka di Indonesia",
    milestone: "Founding"
  },
  {
    year: "2017",
    title: "Ekspansi Produk",
    description: "Meluncurkan lini produk minyak kelapa premium dan memperoleh sertifikasi halal pertama",
    milestone: "Product Launch"
  },
  {
    year: "2019",
    title: "Sertifikasi Internasional",
    description: "Meraih sertifikasi ISO 22000 dan HACCP untuk standar keamanan pangan internasional",
    milestone: "Certification"
  },
  {
    year: "2021",
    title: "Ekspansi Regional",
    description: "Membuka fasilitas produksi kedua dan memperluas jangkauan distribusi ke seluruh Indonesia",
    milestone: "Expansion"
  },
  {
    year: "2023",
    title: "Era Digital",
    description: "Meluncurkan platform e-commerce dan sistem manajemen terintegrasi berbasis teknologi",
    milestone: "Digital"
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Menginisiasi program keberlanjutan dan persiapan ekspansi ke pasar internasional",
    milestone: "Sustainability"
  }
]

// Leadership Team
const leadership = [
  {
    name: "Budi Santoso",
    position: "Chief Executive Officer",
    experience: "15+ tahun",
    background: "Mantan Director di perusahaan FMCG multinasional",
    image: "/images/ceo-placeholder.jpg"
  },
  {
    name: "Siti Nurhaliza",
    position: "Chief Operating Officer", 
    experience: "12+ tahun",
    background: "Expert dalam operations management dan supply chain",
    image: "/images/coo-placeholder.jpg"
  },
  {
    name: "Dr. Ahmad Wijaya",
    position: "Chief Technology Officer",
    experience: "10+ tahun",
    background: "PhD dalam Food Science, pioneer teknologi pangan Indonesia",
    image: "/images/cto-placeholder.jpg"
  },
  {
    name: "Maya Kartika",
    position: "Chief Marketing Officer",
    experience: "8+ tahun",
    background: "Marketing strategist dengan track record membangun brand ternama",
    image: "/images/cmo-placeholder.jpg"
  }
]

// Achievements
const achievements = [
  "Top Brand Award 2023 - Kategori Minyak Kelapa Premium",
  "ISO 22000:2018 Food Safety Management System",
  "Sertifikasi Halal MUI untuk semua produk",
  "HACCP (Hazard Analysis Critical Control Points)",
  "Penghargaan Sustainable Business Practice 2023",
  "Best Employer Award - Kategori Industri Pangan"
]

// Hero Stats Component
const StatsCard = ({ stat, index }: { stat: any, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className="text-center border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
            <stat.icon className="h-8 w-8" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
          <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
          <p className="text-sm text-gray-600">{stat.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Values Card Component
const ValueCard = ({ value, index }: { value: any, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <CardContent className="p-8 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-${value.color}-100 text-${value.color}-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <value.icon className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
            {value.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Timeline Item Component
const TimelineItem = ({ item, index, isLast }: { item: any, index: number, isLast: boolean }) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex items-center"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-24 w-0.5 h-32 bg-orange-200 transform -translate-x-1/2 z-0" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 z-10 border-4 border-white shadow-lg" />
      
      {/* Content */}
      <div className={`w-full ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
        <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
          <Card className="w-80 border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  {item.year}
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700 text-xs">
                  {item.milestone}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

// Leadership Card Component
const LeaderCard = ({ leader, index }: { leader: any, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -10 }}
    >
      <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
          <div className="w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-orange-600" />
          </div>
        </div>
        
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {leader.name}
          </h3>
          <p className="text-orange-600 font-semibold mb-3">{leader.position}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{leader.experience}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {leader.background}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const tabs = [
    { id: 'story', label: 'Cerita Kami', icon: Heart },
    { id: 'values', label: 'Nilai-Nilai', icon: Target },
    { id: 'team', label: 'Tim Kepemimpinan', icon: Users },
    { id: 'achievements', label: 'Pencapaian', icon: Award }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Tentang Kami"
        description="Cerita perjalanan PT Sakti Pangan Perkasa dalam menghadirkan produk pangan berkualitas terbaik untuk Indonesia"
        backgroundImage="/images/bg-header.png"
        height="lg"
        overlay="gradient"
      />

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] opacity-10" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PT Sakti Pangan Perkasa dalam Angka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pencapaian dan pertumbuhan yang konsisten selama bertahun-tahun menjadi bukti dedikasi kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <StatsCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="text-center">
                  <Play className="h-20 w-20 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-orange-700 font-semibold">Video Profil Perusahaan</p>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Factory className="h-4 w-4" />
                Visi & Misi Perusahaan
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Membangun Indonesia yang <span className="text-orange-600">Lebih Sehat</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi perusahaan pangan terkemuka di Indonesia yang menghadirkan produk berkualitas tinggi, 
                    berkelanjutan, dan terjangkau untuk meningkatkan kualitas hidup masyarakat Indonesia.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                  <ul className="space-y-2">
                    {[
                      "Menghasilkan produk pangan berkualitas dengan standar internasional",
                      "Menerapkan praktik bisnis yang berkelanjutan dan ramah lingkungan",
                      "Memberdayakan petani dan UMKM lokal dalam rantai supply kami",
                      "Berinovasi secara berkelanjutan untuk memenuhi kebutuhan konsumen"
                    ].map((mission, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{mission}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className={`transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 hover:bg-orange-600 text-white scale-105'
                    : 'bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 border-gray-300 hover:border-orange-300'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </Button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Company Story */}
            {activeTab === 'story' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Dari visi sederhana hingga menjadi salah satu produsen pangan terpercaya di Indonesia
                  </p>
                </div>
                
                <div className="space-y-16">
                  {timeline.map((item, index) => (
                    <TimelineItem 
                      key={item.year} 
                      item={item} 
                      index={index} 
                      isLast={index === timeline.length - 1}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Company Values */}
            {activeTab === 'values' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Perusahaan</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Prinsip-prinsip fundamental yang menjadi landasan dalam setiap keputusan dan tindakan kami
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {companyValues.map((value, index) => (
                    <ValueCard key={value.title} value={value} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Team */}
            {activeTab === 'team' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kepemimpinan</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Para pemimpin berpengalaman yang membawa visi dan dedikasi untuk kemajuan perusahaan
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {leadership.map((leader, index) => (
                    <LeaderCard key={leader.name} leader={leader} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {activeTab === 'achievements' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Pencapaian & Sertifikasi</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Pengakuan dan sertifikasi yang membuktikan komitmen kami terhadap kualitas dan keunggulan
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Card className="border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Award className="h-8 w-8" />
                          </div>
                          <p className="text-gray-800 font-semibold group-hover:text-orange-600 transition-colors">
                            {achievement}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Bergabunglah dengan Perjalanan Kami
            </h2>
            <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
              Mari bersama-sama membangun masa depan industri pangan Indonesia yang lebih baik dan berkelanjutan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Users className="mr-2 h-5 w-5" />
                Karir Bersama Kami (Sakti Careers)
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white bg-orange-500 hover:text-orange-600">
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}