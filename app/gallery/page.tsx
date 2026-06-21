"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  // Real institute images
  { id: 1,  src: "/images/gallery-classroom-1.jpg", thumb: "/images/gallery-classroom-1.jpg", alt: "Students writing in classroom", category: "Institute", w: 2, h: 2 },
  { id: 2,  src: "/images/gallery-students-2.jpg",  thumb: "/images/gallery-students-2.jpg",  alt: "Female students attending class", category: "Institute", w: 1, h: 2 },
  { id: 3,  src: "/images/gallery-batch.jpg",        thumb: "/images/gallery-batch.jpg",        alt: "Instructor teaching a large batch", category: "Coaching", w: 2, h: 1 },
  { id: 4,  src: "/images/gallery-consulting.jpg",   thumb: "/images/gallery-consulting.jpg",   alt: "Mitesh Shukla consulting at his desk", category: "Institute", w: 1, h: 1 },
  { id: 5,  src: "/images/gallery-exterior.jpg",     thumb: "/images/gallery-exterior.jpg",     alt: "Excellence Education institute exterior", category: "Institute", w: 2, h: 1 },
  // Default stock images
  { id: 6,  src: "https://picsum.photos/seed/gal2/600/800",  thumb: "https://picsum.photos/seed/gal2/300/400",  alt: "UK university campus", category: "UK", w: 1, h: 2 },
  { id: 7,  src: "https://picsum.photos/seed/gal3/800/500",  thumb: "https://picsum.photos/seed/gal3/400/250",  alt: "IELTS preparation", category: "IELTS", w: 2, h: 1 },
  { id: 8,  src: "https://picsum.photos/seed/gal4/600/600",  thumb: "https://picsum.photos/seed/gal4/300/300",  alt: "Visa documents", category: "Visa", w: 1, h: 1 },
  { id: 9,  src: "https://picsum.photos/seed/gal5/800/600",  thumb: "https://picsum.photos/seed/gal5/400/300",  alt: "Australia skyline", category: "Australia", w: 2, h: 1 },
  { id: 10, src: "https://picsum.photos/seed/gal7/600/800",  thumb: "https://picsum.photos/seed/gal7/300/400",  alt: "Canada mountains", category: "Canada", w: 1, h: 2 },
  { id: 11, src: "https://picsum.photos/seed/gal10/800/500", thumb: "https://picsum.photos/seed/gal10/400/250", alt: "USA campus", category: "USA", w: 2, h: 1 },
  { id: 12, src: "https://picsum.photos/seed/gal12/600/800", thumb: "https://picsum.photos/seed/gal12/300/400", alt: "Germany university", category: "Germany", w: 1, h: 2 },
];

const categories = ["All", "Institute", "Coaching", "Visa", "UK", "USA", "Canada", "Australia", "Germany", "IELTS"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const prev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((img) => img.id === lightbox);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length].id);
  };
  const next = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((img) => img.id === lightbox);
    setLightbox(filtered[(idx + 1) % filtered.length].id);
  };

  const lightboxImg = lightbox ? images.find((img) => img.id === lightbox) : null;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#FF8C42]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Our Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Moments of <span className="gradient-text">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            A visual journey through our classrooms, student successes and destinations worldwide.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#FF8C42] text-white shadow-lg shadow-orange-200"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-[#FF8C42]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setLightbox(img.id)}
                >
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ height: img.h === 2 ? "320px" : "200px" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-xs font-bold uppercase tracking-wide">{img.category}</span>
                    <p className="text-gray-200 text-sm">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#FF8C42] transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors bg-black/30 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors bg-black/30 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {lightboxImg.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
