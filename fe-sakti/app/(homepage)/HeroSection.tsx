'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from 'react';
import React, { JSX, useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  MotionValue,
  animate,
} from "framer-motion";

export default function HeroSection(): JSX.Element {
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Parallax transforms for background text
  const tepungRotiX: MotionValue<number> = useTransform(
    scrollY,
    [0, 500],
    [0, 200]
  );
  const breadcrumbsX: MotionValue<number> = useTransform(
    scrollY,
    [0, 500],
    [0, -200]
  );
  const backgroundOpacity: MotionValue<number> = useTransform(
    scrollY,
    [0, 300],
    [0.01, 0.05]
  );

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sendok: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const textTR: Variants = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  const textBR: Variants = {
    hidden: {
      y: 100,
      x: 100,
    },
    visible: {
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbs: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const product1: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -5,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const product2: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 5,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const offsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 40, // -50 untuk memberikan sedikit margin dari atas
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden bg-primary bg-gradient-to-t from-[#EA5B0C] via-orange-500 to-orange-600 dark:from-[#a53e07] dark:via-orange-700 dark:to-orange-800">
      <div className="relative pt-16 flex items-start justify-center bg-bottom bg-[url('/images/hero/bg-heroMobile.png')] lg:bg-[url('/images/hero/bg-heroDekstop.png')] bg-cover bg-top lg:bg-center bg-no-repeat">
        {/* Background gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Main content container */}
        <motion.div
          className="flex flex-col-reverse w-full lg:flex-row min-h-[90vh] md:min-h-[130vh] lg:min-h-[80vh] justify-start md:justify-between items-center sm:mx-12 lg:mx-16 xl:mx-20 mb-8 lg:my-12 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="flex items-center lg:items-start flex-col w-full lg:max-w-lg gap-y-4">
            <div className="space-y-4 text-center lg:text-left">
              {/* Brand name with typewriter */}
              <motion.div
                className="flex items-center justify-center lg:justify-start w-full"
                variants={itemVariants}
              >
                <div className="flex items-center uppercase sm:text-xl gap-x-2 bg-white/10 w-fit rounded-md pl-2">
                  <span className="text-yellow-300 text-2xl font-bold">Sakti</span>
                  <div className="text-green-600/90 font-medium bg-green-50/55 py-0.5 px-1.5 rounded-md shadow-sm">
                    <TypewriterComponent
                      options={{
                        strings: ["Tepung Roti", "Tepung Panir", "Breadcrumbs"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 80,
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-4xl leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl font-bebas-neue drop-shadow-[3px_2px_0px_rgba(0,0,0,0.3)] sm:drop-shadow-[4px_3px_0px_rgba(0,0,0,0.3)]"
                variants={itemVariants}
              >
                Kriuknya Sakti,{" "}
                <span
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Renyahnya Pasti!
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="max-w-xl lg:max-w-lg text-base leading-7 mx-auto text-white/90 font-poppins drop-shadow-lg"
                variants={itemVariants}
              >
                Bukan sekadar slogan, ini janji kami. Kami hadir untuk memastikan
                setiap hidangan Anda memiliki kerenyahan yang pas, tekstur yang
                memikat, dan rasa yang tak terlupakan.
              </motion.p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToAboutSection}
              variant="press"
              className="font-semibold px-3 text-orange-600 bg-white border-2 w-fit hover:bg-orange-50 border-white/20"
              size="lg"
            >
              Tentang Kami
            </Button>
          </div>

          {/* Right side - Product images */}
          {/* <motion.div
          className="relative bg-[url('/images/bg-product.png')] drop-shadow-[2px_2px_2px_rgba(255,255,255,0.3)] dark:drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)] bg-no-repeat bg-center bg-[length:400px_400px] md:bg-[length:600px_500px] min-h-[60vh] md:min-h-[80vh] w-full md:w-1/2 mt-12 md:mt-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        > */}

          {/* SAKTI 200gr */}
          {/* <motion.div
            className="absolute -translate-y-1/2 top-1/2 right-[6%] md:right-0 lg:right-[10%]"
            variants={product2}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/images/hero/Sakti200gOutline.png"
              alt="Sakti 200g Package"
              width={500}
              height={500}
              className="drop-shadow-[0px_0px_2px_rgba(225,225,225, 1)] max-w-42 md:max-w-50 filter brightness-110"
              priority
            />
          </motion.div> */}

          {/* SAKTI 500gr */}
          {/* <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 right-[12%] sm:right-[22%] md:right-[12%] lg:right-[20%]"
            variants={product1}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative">
              <Image
                src="/images/hero/Sakti500gOutline.png"
                alt="Sakti 500g Package"
                width={500}
                height={500}
                className="drop-shadow-[0px_0px_2px_rgba(225,225,225, 1)] max-w-52 md:max-w-60 filter brightness-110"
                priority
              />
              <Image
                src="/images/hero/effect1.png"
                alt="Sakti 500g Package"
                width={500}
                height={500}
                className="absolute -top-12 -left-12 md:-top-16 md:-left-16 drop-shadow-[0px_0px_2px_rgba(225,225,225, 1)] w-20 md:w-24 h-auto"
                priority
              />
              <div className="blur-md bg-amber-50">

              </div>
            </div>
          </motion.div> */}

          {/* Breadcrumb */}
          {/* <motion.div
            className="absolute -translate-y-1/2 bottom-6 right-1/3 md:right-[10%] md:bottom-12 lg:right-[25%]"
            variants={breadcrumbs}
            initial="hidden"
            animate="visible"
            whileHover={{
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/images/hero/breadcrumbs.png"
              alt="Breadcrumbs"
              width={500}
              height={500}
              className="drop-shadow-[0px_0px_8px_rgba(255,255,255)] max-w-40 md:max-w-56 filter brightness-110"
              priority
            />
          </motion.div>
        </motion.div> */}
        </motion.div>

        {/* Animated background text with parallax scrolling */}
        <motion.div
          className="absolute w-full md:w-fit text-right space-y-6 md:space-y-0 right-0 overflow-hidden text-6xl pointer-events-none select-none top-4 font-bebas-neue sm:text-7xl md:text-9xl text-amber-700"
          style={{ opacity: backgroundOpacity }}
        >
          {/* Tepung Roti - masuk dari kanan */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: tepungRotiX }}
            transition={{
              duration: 4,
              ease: "easeOut",
              delay: 0.6
            }}
          >
            <p>Tepung Roti</p>
          </motion.div>

          {/* Breadcrumbs - masuk dari kiri */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: breadcrumbsX }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.8
            }}
            className="pl-12"
          >
            <p>Breadcrumbs</p>
          </motion.div>

          {/* Tepung Roti - masuk dari kanan */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: tepungRotiX }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.8
            }}
          >
            <p>Tepung Roti</p>
          </motion.div>

          {/* Breadcrumbs - masuk dari kiri */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: breadcrumbsX }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.6
            }}
            className="pl-8"
          >
            <p>Breadcrumbs</p>
          </motion.div>

          {/* Tepung Roti - masuk dari kanan */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: tepungRotiX }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <p>Tepung Roti</p>
          </motion.div>

          {/* Breadcrumbs - masuk dari kiri */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: breadcrumbsX }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 1.2
            }}
          >
            <p>Breadcrumbs</p>
          </motion.div>
        </motion.div>

        {/* Decorative elements scrool down */}
        <motion.div
          className="hidden md:block absolute -translate-x-1/2 bottom-16 left-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50">
            <motion.div
              className="w-1 h-3 mt-2 rounded-full bg-white/70"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        {/* <motion.div
        className="absolute top-[8%] md:top-[16%] right-[10%] md:right-[12%] -translate-y-1/2 z-10"
        variants={sendok}
        initial="hidden"
        animate="visible"
        whileHover={{
          rotate: 0,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src="/images/hero/sendok.png"
          alt="Sendok Breadscrumbs"
          width={500}
          height={500}
          className="drop-shadow-[0px_0px_2px_rgba(225,225,225, 1)] max-w-30 md:max-w-36 filter brightness-110"
          priority
        />
      </motion.div> */}
      </div>
    </div>
  );
}