"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const services = [
  "Student Visa – UK",
  "Student Visa – USA",
  "Student Visa – Canada",
  "Student Visa – Australia",
  "Student Visa – Germany",
  "Visitor Visa",
  "Work Permit Visa",
  "IELTS Coaching",
  "PTE Coaching",
  "Duolingo Test Prep",
  "Spoken English Classes",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Book a Free <span className="gradient-text">Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            Fill out the form or call us directly. Our experts will reach you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Contact Details</h2>
                <p className="text-gray-500">We&apos;re available Monday to Saturday, 9 AM – 6 PM IST.</p>
              </div>

              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: "City Mall-2, S.F 14-26, Navjivan Mill Compound, Memon Market, Kalol, Gujarat 382721",
                  link: null,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "097120 86301",
                  link: "tel:09712086301",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "excvisa@gmail.com",
                  link: "mailto:excvisa@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Mon – Sat: 9:00 AM – 6:00 PM",
                  link: null,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#FF8C42]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.title}</div>
                    {item.link ? (
                      <a href={item.link} className="text-gray-800 font-semibold hover:text-[#FF8C42] transition-colors text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium text-sm leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919712086301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-green-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 bg-green-50 rounded-3xl"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 bg-[#FF8C42] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e07530] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 lg:p-10 space-y-5">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-bold text-gray-700 mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF8C42] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF8C42] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-bold text-gray-700 mb-1.5 block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF8C42] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 mb-1.5 block">Service Interested In *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:border-[#FF8C42] transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF8C42] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF8C42] hover:bg-[#e07530] disabled:opacity-70 text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. Your details will never be shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="bg-gray-100 px-6 py-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF8C42]" />
              <span className="font-bold text-sm text-gray-800">
                City Mall-2, Kalol, Gujarat 382721
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6877700808!2d72.50157!3d23.2408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a6b5555c57d%3A0x1!2sKalol%2C+Gujarat+382721!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Excellence Education Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
