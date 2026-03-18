"use client";

export default function GalleryHero() {
  return (
    <section
      className="bg-black text-white py-20 md:py-32 text-center"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className="max-w-3xl mx-auto px-6">

        <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-4">
          GALLERY
        </p>

        <h1 className="text-3xl md:text-6xl font-light tracking-[0.12em] mb-6">
          Moments at Palm Haven
        </h1>

        <p className="text-gray-400 text-sm md:text-lg">
          A glimpse into our spaces, experiences, and the beauty of Kerala’s backwaters.
        </p>

      </div>
    </section>
  );
}