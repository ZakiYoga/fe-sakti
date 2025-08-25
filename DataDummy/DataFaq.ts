import { FAQItem } from "@/types/faq.types";
import { Award, Building2, Clock, Factory, MapPin, Package, Phone, Shield, Truck, Users } from "lucide-react";

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Apa itu PT Sakti Pangan Perkasa dan kapan perusahaan didirikan?",
    answer: "PT Sakti Pangan Perkasa adalah perusahaan manufaktur yang bergerak di bidang produksi tepung roti (breadcrumb) berkualitas tinggi. Didirikan pada tahun 2015, kami telah menjadi salah satu produsen tepung roti terpercaya di Indonesia dengan komitmen menghadirkan produk berkualitas internasional untuk memenuhi kebutuhan industri makanan dan rumah tangga.",
    category: "Perusahaan",
    icon: Building2,
    isPopular: true
  },
  {
    id: 2,
    question: "Di mana lokasi pabrik PT Sakti Pangan Perkasa?",
    answer: "Pabrik utama kami berlokasi di Kawasan Industri Jababeka, Cikarang, Jawa Barat. Lokasi strategis ini memberikan akses mudah untuk distribusi ke seluruh Indonesia dan ekspor ke negara-negara Asia Tenggara. Fasilitas pabrik kami dibangun dengan standar internasional dan dilengkapi teknologi modern untuk memastikan kualitas produk yang konsisten.",
    category: "Lokasi",
    icon: MapPin,
    isPopular: true
  },
  {
    id: 3,
    question: "Apa saja produk utama yang diproduksi oleh PT Sakti Pangan Perkasa?",
    answer: "Kami memproduksi berbagai jenis tepung roti berkualitas tinggi, meliputi: Tepung roti halus (fine breadcrumb), Tepung roti kasar (coarse breadcrumb), Tepung roti panko premium, Tepung roti berwarna (orange, kuning), dan Tepung roti organik. Semua produk tersedia dalam kemasan retail (250g, 500g, 1kg) dan kemasan industri (10kg, 25kg).",
    category: "Produk",
    icon: Package,
    isPopular: true
  },
  {
    id: 4,
    question: "Bagaimana sistem quality control di PT Sakti Pangan Perkasa?",
    answer: "Kami menerapkan sistem quality control yang ketat di setiap tahap produksi. Tim QC berpengalaman melakukan inspeksi mulai dari pemilihan bahan baku, proses produksi, hingga packaging. Laboratorium in-house kami dilengkapi peralatan modern untuk testing mikrobiologi, kimia, dan fisik. Pabrik kami telah tersertifikasi ISO 22000, HACCP, dan Halal MUI.",
    category: "Kualitas",
    icon: Shield,
    isPopular: true
  },
  {
    id: 5,
    question: "Berapa kapasitas produksi harian PT Sakti Pangan Perkasa?",
    answer: "Kapasitas produksi harian kami mencapai 50 ton tepung roti dengan 3 shift kerja. Dengan 12 lini produksi yang beroperasi secara optimal, kami mampu memenuhi pesanan dalam volume besar dengan lead time yang kompetitif. Untuk pesanan khusus atau musim tinggi, kami dapat meningkatkan kapasitas hingga 60 ton per hari.",
    category: "Produksi",
    icon: Factory
  },
  {
    id: 6,
    question: "Apakah PT Sakti Pangan Perkasa melayani ekspor ke luar negeri?",
    answer: "Ya, kami telah melayani ekspor ke berbagai negara seperti Malaysia, Singapura, Thailand, Vietnam, dan Filipina. Produk kami telah memenuhi standar internasional dan memiliki sertifikasi yang diperlukan untuk ekspor. Tim export department kami berpengalaman menangani dokumentasi dan logistik internasional dengan partner shipping terpercaya.",
    category: "Ekspor",
    icon: Truck
  },
  {
    id: 7,
    question: "Bagaimana cara menjadi distributor atau reseller produk PT Sakti Pangan Perkasa?",
    answer: "Untuk menjadi distributor atau reseller, silakan hubungi tim sales kami melalui email: partnership@saktipangan.co.id atau telepon: (021) 8934-5678. Kami akan menjelaskan sistem kemitraan, persyaratan minimum order, skema harga, dan dukungan marketing yang tersedia. Kami selalu terbuka untuk kerjasama yang saling menguntungkan.",
    category: "Kemitraan",
    icon: Users
  },
  {
    id: 8,
    question: "Apa saja sertifikasi yang dimiliki oleh PT Sakti Pangan Perkasa?",
    answer: "Perusahaan kami memiliki berbagai sertifikasi internasional: ISO 22000:2018 (Food Safety Management), HACCP (Hazard Analysis Critical Control Points), Halal MUI, BPOM, FSSC 22000, dan BRC Food Safety. Sertifikasi ini diperbarui secara rutin dan diaudit oleh lembaga independen untuk memastikan standar kualitas dan keamanan pangan yang tinggi.",
    category: "Sertifikasi",
    icon: Award
  },
  {
    id: 9,
    question: "Berapa lama shelf life produk tepung roti dari PT Sakti Pangan Perkasa?",
    answer: "Produk tepung roti kami memiliki masa simpan 12 bulan dari tanggal produksi jika disimpan dalam kondisi yang tepat (tempat kering, sejuk, dan terhindar dari sinar matahari langsung). Setiap kemasan dilengkapi dengan informasi tanggal produksi dan expired date yang jelas. Kami juga menyediakan panduan penyimpanan yang optimal untuk menjaga kualitas produk.",
    category: "Produk",
    icon: Clock
  },
  {
    id: 10,
    question: "Bagaimana cara menghubungi customer service PT Sakti Pangan Perkasa?",
    answer: "Tim customer service kami siap melayani Anda melalui berbagai channel: Telepon: (021) 8934-5678 (Senin-Jumat, 08:00-17:00), Email: info@saktipangan.co.id, WhatsApp Business: +62 812-3456-7890, atau kunjungi langsung kantor kami di Jl. Industri Raya No. 15, Jababeka, Cikarang. Kami berkomitmen memberikan pelayanan terbaik untuk kepuasan pelanggan.",
    category: "Kontak",
    icon: Phone,
    isPopular: true
  }
]