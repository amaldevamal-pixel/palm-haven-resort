"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const rooms = [
  {
    title: "Palm Garden Room",
    image: "/rooms/garden.jpg",
    description:
      "Surrounded by lush palms, this tranquil room features warm wooden interiors and a private balcony overlooking tropical gardens.",
    price: "₹7,500 / night",
    amenities: ["King Bed", "Garden View", "Private Balcony"],
  },
  {
    title: "Backwater Deluxe Suite",
    image: "/rooms/backwater.jpg",
    description:
      "Wake up to panoramic backwater views through floor-to-ceiling windows in this spacious luxury suite.",
    price: "₹9,800 / night",
    amenities: ["Lagoon View", "Premium Suite", "Breakfast Included"],
  },
  {
    title: "Infinity Pool Villa",
    image: "/rooms/villa.jpg",
    description:
      "An exclusive private villa with personal infinity pool, elegant lounge space and uninterrupted sunset views.",
    price: "₹15,000 / night",
    amenities: ["Private Pool", "Sunset View", "Luxury Villa"],
  },
];

export default function Rooms() {
  return (
    <section className="bg-black py-20 md:py-32">

      <div className="max-w-[1200px] mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-14 md:mb-24 text-center">
          <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400 mb-3">
            ACCOMMODATION
          </p>

          <h2
            className="text-white text-3xl md:text-5xl font-light tracking-[0.12em]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            OUR ROOMS
          </h2>

          <p className="text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-lg">
            Thoughtfully designed spaces blending tropical nature with modern comfort.
          </p>
        </div>

        {/* Rooms */}
        <div className="space-y-16 md:space-y-40">

          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`pb-10 border-b border-white/5 md:border-none md:pb-0 
              grid md:grid-cols-2 gap-8 md:gap-20 items-center ${
                i % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}
            >

              {/* Image */}
              <div className={`${i % 2 !== 0 ? "md:col-start-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl md:rounded-[30px]">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    src={room.image}
                    className="w-full h-[240px] md:h-[520px] object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 !== 0 ? "md:col-start-1" : ""}`}>

                <h3
                  className="text-white text-xl md:text-3xl mb-3 md:mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {room.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-5 md:mb-8">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-8">
                  {room.amenities.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm border border-white/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">

                  <span className="text-white text-lg md:text-xl">
                    {room.price}
                  </span>

                  <Link href="/rooms">
                    <button className="px-6 py-2.5 md:px-7 md:py-3 
                      border border-white/30 text-white 
                      rounded-full text-sm md:text-base
                      hover:bg-white hover:text-black transition">
                      View Room
                    </button>
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Divider (FIXED) */}
        <div className="h-px bg-white/10 my-12 md:my-20" />

        {/* CTA */}
        <div className="text-center">

          <h3
            className="text-white text-2xl md:text-3xl mb-4 md:mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Explore More Rooms
          </h3>

          <p className="text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
            Discover additional suites and exclusive villas crafted for unforgettable stays.
          </p>

          <Link href="/rooms">
            <button className="px-8 py-2.5 md:px-10 md:py-3 
              bg-white text-black rounded-full 
              text-sm md:text-base
              hover:bg-gray-200 transition">
              Explore All Rooms
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}