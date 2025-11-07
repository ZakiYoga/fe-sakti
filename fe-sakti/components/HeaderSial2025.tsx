'use client'
import React from 'react'

export default function HeaderSial2025() {
  return (
    <header className="sticky top-0 z-50 flex justify-center bg-gradient-to-b max-h-[8vh] overflow-hidden from-gray-900/20 to-transparent">
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-border {
          background: linear-gradient(
            90deg,
            #06b6d4,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #06b6d4
          );
          background-size: 300% 300%;
        }

        .gradient-border-animated {
          animation: gradient-shift 8s ease infinite;
        }

        .glass-container {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-container:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.35),
            rgba(255, 255, 255, 0.65),
            rgba(255, 255, 255, 0.35)
          );
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .glass-container:hover .shine-effect {
          left: 100%;
        }
      `}</style>

      <div className="group relative rounded-b-2xl border border-white/20 border-t-0 overflow-hidden">
        {/* Animated gradient border glow effect */}
        <div className="absolute -inset-0.5 gradient-border opacity-0 group-hover:opacity-75 transition-opacity duration-700 blur-lg gradient-border-animated"></div>
        
        {/* Glass container */}
        <div className="glass-container relative bg-gradient-to-r from-black/10 via-black/20 to-black/10 backdrop-blur-md py-2 px-8">
          {/* Shine effect on hover */}
          <div className="shine-effect pointer-events-none"></div>
          
          {/* Glossy overlay - top light reflection */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 shadow-inner shadow-white/10 pointer-events-none"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse delay-200"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/images/logo/SaktiFood.png" 
              alt="Logo SaktiFood" 
              className="h-7 object-contain transition-all duration-300 group-hover:brightness-110" 
            />
            <span className="font-medium pt-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-500">At</span>
            <img 
              src="/images/logo/sialInterfood.png" 
              alt="Logo SIAL InterfOOD" 
              className="h-6 object-contain transition-all duration-300 group-hover:brightness-110" 
            />
          </div>
        </div>
      </div>
    </header>
  )
}