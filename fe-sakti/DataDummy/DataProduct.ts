import { Product } from "@/types/product.types";
import { Globe, Scale, Users } from "lucide-react";

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
        name: "Tepung Roti Sakti 200g",
        slug: "sakti-200g",
        category: "Premium Products",
        image: "/images/products/Sakti200gr.png",
        gallery: [
            "/images/products/Sakti200gr.png",
            "/images/products/Sakti200gr.png",
        ],
        isBestSeller: true,
        isNew: true,
        isPremium: true,
        href: "/products/sakti-200g",
        description: "Tepung roti berkualitas premium untuk hasil gorengan yang renyah sempurna",
        fullDescription: "Tepung Roti Sakti 200g adalah pilihan tepat untuk Anda yang menginginkan hasil gorengan dengan tekstur renyah maksimal. Dibuat dari bahan baku pilihan berkualitas tinggi dan melalui proses produksi yang higienis, tepung roti ini menghasilkan lapisan yang sempurna pada berbagai jenis makanan goreng. Cocok untuk digunakan di rumah tangga maupun usaha kuliner skala kecil.",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik OPP25/PP15/CPP40/Printing",
            kemasanOuter: "Plastik HDPE Bening (50cmx85cm)",
            beratBersih: "200g",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        },
        benefits: [
            "Tekstur renyah yang tahan lama",
            "Warna menarik dan konsisten",
            "Tidak menyerap minyak berlebihan",
            "Cocok untuk berbagai jenis makanan",
            "Kemasan praktis dan higienis"
        ],
        ingredients: [
            "Tepung terigu",
            "Ragi",
            "Garam",
            "Gula",
            "Air"
        ],
        usageInstructions: [
            "Siapkan bahan yang akan digoreng",
            "Celupkan bahan ke dalam adonan basah atau telur kocok",
            "Gulingkan dalam tepung roti Sakti hingga merata",
            "Goreng dalam minyak panas hingga kecoklatan",
            "Tiriskan dan sajikan selagi hangat"
        ]
    },
    {
        id: 2,
        name: "Tepung Roti Sakti 500g",
        slug: "sakti-500g",
        category: "Premium Products",
        image: "/images/products/Sakti500gr.png",
        gallery: [
            "/images/products/Sakti500gr.png",
            "/images/products/Sakti500gr.png",
        ],
        isBestSeller: true,
        isNew: true,
        isPremium: true,
        href: "/products/sakti-500g",
        description: "Kemasan hemat untuk kebutuhan keluarga dan umkm.",
        fullDescription: "Tepung Roti Sakti 500g hadir dalam kemasan yang lebih besar untuk memenuhi kebutuhan keluarga atau usaha kuliner skala kecil hingga menengah. Dengan kualitas premium yang sama, produk ini memberikan nilai ekonomis lebih baik untuk penggunaan rutin.",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik OPP25/PP15/CPP40/Printing",
            kemasanOuter: "Plastik HDPE Bening (50cmx85cm)",
            beratBersih: "10 KG (20 x 500 GR)",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        },
        benefits: [
            "Kemasan lebih besar dan ekonomis",
            "Hasil gorengan renyah maksimal",
            "Kualitas premium terjamin",
            "Cocok untuk usaha kuliner",
            "Mudah disimpan"
        ]
    },
    {
        id: 3,
        name: "Tepung Roti Sakti 1kg",
        slug: "sakti-1kg",
        category: "Premium Products",
        image: "/images/products/Sakti1kg.png",
        gallery: [
            "/images/products/Sakti1kg.png",
        ],
        isBestSeller: true,
        isNew: true,
        isPremium: true,
        href: "/products/sakti-1kg",
        description: "Pilihan tepat untuk usaha kuliner dengan volume produksi menengah",
        fullDescription: "Tepung Roti Sakti 1kg adalah solusi ideal untuk pelaku usaha kuliner yang membutuhkan tepung roti berkualitas dalam jumlah lebih banyak. Dikemas praktis dan ekonomis, produk ini menjaga konsistensi kualitas untuk setiap penggunaan.",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik OPP25/PP15/CPP40/Printing",
            kemasanOuter: "Plastik HDPE Bening (50cmx85cm)",
            beratBersih: "1 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        },
        benefits: [
            "Kemasan 1kg yang praktis",
            "Harga lebih ekonomis",
            "Kualitas konsisten",
            "Ideal untuk UMKM",
            "Terjamin kehalalannya"
        ]
    },
    {
        id: 4,
        name: "Tepung Roti Laskar 10kg",
        slug: "laskar-10kg",
        category: "Zak 10kg",
        image: "/images/products/Laskar10kg.png",
        href: "/products/laskar-10kg",
        description: "Tepung roti kualitas industri untuk kebutuhan produksi skala besar",
        fullDescription: "Tepung Roti Laskar 10kg dirancang khusus untuk memenuhi kebutuhan industri makanan dan usaha kuliner dengan volume produksi tinggi. Dikemas dalam karung 10kg yang praktis, produk ini menjamin efisiensi biaya tanpa mengorbankan kualitas.",
        spesifikasiProduk: {
            granula: "4-5 MM",
            warna: "Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
    {
        id: 5,
        name: "Tepung Roti AK Star 10kg",
        slug: "akstar-10kg",
        category: "Zak 10kg",
        image: "/images/products/AKSTARBaru.png",
        href: "/products/akstar-10kg",
        description: "Tepung roti premium untuk hasil gorengan berkelas",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
    {
        id: 6,
        name: "Tepung Roti Agni 10kg",
        slug: "agni-10kg",
        category: "Zak 10kg",
        image: "/images/products/AGNIVector.png",
        href: "/products/agni-10kg",
        description: "Solusi tepung roti untuk industri kuliner modern",
        spesifikasiProduk: {
            granula: "4-5 MM",
            warna: "Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
    {
        id: 7,
        name: "Tepung Roti PITA 10kg",
        slug: "pita-10kg",
        category: "Zak 10kg",
        image: "/images/products/Pita10kg.png",
        href: "/products/pita-10kg",
        description: "Tepung roti berkualitas dengan harga kompetitif",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
    {
        id: 8,
        name: "Tepung Roti FryFest 10kg",
        slug: "fryfest-10kg",
        category: "Zak 10kg",
        image: "/images/products/FRYFESTVector.png",
        href: "/products/fryfest-10kg",
        description: "Spesialis tepung roti untuk gorengan crispy sempurna",
        spesifikasiProduk: {
            granula: "4-5 MM",
            warna: "Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
    {
        id: 9,
        name: "Tepung Roti 7Daun 10kg",
        slug: "7daun-10kg",
        category: "Zak 10kg",
        image: "/images/products/7DAUNVector.png",
        href: "/products/7daun-10kg",
        description: "Tepung roti pilihan untuk restoran dan katering",
        spesifikasiProduk: {
            granula: "4 MM",
            warna: "Mix, Kuning & Orange",
            rasa: "Tidak Berasa",
            aroma: "Normal"
        },
        spesifikasiKemasan: {
            kemasanInner: "Plastik PE",
            kemasanOuter: "Karung Plastik PE",
            beratBersih: "10 KG",
            umurSimpan: "12 Bulan dari Tanggal Produksi",
            informasiLainnya: ["BPOM RI", "Halal BPJPH"]
        }
    },
]

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
    return sampleProducts.find(product => product.slug === slug)
}

// Helper function to get related products
export const getRelatedProducts = (currentProduct: Product, limit: number = 4): Product[] => {
    return sampleProducts
        .filter(product => 
            product.id !== currentProduct.id && 
            product.category === currentProduct.category
        )
        .slice(0, limit)
}