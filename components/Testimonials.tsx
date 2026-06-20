"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Harvi Nayak",
    service: "IELTS Coaching",
    avatar: "HN",
    color: "bg-blue-500",
    text: "I am having a great experience in this IELTS coaching class. The teachers are very supportive and are always willing to solve doubts. They provide personalised feedback and regular tests which improved my confidence. Recommended for IELTS coaching.",
  },
  {
    name: "Udaysinh Zala",
    service: "Spoken English",
    avatar: "UZ",
    color: "bg-green-500",
    text: "Excellence education Centre is a very good spoken English center. The teachers are friendly and supportive. They explain grammar and vocabulary in a simple way. I feel more confident while speaking English after joining this center. The environment is positive and motivating.",
  },
  {
    name: "Mahrshi Thakar",
    service: "PTE Coaching",
    avatar: "MT",
    color: "bg-purple-500",
    text: "I am pursuing PTE at Excellence Education Visa and my brother has also done PTE from here and now he is in Australia. All facilities are well experienced and guiding personally so I'm fully satisfied.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF8C42]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">Student Stories</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#FF8C42] fill-[#FF8C42]" />
            ))}
            <span className="text-gray-400 text-sm ml-2 font-medium">5.0 rating on Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-gray-900 border border-gray-800 hover:border-[#FF8C42]/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/20"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#FF8C42] mb-4 opacity-60" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#FF8C42] fill-[#FF8C42]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{r.name}</div>
                  <div className="text-[#FF8C42] text-xs font-medium">{r.service}</div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C42] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
