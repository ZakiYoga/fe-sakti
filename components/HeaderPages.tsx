'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Interface untuk props HeaderPages
interface HeaderPagesProps {
  title: string
  description?: string
  backgroundImage: string
  height?: 'sm' | 'md' | 'lg' | 'xl'
  textAlign?: 'left' | 'center' | 'right'
  overlay?: 'light' | 'dark' | 'gradient' | 'none'
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

// Konfigurasi height variants
const heightVariants = {
  sm: 'h-64 md:h-72',
  md: 'h-80 md:h-96', 
  lg: 'h-96 md:h-[28rem]',
  xl: 'h-[28rem] md:h-[32rem]'
}

// Konfigurasi text alignment
const textAlignVariants = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

// Konfigurasi overlay
const overlayVariants = {
  light: 'bg-white/30',
  dark: 'bg-black/50',
  gradient: 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
  none: ''
}

const HeaderPages: React.FC<HeaderPagesProps> = ({
  title,
  description,
  backgroundImage,
  height = 'md',
  textAlign = 'center',
  overlay = 'dark',
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}) => {
  return (
    <section 
      className={`
        relative w-full ${heightVariants[height]} 
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        ${className}
      `}
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayVariants[overlay]}`} />
      )}
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-4xl">
        <motion.div 
          className={`${textAlignVariants[textAlign]}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          {/* Title */}
          <motion.h1 
            className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold text-white mb-4
              drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]
              leading-tight
              ${titleClassName}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.6,
              ease: "easeOut" 
            }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p 
              className={`
                text-lg sm:text-xl md:text-2xl 
                text-white/90 max-w-3xl mx-auto
                drop-shadow-[1px_1px_2px_rgba(0,0,0,0.6)]
                leading-relaxed
                ${textAlign === 'center' ? 'mx-auto' : ''}
                ${descriptionClassName}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.6,
                ease: "easeOut" 
              }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Gradient bottom fade - optional */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  )
}

export default HeaderPages