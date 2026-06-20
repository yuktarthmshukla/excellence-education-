"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plane, BookOpen, FileCheck, Users, Globe, Headphones } from "lucide-react";

const visaServices = [
  { icon: "🇬🇧", title: "UK Visa", desc: "Student, Visitor & Work Permit visas for the United Kingdom." },
  { icon: "🇺🇸", title: "USA Visa", desc: "F1, B1/B2 and work authorization visas for the United States." },
  { icon: "🇨🇦", title: "Canada Visa", desc: "Study permits, visitor & work visas for Canada." },
  { icon: "🇦🇺", title: "Australia Visa", desc: "Student, tourist & skilled worker visas for Australia." },
  { icon: "🇩🇪", title: "Germany Visa", desc: "Student & work visas for Germany — gateway to Europe." },
];

const coachingServices = [
  {
    icon: Headphones,
    title: "IELTS Coaching",
    desc: "All 4 modules — Listening, Reading, Writing & Speaking. Focused on band score improvement.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "PTE Coaching",
    desc: "Computer-based exam prep with full mock tests and personalised feedback.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Globe,
    title: "Duolingo Test Prep",
    desc: "Adaptive learning techniques for the Duolingo English Test with online practice sessions.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Spoken English",
    desc: "Fluency, confidence, grammar & vocabulary. Regular speaking practice sessions.",
    color: "bg-orange-50 text-[#FF8C42]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Comprehensive <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From visa applications to language coaching — we&apos;re your one-stop destination for international education.
          </p>
        </motion.div>

        {/* Visa Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#FF8C42]" />
              <h3 className="text-2xl font-black text-gray-900">Visa Services</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {visaServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group relative bg-white border-2 border-gray-100 hover:border-[#FF8C42] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#FF8C42] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF8C42] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coaching Classes */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#FF8C42]" />
              <h3 className="text-2xl font-black text-gray-900">Coaching Classes</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coachingServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i + 5}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group bg-white border-2 border-gray-100 hover:border-[#FF8C42] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#FF8C42] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#FF8C42] text-[#FF8C42] hover:bg-[#FF8C42] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
