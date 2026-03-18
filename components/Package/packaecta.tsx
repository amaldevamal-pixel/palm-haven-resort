"use client";

import Link from "next/link";

export default function PackagesCTA() {
  return (
    <section
      className="bg-black text-white py-16 md:py-24"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">

        {/* TRUST TEXT */}
        <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-4">
          TRUSTED EXPERIENCES
        </p>

        {/* MAIN TEXT */}
        <h2 className="text-2xl md:text-4xl font-light tracking-[0.12em] leading-tight mb-4">
          Loved by 500+ Guests
        </h2>

        {/* SUB TEXT */}
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8 md:mb-10">
          Our curated packages are designed to give you the best of Kerala —
          combining stay, dining, and unforgettable experiences.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5">

          {/* PRIMARY */}
          <Link
            href="/rooms"
            className="px-6 md:px-8 py-3 md:py-4 
            bg-white text-black 
            rounded-full 
            text-xs md:text-sm
            tracking-[0.15em]
            hover:bg-gray-200 
            transition"
          >
            VIEW ROOMS
          </Link>

          {/* SECONDARY */}
          <Link
            href="/contact"
            className="px-6 md:px-8 py-3 md:py-4 
            border border-white/30 
            rounded-full 
            text-xs md:text-sm
            tracking-[0.15em]
            hover:bg-white hover:text-black 
            transition"
          >
            TALK TO US
          </Link>

        </div>

      </div>
    </section>
  );
}