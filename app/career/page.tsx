'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeaderPages from '@/components/HeaderPages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  GraduationCap,
  Calendar,
  ArrowLeft,
  Send,
  Building,
  Briefcase,
  CheckCircle,
  Star,
  Globe
} from 'lucide-react'

// Types
interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  level: 'Entry' | 'Mid' | 'Senior' | 'Manager' | 'Director'
  salary?: string
  postedDate: string
  deadline: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  skills: string[]
}

// Dummy data untuk lowongan pekerjaan
const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Production Manager',
    department: 'Produksi',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Manager',
    salary: 'Rp 15.000.000 - 20.000.000',
    postedDate: '2024-08-20',
    deadline: '2024-09-20',
    description: 'Kami mencari Production Manager yang berpengalaman untuk memimpin operasional produksi tepung roti dan memastikan kualitas produk sesuai standar perusahaan.',
    requirements: [
      'S1 Teknik Industri, Teknologi Pangan, atau bidang terkait',
      'Pengalaman minimal 5 tahun di bidang produksi makanan',
      'Memahami sistem manajemen kualitas (ISO, HACCP)',
      'Kemampuan kepemimpinan dan manajemen tim yang baik',
      'Komunikasi yang efektif dan kemampuan problem solving'
    ],
    responsibilities: [
      'Mengelola dan mengawasi seluruh proses produksi',
      'Memastikan target produksi tercapai sesuai jadwal',
      'Mengontrol kualitas produk dan standar keamanan pangan',
      'Mengelola tim produksi dan memberikan pelatihan',
      'Melakukan continuous improvement pada proses produksi'
    ],
    benefits: [
      'Gaji kompetitif sesuai pengalaman',
      'Tunjangan kesehatan dan BPJS',
      'Bonus kinerja tahunan',
      'Pelatihan dan pengembangan karir',
      'Cuti tahunan dan fleksibilitas kerja'
    ],
    skills: ['Leadership', 'Quality Control', 'Production Planning', 'Team Management', 'Problem Solving']
  },
  {
    id: '2',
    title: 'Quality Control Specialist',
    department: 'Quality Assurance',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Mid',
    salary: 'Rp 8.000.000 - 12.000.000',
    postedDate: '2024-08-18',
    deadline: '2024-09-18',
    description: 'Bergabunglah dengan tim Quality Control kami untuk memastikan produk tepung roti berkualitas tinggi dan memenuhi standar keamanan pangan internasional.',
    requirements: [
      'S1 Teknologi Pangan, Kimia, atau bidang terkait',
      'Pengalaman 2-4 tahun di bidang quality control makanan',
      'Memahami standar HACCP, ISO 22000, dan regulasi BPOM',
      'Detail oriented dan teliti dalam melakukan pengujian',
      'Mampu menggunakan alat laboratorium dan analisis data'
    ],
    responsibilities: [
      'Melakukan inspeksi dan pengujian bahan baku',
      'Mengawasi proses produksi untuk memastikan kualitas',
      'Melakukan pengujian produk jadi sebelum distribusi',
      'Membuat laporan hasil pengujian dan dokumentasi',
      'Berkoordinasi dengan tim produksi untuk perbaikan kualitas'
    ],
    benefits: [
      'Paket gaji dan tunjangan menarik',
      'Pelatihan sertifikasi quality control',
      'Lingkungan kerja yang mendukung',
      'Kesempatan pengembangan karir',
      'Fasilitas laboratorium modern'
    ],
    skills: ['Quality Control', 'Laboratory Testing', 'HACCP', 'Data Analysis', 'Documentation']
  },
  {
    id: '3',
    title: 'Marketing Executive',
    department: 'Marketing & Sales',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Mid',
    salary: 'Rp 7.000.000 - 10.000.000',
    postedDate: '2024-08-15',
    deadline: '2024-09-15',
    description: 'Kami mencari Marketing Executive yang kreatif dan berpengalaman untuk mengembangkan strategi pemasaran produk tepung roti dan memperluas jangkauan pasar.',
    requirements: [
      'S1 Marketing, Komunikasi, atau bidang terkait',
      'Pengalaman minimal 3 tahun di bidang marketing FMCG',
      'Memahami digital marketing dan social media',
      'Kemampuan presentasi dan komunikasi yang baik',
      'Kreatif dan memiliki wawasan pasar yang luas'
    ],
    responsibilities: [
      'Mengembangkan strategi marketing dan promosi produk',
      'Mengelola kampanye digital marketing dan social media',
      'Melakukan riset pasar dan analisis kompetitor',
      'Berkoordinasi dengan sales team untuk pencapaian target',
      'Membuat content marketing dan materi promosi'
    ],
    benefits: [
      'Gaji pokok plus insentif marketing',
      'Tunjangan transportasi dan komunikasi',
      'Bonus pencapaian target',
      'Pelatihan digital marketing',
      'Lingkungan kerja yang dinamis'
    ],
    skills: ['Digital Marketing', 'Social Media', 'Content Creation', 'Market Research', 'Communication']
  },
  {
    id: '4',
    title: 'HR Generalist',
    department: 'Human Resources',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Mid',
    salary: 'Rp 8.000.000 - 11.000.000',
    postedDate: '2024-08-12',
    deadline: '2024-09-12',
    description: 'Bergabunglah dengan tim HR kami untuk mengelola seluruh aspek sumber daya manusia dan menciptakan lingkungan kerja yang positif dan produktif.',
    requirements: [
      'S1 Psikologi, Manajemen, atau bidang terkait',
      'Pengalaman minimal 3 tahun di bidang HR',
      'Memahami peraturan ketenagakerjaan Indonesia',
      'Kemampuan komunikasi interpersonal yang baik',
      'Pengalaman dengan sistem HRIS dan recruitment'
    ],
    responsibilities: [
      'Mengelola proses recruitment dan seleksi karyawan',
      'Melaksanakan program training dan development',
      'Menangani administrasi kepegawaian dan payroll',
      'Mengelola employee relations dan performance management',
      'Membuat kebijakan HR dan SOP perusahaan'
    ],
    benefits: [
      'Kompensasi kompetitif',
      'Tunjangan kesehatan keluarga',
      'Program pengembangan SDM',
      'Fleksibilitas waktu kerja',
      'Lingkungan kerja yang supportif'
    ],
    skills: ['Recruitment', 'Training & Development', 'Employee Relations', 'HRIS', 'Labor Law']
  },
  {
    id: '5',
    title: 'Supply Chain Analyst',
    department: 'Supply Chain',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Entry',
    salary: 'Rp 6.000.000 - 8.000.000',
    postedDate: '2024-08-10',
    deadline: '2024-09-10',
    description: 'Posisi entry level untuk fresh graduate yang tertarik mengembangkan karir di bidang supply chain dan logistics dalam industri makanan.',
    requirements: [
      'S1 Teknik Industri, Manajemen Operasi, atau bidang terkait',
      'Fresh graduate atau pengalaman maksimal 1 tahun',
      'Kemampuan analisis data yang baik',
      'Menguasai Microsoft Excel dan software analisis',
      'Komunikasi yang baik dan detail oriented'
    ],
    responsibilities: [
      'Melakukan analisis data supply chain dan inventory',
      'Membantu perencanaan procurement dan inventory management',
      'Monitoring supplier performance dan delivery',
      'Membuat laporan supply chain metrics',
      'Mendukung optimisasi proses supply chain'
    ],
    benefits: [
      'Gaji kompetitif untuk fresh graduate',
      'Program mentoring dan training',
      'Jalur karir yang jelas',
      'Tunjangan kesehatan dan BPJS',
      'Kesempatan belajar dari senior expert'
    ],
    skills: ['Data Analysis', 'Excel', 'Supply Chain Management', 'Inventory Management', 'Reporting']
  },
  {
    id: '6',
    title: 'IT Support Specialist',
    department: 'Information Technology',
    location: 'Jakarta',
    type: 'Full-time',
    level: 'Entry',
    salary: 'Rp 5.500.000 - 7.500.000',
    postedDate: '2024-08-08',
    deadline: '2024-09-08',
    description: 'Kami mencari IT Support Specialist untuk mengelola infrastruktur IT dan memberikan dukungan teknis kepada seluruh karyawan perusahaan.',
    requirements: [
      'D3/S1 Teknik Informatika, Sistem Informasi, atau bidang terkait',
      'Pengalaman minimal 1 tahun di bidang IT support',
      'Memahami hardware, software, dan jaringan komputer',
      'Kemampuan troubleshooting yang baik',
      'Sertifikasi IT (CompTIA, Microsoft) menjadi nilai plus'
    ],
    responsibilities: [
      'Memberikan technical support kepada user',
      'Maintenance hardware dan software komputer',
      'Mengelola jaringan dan sistem keamanan IT',
      'Instalasi dan konfigurasi sistem baru',
      'Membuat dokumentasi dan SOP IT'
    ],
    benefits: [
      'Paket salary dan benefit menarik',
      'Pelatihan dan sertifikasi IT',
      'Lingkungan kerja dengan teknologi terkini',
      'Kesempatan mengembangkan skill teknis',
      'Work-life balance yang baik'
    ],
    skills: ['IT Support', 'Network Administration', 'Hardware Maintenance', 'Troubleshooting', 'Documentation']
  }
]

