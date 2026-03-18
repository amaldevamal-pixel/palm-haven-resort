"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "Candlelight Dining",
  "Fresh Seafood",
  "Private Dining",
  "Chef’s Specials",
  "Sunset Dining",
  "Signature Experiences",
];

export default function DiningHighlights() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
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
      className="bg-black text-white py-14 md:py-24"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="w-full px-5 md:px-12 lg:px-20">

        {/* HEADING */}
        <div
          className={`
          text-center mb-8 md:mb-12
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-3">
            EXPERIENCES
          </p>

          <h3 className="text-xl sm:text-2xl md:text-4xl font-light tracking-[0.12em]">
            Dining Highlights
          </h3>
        </div>

        {/* CHIPS */}
        <div className="flex flex-wrap justify-center md:justify-center gap-2 md:gap-4 max-w-3xl mx-auto">

          {items.map((item, i) => (
            <span
              key={i}
              className={`
              text-[10px] sm:text-xs md:text-sm
              px-3 py-1.5 md:px-4 md:py-2
              border border-white/15
              rounded-full
              text-gray-300 whitespace-nowrap

              transition-all duration-500 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {item}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}