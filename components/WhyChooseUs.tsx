"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award, HeartHandshake, Shield } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "50,000+ Satisfied Clients",
    desc: "A proven track record of success spanning over a decade of dedicated service.",
  },
  {
    icon: Award,
    title: "Expert Visa Counsellors",
    desc: "In-depth knowledge of immigration laws and country-specific visa requirements.",
  },
  {
    icon: BookIcon,
    title: "Personalised Coaching",
    desc: "Tailored coaching for IELTS, PTE, Duolingo & Spoken English — based on your needs.",
  },
  {
    icon: TrendingUp,
    title: "High Visa Approval Rate",
    desc: "Our thorough documentation process ensures maximum chances of visa approval.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    desc: "From the first consultation to departure — we're with you at every step.",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    desc: "No hidden fees. Clear timelines. Honest guidance from day one.",
  },
];

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">Our Advantage</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose <span className="gradient-text">Excellence?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We combine expert knowledge, personalised support, and a genuine commitment
              to your success to deliver outstanding results — every single time.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/team22/600/350"
                alt="Our team"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-bold text-gray-900 text-sm">Verified Visa Experts Since 2014</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white border-2 border-gray-100 hover:border-[#FF8C42]/40 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-[#FF8C42] flex items-center justify-center mb-3 transition-colors duration-300">
                  <r.icon className="w-5 h-5 text-[#FF8C42] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{r.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
