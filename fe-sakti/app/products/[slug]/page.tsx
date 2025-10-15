'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import HeaderPages from '@/components/HeaderPages'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    ShoppingCart,
    ArrowLeft,
    CheckCircle,
    Package,
    ChevronDown,
    Info,
    Layers,
} from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/DataDummy/DataProduct'


export default function ProductDetailPage() {
    const router = useRouter()
    const params = useParams()
    const slug = params.slug as string

    const product = getProductBySlug(slug)
    const [selectedImage, setSelectedImage] = useState(0)

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <HeaderPages
                    title="Produk Tidak Ditemukan"
                    description="Maaf, produk yang Anda cari tidak tersedia"
                    backgroundImage="/images/bg-header.png"
                    height="md"
                    className="py-16"
                />
                
                <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
                    <div className="text-center px-4">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Produk Tidak Ditemukan</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Maaf, produk yang Anda cari tidak tersedia</p>
                        <Button
                            onClick={() => router.push('/products')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Kembali ke Katalog
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    const relatedProducts = getRelatedProducts(product, 4)
    const gallery = product.gallery || [product.image]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Section */}
            <HeaderPages
                title="Detail Produk"
                description={product.name}
                backgroundImage="/images/bg-header.png"
                height="md"
                className="py-16"
            />

            {/* Main Content */}
            <div className="flex-1 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900">
                {/* Back Button */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
                    <Button
                        variant="outline"
                        onClick={() => router.back()}
                        className="mb-6 border-orange-300 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-800"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Kembali
                    </Button>
                </div>

                {/* Product Detail Section */}
                <section ref={sectionRef} className="py-8 sm:py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="border-0 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
                                <CardContent className="p-6 md:p-10">
                                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                        {/* Product Images */}
                                        <div className="space-y-4">
                                            <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl overflow-hidden flex items-center justify-center">
                                                <Image
                                                    src={gallery[selectedImage]}
                                                    alt={product.name}
                                                    width={500}
                                                    height={500}
                                                    className="p-8 object-contain"
                                                />
                                            </div>

                                            {gallery.length > 1 && (
                                                <div className="grid grid-cols-4 gap-3">
                                                    {gallery.map((img, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setSelectedImage(index)}
                                                            className={`aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 ${selectedImage === index
                                                                ? 'ring-4 ring-orange-500'
                                                                : 'hover:ring-2 ring-orange-300'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`${product.name} ${index + 1}`}
                                                                width={100}
                                                                height={100}
                                                                className="p-2 object-contain"
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="space-y-6">
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="outline" className="border-orange-200 text-orange-700">
                                                    {product.category}
                                                </Badge>
                                                {product.isNew && (
                                                    <Badge className="bg-green-500">Produk Baru</Badge>
                                                )}
                                                {product.isBestSeller && (
                                                    <Badge className="bg-orange-500">Terlaris</Badge>
                                                )}
                                                {product.isPremium && (
                                                    <Badge className="bg-purple-500">Premium</Badge>
                                                )}
                                            </div>

                                            <div>
                                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                                    {product.name}
                                                </h1>
                                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                                    {product.description}
                                                </p>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="space-y-3 pt-4">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            size="lg"
                                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
                                                        >
                                                            <ShoppingCart className="h-5 w-5 mr-2" />
                                                            Beli Sekarang
                                                            <ChevronDown className="h-5 w-5 ml-2" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="center" className="w-64">
                                                        <DropdownMenuItem
                                                            className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50 py-3"
                                                            onClick={() => window.open('https://www.tokopedia.com/sakti-pangan-perkasa', '_blank')}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Image
                                                                    src="/images/tokopedia.png"
                                                                    alt="tokopedia-icon"
                                                                    height={28}
                                                                    width={28}
                                                                    className="flex-shrink-0"
                                                                />
                                                                <span className="text-base">Tokopedia</span>
                                                            </div>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50 py-3"
                                                            onClick={() => window.open('https://shopee.co.id/shop/1613453160', '_blank')}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Image
                                                                    src="/images/shopee.png"
                                                                    alt="shopee-icon"
                                                                    height={28}
                                                                    width={28}
                                                                    className="flex-shrink-0"
                                                                />
                                                                <span className="text-base">Shopee</span>
                                                            </div>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50 py-3"
                                                            onClick={() => window.open('https://vt.tiktok.com/ZSAbApqPT/?page=Mall', '_blank')}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Image
                                                                    src="/images/tiktokshop.png"
                                                                    alt="tiktokshop-icon"
                                                                    height={28}
                                                                    width={28}
                                                                    className="flex-shrink-0"
                                                                />
                                                                <span className="text-base">TikTok Shop</span>
                                                            </div>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>

                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 text-lg py-6"
                                                    onClick={() => window.open('https://wa.me/6281128788989', '_blank')}
                                                >
                                                    Hubungi untuk Pembelian Grosir
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Specifications Sections */}
                                    <div className="mt-12 space-y-8">
                                        {/* Full Description */}
                                        {product.fullDescription && (
                                            <div className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <Info className="h-6 w-6 text-orange-500" />
                                                    Deskripsi Produk
                                                </h2>
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {product.fullDescription}
                                                </p>
                                            </div>
                                        )}

                                        {/* Spesifikasi Produk */}
                                        {product.spesifikasiProduk && (
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-orange-200">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                                    <Layers className="h-6 w-6 text-orange-500" />
                                                    Spesifikasi Produk
                                                </h2>
                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Granula</p>
                                                        <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                                            {product.spesifikasiProduk.granula}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Warna</p>
                                                        <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                                            {product.spesifikasiProduk.warna}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rasa</p>
                                                        <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                                            {product.spesifikasiProduk.rasa}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Aroma</p>
                                                        <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                                            {product.spesifikasiProduk.aroma}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Spesifikasi Kemasan */}
                                        {product.spesifikasiKemasan && (
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-orange-200">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                                    <Package className="h-6 w-6 text-orange-500" />
                                                    Spesifikasi Kemasan
                                                </h2>
                                                <div className="space-y-5">
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Kemasan Inner</p>
                                                        <p className="font-semibold text-gray-900 dark:text-white">
                                                            {product.spesifikasiKemasan.kemasanInner}
                                                        </p>
                                                    </div>

                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Kemasan Outer</p>
                                                        <p className="font-semibold text-gray-900 dark:text-white">
                                                            {product.spesifikasiKemasan.kemasanOuter}
                                                        </p>
                                                    </div>

                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Berat Bersih</p>
                                                        <p className="font-semibold text-gray-900 dark:text-white">
                                                            {product.spesifikasiKemasan.beratBersih}
                                                        </p>
                                                    </div>

                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Umur Simpan</p>
                                                        <p className="font-semibold text-gray-900 dark:text-white">
                                                            {product.spesifikasiKemasan.umurSimpan}
                                                        </p>
                                                    </div>

                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Informasi Lainnya</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.spesifikasiKemasan.informasiLainnya.map((info, index) => (
                                                                <Badge
                                                                    key={index}
                                                                    className="bg-green-500 text-white hover:bg-green-600"
                                                                >
                                                                    {info}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Benefits */}
                                        {product.benefits && product.benefits.length > 0 && (
                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <CheckCircle className="h-6 w-6 text-green-500" />
                                                    Keunggulan Produk
                                                </h2>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {product.benefits.map((benefit, index) => (
                                                        <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Ingredients */}
                                        {product.ingredients && product.ingredients.length > 0 && (
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                    Komposisi
                                                </h2>
                                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                                    {product.ingredients.join(', ')}
                                                </p>
                                            </div>
                                        )}

                                        {/* Usage Instructions */}
                                        {product.usageInstructions && product.usageInstructions.length > 0 && (
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                    Cara Penggunaan
                                                </h2>
                                                <ol className="space-y-3">
                                                    {product.usageInstructions.map((instruction, index) => (
                                                        <li key={index} className="flex gap-4">
                                                            <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                                                                {index + 1}
                                                            </span>
                                                            <span className="text-gray-700 dark:text-gray-300 pt-1">{instruction}</span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Related Products */}
                        {relatedProducts.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mt-16"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                    Produk Terkait
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedProducts.map((relatedProduct) => (
                                        <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                                            <Card className="group h-full border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                                                <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                                                    <Image
                                                        src={relatedProduct.image}
                                                        alt={relatedProduct.name}
                                                        width={200}
                                                        height={200}
                                                        className="p-6 group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <CardContent className="p-4">
                                                    <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 mb-2">
                                                        {relatedProduct.category}
                                                    </Badge>
                                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-2">
                                                        {relatedProduct.name}
                                                    </h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}