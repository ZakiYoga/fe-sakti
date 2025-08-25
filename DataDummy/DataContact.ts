import { ContactInfo } from '@/types/contact.types'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react'

export const contactInfoData: ContactInfo[] = [
  {
    icon: Phone,
    title: "Telepon",
    primary: "(0271) 821919",
    secondary: "+62811-2878-8989",
    description: "Senin - Jumat: 08:00 - 17:00",
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "staffit@saktipangan.co.id",
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
    color: "indigo"
  }
]

export const departmentsData: string[] = [
  "Sales & Marketing",
  "Customer Service",
  "Kemitraan Bisnis",
  "Keluhan & Saran",
  "Media & Pers",
  "Lainnya"
]

// Company Information Data
export const companyContactData = {
  phones: {
    primary: "(021) 8934-5678",
    secondary: "(021) 8934-5679",
    whatsapp: "+62 812-3456-7890"
  },
  emails: {
    info: "staffit@saktipangan.co.id",
    support: "itsupport@saktipangan.co.id",
  },
  address: {
    street: "Jl. Sragen - Solo No.8",
    district: "Wates, Jetis, Kec. Jaten",
    city: "Kabupaten Karanganyar",
    province: "Jawa Tengah",
    postalCode: "57731",
    full: "KM9.4, Jl. Sragen - Solo No.8, Wates, Jetis, Kec. Jaten, Kabupaten Karanganyar, Jawa Tengah 57731"
  },
  operatingHours: {
    weekdays: "08:00 - 17:00",
    saturday: "08:00 - 14:00",
    sunday: "08:00 - 12:00",
    holidays: "Tutup"
  },
  socialMedia: {
    website: "https://saktipangan.co.id/",
    linkedin: "https://id.linkedin.com/company/pt-sakti-pangan-perkasa",
    instagram: "@sakt1_id",
    facebook: "SaktiPanganIndonesia",
    shopee: "SaktiPanganIndonesia",
    tokopedia: "SaktiPanganIndonesia",
    tiktok: "SaktiPanganIndonesia",
  }
}