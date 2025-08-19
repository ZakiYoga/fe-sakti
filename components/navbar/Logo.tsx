'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  logo = {
    src: '/images/logo/SaktiFood.png',
    alt: 'Logo',
    width: 120,
    height: 32
  },
  className = '',
  isDark = false
}) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 transition-all duration-300 ${className}`}>
      <div className="relative">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`h-8 w-auto transition-all duration-300 drop-shadow-lg`}
          priority
        />
      </div>
    </Link>
  );
};