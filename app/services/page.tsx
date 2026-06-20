"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Headphones, BookOpen, Globe, Users, Plane } from "lucide-react";

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "UK",
    services: [
      {
        type: "Student Visa",
        desc: "The UK Student Visa (formerly Tier 4) allows you to study at a UK university. We help with CAS, financial proof, English proficiency, and full documentation.",
        features: ["University Shortlisting", "CAS Assistance", "SOP & LOR Guidance", "Financial Documents", "Interview Prep", "Post-Arrival Support"],
      },
      {
        type: "Visitor / Tourist Visa",
        desc: "Planning a trip to the UK? Our team ensures your Standard Visitor Visa application is complete, accurate, and submitted correctly the first time.",
        features: ["Application Form Filling", "Bank Statement Guidance", "Travel Itinerary", "Cover Letter", "Hotel & Flight Bookings", "Quick Processing"],
      },
      {
        type: "Work Permit Visa",
        desc: "The UK Skilled Worker Visa (formerly Tier 2) requires a job offer from a licensed sponsor. We help you navigate every step of the process.",
        features: ["Employer Liaison", "Sponsor Verification", "Points Calculation", "Salary Assessment", "Biometrics Guidance", "Visa Tracking"],
      },
    ],
  },
  {
    flag: "🇺🇸",
    name: "United States",
    code: "USA",
    services: [
      {
        type: "Student Visa (F-1)",
        desc: "Study in the USA on an F-1 student visa. We guide you through the DS-160 form, SEVIS fee, embassy interview and all required documents.",
        features: ["I-20 Assistance", "DS-160 Form", "SEVIS Fee Payment", "Embassy Interview Prep", "Financial Proof", "Visa Stamping"],
      },
      {
        type: "Visitor / Tourist Visa (B-2)",
        desc: "Visiting family, attending events or exploring the USA? We handle B-1/B-2 visa applications end-to-end.",
        features: ["DS-160 Filing", "Interview Coaching", "Travel Documents", "Proof of Ties", "Bank Statements", "Appointment Booking"],
      },
      {
        type: "Work Permit (H-1B / OPT)",
        desc: "Planning to work in the USA? We assist with H-1B petitions, OPT extensions and work authorization documents.",
        features: ["Petition Drafting", "LCA Filing", "USCIS Tracking", "OPT/CPT Guidance", "EAD Card Process", "Extension Support"],
      },
    ],
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    code: "CA",
    services: [
      {
        type: "Student Visa (Study Permit)",
        desc: "Canada's Study Permit allows you to study at a Designated Learning Institution (DLI). We handle IRCC submissions and all supporting documents.",
        features: ["DLI Verification", "IRCC Application", "SOP Writing", "Financial Proof", "Medical Exam Guidance", "Biometrics"],
      },
      {
        type: "Visitor / Tourist Visa",
        desc: "Visiting Canada? We assist with Temporary Resident Visa (TRV) applications for short stays, family visits and tourism.",
        features: ["TRV Application", "Invitation Letter", "Financial Docs", "Travel Insurance", "Cover Letter", "Embassy Guidance"],
      },
      {
        type: "Work Permit Visa",
        desc: "Canada offers open and employer-specific work permits. We assist with LMIA-based applications, ICT and post-graduation work permits.",
        features: ["LMIA Support", "Job Offer Letter", "PGWP Guidance", "Express Entry", "Provincial Nominee", "Work Permit Extension"],
      },
    ],
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    code: "AU",
    services: [
      {
        type: "Student Visa (Subclass 500)",
        desc: "Study in Australia on a Subclass 500 visa. We guide you through CoE, GTE statement, health insurance (OSHC) and ImmiAccount submission.",
        features: ["CoE Assistance", "GTE Statement", "OSHC Guidance", "ImmiAccount Setup", "Health Exam", "Biometrics"],
      },
      {
        type: "Visitor / Tourist Visa (Subclass 600)",
        desc: "Planning a holiday or family visit to Australia? We handle your Visitor Visa (Subclass 600) from start to finish.",
        features: ["Online Application", "Bank Statements", "Travel Itinerary", "Sponsor Letter", "Health Requirements", "Quick Lodgement"],
      },
      {
        type: "Work Permit (Subclass 482/186)",
        desc: "The Temporary Skill Shortage (TSS) visa and Employer Nomination Scheme visa let you live and work in Australia with employer sponsorship.",
        features: ["Skill Assessment", "Employer Sponsorship", "Labour Agreement", "Skills List Check", "PR Pathway", "Visa Extension"],
      },
    ],
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    code: "DE",
    services: [
      {
        type: "Student Visa",
        desc: "Germany offers tuition-free or low-cost education at public universities. We help with Blocked Account (Sperrkonto), university admission and visa interview.",
        features: ["University Application", "Blocked Account", "APS Certificate", "Health Insurance", "Visa Interview Prep", "Language Guidance"],
      },
      {
        type: "Visitor / Tourist Visa (Schengen)",
        desc: "A German Schengen visa gives you access to 26 European countries. We ensure your application is error-free.",
        features: ["Schengen Application", "Cover Letter", "Travel Insurance", "Hotel Bookings", "Bank Statements", "Quick Approval"],
      },
      {
        type: "Work Permit / Job Seeker Visa",
        desc: "Germany's Job Seeker Visa lets qualified professionals enter Germany to find a job. We also assist with the EU Blue Card application.",
        features: ["Qualification Recognition", "Job Seeker Visa", "EU Blue Card", "Employer Docs", "Language Requirements", "Residence Permit"],
      },
    ],
  },
];

