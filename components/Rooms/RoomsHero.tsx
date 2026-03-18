"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Filters = {
  type: string;
  guests: number;
  price: string;
  checkin: string;
  checkout: string;
};

export default function RoomsHero({
  filters,
  setFilters
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {

  const [localFilters, setLocalFilters] = useState(filters);
  const [loading, setLoading] = useState(false);

  const updateFilter = (key: keyof Filters, value: string | number) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const handleSearch = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setFilters(localFilters);
    setLoading(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      className="relative min-h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center text-center"
      style={{ fontFamily: "Playfair Display, serif" }} // ✅ font fixed
    >

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-6xl px-4 md:px-6 w-full pt-12 md:pt-0">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-6xl font-light mb-8 md:mb-10"
        >
          Find Your Perfect Stay
        </motion.h1>

        {/* Filter Bar */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 
          rounded-xl md:rounded-2xl 
          p-4 md:p-6 
          grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4"
        >

          {/* CHECK-IN */}
          <div className="flex flex-col text-left col-span-1">
            <label className="text-[10px] md:text-xs text-gray-300 mb-1">
              Check-in
            </label>
            <input
              type="date"
              min={today} // ✅ prevents past dates
              value={localFilters.checkin}
              onChange={(e) => updateFilter("checkin", e.target.value)}
              className="bg-black/40 text-white border border-white/20 
              rounded-lg p-2.5 md:p-3 text-xs md:text-sm"
            />
          </div>

          {/* CHECKOUT */}
          <div className="flex flex-col text-left col-span-1">
            <label className="text-[10px] md:text-xs text-gray-300 mb-1">
              Check-out
            </label>
            <input
              type="date"
              min={localFilters.checkin || today}
              value={localFilters.checkout}
              onChange={(e) => updateFilter("checkout", e.target.value)}
              className="bg-black/40 text-white border border-white/20 
              rounded-lg p-2.5 md:p-3 text-xs md:text-sm"
            />
          </div>

          {/* GUESTS */}
          <div className="flex flex-col text-left">
            <label className="text-[10px] md:text-xs text-gray-300 mb-1">
              Guests
            </label>
            <select
              value={localFilters.guests}
              onChange={(e) => updateFilter("guests", Number(e.target.value))}
              className="bg-black/40 text-white border border-white/20 
              rounded-lg p-2.5 md:p-3 text-xs md:text-sm"
            >
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n} Guest{n>1 && "s"}</option>
              ))}
            </select>
          </div>

          {/* ROOM TYPE */}
          <div className="flex flex-col text-left">
            <label className="text-[10px] md:text-xs text-gray-300 mb-1">
              Room Type
            </label>
            <select
              value={localFilters.type}
              onChange={(e) => updateFilter("type", e.target.value)}
              className="bg-black/40 text-white border border-white/20 
              rounded-lg p-2.5 md:p-3 text-xs md:text-sm"
            >
              <option value="">All Rooms</option>
              <option value="room">Garden Room</option>
              <option value="suite">Suite</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          {/* PRICE */}
          <div className="flex flex-col text-left">
            <label className="text-[10px] md:text-xs text-gray-300 mb-1">
              Price
            </label>
            <select
              value={localFilters.price}
              onChange={(e) => updateFilter("price", e.target.value)}
              className="bg-black/40 text-white border border-white/20 
              rounded-lg p-2.5 md:p-3 text-xs md:text-sm"
            >
              <option value="">Any Price</option>
              <option value="low">₹5k - ₹8k</option>
              <option value="mid">₹8k - ₹12k</option>
              <option value="high">₹12k+</option>
            </select>
          </div>

          {/* SEARCH */}
          <div className="col-span-2 md:col-span-1 flex items-end">
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-white text-black rounded-lg 
              p-2.5 md:p-3 text-xs md:text-sm font-medium 
              hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              {loading ? "Searching..." : "Search"}
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}