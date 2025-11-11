"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { localVideos } from "@/DataDummy/DataVideoInstagram";
import { sampleProducts } from "@/DataDummy";

export default function Sial2025() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const totalSlides = sampleProducts.length;

    // Auto-slide products every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    // Handle video loading
    useEffect(() => {
        setIsVideoLoading(true);

        // Failsafe: force hide loading after 2 seconds max
        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
        }

        loadingTimeoutRef.current = setTimeout(() => {
            setIsVideoLoading(false);
        }, 2000);

        return () => {
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);
            }
        };
    }, [currentVideoIndex]);

    // Control video playback
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVideoPlaying) {
            video.play().catch(err => console.log('Play error:', err));
        } else {
            video.pause();
        }
    }, [isVideoPlaying]);

    // Control video mute
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = isMuted;
        }
    }, [isMuted]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleVideoChange = (index: number) => {
        setIsVideoLoading(true);
        setCurrentVideoIndex(index);
        setIsVideoPlaying(true);
    };

    const handleVideoEnded = () => {
        // Auto advance to next video when current video ends
        const nextIndex = (currentVideoIndex + 1) % localVideos.length;
        handleVideoChange(nextIndex);
    };

    const handleVideoLoadedData = () => {
        // Video is ready and can play
        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
        }
        setIsVideoLoading(false);
    };

    const handleVideoPlaying = () => {
        // Video has started playing
        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
        }
        setIsVideoLoading(false);
    };

    const togglePlayPause = () => {
        setIsVideoPlaying(!isVideoPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
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

    const getCurrentProduct = () => {
        return sampleProducts[currentIndex];
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* 3 Container Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Container 1: Video Player */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                        <div className="relative bg-black/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 overflow-hidden shadow-2xl aspect-[9/16] flex flex-col">
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header with Controls */}
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl lg:text-2xl text-center font-bold text-white uppercase tracking-wide">
                                        Receipt Videos
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={toggleMute}
                                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 active:scale-95"
                                            aria-label={isMuted ? "Unmute" : "Mute"}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5 text-white" />
                                            ) : (
                                                <Volume2 className="w-5 h-5 text-white" />
                                            )}
                                        </button>
                                        <button
                                            onClick={togglePlayPause}
                                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 active:scale-95"
                                            aria-label={isVideoPlaying ? "Pause" : "Play"}
                                        >
                                            {isVideoPlaying ? (
                                                <Pause className="w-5 h-5 text-white" />
                                            ) : (
                                                <Play className="w-5 h-5 text-white ml-0.5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Video Player */}
                                <div className="flex-1 overflow-hidden rounded-2xl relative bg-black">
                                    {/* Loading State */}
                                    {isVideoLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl z-10">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="relative">
                                                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-white/50 rounded-full animate-spin" style={{ animationDelay: '0.15s' }}></div>
                                                </div>
                                                <p className="text-white/80 text-sm font-medium">Loading video...</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* HTML5 Video Player */}
                                    <video
                                        ref={videoRef}
                                        key={currentVideoIndex}
                                        className="w-full h-full object-cover rounded-2xl"
                                        autoPlay
                                        muted={isMuted}
                                        playsInline
                                        preload="auto"
                                        onEnded={handleVideoEnded}
                                        onLoadedData={handleVideoLoadedData}
                                        onPlaying={handleVideoPlaying}
                                    >
                                        <source src={localVideos[currentVideoIndex].url_video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                {/* Video Navigation Dots */}
                                <div className="flex justify-center gap-2 mt-4">
                                    {localVideos.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleVideoChange(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentVideoIndex
                                                ? "w-8 bg-white shadow-lg shadow-white/50"
                                                : "w-2 bg-white/30 hover:bg-white/50"
                                                }`}
                                            aria-label={`Go to video ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Video Counter */}
                                <div className="text-center mt-2">
                                    <p className="text-white/60 text-xs">
                                        Video {currentVideoIndex + 1} of {localVideos.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Container 2: QR Code */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                        <div className="relative bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 overflow-hidden shadow-2xl xl:aspect-[9/16] flex items-center justify-center">
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

                            <div className="relative z-20 flex flex-col items-center justify-start gap-4 h-full">
                                <div>
                                    <h2 className="text-xl lg:text-2xl text-center font-bold text-white uppercase tracking-wide">
                                        GUEST BOOK
                                    </h2>
                                </div>

                                <div className="relative group/qr">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl blur-lg opacity-50 group-hover/qr:opacity-100 transition duration-300"></div>
                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 shadow-inner">
                                        <img
                                            src="/images/qr.png"
                                            alt="QR Code Buku Tamu"
                                            className="w-64 h-64 object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="font-bold text-white uppercase tracking-widest text-3xl mb-2 drop-shadow-lg">
                                        Scan Me
                                    </p>
                                    <p className="text-base text-white/90 leading-relaxed">
                                        Scan QR untuk isi buku tamu
                                    </p>
                                    <div className="w-full my-2 h-[1px] bg-white/50 mx-auto mb-4 rounded-full" />
                                    <button
                                        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 font-semibold"
                                        onClick={() => window.open('/sial2025/buku-tamu', '_blank')}
                                    >
                                        Isi Buku Tamu Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Container 3: Product Slider */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                        <div className="relative bg-black/10 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 overflow-hidden shadow-2xl aspect-[9/12] md:aspect-square lg:aspect-[9/16] flex flex-col">
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <h2 className="text-xl lg:text-2xl text-center mb-2 lg:mb-0 font-bold text-white uppercase tracking-wide">
                                    OUR PRODUCTS
                                </h2>

                                <div className="min-h-[300px] md:min-h-auto relative flex-1 flex overflow-hidden">
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
                                            className="absolute w-full px-4 flex items-center justify-center"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 w-full max-w-sm"
                                            >
                                                <div className="bg-gradient-to-bl from-orange-50 via-orange-100 to-orange-50 rounded-xl p-6 mb-6 flex items-center justify-center h-72 shadow-inner">
                                                    <img
                                                        src={getCurrentProduct().image}
                                                        alt={getCurrentProduct().name}
                                                        className="max-h-full max-w-full object-contain drop-shadow-md"
                                                    />
                                                </div>

                                                <div className="text-center">
                                                    <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-4 border border-white/30 shadow-sm">
                                                        {getCurrentProduct().category}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-3 min-h-[3rem] flex items-center justify-center">
                                                        {getCurrentProduct().name}
                                                    </h3>
                                                    {getCurrentProduct().description && (
                                                        <p className="text-white/80 text-sm leading-relaxed line-clamp-4">
                                                            {getCurrentProduct().description}
                                                        </p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex justify-center gap-2 mt-6">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setDirection(index > currentIndex ? 1 : -1);
                                                setCurrentIndex(index);
                                            }}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? "w-8 bg-white shadow-lg shadow-white/50"
                                                : "w-2 bg-white/30 hover:bg-white/50"
                                                }`}
                                            aria-label={`Go to product ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}