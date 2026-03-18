"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PackagesHero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/packages/packagehero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Brighter overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

        <div className="max-w-2xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs tracking-[0.35em] text-gray-300 mb-4"
          >
            CURATED EXPERIENCES
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light tracking-[0.12em]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            SIGNATURE PACKAGES
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 md:mt-6 text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            Discover thoughtfully crafted stays designed to elevate your
            experience with comfort, luxury, and unforgettable moments.
          </motion.p>

          {/* ✅ Correct CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-10"
          >
            <Link href="/rooms">
              <button className="px-8 py-3 md:px-10 md:py-4 
                bg-white text-black rounded-full 
                text-sm md:text-base
                hover:bg-gray-200 transition">
                Check Availability
              </button>
            </Link>
          </motion.div>

        </div>

      </div>

    </section>
  );
}