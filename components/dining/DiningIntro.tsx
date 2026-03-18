"use client";

import { useEffect, useRef, useState } from "react";

export default function DiningIntro() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ NO FLICKER scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black text-white py-20 md:py-32"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-20">

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* TEXT */}
          <div
            className={`
            max-w-xl 
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >

            <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-4">
              OUR DINING
            </p>

            <h2 className="text-3xl md:text-5xl font-light tracking-[0.12em] leading-tight">
              Elevated Culinary Experiences
            </h2>

            <p className="text-gray-400 mt-5 md:mt-6 text-sm md:text-lg leading-relaxed">
              Each dish is thoughtfully crafted using premium ingredients,
              blending local inspiration with refined techniques to create
              unforgettable dining moments.
            </p>

          </div>

          {/* IMAGE */}
          <div
            className={`
            relative h-[260px] sm:h-[320px] md:h-[460px] 
            rounded-2xl md:rounded-3xl overflow-hidden
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
            style={{ transitionDelay: "150ms" }}
          >

            <img
              src="/dining/intro1.jpg"
              alt="Dining Experience"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>

      </div>
    </section>
  );
}