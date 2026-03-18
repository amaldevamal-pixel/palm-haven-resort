"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DiningExperience() {
  return (
    <section
      className="bg-black py-16 md:py-24 overflow-hidden"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">

          {/* ================= IMAGE FIRST ON MOBILE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative h-[240px] sm:h-[280px] md:h-[520px] rounded-2xl md:rounded-[36px] overflow-hidden">

              <img
                src="/gallery/dining.jpg"
                alt="Dining Experience"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            </div>
          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 pl-1 sm:pl-2 md:pl-0"
          >
            <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-3">
              CULINARY EXPERIENCE
            </p>

            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.12em] leading-tight">
              A Taste of Kerala, Refined
            </h2>

            <p className="text-gray-400 mt-3 md:mt-6 text-sm md:text-lg leading-relaxed max-w-full md:max-w-md">
              Locally inspired cuisine crafted with fresh ingredients, served
              in serene waterfront settings designed for unforgettable moments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-8">
              {[
                "Candlelight Dining",
                "Chef’s Specials",
                "Seafood Selection",
                "Private Dining",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs 
                  border border-white/15 
                  px-2.5 py-1 
                  rounded-full 
                  text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 md:mt-10">
              <Link
                href="/dining"
                className="inline-block px-5 py-2.5 md:px-8 md:py-3.5 
                border border-white/30 
                rounded-full 
                text-white text-[11px] md:text-sm
                tracking-[0.15em]
                hover:bg-white hover:text-black 
                transition-all duration-300"
              >
                EXPLORE DINING
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}