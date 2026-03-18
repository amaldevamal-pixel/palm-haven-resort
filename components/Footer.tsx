"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-black border-t border-white/10 pt-20 md:pt-28 pb-10"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-[1300px] mx-auto px-5 md:px-8">

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-3">
            YOUR ESCAPE AWAITS
          </p>

          <h3 className="text-white text-2xl md:text-5xl font-light tracking-[0.12em] mb-5 leading-tight">
            Experience Palm Haven
          </h3>

          <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-md mx-auto">
            Discover serene backwaters, refined stays, and unforgettable moments.
          </p>

          <Link
            href="/rooms"
            className="inline-block px-6 md:px-10 py-3 md:py-4
            border border-white/30
            rounded-full
            text-xs md:text-sm tracking-[0.15em]
            hover:bg-white hover:text-black transition"
          >
            BOOK YOUR STAY
          </Link>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 border-t border-white/10 pt-12 md:pt-16">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-lg md:text-xl font-light tracking-[0.12em] mb-4">
              Palm Haven
            </h4>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
              A refined retreat in Kerala’s backwaters, blending nature,
              comfort, and timeless luxury.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-gray-500 text-[10px] tracking-[0.3em] mb-4">
              EXPLORE
            </p>

            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/rooms">Rooms</Link></li>
              <li><Link href="/dining">Dining</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-gray-500 text-[10px] tracking-[0.3em] mb-4">
              CONTACT
            </p>

            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>Alappuzha, Kerala</li>
              <li>+91 9XXXXXXXXX</li>
              <li>contact@palmhaven.com</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-gray-500 text-[10px] tracking-[0.3em] mb-4">
              CONNECT
            </p>

            <div className="flex flex-col gap-2 text-gray-400 text-xs md:text-sm">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-[10px] md:text-xs">

          <p>
            © {new Date().getFullYear()} Palm Haven. All rights reserved.
          </p>

          <p className="tracking-[0.2em] text-gray-600">
            DEMO SITE • POWERED BY AMALDEV
          </p>

        </div>

      </div>
    </footer>
  );
}