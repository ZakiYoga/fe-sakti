import { Achievement, MissionPoint, Tab } from "@/types/about.types";
import { Award, Calendar, Factory, Globe, Heart, Leaf, Lightbulb, Shield, Star, Target, TrendingUp, Users } from "lucide-react";

// Company Stats
export const companyStats = [
    {
        icon: Calendar,
        label: "Tahun Berdiri",
        value: "2020",
        description: "Berpengalaman lebih dari 5 tahun"
    },
    {
        icon: Users,
        label: "Karyawan",
        value: "200+",
        description: "Didukung tenaga kerja profesional"
    },
    {
        icon: Factory,
        label: "Fasilitas Produksi",
        value: "2",
        description: "Pabrik berstandar industri modern"
    },
    {
        icon: Globe,
        label: "Distribusi Nasional",
        value: "17+",
        description: "Distribusi ke berbagai kota besar & provinsi di Indonesia"
    }
]

// Company Values
export const companyValues = [
    {
        icon: TrendingUp,
        title: "Performance",
        description: "Fokus pada kinerja terbaik dengan produktivitas dan efisiensi tinggi.",
        color: "indigo"
    },
    {
        icon: Award,
        title: "Branding",
        description: "Membangun citra merek yang kuat, dipercaya, dan dikenal luas oleh masyarakat.",
        color: "green"
    },
    {
        icon: Users,
        title: "Services",
        description: "Memberikan pelayanan prima dengan responsif, ramah, dan profesional.",
        color: "red"
    },
    {
        icon: Star,
        title: "Sajian Kualitas Tinggi",
        description: "Menghadirkan produk dengan standar mutu terbaik untuk kepuasan pelanggan.",
        color: "yellow"
    }
]

// Timeline Data
export const timeline = [
    {
        year: "2020",
        title: "Pendirian Perusahaan",
        description: "PT Sakti Pangan Perkasa didirikan secara resmi pada tahun 2020, menandai awal komitmen kami dalam menyediakan produk pangan berkualitas.",
        milestone: "Pendirian"
    },
    {
        year: "2021",
        title: "Peluncuran Produk Perdana",
        description: "Kami meluncurkan produk pertama kami, tepung roti (breadcrumb), dengan merek andalan seperti Sakti, Laskar, dan Pita, yang menjadi fondasi produk kami.",
        milestone: "Rilis Produk"
    },
    {
        year: "2022",
        title: "Ekspansi Area Pemasaran",
        description: "Memperluas jangkauan distribusi, produk kami berhasil menjangkau pasar di wilayah Jawa, Sumatera, Kalimantan, dan Sulawesi, membuka babak baru dalam ekspansi regional.",
        milestone: "Ekspansi"
    },
    {
        year: "2023",
        title: "Peningkatan Operasional",
        description: "Fokus pada peningkatan operasional, kami melakukan berbagai improvisasi untuk meningkatkan kapasitas produksi dan memastikan kualitas produk tetap terjaga.",
        milestone: "Peningkatan Kualitas"
    },
    {
        year: "2024",
        title: "Penguatan Jaringan Distribusi",
        description: "Kami mempertajam strategi distribusi untuk memperluas jangkauan dan ketersediaan produk di seluruh Indonesia, memastikan produk kami mudah diakses oleh konsumen.",
        milestone: "Jaringan Distribusi"
    },
    {
        year: "2025",
        title: "Peningkatan Kapasitas Produksi",
        description: "Sebagai langkah strategis, kami mulai membangun fasilitas produksi baru untuk memenuhi permintaan pasar yang terus meningkat dan mendukung pertumbuhan jangka panjang.",
        milestone: "Kapasitas Produksi"
    },
];


export const achievements: Achievement[] = [
    {
        title: "ISO 9001:2015",
        type: "certificate",
    },
    {
        title: "Sertifikasi Halal MUI",
        type: "certificate",
    },
    {
        title: "Sertifikasi BPOM",
        type: "certificate",
    },
    {
        title: "Trusted Product & Brand Award Winner 2025",
        type: "award",
    },
];

export const missionPoints: MissionPoint[] = [
    {
        title: "Berintegritas, profesional, dan terbuka",
        description: "Pengelolaan perusahaan dilakukan dengan integritas dan profesionalisme dari seluruh bagian perusahaan serta selalu terbuka terhadap ide dan pemikiran yang diberikan baik dari internal maupun eksternal perusahaan."
    },
    {
        title: "Passion, Patient dan Persistent",
        description: "Memiliki gairah untuk selalu belajar, berkembang, berkomitmen dan Bertekun dalam prosesnya."
    },
    {
        title: "Kreatif dan inovatif",
        description: "Mau berpikir secara kreatif sehingga menghasilkan inovasi baru dalam proses pengembangan perusahaan."
    },
    {
        title: "Efektif dan efisien",
        description: "Mampu mengedepankan operasi perusahaan yang efektif dan efisien untuk menghasilkan nilai tambah baru bagi perusahaan."
    }
];

export const tabs: Tab[] = [
    { id: 'story', label: 'Cerita Kami', icon: Heart },
    { id: 'values', label: 'Nilai-Nilai', icon: Target },
    { id: 'achievements', label: 'Pencapaian', icon: Award }
]
