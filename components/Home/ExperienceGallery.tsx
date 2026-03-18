"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Infinity Pool", image: "/gallery/pool.jpg" },
  { title: "Luxury Suites", image: "/gallery/room.jpg" },
  { title: "Backwater Views", image: "/gallery/backwater.jpg" },
  { title: "Fine Dining", image: "/gallery/dining.jpg" },
];

// ✅ Repeat more times for smoother + longer desktop scroll
const loopItems = Array(4).fill(items).flat(); // 4 x 4 = 16 items

export default function ExperienceGallery() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative bg-black">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block h-[200vh]">

        <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">

          {/* Heading */}
          <div className="text-center mb-14 px-6">
            <h2
              className="text-white text-5xl font-light tracking-[0.12em]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              PALM HAVEN EXPERIENCE
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Immerse yourself in serene backwater views, luxury suites,
              and refined tropical living.
            </p>
          </div>

          {/* Horizontal Scroll */}
          <motion.div style={{ x }} className="flex gap-8 px-10">
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[380px] h-[60vh] rounded-3xl overflow-hidden"
              >
                <img src={item.image} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div
                  className="absolute bottom-6 left-6 text-white text-xl tracking-[0.12em]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-5 py-20 space-y-10">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-white text-3xl tracking-[0.12em] font-light"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            EXPERIENCE
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Discover refined luxury and calm backwater beauty.
          </p>
        </div>

        {/* Vertical Cards */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[260px] rounded-2xl overflow-hidden"
            >
              <img src={item.image} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div
                className="absolute bottom-4 left-4 text-white text-lg tracking-[0.12em]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}