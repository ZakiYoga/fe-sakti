'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

export interface StatItem {
  value?: string
  label: string
  description: string
  icon?: LucideIcon
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: StatItem[]
  backgroundImage?: string
  showIcons?: boolean
  className?: string
}

// Stats Card Component
const StatsCard = ({ 
  stat, 
  index, 
  showIcons = true 
}: { 
  stat: StatItem
  index: number
  showIcons?: boolean 
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className="text-center border-0 bg-white/10 backdrop-blur-xs dark:bg-black/10 shadow-md hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          {showIcons && stat.icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
              <stat.icon className="h-8 w-8" />
            </div>
          )}
          
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
          <p className="font-semibold text-gray-800 dark:text-gray-300 mb-1">{stat.label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function StatsSection({
  title,
  description,
  stats,
  backgroundImage = "/images/bg.png",
  showIcons = true,
  className = ""
}: StatsSectionProps) {
  return (
    <section className={`py-6 sm:py-8 lg:py-16 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl relative z-10">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>
            )}
          </motion.div>
        )}

        <div className={`flex flex-wrap gap-8 ${
          stats.length === 4 
            ? 'justify-center md:grid md:grid-cols-2 lg:grid-cols-4' 
            : stats.length === 3 
            ? 'justify-center md:grid md:grid-cols-3' 
            : stats.length === 2
            ? 'justify-center md:grid md:grid-cols-2 md:gap-16'
            : 'justify-center'
        }`}>
          {stats.map((stat: StatItem, index: number) => (
            <div key={`${stat.label}-${index}`} className="flex-1 items-center justify-center min-w-[250px] max-w-[300px]">
              <StatsCard 
                stat={stat} 
                index={index} 
                showIcons={showIcons}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}