"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden px-8 sm:px-14 py-16 text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C42]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8C42]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10">
            <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Your Journey to a <span className="gradient-text">Better Future</span>
              <br />Starts With One Call
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Book a free 30-minute consultation with our expert counsellors and take
              the first step toward your international education or visa dream.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e07530] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:09712086301"
                className="group inline-flex items-center gap-2 border-2 border-gray-600 hover:border-[#FF8C42] text-white hover:text-[#FF8C42] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                097120 86301
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
