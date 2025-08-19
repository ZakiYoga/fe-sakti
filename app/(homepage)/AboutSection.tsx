import React, { useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface AboutSectionProps {
  className?: string
  title?: string
  subtitle?: string
  description?: string
  buttonText?: string
  images?: {
    container1: string[]
    container2: string[]
    container3: string[]
  }
}

export default function AboutSection({
  className = "",
  title = "Tentang Kami",
  subtitle = "About",
  description = "PT Sakti Pangan Perkasa adalah perusahaan yang berdedikasi untuk menyediakan produk berkualitas tinggi bagi industri kuliner di Indonesia. Sejak berdiri, kami fokus pada produksi tepung roti atau breadcrumbs yang menjadi bahan baku penting dalam berbagai hidangan.",
  buttonText = "Baca Selengkapnya",
  images = {
    container1: ["/images/about/29.png", "/images/about/30.png", "/images/about/31.png", "/images/about/38.png"],
    container2: ["/images/about/32.png", "/images/about/33.png", "/images/about/34.png", "/images/about/39.png"],
    container3: ["/images/about/35.png", "/images/about/36.png", "/images/about/37.png", "/images/about/40.png"]
  }
}: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for different containers
  const container1Y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const container2Y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const container3Y = useTransform(scrollYProgress, [0, 1], [0, -250])

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex items-start justify-center w-full min-h-screen bg-center bg-no-repeat overflow-hidden bg-gradient-to-tr dark:from-orange-700 dark:to-orange-900 dark:via-orange-800 from-orange-400 via-orange-500 to-orange-600 ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <section id="about-section" className="flex flex-col md:flex-row items-center justify-between gap-x-8 w-full lg:min-h-screen bg-[url('/images/bg-pattern.png')] dark:bg-[url('/images/bg-patternDark.png')] bg-cover bg-center dark:brightness-100 dark:contrast-125 brightness-[0.9] contrast-[1.5] px-4 sm:px-8 lg:px-16 xl:px-20 py-8 lg:py-2">
        {/* Left section - Image Gallery */}
        <div className="h-[70vh] lg:h-[90vh] md:overflow-hidden md:w-1/2 relative">
          <div className="md:absolute -top-4 grid grid-cols-3 md:-rotate-2  sm:h-[70vh] lg:h-[95vh] gap-2 overflow-hidden">

            {/* Container Image 1 - Move Up */}
            <motion.div
              className="grid grid-cols-1 gap-2"
              style={{ y: container1Y }}
            >
              {[29, 30, 31].map((num, index) => (
                <motion.div
                  key={`container1-${num}`}
                  className="relative"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                >
                  <Image
                    src={`/images/about/${num}.png`}
                    alt={`Gallery Image ${num}`}
                    width={200}
                    height={200}
                    className="w-full h-48 sm:h-60 lg:h-72 object-cover rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Container Image 2 - Move Down */}
            <motion.div
              className="grid grid-cols-1 gap-2"
              style={{ y: container2Y }}
            >
              {[32, 33, 34].map((num, index) => (
                <motion.div
                  key={`container2-${num}`}
                  className="relative"
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                >
                  <Image
                    src={`/images/about/${num}.png`}
                    alt={`Gallery Image ${num}`}
                    width={200}
                    height={200}
                    className="w-full h-48 sm:h-60 lg:h-72 object-cover rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Container Image 3 - Move Up Slower */}
            <motion.div
              className="grid grid-cols-1 gap-2"
              style={{ y: container3Y }}
            >
              {[35, 36, 37].map((num, index) => (
                <motion.div
                  key={`container3-${num}`}
                  className="relative"
                  custom={index + 6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                >
                  <Image
                    src={`/images/about/${num}.png`}
                    alt={`Gallery Image ${num}`}
                    width={200}
                    height={200}
                    className="w-full h-48 sm:h-60 lg:h-72 object-cover rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right section content */}
        <motion.div
          className="w-full lg:w-1/2 xl:w-3/5 flex justify-center flex-col gap-y-6 py-8 lg:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          <motion.div
            className="flex flex-col items-center md:items-start"
            custom={0}
            variants={textVariants}
          >
            <p className="font-ephesis first-letter:text-3xl font-semibold text-lg sm:text-2xl tracking-wider text-orange-500">
              {subtitle} &nbsp;
              <span className="text-green-500 dark:text-green-200">Sakti</span>
            </p>
            <h1 className='font-bebas-neue tracking-wider text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg text-gray-700 dark:text-gray-200'>
              {title}
            </h1>
          </motion.div>

          <motion.p
            className="text-sm text-center md:text-justify sm:text-base leading-relaxed text-gray-500 dark:text-gray-300"
            custom={1}
            variants={textVariants}
          >
            {description}
          </motion.p>

          <motion.div
            custom={2}
            variants={textVariants}
            className="flex justify-center md:justify-start"
          >
            <Link href="/about" className="w-fit">
              <Button

                variant="press"
                className="w-fit text-sm sm:text-base active:text-orange-500 bg-orange-500 border-orange-700 text-gray-800 font-poppins font-normal"
              >
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}