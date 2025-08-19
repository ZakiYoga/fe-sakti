'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, ChevronLeft, ChevronRight, Store } from 'lucide-react'
import { ProductCardProps, ProductSectionProps } from '@/types/product.types'
import { sampleProducts } from './DataProduct'
import Link from 'next/link'

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: "-150px" })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
            } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
            }}
            className="flex-shrink-0 w-90 transition-all duration-300"
        >
            <Card className="group relative h-full border-0 rounded-lg transition-all duration-300 bg-transparent">
                <div className="relative">
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className={`absolute group-hover:rotate-6 -translate-x-1/2 left-1/2 ${product.id == 3 ? "-top-[3.7rem]" : "-top-12"} w-32 h-auto drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] transition-transform duration-500 z-20`}
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                        {/* {product.isNew && (
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <Badge className="bg-green-600 hover:bg-green-600/90 text-white text-xs">
                                    Kemasan Baru
                                </Badge>
                            </motion.div>
                        )} */}
                    </div>

                    {/* Discount badge */}
                    {product.originalPrice && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute top-3 right-3 z-10"
                        >
                            <Badge variant="destructive" className="bg-red-500 hover:bg-red-600 text-xs">
                                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                            </Badge>
                        </motion.div>
                    )}
                </div>

                <CardContent className="relative mt-10 px-6 pb-4 bg-white/50 backdrop-blur-md rounded-t-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {product.isBestSeller && (
                            <motion.div
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 text-white text-xs">
                                    Best Seller
                                </Badge>
                            </motion.div>
                        )}
                        <div className="">
                            <Badge variant="outline" className="text-xs px-2 py-1 bg-green-700 text-white mb-2">
                                {product.category}
                            </Badge>
                        </div>

                        <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-orange-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)] hover:cursor-pointer transition-colors duration-300">
                            {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                                    >
                                        <Star
                                            className={`h-4 w-4 ${i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-1">
                                {product.rating} ({product.reviews})
                            </span>
                        </div>

                        {/* Add to cart button */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Belanja Sekarang
                            </Button>
                        </motion.div>
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
            className={`bg-center bg-orange-500 bg-gradient-to-br dark:from-orange-700 dark:to-orange-600 dark:via-orange-800 from-orange-400 via-orange-500 to-orange-600 ${className}`}
        >
            <div className="container bg-[url('/images/bg.png')] px-4 pb-6 sm:px-12 lg:px-16 xl:px-20 md:py-8 max-w-7xl">
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
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
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
                            paddingLeft: 'calc(50% - 160px)',
                            paddingRight: 'calc(50% - 160px)',
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
                    className="text-center my-6 sm:my-0"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/about" className="w-fit">
                            <Button
                                variant="press"
                                className="w-fit text-sm sm:text-base active:text-orange-100 bg-orange-50 border-orange-200 text-gray-800 font-poppins font-normal"
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