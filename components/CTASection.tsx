'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

export interface CTAButton {
  label: string
  icon?: LucideIcon
  variant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link'
  onClick?: () => void
  href?: string
}

interface CTASectionProps {
  title: string
  description: string
  buttons: CTAButton[]
  backgroundImage?: string
  backgroundGradient?: string
  className?: string
}

export default function CTASection({
  title,
  description,
  buttons,
  backgroundImage = "/images/bg.png",
  backgroundGradient = "from-orange-50 to-white dark:from-orange-950 dark:to-gray-900",
  className = ""
}: CTASectionProps) {
  const handleButtonClick = (button: CTAButton) => {
    if (button.onClick) {
      button.onClick()
    } else if (button.href) {
      window.open(button.href, '_blank')
    }
  }

  return (
    <section className={`relative border-t border-orange-100 dark:border-orange-200/10 overflow-hidden py-16 bg-gradient-to-tr ${backgroundGradient} ${className}`}>
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      
      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-orange-100 lg:text-xl mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => {
              const ButtonIcon = button.icon
              
              return (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant || 'default'}
                  onClick={() => handleButtonClick(button)}
                  className={
                    button.variant === 'outline' 
                      ? "border-white backdrop-blur-xs text-white hover:bg-white bg-orange-500 hover:border-orange-500 hover:text-orange-600"
                      : button.variant === 'default'
                      ? "bg-white dark:bg-gray-900/40 dark:hover:bg-gray-900/90 backdrop-blur-xs border dark:border-orange-900 text-orange-600 hover:bg-gray-100"
                      : ""
                  }
                >
                  {ButtonIcon && <ButtonIcon className="mr-2 h-5 w-5" />}
                  {button.label}
                </Button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}