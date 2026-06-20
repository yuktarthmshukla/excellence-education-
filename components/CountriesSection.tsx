"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "UK",
    desc: "Top universities like Oxford, Cambridge, and Imperial College. Gateway to world-class education.",
    bg: "from-blue-50 to-red-50",
    border: "border-blue-200",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    code: "USA",
    desc: "Home to MIT, Harvard, Stanford and hundreds of leading universities and colleges.",
    bg: "from-blue-50 to-blue-50",
    border: "border-blue-200",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    code: "CA",
    desc: "Welcoming immigration policies, world-class education and post-study work opportunities.",
    bg: "from-red-50 to-orange-50",
    border: "border-red-200",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    code: "AU",
    desc: "Strong economy, multicultural society and excellent universities across all states.",
    bg: "from-yellow-50 to-green-50",
    border: "border-yellow-200",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    code: "DE",
    desc: "Low-cost or free public university tuition, engineering excellence and EU work rights.",
    bg: "from-yellow-50 to-gray-50",
    border: "border-yellow-200",
  },
];

export default function CountriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">Global Reach</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Countries We <span className="gradient-text">Cover</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Expert visa guidance for five of the world&apos;s most popular study-abroad destinations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {countries.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative bg-gradient-to-br ${c.bg} border-2 ${c.border} hover:border-[#FF8C42] rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-100 cursor-pointer`}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {c.flag}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center text-[#FF8C42] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Visas →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
