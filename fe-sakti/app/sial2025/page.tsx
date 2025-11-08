"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import dari DataDummy
import { sampleProducts } from "@/DataDummy/DataProduct";

export default function Sial2025() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(sampleProducts.length / itemsPerSlide);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const getCurrentProducts = () => {
        const startIndex = currentIndex * itemsPerSlide;
        return sampleProducts.slice(startIndex, startIndex + itemsPerSlide);
    };

    return (
        <div className="min-h-[80vh] w-full">
            <div className="mx-auto sm:px-6 px-4">
                <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
                    {/* Left: Product Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group w-full max-w-5xl"
                    >
                        {/* Gradient border glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                        {/* Glass container */}
                        <div className="relative bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] transition-all duration-500">
                            {/* Glossy reflection */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                            {/* Inner shadow for depth */}
                            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4 text-center uppercase tracking-wide">
                                    Produk Kami
                                </h2>

                                {/* Slider Container */}
                                <div className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.div
                                            key={currentIndex}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.3 },
                                            }}
                                            className="absolute w-full px-2"
                                        >
                                            {/* Product Grid - 3 items per slide */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                                {getCurrentProducts().map((product, idx) => (
                                                    <motion.div 
                                                        key={product.id || idx}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="bg-black/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
                                                    >
                                                        {/* Product Image */}
                                                        <div className="bg-white/90 rounded-xl p-4 mb-4 flex items-center justify-center h-48 shadow-inner">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="max-h-full max-w-full object-contain drop-shadow-md"
                                                            />
                                                        </div>

                                                        {/* Product Info */}
                                                        <div className="text-center">
                                                            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mb-3 border border-white/30 shadow-sm">
                                                                {product.category}
                                                            </div>
                                                            <h3 className="text-base font-bold text-white mb-2 line-clamp-2 min-h-[3rem]">
                                                                {product.name}
                                                            </h3>
                                                            {product.description && (
                                                                <p className="text-white/80 text-xs line-clamp-3 min-h-[3rem]">
                                                                    {product.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentIndex === 0}
                                        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:shadow-white/20 hover:scale-110"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentIndex === totalSlides - 1}
                                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:shadow-white/20 hover:scale-110"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>

                                {/* Dots Indicator */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setDirection(index > currentIndex ? 1 : -1);
                                                setCurrentIndex(index);
                                            }}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentIndex
                                                    ? "w-8 bg-white shadow-lg shadow-white/50"
                                                    : "w-2 bg-white/30 hover:bg-white/50"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Buku Tamu */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group z-10 flex-shrink-0"
                    >
                        {/* Gradient border glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                        {/* Glass container */}
                        <div className="relative bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] transition-all duration-500">
                            {/* Glossy reflection */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                            {/* Inner shadow for depth */}
                            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

                            {/* Content */}
                            <div className="relative z-20 flex flex-col items-center gap-6">
                                {/* QR Code Container */}
                                <div className="relative group/qr">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl blur-lg opacity-50 group-hover/qr:opacity-100 transition duration-300"></div>
                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 shadow-inner">
                                        <img
                                            src="/images/qr.png"
                                            alt="QR Code Buku Tamu"
                                            className="w-52 h-52 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Scan Text */}
                                <div className="text-center mt-2">
                                    <p className="font-bold text-white uppercase tracking-widest text-2xl lg:text-3xl mb-1 drop-shadow-lg">
                                        Scan Me
                                    </p>
                                    <div className="w-16 h-1 bg-white/50 mx-auto mb-3 rounded-full"></div>
                                    <p className="text-sm text-white/90 lg:text-base leading-relaxed">
                                        Scan QR untuk isi buku tamu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}