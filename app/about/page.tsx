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
  Users,
  Award,
  Factory,
  Mail,
  Play,
  CheckCircle,
  FileBadge,
} from 'lucide-react'
import { achievements, companyStats, companyValues, missionPoints, tabs, timeline } from '@/DataDummy/DataAbout'
import { Achievement, CompanyValue, MissionPoint, Tab, TimelineItem } from '@/types/about.types'
import Image from 'next/image'

// Values Card Component
const ValueCard = ({ value, index }: { value: CompanyValue, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-8 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-orange-100 text-orange-500 group-hover:bg-orange-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <value.icon className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold text-orange-500 mb-4 group-hover:text-orange-600 transition-colors">
            {value.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Timeline Item Component
const TimelineItemComponent = ({ item, index, isLast }: { item: TimelineItem, index: number, isLast: boolean }) => {
  const itemRef = useRef<HTMLDivElement>(null)
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
        <div className="z-0 absolute left-[8%] sm:left-[15%] md:left-1/2 top-16 sm:top-24 w-0.5 h-[calc(100%-40px)] sm:h-32 bg-orange-200 transform -translate-x-1/2" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-[8%] sm:left-[15%] md:left-1/2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full transform -translate-x-1/2 border-2 sm:border-4 border-white shadow-lg" />

      {/* Content */}
      <div className={`w-full`}>
        <div className={`flex pl-12 md:px-6 lg:px-24 ${index % 2 === 0
          ? 'justify-center md:justify-end'
          : 'justify-center md:justify-start'
          }`}>
          <Card className="w-full max-w-xs sm:max-w-[22rem] lg:max-w-96 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-900 border transition-all duration-300 group">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm">
                  {item.year}
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700 text-xs">
                  {item.milestone}
                </Badge>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>('story')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Data untuk CTA Section
  const ctaButtons = [
    {
      label: 'Karir Bersama Kami (Sakti Careers)',
      icon: Users,
      variant: 'default' as const,
      onClick: () => console.log('Navigate to careers page')
    },
    {
      label: 'Hubungi Kami',
      icon: Mail,
      variant: 'outline' as const,
      onClick: () => console.log('Navigate to contact page')
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Tentang Kami"
        description="Cerita perjalanan PT Sakti Pangan Perkasa dalam menghadirkan produk tepung roti berkualitas untuk masakan kuliner Indonesia"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Company Stats - Menggunakan komponen yang sudah dipisahkan */}
      <StatsSection
        title="PT Sakti Pangan Perkasa"
        description="Pencapaian dan pertumbuhan yang konsisten selama bertahun-tahun menjadi bukti dedikasi kami"
        stats={companyStats}
        showIcons={true}
      />

      {/* Company Story & Mission */}
      <section className="pt-6 sm:pt-8 lg:pt-16 bg-gradient-to-tr from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-y-8 gap-x-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >

              {/* IMAGES */}
              <div className="rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/images/company/company.png"
                  width={400}
                  height={400}
                  alt="Foto pabrik perusahaan"
                  className="w-full h-40 sm:h-48 md:h-60 lg:h-72 object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              {/* VIDEO */}
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
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
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Factory className="h-4 w-4" />
                Visi & Misi Perusahaan
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Visi Kami</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Menjadi Perusahaan Pengelolaan Makanan yang mampu bersaing secara nasional dengan
                    selalu melakukan inovasi sehingga dapat memberikan nilai tambah bagi seluruh shareholder dan stakeholder
                    secara berkesinambungan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Misi Kami</h3>
                  <div className="space-y-3">
                    {missionPoints.map((mission: MissionPoint, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-gray-900/60 duration-200 transition-all hover:-translate-y-0.5 backdrop-blur-lg rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5 text-orange-500 dark:text-orange-800 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{mission.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{mission.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section ref={sectionRef} className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16"
          >
            {tabs.map((tab: Tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className={`transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-orange-500 hover:bg-orange-600 text-white scale-105'
                  : 'bg-white hover:bg-orange-50 text-gray-700 dark:text-gray-300 hover:text-orange-600 border-gray-300 hover:border-orange-300'
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
              <div className="pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Histori Perjalanan Kami</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:text-lg">
                    Dari visi sederhana hingga menjadi salah satu produsen pangan terpercaya di Indonesia
                  </p>
                </div>

                <div className="space-y-6">
                  {timeline.map((item: TimelineItem, index: number) => (
                    <TimelineItemComponent
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
              <div className="pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nilai-Nilai Perusahaan</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                    Prinsip-prinsip fundamental yang menjadi landasan dalam setiap keputusan dan tindakan kami
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {companyValues.map((value: CompanyValue, index: number) => (
                    <ValueCard key={value.title} value={value} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {activeTab === 'achievements' && (
              <div className="pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Pencapaian & Sertifikasi</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                    Pengakuan dan sertifikasi yang membuktikan komitmen kami terhadap kualitas dan keunggulan
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement: Achievement, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Card className="border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                            {achievement.type === 'award' ?
                              <Award className="h-8 w-8" /> :
                              <FileBadge className="h-8 w-8" />
                            }
                          </div>
                          <p className="font-semibold group-hover:text-orange-600 transition-colors">
                            {achievement.title}
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

      {/* CTA Section - Menggunakan komponen yang sudah dipisahkan */}
      {/* <CTASection
        title="Bergabunglah dengan Perjalanan Kami"
        description="Mari bersama-sama membangun masa depan industri pangan Indonesia yang lebih baik dan berkelanjutan"
        buttons={ctaButtons}
      /> */}
    </div>
  )
}