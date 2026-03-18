"use client";

import { useState } from "react";

const images = [
  // ROOMS
  { src: "/gallery/room-1.jpg", category: "Rooms" },
  { src: "/gallery/room-2.jpg", category: "Rooms" },
  { src: "/gallery/room-3.jpg", category: "Rooms" },
  { src: "/gallery/room-4.jpg", category: "Rooms" },

  // DINING
  { src: "/gallery/dining-1.jpg", category: "Dining" },
  { src: "/gallery/dining-2.jpg", category: "Dining" },
  { src: "/gallery/dining-3.jpg", category: "Dining" },
  { src: "/gallery/dining-4.jpg", category: "Dining" },

  // RESORT
  { src: "/gallery/resort-1.jpg", category: "Resort" },
  { src: "/gallery/resort-2.jpg", category: "Resort" },
  { src: "/gallery/resort-3.jpg", category: "Resort" },
  { src: "/gallery/resort-4.jpg", category: "Resort" },
];

const filters = ["All", "Rooms", "Dining", "Resort"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section className="bg-black text-white pb-20 md:pb-32">

      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* FILTER */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10 md:mb-16 flex-wrap">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-xs md:text-sm rounded-full border transition
              ${
                active === f
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white hover:border-white"
              }`}
            >
              {f}
            </button>
          ))}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">

          {filtered.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img.src)}
              className="overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer"
            >
              <img
                src={img.src}
                className="w-full h-full object-cover 
                transition duration-700 
                group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>

      {/* ================= LIGHTBOX ================= */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >

          <img
            src={selected}
            className="max-w-full max-h-full object-contain"
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

        </div>
      )}

    </section>
  );
}