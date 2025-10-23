// components/footer/FooterSial2025.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { url } from 'inspector';

export default function FooterSial2025() {
  // Brand logos dari folder public/images/logo/
  const brands = [
    { name: '7Daun', src: '/images/logo/7Daun.png' , url: 'https://saktipangan.co.id/products/7daun-10kg'},
    { name: 'Agni', src: '/images/logo/Agni.png', url: 'https://saktipangan.co.id/products/agni-10kg' },
    { name: 'AKStar', src: '/images/logo/AKStar.png', url: 'https://saktipangan.co.id/products/akstar-10kg' },
    { name: 'FryFest', src: '/images/logo/FryFest.png', url: 'https://saktipangan.co.id/products/fryfest-10kg' },
    { name: 'Laskar', src: '/images/logo/Laskar.png', url: 'https://saktipangan.co.id/products/laskar-10kg' },
    { name: 'Pita', src: '/images/logo/Pita.png', url: 'https://saktipangan.co.id/products/pita-10kg' },
    { name: 'SaktiBrand', src: '/images/logo/SaktiBrandNew.png', url: 'https://saktipangan.co.id/products/sakti-500g' },
  ];

  // Duplicate array untuk seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <footer className="w-full z-50 py-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 border-y border-orange-100 overflow-hidden relative">
      {/* Gradient overlay untuk smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-black/50 to-transparent z-20"></div>
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-black/50 to-transparent z-20"></div>

      {/* Looping brands container */}
      <div className="flex animate-scroll gap-6 relative px-4">
        {allBrands.map((brand, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center min-w-max hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <div className="relative h-6 w-24">
              <Link href={brand.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  quality={85}
                  draggable={false}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  )
}