"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ smooth scroll animation (no flicker)
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

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));

    setLoading(false);
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm ${form.name || "a guest"}.\n` +
      `I'm interested in booking.\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Message: ${form.message}`
  );

  return (
    <section
      ref={ref}
      className="bg-black text-white py-20 md:py-32 px-5 md:px-6"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.12em] mb-3">
            Send Us a Message
          </h2>

          <p className="text-gray-400 text-sm md:text-base">
            We usually respond within a few hours.
          </p>
        </div>

        {/* Form */}
        <div
          className={`bg-white/[0.03] border border-white/10 backdrop-blur-xl 
          rounded-2xl md:rounded-3xl 
          p-5 md:p-8 space-y-4 md:space-y-6
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          {/* Inputs */}
          {[
            { key: "name", type: "text", placeholder: "Full Name" },
            { key: "email", type: "email", placeholder: "Email Address" },
            { key: "phone", type: "tel", placeholder: "Phone Number (optional)" },
          ].map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              value={(form as any)[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full bg-black/40 border border-white/20 
              rounded-lg md:rounded-xl 
              px-3 py-2.5 md:px-4 md:py-3
              text-sm md:text-base
              outline-none focus:border-white transition"
            />
          ))}

          {/* Textarea */}
          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full bg-black/40 border border-white/20 
            rounded-lg md:rounded-xl 
            px-3 py-2.5 md:px-4 md:py-3
            text-sm md:text-base
            outline-none focus:border-white transition"
          />

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">

            {/* Primary */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-full 
              py-3 md:py-4 
              text-xs md:text-sm tracking-[0.12em]
              bg-white text-black 
              hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              {loading && (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              )}

              {loading
                ? "Sending..."
                : success
                ? "Message Sent ✓"
                : "SEND MESSAGE"}
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919XXXXXXXXX?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full 
              py-3 md:py-4 
              text-xs md:text-sm tracking-[0.12em]
              text-center
              border border-white/30 
              hover:bg-white hover:text-black 
              transition"
            >
              WHATSAPP
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}