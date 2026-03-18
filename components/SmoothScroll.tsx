"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoother
      lerp: 0.08,    // 👈 KEY for premium feel
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔥 FORCE scroll control
    lenis.on("scroll", () => {});

    return () => lenis.destroy();
  }, []);

  return null;
}