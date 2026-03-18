"use client";

import Link from "next/link";

export default function HomeLocation() {
  return (
    <section
      className="bg-black text-white py-20 md:py-32"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE / VIDEO */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden">

            <img
              src="/gallery/backwater.jpg"
              alt="Kerala Backwaters"
              className="w-full h-full object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/20" />

          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">

            <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-3">
              DESTINATION
            </p>

            <h2 className="text-3xl md:text-5xl font-light tracking-[0.12em] leading-tight">
              In the Heart of Kerala’s Backwaters
            </h2>

            <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Surrounded by tranquil waterways and lush greenery, Palm Haven
              offers a serene escape where nature and luxury come together.
            </p>

            {/* CTA */}
            <div className="mt-6 md:mt-10">
              <Link
                href="/contact"
                className="inline-block px-6 md:px-10 py-3 md:py-4 
                border border-white/30 
                rounded-full 
                text-xs md:text-sm 
                tracking-[0.15em]
                hover:bg-white hover:text-black 
                transition"
              >
                VIEW LOCATION
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}