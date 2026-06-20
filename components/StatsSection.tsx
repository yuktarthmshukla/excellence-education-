"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Satisfied Clients", emoji: "🏆" },
  { value: 6, suffix: "+", label: "Countries We Cover", emoji: "🌍" },
  { value: 4, suffix: "+", label: "Courses Offered", emoji: "📚" },
  { value: 10, suffix: "+", label: "Years of Expert Guidance", emoji: "⭐" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 0)}K` : count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF8C42]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-2">Our Impact</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-gray-900 border border-gray-800 hover:border-[#FF8C42]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20"
            >
              <div className="text-4xl mb-3">{s.emoji}</div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C42] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
