"use client";

import { useEffect, useRef, useState } from "react";

export default function DiningAtmosphere() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ smooth (no flicker)
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
      className="bg-black text-white py-16 md:py-28"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* HEADER */}
        <div
          className={`
          mb-10 md:mb-16 text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-3">
            AMBIENCE
          </p>

          <h3 className="text-2xl md:text-4xl font-light tracking-[0.12em]">
            Dining Atmosphere
          </h3>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">

          {/* LEFT BIG IMAGE */}
          <div
            className={`
            h-[260px] sm:h-[320px] md:h-[520px] 
            rounded-2xl md:rounded-3xl overflow-hidden
            transition-all duration-700

            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <img
              src="/dining/atmosphere-1.jpg"
              alt="Dining View"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-4 md:gap-6">

            {/* TOP */}
            <div
              className={`
              h-[120px] sm:h-[150px] md:h-[250px]
              rounded-2xl md:rounded-3xl overflow-hidden
              transition-all duration-700

              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: "120ms" }}
            >
              <img
                src="/dining/atmosphere-2.jpg"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM */}
            <div
              className={`
              h-[120px] sm:h-[150px] md:h-[250px]
              rounded-2xl md:rounded-3xl overflow-hidden
              transition-all duration-700

              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: "240ms" }}
            >
              <img
                src="/dining/atmosphere-3.jpg"
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}