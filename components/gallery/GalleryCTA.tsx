"use client";

import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section
      className="bg-black text-white py-14 md:py-20 text-center"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-xl mx-auto px-6">

        <p className="text-gray-400 text-sm md:text-base mb-6">
          Experience it beyond the screen
        </p>

        <Link
          href="/rooms"
          className="inline-block px-6 md:px-10 py-3 
          border border-white/30 
          rounded-full 
          text-xs md:text-sm tracking-[0.15em]
          hover:bg-white hover:text-black transition"
        >
          BOOK YOUR STAY
        </Link>

      </div>
    </section>
  );
}