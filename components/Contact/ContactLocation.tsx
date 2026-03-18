"use client";

export default function ContactLocation() {
  return (
    <section
      className="bg-black text-white py-20 md:py-32"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-3">
            LOCATION
          </p>

          <h2 className="text-3xl md:text-5xl font-light tracking-[0.12em]">
            Find Us in Kerala
          </h2>
        </div>

        {/* MAP (fixed premium look) */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">

          <iframe
            src="https://www.google.com/maps?q=Alappuzha,Kerala&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

          {/* Premium overlay (important) */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

        </div>

        {/* Info */}
        <div className="mt-10 md:mt-14 text-center space-y-3 md:space-y-4">

          <p className="text-gray-300 text-sm md:text-base">
            Palm Haven Resort, Alappuzha Backwaters, Kerala, India
          </p>

          <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto">
            Easily accessible from Kochi International Airport (approx. 1.5 hrs drive)
          </p>

        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">

          <a
            href="https://www.google.com/maps?q=Alappuzha,Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-10 py-3 md:py-4 
            border border-white/30 
            rounded-full 
            text-xs md:text-sm 
            tracking-[0.15em]
            hover:bg-white hover:text-black 
            transition-all duration-300"
          >
            OPEN IN GOOGLE MAPS
          </a>

        </div>

      </div>
    </section>
  );
}