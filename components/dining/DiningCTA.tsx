"use client";

export default function DiningCTA() {
  return (
    <section
      className="bg-black text-white py-20 md:py-32 text-center"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-2xl mx-auto px-6">

        {/* LABEL */}
        <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-4">
          RESERVATIONS
        </p>

        {/* HEADING */}
        <h3 className="text-3xl md:text-5xl font-light tracking-[0.12em] mb-6">
          Reserve Your Dining Experience
        </h3>

        {/* TEXT */}
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
          Whether it’s a romantic evening or a private dining experience,
          our team will curate the perfect setting for you.
        </p>

        {/* ACTION */}
        <a
          href="/contact"
          className="inline-block px-8 md:px-12 py-3 md:py-4 
          border border-white/30 
          rounded-full 
          text-xs md:text-sm
          tracking-[0.15em]
          hover:bg-white hover:text-black 
          transition"
        >
          MAKE A RESERVATION
        </a>

      </div>
    </section>
  );
}