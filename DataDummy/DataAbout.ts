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
        value: "8+",
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
        title: "Sajian Kualitas Sakti",
        description: "Menghadirkan produk dengan standar mutu terbaik untuk kepuasan pelanggan.",
        color: "yellow"
    }
]

// Timeline Data
export const timeline = [
    {
        year: "2020",
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
