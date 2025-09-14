import { Product } from "@/types/product.types";
import { Globe, Scale, Users } from "lucide-react";

// Product Stats
export const productStats = [
    {
        icon: Scale,
        label: "Praktis untuk Setiap Kebutuhan",
        description: "Dari dapur rumah hingga skala UMKM, pilih kemasan yang pas untuk Anda. Tersedia dalam ukuran 200g, 500g, 1kg hingga 10kg."
    },
    {
        icon: Users,
        label: "Andalan Lebih dari 1000+ Pelanggan",
        description: "Kualitas dan konsistensi produk kami telah menjadi pilihan utama bagi ribuan pengusaha kuliner dan rumah tangga di Indonesia."
    },
    {
        icon: Globe,
        label: "Jangkauan Distribusi Nasional",
        description: "Produk kami tersedia di berbagai toko, minimarket, dan menjadi pilihan utama para pelaku UMKM di seluruh Indonesia."
    },
    {
        icon: Globe,
        label: "Jaminan Kualitas Terbaik",
        description: "Dibuat dengan bahan baku pilihan, produk kami menjamin hasil masakan yang renyah dan lezat di setiap penggunaan."
    }
]

export const sampleProducts: Product[] = [
    {
        id: 1,
        name: "Sakti 200g",
        category: "Premium Products",
        image: "/images/products/Sakti200gr.png",
        isBestSeller: true,
        href: "/sakti200g",
        isNew: true,
        description: ""
    },
    {
        id: 2,
        name: "Sakti 500g",
        category: "Premium Products",
        image: "/images/products/Sakti500gr.png",
        href: "/sakti500g",
        isBestSeller: true,
        isNew: true,
        description: ""
    },
    {
        id: 3,
        name: "Sakti 1kg",
        category: "Premium Products",
        image: "/images/products/Sakti1kg.png",
        href: "/sakti1kg",
        isBestSeller: true,
        isNew: true,
        description: "Ergonomic aluminum laptop stand for better posture"
    },
    {
        id: 4,
        name: "Laskar 10kg",
        category: "Zak 10kg",
        image: "/images/products/Laskar10kg.png",
        href: "/laskar",
        description: ""
    },
    {
        id: 5,
        name: "Ak Star 10kg",
        category: "Zak 10kg",
        image: "/images/products/AKSTARBaru.png",
        href: "/akstar",
        description: "High-precision wireless gaming mouse with RGB lighting"
    },
    {
        id: 6,
        name: "Agni 10kg",
        category: "Zak 10kg",
        image: "/images/products/AGNIVector.png",
        href: "/agni",
        description: ""
    },
    {
        id: 7,
        name: "PITA 10kg",
        category: "Zak 10kg",
        image: "/images/products/Pita10kg.png",
        href: "/pita",
        description: ""
    },
    {
        id: 8,
        name: "FryFest",
        category: "Zak 10kg",
        image: "/images/products/FRYFESTVector.png",
        href: "/fryfest",
        description: ""
    },
    {
        id: 9,
        name: "7Daun",
        category: "Zak 10kg",
        image: "/images/products/7DAUNVector.png",
        href: "/7daun",
        description: ""
    },
]