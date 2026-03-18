"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useEffect, useState } from "react";

const packages = [
  {
    title: "Romantic Escape",
    price: "₹18,000 / 2 Nights",
    description:
      "Perfect for couples seeking a peaceful getaway with candlelight dining and spa relaxation.",
    features: ["Luxury Suite", "Candlelight Dinner", "Couple Spa"],
  },
  {
    title: "Backwater Adventure",
    price: "₹14,500 / 2 Nights",
    description:
      "Discover Kerala’s backwaters with kayaking tours and a magical sunset cruise.",
    features: ["Garden Room", "Kayaking Tour", "Sunset Cruise"],
  },
  {
    title: "Wellness Retreat",
    price: "₹16,000 / 2 Nights",
    description:
      "A rejuvenating escape featuring yoga sessions, spa therapy and healthy cuisine.",
    features: ["Deluxe Suite", "Yoga Sessions", "Spa Treatment"],
  },
];

export default function Packages() {
  const ref = useRef(null);
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  setIsDesktop(window.innerWidth >= 768);
}, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Desktop motion only
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [70, -10]);

  return (
    <section
      ref={ref}
      className="bg-black py-24 md:py-36 overflow-x-hidden"
      style={{ fontFamily: "Playfair Display, serif" }} // ✅ applied globally
    >
      <div className="max-w-[1300px] mx-auto px-4 md:px-8"> {/* ✅ px reduced for mobile */}

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">

          <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-4">
            CURATED EXPERIENCES
          </p>

          <h2 className="text-white text-3xl md:text-6xl font-light tracking-[0.15em]">
            SIGNATURE PACKAGES
          </h2>

          <p className="text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
            Crafted stays designed to elevate your experience with luxury,
            comfort, and unforgettable moments.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">

          {[y1, y2, y3].map((y, i) => {
            const pkg = packages[i];

            return (
              <motion.div
                key={i}
                style={{
  y: isDesktop ? y : 0,
}}
                className="group relative 
                border border-white/10 
                rounded-[24px] md:rounded-[36px] 
                p-5 md:p-10   /* ✅ slightly tighter mobile padding */
                bg-white/[0.03] 
                backdrop-blur-xl
                transition-all duration-500
                hover:border-white/30
                hover:bg-white/[0.06]"
              >

                {/* Title */}
                <h3 className="text-white text-lg md:text-2xl tracking-[0.12em] mb-3 md:mb-4">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 md:mb-8">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-8">
                  {pkg.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] md:text-xs 
                      border border-white/15 
                      px-3 py-1.5 
                      rounded-full 
                      text-gray-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">

                  <span className="text-white text-sm md:text-base tracking-wide">
                    {pkg.price}
                  </span>

                  <Link href="/packages">
                    <button className="px-4 py-2 md:px-6 md:py-2.5 
                      border border-white/30 
                      rounded-full 
                      text-white text-xs md:text-sm
                      hover:bg-white hover:text-black 
                      transition-all duration-300">
                      View
                    </button>
                  </Link>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}