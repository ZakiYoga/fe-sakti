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
        name: "Sakti Tepung Roti 200g",
        price: 299,
        // originalPrice: 399,
        rating: 4.9,
        reviews: 124,
        category: "Premium Products",
        image: "/images/products/Sakti200gr.png",
        isBestSeller: true,
        isNew: true,
        description: ""
    },
    {
        id: 4,
        name: "Laskar Tepung Roti",
        price: 1299,
        rating: 4.9,
        reviews: 67,
        category: "Zak 10kg",
        image: "/images/products/Laskar10kg.png",
        description: ""
    },
    {
        id: 5,
        name: "Ak Star Tepung Roti",
        price: 89,
        // originalPrice: 119,
        rating: 4.6,
        reviews: 203,
        category: "Zak 10kg",
        image: "/images/products/Akstar.png",
        description: "High-precision wireless gaming mouse with RGB lighting"
    },
    {
        id: 6,
        name: "Agni Tepung Roti",
        price: 159,
        rating: 4.8,
        reviews: 98,
        category: "Zak 10kg",
        image: "/images/products/Agni10kg.png",
        description: ""
    },
    {
        id: 7,
        name: "PITA Tepung Roti",
        price: 159,
        rating: 4.8,
        reviews: 78,
        category: "Zak 10kg",
        image: "/images/products/Pita10kg.png",
        description: ""
    },
    {
        id: 3,
        name: "Sakti Tepung Roti 1kg",
        price: 79,
        // originalPrice: 99,
        rating: 4.7,
        reviews: 156,
        category: "Premium Products",
        image: "/images/products/Sakti1kg.png",
        isBestSeller: true,
        isNew: true,
        description: "Ergonomic aluminum laptop stand for better posture"
    },
    {
        id: 2,
        name: "Sakti Tepung Roti 500g",
        price: 449,
        rating: 4.9,
        reviews: 89,
        category: "Premium Products",
        image: "/images/products/Sakti500gr.png",
        isBestSeller: true,
        isNew: true,
        description: ""
    },

]