"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Lightbulb, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "We exist to make international education accessible to every aspiring student, regardless of their background.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Heart,
    title: "Student-First",
    desc: "Every decision we make centres on the well-being and success of the students and families we serve.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    desc: "Our counsellors bring years of hands-on experience with visa regulations and language examinations.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "We understand the nuances of each destination country and tailor our advice accordingly.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    desc: "We hold ourselves to the highest standards of accuracy, transparency, and professionalism.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Users,
    title: "Community Trust",
    desc: "Built on 10+ years of word-of-mouth referrals from 50,000+ satisfied clients in Gujarat.",
    color: "text-[#FF8C42] bg-orange-50",
  },
];

const team = [
  { name: "Mitesh Shukla", role: "Founder", img: "/images/founder-mitesh.jpg" },
  { name: "Sonal Shukla", role: "Classes Head", img: "https://picsum.photos/seed/person2/300/300" },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#FF8C42]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF8C42]/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our Story of <span className="gradient-text">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            Over a decade of transforming dreams into destinations â€” one student at a time.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Section>
              <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                From a Small Office to <span className="gradient-text">50,000+ Lives</span> Changed
              </h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  Excellence Education and Visa Consultancy was founded in Kalol, Gujarat with a single
                  mission: to give every ambitious student in our community the guidance they deserve to
                  pursue their dream of studying or working abroad.
                </p>
                <p>
                  Over 10 years, what started as a small visa consultancy grew into a comprehensive
                  education hub â€” offering not just visa services for UK, USA, Canada, Australia and
                  Germany, but world-class coaching for IELTS, PTE, Duolingo and Spoken English.
                </p>
                <p>
                  Today, our alumni are thriving in universities and workplaces across five continents.
                  We&apos;re proud to have a near-perfect visa approval rate and a 5-star reputation built
                  entirely on word-of-mouth referrals from satisfied families.
                </p>
              </div>
            </Section>

            <Section className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/about1/350/250" alt="Office" className="rounded-2xl w-full h-48 object-cover" />
                <img src="https://picsum.photos/seed/about2/350/250" alt="Coaching" className="rounded-2xl w-full h-48 object-cover mt-8" />
                <img src="https://picsum.photos/seed/about3/350/250" alt="Students" className="rounded-2xl w-full h-48 object-cover -mt-4" />
                <img src="https://picsum.photos/seed/about4/350/250" alt="Visa" className="rounded-2xl w-full h-48 object-cover mt-4" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-orange-100 shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="text-3xl font-black text-[#FF8C42]">10+</div>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Years of</div>
                  <div className="text-gray-500">Excellence</div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-14">
            <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              These six pillars guide everything we do â€” from visa advice to classroom coaching.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border-2 border-gray-100 hover:border-[#FF8C42]/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-14">
            <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-3">The Experts</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Dedicated professionals who bring passion, expertise and genuine care to every client interaction.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-[#FF8C42] text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