const coachingCourses = [
  {
    icon: Headphones,
    title: "IELTS Coaching",
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600",
    tagline: "Academic & General Training",
    desc: "Our IELTS programme is designed to help you achieve your target band score through structured lessons, mock tests, and personalised feedback.",
    modules: [
      { name: "Listening", desc: "Practice with authentic audio clips. Learn to identify keywords, understand accents and manage time effectively." },
      { name: "Reading", desc: "Skim and scan techniques, comprehension exercises and timed passage practice for both Academic and General Training." },
      { name: "Writing", desc: "Task 1 (graphs/letters) and Task 2 (essays). Structured templates, grammar correction and evaluated writing feedback." },
      { name: "Speaking", desc: "1-to-1 mock interviews covering all three parts. Fluency, coherence, vocabulary and pronunciation coaching." },
    ],
    highlights: ["Band 7+ focus strategy", "Weekly mock tests", "Personalised score analysis", "Flexible batch timings"],
  },
  {
    icon: BookOpen,
    title: "PTE Coaching",
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600",
    tagline: "Computer-Based Exam Prep",
    desc: "Master the Pearson Test of English with our intensive coaching that covers every task type, AI scoring patterns and time management strategies.",
    modules: [
      { name: "Speaking & Writing", desc: "Read Aloud, Repeat Sentence, Describe Image, Retell Lecture, Essay and Summarize Spoken Text." },
      { name: "Reading", desc: "Multiple Choice, Re-order Paragraphs, Fill in the Blanks with speed-reading strategies." },
      { name: "Listening", desc: "Summarize Spoken Text, Highlight Correct Summary, Select Missing Word and Write from Dictation." },
      { name: "Mock Tests", desc: "Full-length timed computer-based mock exams with automated scoring and detailed review sessions." },
    ],
    highlights: ["AI scoring techniques", "Full mock test included", "Computer lab practice", "Fast-track 2-week intensive"],
  },
  {
    icon: Globe,
    title: "Duolingo English Test",
    color: "bg-green-500",
    lightColor: "bg-green-50 text-green-600",
    tagline: "Online Adaptive Test Prep",
    desc: "The Duolingo English Test is an adaptive online exam accepted by 4,000+ institutions. Our coaching covers every question type and adaptive strategy.",
    modules: [
      { name: "Adaptive Practice", desc: "The DET adapts to your level. We train you to handle increasing difficulty and maximise your Literacy and Production scores." },
      { name: "Writing Practice", desc: "Write About the Photo, Read Then Write and Interactive Writing tasks with expert feedback." },
      { name: "Speaking Tasks", desc: "Read Aloud, Speak About the Photo, Read Then Speak — with pronunciation and fluency coaching." },
      { name: "Full Mock Tests", desc: "Timed 1-hour practice tests that simulate the real DET environment and adaptive algorithm." },
    ],
    highlights: ["Accepted by 4,000+ universities", "Results in 2 days", "Online exam practice", "Score 120+ coaching"],
  },
  {
    icon: Users,
    title: "Spoken English",
    color: "bg-[#FF8C42]",
    lightColor: "bg-orange-50 text-[#FF8C42]",
    tagline: "Fluency & Confidence Building",
    desc: "Our Spoken English programme is perfect for professionals, students and anyone who wants to communicate with confidence in English.",
    modules: [
      { name: "Fluency Training", desc: "Daily speaking exercises, shadowing techniques and real-life conversation practice to eliminate hesitation." },
      { name: "Grammar & Vocabulary", desc: "Practical grammar rules, common idioms and vocabulary building exercises tailored to everyday communication." },
      { name: "Pronunciation", desc: "Phonetics training, accent neutralisation and intonation practice for clear and confident delivery." },
      { name: "Group Sessions", desc: "Regular group discussions, debate sessions and presentations to build confidence in public speaking." },
    ],
    highlights: ["Small batch sizes", "Daily practice sessions", "Certificate on completion", "Beginner to advanced"],
  },
];

