"use client";

import { useEffect, useState } from "react";

export default function DiningHero() {
  const [show, setShow] = useState(false);

  // ✅ run only once (no flicker)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative h-[80vh] md:h-screen w-full overflow-hidden"
      style={{ fontFamily: "Playfair Display, serif" }}
    >

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/dining/seafood.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="w-full px-6 md:px-12 lg:px-20">

          <div className="max-w-xl text-center md:text-left">

            {/* LABEL */}
            <p
              className={`text-[10px] md:text-xs tracking-[0.35em] text-gray-400 mb-4
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "100ms" }}
            >
              DINING EXPERIENCE
            </p>

            {/* HEADING */}
            <h1
              className={`text-white text-4xl md:text-6xl font-light tracking-[0.12em] leading-tight
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "200ms" }}
            >
              Curated Culinary Moments
            </h1>

            {/* SUBTEXT */}
            <p
              className={`text-gray-300 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "350ms" }}
            >
              A refined dining journey crafted with premium ingredients,
              elegant settings, and unforgettable flavors.
            </p>

          </div>

        </div>

      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="text-white text-[10px] tracking-[0.3em] opacity-70">
          SCROLL
        </div>
      </div>

    </section>
  );
}