const departmentStats = [
  { department: 'Produksi', openings: 12, icon: Building },
  { department: 'Quality Assurance', openings: 5, icon: CheckCircle },
  { department: 'Marketing & Sales', openings: 8, icon: Globe },
  { department: 'Human Resources', openings: 3, icon: Users },
  { department: 'Supply Chain', openings: 6, icon: Briefcase },
  { department: 'Information Technology', openings: 4, icon: Star }
]

// Job Card Component
const JobCard = ({ job, onClick }: { job: JobOpening, onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const getLevelColor = (level: string) => {
    const colors = {
      'Entry': 'bg-green-100 text-green-700 border-green-200',
      'Mid': 'bg-blue-100 text-blue-700 border-blue-200',
      'Senior': 'bg-purple-100 text-purple-700 border-purple-200',
      'Manager': 'bg-orange-100 text-orange-700 border-orange-200',
      'Director': 'bg-red-100 text-red-700 border-red-200'
    }
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'Full-time': 'bg-orange-500 text-white',
      'Part-time': 'bg-blue-500 text-white',
      'Contract': 'bg-purple-500 text-white',
      'Internship': 'bg-green-500 text-white'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-500 text-white'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card 
        className="h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
        onClick={onClick}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                {job.department}
              </p>
            </div>
            <Badge className={`${getTypeColor(job.type)} hover:${getTypeColor(job.type)}`}>
              {job.type}
            </Badge>
          </div>

          {/* Job Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <GraduationCap className="h-4 w-4" />
              <Badge variant="outline" className={getLevelColor(job.level)}>
                {job.level} Level
              </Badge>
            </div>

            {job.salary && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Deadline: {new Date(job.deadline).toLocaleDateString('id-ID')}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {job.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>

          {/* Apply Button */}
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Lihat Detail & Lamar
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Job Detail Component
const JobDetail = ({ job, onBack }: { job: JobOpening, onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Lowongan
          </Button>
        </motion.div>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="mb-8 border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h1>
                  <p className="text-xl text-orange-600 dark:text-orange-400 font-semibold mb-4">
                    {job.department}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-5 w-5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-5 w-5" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <GraduationCap className="h-5 w-5" />
                      <span>{job.level} Level</span>
                    </div>
                    {job.salary && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <DollarSign className="h-5 w-5" />
                        <span>{job.salary}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Deadline Pendaftaran
                  </p>
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                    {new Date(job.deadline).toLocaleDateString('id-ID', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                    <Send className="h-5 w-5" />
                    Lamar Sekarang
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Job Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Job Description */}
            <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Deskripsi Pekerjaan
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Tanggung Jawab
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Persyaratan
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Skills Required */}
            <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Skills yang Dibutuhkan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 bg-white dark:bg-gray-900/60 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Benefits & Fasilitas
                </h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Application Info */}
            <Card className="border-0 bg-orange-100 dark:bg-orange-900/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Informasi Lamaran
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Tanggal Posting:
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(job.postedDate).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Batas Waktu:
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(job.deadline).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div className="pt-3">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2">
                      <Send className="h-4 w-4" />
                      Lamar Posisi Ini
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Filter jobs based on selected filters
  const filteredJobs = jobOpenings.filter(job => {
    return (selectedDepartment === 'all' || job.department === selectedDepartment) &&
           (selectedLevel === 'all' || job.level === selectedLevel)
  })

  // Get unique departments and levels for filters
  const departments = ['all', ...Array.from(new Set(jobOpenings.map(job => job.department)))]
  const levels = ['all', ...Array.from(new Set(jobOpenings.map(job => job.level)))]

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Karir Bersama Kami"
        description="Bergabunglah dengan tim PT Sakti Pangan Perkasa dan wujudkan potensi terbaik Anda dalam industri pangan Indonesia"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Department Stats */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Lowongan Berdasarkan Departemen
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temukan posisi yang sesuai dengan minat dan keahlian Anda di berbagai departemen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {departmentStats.map((dept, index) => (
              <motion.div
                key={dept.department}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-4 bg-white dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-0">
                  <CardContent className="p-4">
                    <dept.icon className="h-8 w-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {dept.department}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 text-xs font-medium">
                      {dept.openings} posisi tersedia
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section ref={sectionRef} className="py-12 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Lowongan Pekerjaan
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Menampilkan {filteredJobs.length} dari {jobOpenings.length} posisi tersedia
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Departemen
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept === 'all' ? 'Semua Departemen' : dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level === 'all' ? 'Semua Level' : level + ' Level'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tidak ada lowongan yang sesuai
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Coba ubah filter pencarian atau kembali lagi nanti untuk lowongan terbaru
              </p>
              <Button
                onClick={() => {
                  setSelectedDepartment('all')
                  setSelectedLevel('all')
                }}
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Bergabung dengan Kami?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              PT Sakti Pangan Perkasa menawarkan lingkungan kerja yang mendukung pertumbuhan karir 
              dan pengembangan profesional Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Tim yang Solid',
                description: 'Bekerja bersama tim profesional yang saling mendukung dan berkolaborasi'
              },
              {
                icon: GraduationCap,
                title: 'Pengembangan Karir',
                description: 'Program pelatihan berkelanjutan dan jalur karir yang jelas untuk setiap karyawan'
              },
              {
                icon: Star,
                title: 'Kompensasi Kompetitif',
                description: 'Paket gaji dan benefit yang menarik sesuai dengan kontribusi dan prestasi'
              },
              {
                icon: Globe,
                title: 'Inovasi Berkelanjutan',
                description: 'Kesempatan untuk berkontribusi dalam inovasi produk dan teknologi pangan'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center h-full border-0 bg-white dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-12 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 bg-orange-100 dark:bg-orange-900/30 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tidak Menemukan Posisi yang Sesuai?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Kirimkan CV dan surat lamaran Anda kepada tim HR kami. Kami akan menghubungi Anda 
                  jika ada posisi yang sesuai dengan profil dan keahlian Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-semibold">Email HR:</p>
                    <p>hr@saktipangan.co.id</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-semibold">WhatsApp:</p>
                    <p>+62 811-8888-9999</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                    <Send className="h-5 w-5" />
                    Kirim CV Spontan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}