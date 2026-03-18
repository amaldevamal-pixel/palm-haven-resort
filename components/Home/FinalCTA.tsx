"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="bg-black py-20 md:py-40"
      style={{ fontFamily: "Playfair Display, serif" }}
    >

      <div className="max-w-[900px] mx-auto text-center px-5 md:px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl font-light mb-4 md:mb-6 leading-tight"
        >
          Ready to Experience Palm Haven Resort?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-sm md:text-lg mb-8 md:mb-12 max-w-md md:max-w-xl mx-auto"
        >
          Escape into the peaceful beauty of Kerala’s backwaters
          and create unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 md:gap-6 flex-wrap"
        >

          <Link
            href="/rooms"
            className="px-6 py-3 md:px-10 md:py-4 
            bg-white text-black 
            rounded-full 
            text-xs md:text-base
            font-medium 
            hover:bg-gray-200 
            transition"
          >
            Book Your Stay
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 md:px-10 md:py-4 
            border border-white/30 
            text-white 
            rounded-full 
            text-xs md:text-base
            hover:bg-white hover:text-black 
            transition"
          >
            Contact Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}