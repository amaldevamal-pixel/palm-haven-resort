"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    title: "Infinity Pool",
    description: "Relax in our stunning tropical infinity pool overlooking serene landscapes.",
  },
  {
    title: "Backwater Kayaking",
    description: "Explore Kerala’s peaceful waterways with guided kayaking experiences.",
  },
  {
    title: "Fine Dining",
    description: "Enjoy authentic Kerala cuisine prepared with fresh local ingredients.",
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with holistic spa treatments.",
  },
  {
    title: "Sunset Cruise",
    description: "Experience magical sunsets while cruising through calm backwaters.",
  },
  {
    title: "Yoga Deck",
    description: "Morning yoga sessions surrounded by nature and peaceful water views.",
  },
];


// ✅ same animation system (fixed TS)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const, // ✅ FIXED
    },
  },
};

export default function Amenities() {
  return (
    <section className="bg-black py-20 md:py-28">

      <div className="max-w-[1300px] mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-20"
        >

          <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-3">
            AMENITIES
          </p>

          <h2
            className="text-white text-3xl md:text-5xl font-light tracking-[0.14em]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            EXPERIENCES & SERVICES
          </h2>

          <p className="text-gray-400 mt-3 md:mt-5 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Every moment is designed for comfort, calm, and refined luxury.
          </p>

        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10"
        >

          {amenities.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group 
              border border-white/10 
              rounded-[22px] md:rounded-[30px] 
              p-5 md:p-8 
              bg-white/[0.03] 
              backdrop-blur-xl
              transition-all duration-500
              hover:border-white/30
              hover:bg-white/[0.06]"
            >

              <h3
                className="text-white text-lg md:text-xl tracking-[0.12em] mb-3 md:mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {itemData.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {itemData.description}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}