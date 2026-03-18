"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ fontFamily: "Playfair Display, serif" }}
    >

      {/* NEW VIDEO (change this file) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/contact/contacthero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

        <div className="max-w-3xl">

          {/* Title (clean animation) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white 
            text-4xl md:text-7xl 
            font-light tracking-[0.12em]"
          >
            Get in Touch
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 md:mt-6 
            text-sm md:text-lg 
            text-gray-300 leading-relaxed max-w-xl mx-auto"
          >
            Speak with our team to plan your stay, explore tailored
            experiences, and discover the finest moments at Palm Haven.
          </motion.p>

          {/* UNIQUE ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap"
          >

            {/* Call */}
            <a
              href="tel:+919999999999"
              className="px-6 md:px-8 py-3 md:py-4 
              bg-white text-black 
              rounded-full text-xs md:text-sm 
              tracking-[0.12em]
              hover:bg-gray-200 transition"
            >
              CALL US
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="px-6 md:px-8 py-3 md:py-4 
              border border-white/40 text-white 
              rounded-full text-xs md:text-sm 
              tracking-[0.12em]
              hover:bg-white hover:text-black transition"
            >
              WHATSAPP
            </a>

            {/* Email */}
            <a
              href="mailto:support@ridebe.in"
              className="px-6 md:px-8 py-3 md:py-4 
              border border-white/20 text-gray-200 
              rounded-full text-xs md:text-sm 
              tracking-[0.12em]
              hover:bg-white hover:text-black transition"
            >
              EMAIL
            </a>

          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white text-[10px] md:text-xs tracking-[0.3em] opacity-70"
        >
          SCROLL
        </motion.div>
      </div>

    </section>
  );
}