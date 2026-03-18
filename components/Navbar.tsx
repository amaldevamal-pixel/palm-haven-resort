"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Dining", href: "/dining" },
    { label: "Packages", href: "/packages" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl md:text-3xl tracking-[0.18em] font-light"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          PALM HAVEN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6
          backdrop-blur-2xl 
          bg-white/[0.05] 
          px-6 py-3.5 
          rounded-full 
          border border-white/10
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-white/70 hover:text-white 
              transition duration-300 
              text-[13px] tracking-[0.12em] uppercase

              after:absolute after:-bottom-1 after:left-0 
              after:w-0 after:h-[1px] after:bg-white 
              hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link href="/rooms">
            <button className="ml-4 px-6 py-2.5 
              rounded-full text-[12px] tracking-[0.12em] uppercase
              bg-white text-black 
              hover:bg-gray-200 
              transition-all duration-300">
              Book Your Stay
            </button>
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ✕
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center gap-8 text-lg">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/75 hover:text-white 
                    tracking-[0.12em] uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <Link href="/rooms" onClick={() => setOpen(false)}>
                <button className="mt-6 px-8 py-3 rounded-full 
                  bg-white text-black 
                  text-sm tracking-[0.12em] uppercase
                  hover:scale-105 transition">
                  Book Your Stay
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}