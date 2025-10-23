"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function Sial2025() {
    return (
        <div className="">
            {/* Glassy Card */}
            <div className="relative group max-w-md w-full z-10">
                {/* Gradient border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/50 to-white/40 rounded-3xl opacity-75 group-hover:opacity-100 transition duration-500 blur-xl animate-pulse"></div>

                {/* Glass container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 overflow-hidden shadow-2xl">
                    {/* Glossy reflection */}
                    <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-3xl pointer-events-none"></div>

                    {/* Inner shadow */}
                    <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/30 pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-20 flex flex-col items-center gap-6">
                        {/* QR Code */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition">
                            <img
                                src="/images/frame.png"
                                alt="QR Code Buku Tamu"
                                className="w-48 h-48 object-contain"
                            />
                        </div>

                        {/* Scan Text */}
                        <div className="text-center">
                            <p className="font-medium uppercase font-bebas-neue tracking-widest text-xl lg:text-3xl">
                                Scan Me
                            </p>
                            <p className="text-base lg:text-lg mt-1">
                                Scan QR untuk isi buku tamu 📱.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
