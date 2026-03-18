"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover md:scale-105 will-change-transform"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 md:px-6 text-center">

        <div className="max-w-3xl">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              fontFamily: "Playfair Display, serif", // ✅ restored font
            }}
            className="text-white 
            text-3xl sm:text-4xl md:text-7xl 
            tracking-[0.15em] md:tracking-[0.12em] 
            font-light"
          >
            PALM HAVEN
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            className="mt-4 md:mt-6 
            text-sm sm:text-base md:text-lg 
            text-gray-200 leading-relaxed max-w-xl mx-auto tracking-wide"
          >
            Experience refined luxury in the heart of Kerala’s serene backwaters.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            className="mt-8 md:mt-10 
            flex flex-col sm:flex-row 
            items-center justify-center 
            gap-3 sm:gap-4"
          >

            <Link href="/rooms" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto 
                px-6 sm:px-8 
                py-3 sm:py-4 
                bg-white text-black 
                rounded-full 
                text-sm sm:text-base 
                font-medium 
                tracking-[0.12em] uppercase
                hover:bg-gray-200 
                transition-all duration-300">
                Book Stay
              </button>
            </Link>

            <Link href="/packages" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto 
                px-6 sm:px-8 
                py-3 sm:py-4 
                border border-white/60 
                text-white 
                rounded-full 
                text-sm sm:text-base 
                tracking-[0.12em] uppercase
                backdrop-blur-md 
                hover:bg-white hover:text-black 
                transition-all duration-300">
                Explore Packages
              </button>
            </Link>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          className="text-white text-[10px] md:text-xs tracking-[0.3em] opacity-80"
        >
          SCROLL
        </motion.div>
      </div>

    </section>
  );
}