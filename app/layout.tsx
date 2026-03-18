import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "../components/SmoothScroll";

import "./globals.css";

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "Palm Haven Resort",
  description:
    "Luxury backwater resort experience in Kerala. Designed & developed by Amaldev.",
  authors: [{ name: "Amaldev S" }],
  creator: "Amaldev S",
  metadataBase: new URL("https://palm-haven-resort.vercel.app/"),
};

/* ================= LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">

        {/* ✅ Smooth Scroll injected here */}
        <SmoothScroll />

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}