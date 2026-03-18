"use client";

import { useEffect, useRef, useState } from "react";

const packages = [
  {
    title: "Romantic Escape",
    desc: "Perfect for couples seeking a peaceful getaway with candlelight dining and spa relaxation.",
    price: "₹18,000 / 2 Nights",
    perNight: "₹9,000 / night",
    room: "Luxury Suite",
    note: "Includes stay, candlelight dinner & couple spa",
    image: "/packages/romantic.jpg",
    includes: ["Luxury Suite", "Candlelight Dinner", "Couple Spa"],
  },
  {
    title: "Backwater Adventure",
    desc: "Discover Kerala’s backwaters with kayaking tours and a magical sunset cruise.",
    price: "₹14,500 / 2 Nights",
    perNight: "₹7,250 / night",
    room: "Garden Room",
    note: "Includes stay, kayaking & sunset cruise",
    image: "/packages/backwater.jpg",
    includes: ["Garden Room", "Kayaking Tour", "Sunset Cruise"],
  },
  {
    title: "Wellness Retreat",
    desc: "A rejuvenating escape featuring yoga sessions, spa therapy and healthy cuisine.",
    price: "₹16,000 / 2 Nights",
    perNight: "₹8,000 / night",
    room: "Deluxe Suite",
    note: "Includes stay, yoga & spa treatment",
    image: "/packages/wellness.jpg",
    includes: ["Deluxe Suite", "Yoga", "Spa Treatment"],
  },
  {
    title: "Luxury Family Stay",
    desc: "Spacious villas and curated activities designed for families to relax and explore.",
    price: "₹22,000 / 2 Nights",
    perNight: "₹11,000 / night",
    room: "Family Villa",
    note: "Includes villa stay & family activities",
    image: "/packages/family.jpg",
    includes: ["Family Villa", "Pool Access", "Activities"],
  },
  {
    title: "Private Villa Experience",
    desc: "Exclusive villas with private access, personalized service, and unmatched privacy.",
    price: "₹28,000 / 2 Nights",
    perNight: "₹14,000 / night",
    room: "Private Villa",
    note: "Includes private villa & personalized service",
    image: "/packages/villa.jpg",
    includes: ["Private Villa", "Personal Service", "Exclusive Access"],
  },
];

export default function PackagesSection() {
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
      { threshold: 0.15 }
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
      <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-28">

        {packages.map((pkg, i) => {
          const isReverse = i % 2 !== 0;

          return (
            <div
              key={i}
              className={`
              grid md:grid-cols-2 gap-8 md:gap-16 items-center
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* IMAGE */}
              <div
                className={`
                relative h-[260px] sm:h-[320px] md:h-[420px]
                rounded-2xl md:rounded-3xl overflow-hidden
                ${isReverse ? "md:order-2" : ""}
                `}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* TEXT */}
              <div className={`${isReverse ? "md:order-1" : ""} text-center md:text-left`}>

                {/* TITLE */}
                <h2 className="text-2xl md:text-4xl font-light tracking-[0.12em] mb-3">
                  {pkg.title}
                </h2>

                {/* ROOM TYPE */}
                <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] mb-4 uppercase">
                  {pkg.room}
                </p>

                {/* DESC */}
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-5 max-w-md mx-auto md:mx-0">
                  {pkg.desc}
                </p>

                {/* INCLUDES */}
                <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                  {pkg.includes.map((item, j) => (
                    <span
                      key={j}
                      className="text-[10px] md:text-xs 
                      border border-white/15 
                      px-3 py-1 
                      rounded-full 
                      text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* NOTE (VALUE CLARITY) */}
                <p className="text-gray-500 text-xs md:text-sm mb-5">
                  {pkg.note}
                </p>

                {/* PRICE */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-center md:justify-start">

                  <div>
                    <span className="text-white text-lg md:text-xl font-light">
                      {pkg.price}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">
                      {pkg.perNight}
                    </p>
                  </div>

                  <button
                    className="px-6 md:px-8 py-3 
                    border border-white/30 
                    rounded-full 
                    text-xs md:text-sm
                    tracking-[0.15em]
                    hover:bg-white hover:text-black 
                    transition"
                  >
                    BOOK NOW
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}