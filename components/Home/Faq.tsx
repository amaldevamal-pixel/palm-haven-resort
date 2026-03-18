"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in starts at 2:00 PM and check-out is at 11:00 AM. Early check-in may be available depending on availability.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes. Private transfers from Kochi International Airport can be arranged on request. Please contact us at least 24 hours in advance.",
  },
  {
    question: "Are meals included in the stay?",
    answer:
      "Most packages include breakfast. Lunch and dinner featuring traditional Kerala cuisine can be added to your stay.",
  },
  {
    question: "What activities are available at the resort?",
    answer:
      "Guests can enjoy kayaking, sunset cruises, yoga sessions, spa treatments, and guided backwater tours.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation is available up to 72 hours before arrival. Later cancellations may incur a partial charge.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-black py-20 md:py-36"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-gray-500 mb-4">
            FAQ
          </p>

          <h2 className="text-white text-3xl md:text-6xl font-light tracking-[0.12em]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-lg">
            Everything you need to know before your stay.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="group border border-white/10 
                rounded-2xl md:rounded-3xl 
                bg-white/[0.03] backdrop-blur-xl
                transition-all duration-300
                hover:border-white/30 hover:bg-white/[0.05]"
              >

                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center 
                  text-left px-5 md:px-8 py-5 md:py-6"
                >
                  <span className="text-white text-base md:text-xl tracking-[0.08em]">
                    {faq.question}
                  </span>

                  <span className="text-gray-400 text-xl md:text-2xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer (NO HEIGHT ANIMATION) */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                    className="px-5 md:px-8 pb-5 md:pb-6 text-gray-400 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}