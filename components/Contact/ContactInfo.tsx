"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactInfo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ smooth scroll trigger (no flicker)
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

  const items = [
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 9XXXXXXXXX",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "contact@palmhaven.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Kerala, India",
    },
    {
      icon: <Clock size={20} />,
      label: "Hours",
      value: "9 AM – 9 PM",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-black text-white py-20 md:py-32 px-5 md:px-6"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          className={`
          text-center mb-14 md:mb-20
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.12em] mb-3">
            Contact Information
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Reach out anytime — our team is here to assist you with your stay.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          {items.map((item, i) => (
            <div
              key={i}
              className={`
              group 
              bg-white/[0.03] 
              border border-white/10 
              rounded-2xl md:rounded-3xl 
              p-5 md:p-8 
              text-center
              backdrop-blur-xl
              hover:border-white/30 hover:bg-white/[0.05]
              transition-all duration-500

              transform transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 80}ms` }} // stagger
            >

              {/* Icon */}
              <div className="flex justify-center mb-4 text-white/80 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-[10px] md:text-xs tracking-[0.25em] text-gray-500 mb-2 uppercase">
                {item.label}
              </p>

              {/* Value */}
              <p className="text-xs sm:text-sm md:text-base text-white tracking-wide break-words">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}