export default function ServicesPage() {
  const [activeCountry, setActiveCountry] = useState(0);
  const [activeVisa, setActiveVisa] = useState(0);
  const [activeTab, setActiveTab] = useState<"visa" | "coaching">("visa");

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
            Everything We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            Visa consultancy for 5 countries · IELTS · PTE · Duolingo · Spoken English
          </motion.p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="bg-white sticky top-16 lg:top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab("visa")}
              className={`flex items-center gap-2 px-6 py-4 font-bold text-sm border-b-2 transition-all duration-200 ${
                activeTab === "visa"
                  ? "border-[#FF8C42] text-[#FF8C42]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              <Plane className="w-4 h-4" /> Visa Services
            </button>
            <button
              onClick={() => setActiveTab("coaching")}
              className={`flex items-center gap-2 px-6 py-4 font-bold text-sm border-b-2 transition-all duration-200 ${
                activeTab === "coaching"
                  ? "border-[#FF8C42] text-[#FF8C42]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Coaching Classes
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === "visa" ? (
          <motion.div
            key="visa"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Visa Services */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-2">Country-Wise</p>
                  <h2 className="text-4xl font-black text-gray-900">
                    Select a <span className="gradient-text">Country</span>
                  </h2>
                </div>

                {/* Country tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {countries.map((c, i) => (
                    <button
                      key={c.code}
                      onClick={() => { setActiveCountry(i); setActiveVisa(0); }}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all duration-200 ${
                        activeCountry === i
                          ? "bg-[#FF8C42] text-white shadow-lg shadow-orange-200"
                          : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#FF8C42]"
                      }`}
                    >
                      <span className="text-xl">{c.flag}</span>
                      {c.name}
                    </button>
                  ))}
                </div>

                {/* Visa type cards */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCountry}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                      {countries[activeCountry].services.map((s, i) => (
                        <button
                          key={s.type}
                          onClick={() => setActiveVisa(i)}
                          className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                            activeVisa === i
                              ? "border-[#FF8C42] bg-orange-50"
                              : "border-gray-100 bg-white hover:border-orange-200"
                          }`}
                        >
                          <div className="text-2xl mb-2">{countries[activeCountry].flag}</div>
                          <div className="font-bold text-gray-900 text-sm">{s.type}</div>
                          {activeVisa === i && (
                            <div className="w-6 h-0.5 bg-[#FF8C42] mt-2" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Detail panel */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeVisa}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="bg-gray-50 rounded-3xl p-8 lg:p-12"
                      >
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-4xl">{countries[activeCountry].flag}</span>
                              <div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                  {countries[activeCountry].name}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900">
                                  {countries[activeCountry].services[activeVisa].type}
                                </h3>
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {countries[activeCountry].services[activeVisa].desc}
                            </p>
                            <a
                              href="/contact"
                              className="inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e07530] text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm hover:shadow-lg hover:shadow-orange-200"
                            >
                              Get Free Consultation →
                            </a>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                              What We Help With
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {countries[activeCountry].services[activeVisa].features.map((f) => (
                                <div key={f} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
                                  <Check className="w-4 h-4 text-[#FF8C42] shrink-0" />
                                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="coaching"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Coaching Classes */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-widest mb-2">Language Excellence</p>
                  <h2 className="text-4xl font-black text-gray-900">
                    Our <span className="gradient-text">Coaching Programmes</span>
                  </h2>
                </div>

                <div className="space-y-8">
                  {coachingCourses.map((course, i) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gray-50 rounded-3xl p-8 lg:p-12"
                    >
                      <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                          <div className={`inline-flex items-center gap-2 ${course.lightColor} rounded-full px-4 py-2 mb-4`}>
                            <course.icon className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">{course.tagline}</span>
                          </div>
                          <h3 className="text-3xl font-black text-gray-900 mb-3">{course.title}</h3>
                          <p className="text-gray-500 leading-relaxed mb-6">{course.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {course.highlights.map((h) => (
                              <span key={h} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                                <Check className="w-3 h-3 text-[#FF8C42]" />
                                {h}
                              </span>
                            ))}
                          </div>
                          <a
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e07530] text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-orange-200"
                          >
                            Enrol Now →
                          </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {course.modules.map((m) => (
                            <div key={m.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                              <div className={`w-8 h-8 rounded-lg ${course.lightColor} flex items-center justify-center mb-3`}>
                                <course.icon className="w-4 h-4" />
                              </div>
                              <h4 className="font-bold text-gray-900 text-sm mb-1">{m.name}</h4>
                              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
