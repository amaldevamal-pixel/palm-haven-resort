"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";

type Room = {
  name: string;
  basePrice: number;
  category: string;
  maxGuests: number;
  pricePerExtraGuest: number;
  images: string[];
  description: string;
  fullDescription: string;
  features: string[];
  amenities: string[];
  bed: string;
  size: string;
  ac: string;
  checkin: string;
  checkout: string;
};

export default function RoomCard({
  room,
  guests,
  checkin,
  checkout,
}: {
  room: Room;
  guests: number;
  checkin: string;
  checkout: string;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ REAL scroll trigger (no flicker)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const nights =
    checkin && checkout
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkout).getTime() -
              new Date(checkin).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 1;

  const extraGuests = Math.max(0, guests - room.maxGuests);
  const pricePerNight =
    room.basePrice + extraGuests * room.pricePerExtraGuest;

  const totalPrice = pricePerNight * nights;

  return (
    <div
      ref={ref}
      style={{ fontFamily: "Playfair Display, serif" }}
      className={`
        border border-white/10 rounded-2xl overflow-hidden
        hover:border-white/30 transition

        transform transition-all duration-500 ease-out
        will-change-transform

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="grid md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative h-[240px] md:h-[320px] overflow-hidden">

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            allowTouchMove={false}
            className="h-full"
          >
            {room.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={room.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8 flex flex-col justify-between">

          <div>
            <h3 className="text-white text-xl md:text-2xl font-light mb-2 tracking-[0.08em]">
              {room.name}
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
              {room.description}
            </p>

            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-xs md:text-sm mb-5">
              {room.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <span className="text-white text-lg md:text-xl font-light">
                ₹{pricePerNight.toLocaleString()} / night
              </span>

              <p className="text-xs text-gray-400 mt-1">
                Total for {nights} night{nights > 1 && "s"}: ₹{totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="flex gap-2 md:gap-3">

              <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 border border-white/30 text-white rounded-full text-xs md:text-sm
                hover:bg-white hover:text-black transition"
              >
                {open ? "Hide" : "Details"}
              </button>

              <button className="px-4 py-2 bg-white text-black rounded-full text-xs md:text-sm
              hover:bg-gray-200 transition">
                Book
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* DETAILS */}
      {open && (
        <div className="border-t border-white/10 bg-neutral-950">
          <div className="p-6 md:p-8 space-y-6">

            <div>
              <h4 className="text-white text-lg font-light mb-2">
                About This Room
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                {room.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm text-gray-300">
              <div className="border border-white/10 rounded-lg px-3 py-2">
                Max Guests: {room.maxGuests}
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2">
                Bed: {room.bed}
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2">
                Size: {room.size}
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2">
                AC: {room.ac}
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2">
                Check-in: {room.checkin}
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2">
                Check-out: {room.checkout}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {room.amenities.map((a, i) => (
                <div
                  key={i}
                  className="border border-white/10 px-3 py-2 rounded-lg text-gray-300 text-xs md:text-sm"
                >
                  {a}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}