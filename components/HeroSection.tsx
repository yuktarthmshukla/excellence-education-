"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#FF8C42]/8 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#FF8C42]/6 blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div>
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#FF8C42] fill-[#FF8C42]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Trusted by <span className="text-[#FF8C42]">50,000+</span> Students & Families
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
            >
              Your{" "}
              <span className="relative">
                <span className="gradient-text">Dream</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 100 2 198 6"
                    stroke="#FF8C42"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Destination
              <br />
              <span className="text-gray-400">Starts Here</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-500 leading-relaxed max-w-xl mb-8"
            >
              Expert visa consultancy and English coaching services for UK, USA, Canada,
              Australia & Germany. IELTS, PTE, Duolingo and Spoken English — we guide you
              every step of the way.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e07530] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-1"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#FF8C42] text-gray-700 hover:text-[#FF8C42] font-bold text-base px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="w-4 h-4 fill-current" />
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/education1/700/500"
                alt="Students studying abroad"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">🎓</div>
              <div>
                <div className="text-2xl font-black text-gray-900">50K+</div>
                <div className="text-xs text-gray-500 font-medium">Students Placed</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">🌍</div>
              <div>
                <div className="text-2xl font-black text-gray-900">6+</div>
                <div className="text-xs text-gray-500 font-medium">Countries Covered</div>
              </div>
            </motion.div>

            {/* Orange accent circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border-2 border-dashed border-orange-200 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gray-400" />
      </motion.div>
    </section>
  );
}
