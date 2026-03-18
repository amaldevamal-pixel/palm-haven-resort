"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anand Pillai",
    rating: 5,
    text: "Amazing stay! The infinity pool and sunset views were breathtaking.",
  },
  {
    name: "Sophie Martin",
    rating: 5,
    text: "Beautiful resort surrounded by nature. Perfect for a peaceful getaway.",
  },
  {
    name: "Rahul Nair",
    rating: 5,
    text: "Loved the kayaking experience and the staff hospitality.",
  },
  {
    name: "Priya Thomas",
    rating: 5,
    text: "Rooms were luxurious and the food was absolutely fantastic.",
  },
  {
    name: "Daniel Smith",
    rating: 5,
    text: "One of the most relaxing resorts I've visited in Kerala.",
  },
  {
    name: "Akhil Varma",
    rating: 5,
    text: "Perfect location and amazing service. Highly recommended.",
  },
];

const loopReviews = [...reviews, ...reviews];

export default function Reviews() {
  return (
    <section
      className="bg-black py-20 md:py-36 overflow-hidden"
      style={{ fontFamily: "Playfair Display, serif" }} // ✅ FIXED FONT
    >

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center mb-16 md:mb-20">

        <p className="text-[10px] md:text-sm tracking-[0.35em] text-gray-400 mb-4">
          GOOGLE REVIEWS
        </p>

        <h2 className="text-white text-3xl md:text-5xl font-light mb-4 md:mb-6">
          Loved by Our Guests
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Real experiences shared by guests who stayed at Palm Haven Resort.
        </p>

      </div>

      {/* Scrolling Reviews */}
      <motion.div
        animate={{ x: [0, -1000] }} // ✅ PIXEL BASED (smooth)
        transition={{
          repeat: Infinity,
          duration: 25, // ✅ faster = smoother on mobile
          ease: "linear",
        }}
        style={{
          willChange: "transform",
          transform: "translateZ(0)", // ✅ GPU acceleration
        }}
        className="flex flex-nowrap gap-4 md:gap-8 px-4 md:px-8"
      >

        {loopReviews.map((review, i) => (
          <div
            key={i}
            className="min-w-[180px] sm:min-w-[200px] md:min-w-[360px]
            border border-white/10 
            rounded-xl md:rounded-2xl 
            p-3 sm:p-4 md:p-8
            bg-white/5 backdrop-blur-sm"
          >

            <div className="text-yellow-400 text-sm md:text-base mb-3 md:mb-4">
              ★★★★★
            </div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
              "{review.text}"
            </p>

            <div className="text-white text-xs sm:text-sm md:text-base font-medium">
              {review.name}
            </div>

          </div>
        ))}

      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16 md:mt-20">

        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="inline-block px-6 py-3 md:px-10 md:py-4 
          border border-white/30 
          text-white 
          rounded-full 
          text-xs md:text-base
          hover:bg-white hover:text-black 
          transition"
        >
          View More Reviews on Google
        </a>

      </div>

    </section>
  );
}