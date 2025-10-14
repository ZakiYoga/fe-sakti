'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ShoppingCart, ChevronLeft, ChevronRight, Store, ChevronDown } from 'lucide-react'
import { ProductCardProps, ProductSectionProps } from '@/types/product.types'
import { sampleProducts } from '../../DataDummy/DataProduct'
import Link from 'next/link'
import Image from 'next/image'

// E-commerce platforms data
const ecommercePlatforms = [
    {
        name: 'TikTok Shop',
        url: 'https://vt.tiktok.com/ZSAbApqPT/?page=Mall',
        imgSrc: '',
        color: 'bg-black hover:bg-gray-800'
    },
    {
        name: 'Tokopedia',
        url: 'https://www.tokopedia.com/sakti-pangan-perkasa',
        imgSrc: '',
        color: 'bg-green-500 hover:bg-green-600'
    },
    {
        name: 'Shopee',
        url: 'https://shopee.co.id/shop/1613453160',
        imgSrc: '',
        color: 'bg-orange-600 hover:bg-orange-700'
    }
]

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const cardRef = useRef(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleEcommerceClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
        setIsDropdownOpen(false)
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
            }}
            className="flex-shrink-0 lg:w-90 transition-all duration-300"
        >
            <Card className="group relative h-full border-0 shadow-none transition-all bg-transparent dark:bg-transparent mt-8 md:mt-12 duration-300 rounded-none p-0">
                <div className="relative">
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className={`absolute rotate-12 group-hover:rotate-0 -translate-x-1/2 left-1/2 -top-16 w-32 h-auto drop-shadow-[3px_3px_0_rgba(255,255,255,0.8)] transition-transform duration-500 z-10`}
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                        {/* Badge content - commented out in original */}
                    </div>

                    {/* Discount badge */}
                    {/* Discount badge content - commented out in original */}
                </div>

                <CardContent className="relative min-w-1/3 sm:min-w-[300px] mt-10 px-6 pb-4 group-hover:bg-orange-100/50 bg-white/50 backdrop-blur-md rounded-t-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-col w-full"
                    >
                        <div className="flex w-full md:justify-between flex-wrap">
                            <motion.div
                                initial={{ scale: 0, left: 180 }}
                                animate={{ scale: 1, left: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-700 text-white mb-2">
                                    {product.category}
                                </Badge>
                            </motion.div>
                            {product.isBestSeller && (
                                <motion.div
                                    initial={{ scale: 0, left: 180 }}
                                    animate={{ scale: 1, left: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-500 text-white mb-2">
                                        Best Seller
                                    </Badge>
                                </motion.div>
                            )}
                        </div>

                        <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-orange-800 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)] hover:cursor-pointer transition-colors duration-300">
                            {product.name}
                        </h3>

                        {/* Dropdown Buy Button */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    size="sm"
                                    className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                                >
                                    <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
                                    <span className="hidden xs:inline">Beli Sekarang</span>
                                    <span className="inline xs:hidden">Beli</span>
                                    <ChevronDown className="h-4 w-4 ml-1 sm:ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem
                                    className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                                    onClick={() => window.open('https://tk.tokopedia.com/ZSAgTNhFW/', '_blank')}
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={"/images/tokopedia.png"}
                                            alt='tokopedia-icon'
                                            height={100}
                                            width={100}
                                            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                                        />
                                        <span>Tokopedia</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                                    onClick={() => window.open('https://shopee.co.id/shop/1613453160', '_blank')}
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={"/images/shopee.png"}
                                            alt='shopee-icon'
                                            height={100}
                                            width={100}
                                            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                                        />
                                        <span>Shopee</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50"
                                    onClick={() => window.open('https://vt.tiktok.com/ZSAbApqPT/?page=Mall', '_blank')}
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={"/images/tiktokshop.png"}
                                            alt='tiktokshop-icon'
                                            height={100}
                                            width={100}
                                            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                                        />
                                        <span>TikTok Shop</span>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

// Main Product Section Component
const ProductSection: React.FC<ProductSectionProps> = ({
    title = "Produk Kami",
    subtitle = "Kualitas Premium untuk Setiap Kreasi Kuliner Anda.",
    products = sampleProducts,
    buttonText = "Lihat Semua Produk",
    className = ""
}) => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isScrolling, setIsScrolling] = useState(false)

    // Create extended array for infinite scroll
    const extendedProducts = [...products, ...products, ...products]

    // Debounced scroll handler for infinite scroll
    const handleScroll = useCallback(() => {
        if (!scrollRef.current || isScrolling) return

        const container = scrollRef.current
        const scrollLeft = container.scrollLeft
        const itemWidth = 336 // 320px + 16px gap

        // Handle infinite scroll boundaries
        const totalItems = extendedProducts.length
        const singleSetLength = products.length
        const currentIndex = Math.round(scrollLeft / itemWidth)

        if (currentIndex <= 2) {
            // Near start, jump to equivalent position in middle section
            setIsScrolling(true)
            container.scrollLeft = scrollLeft + (singleSetLength * itemWidth)
            setTimeout(() => setIsScrolling(false), 50)
        } else if (currentIndex >= totalItems - 3) {
            // Near end, jump to equivalent position in middle section
            setIsScrolling(true)
            container.scrollLeft = scrollLeft - (singleSetLength * itemWidth)
            setTimeout(() => setIsScrolling(false), 50)
        }
    }, [extendedProducts.length, products.length, isScrolling])

    // Throttled scroll handler
    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        const throttledHandleScroll = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(handleScroll, 100)
        }

        const scrollElement = scrollRef.current
        if (scrollElement) {
            scrollElement.addEventListener('scroll', throttledHandleScroll, { passive: true })
            return () => {
                scrollElement.removeEventListener('scroll', throttledHandleScroll)
                clearTimeout(timeoutId)
            }
        }
    }, [handleScroll])

    // Initialize scroll position
    useEffect(() => {
        if (scrollRef.current && products.length > 0) {
            const container = scrollRef.current
            const itemWidth = 336

            // Position to start from the second set (middle of infinite array)
            const targetScrollLeft = products.length * itemWidth

            container.scrollLeft = targetScrollLeft
        }
    }, [products.length])

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current || isScrolling) return

        setIsScrolling(true)
        const scrollAmount = 336 // item width + gap

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        })

        setTimeout(() => setIsScrolling(false), 300)
    }

    return (
        <section
            ref={sectionRef}
            className={`bg-center bg-primary bg-gradient-to-t from-[#EA5B0C] via-orange-500 to-orange-600 dark:from-[#a53e07] dark:via-orange-700 dark:to-orange-800 ${className}`}
        >
            <div className="bg-[url('/images/bg.png')] bg-cover px-4 pb-6 sm:px-12 lg:px-16 xl:px-20 md:py-8 max-w-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.h2
                        className="relative pb-2 text-4xl font-bebas-neue tracking-widest md:text-5xl font-bold text-gray-50 dark:text-gray-200 mb-4 drop-shadow-[4px_3px_0px_rgba(0,0,0,0.3)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        {title}
                        <span className="h-1 w-16 bg-white absolute bottom-0 -translate-x-1/2 left-1/2" />
                    </motion.h2>
                    <motion.p
                        className="text-gray-50 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>

                {/* Navigation buttons for mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="md:hidden flex w-full justify-end gap-4 mb-4"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll('left')}
                            className="rounded-md bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <ChevronLeft className="h-4 w-4 [stroke-width:3]" />
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll('right')}
                            className="rounded-md bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <ChevronRight className="h-4 w-4 [stroke-width:3]" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Products scroll container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto overflow-y-hidden pt-12 scrollbar-hide"
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            paddingLeft: 'calc(50% - 120px)',
                            paddingRight: 'calc(50% - 120px)',
                        }}
                    >
                        {extendedProducts.map((product, index) => (
                            <div
                                key={`${product.id}-${Math.floor(index / products.length)}-${index}`}
                                style={{ scrollSnapAlign: 'center' }}
                            >
                                <ProductCard
                                    product={product}
                                    index={index % products.length}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('left')}
                        className="md:flex hidden rounded-md absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-20"
                        disabled={isScrolling}
                    >
                        <ChevronLeft className="h-5 w-5 stroke-2" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('right')}
                        className="md:flex hidden rounded-md absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-20"
                        disabled={isScrolling}
                    >
                        <ChevronRight className="h-5 w-5 stroke-2" />
                    </Button>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center my-6 sm:my-8 sm:mb-0"
                >
                    <motion.div>
                        <Link href="/products" className="w-fit">
                            <Button
                                variant="press"
                                className="w-fit text-sm sm:text-base active:bg-orange-500 active:border-orange-50 active:text-orange-100 bg-orange-50 border-orange-600 text-orange-500 font-poppins font-normal"
                            >
                                <Store className="mr-2 h-4 w-4" />
                                {buttonText}
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Custom styles for hiding scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}

export default ProductSection