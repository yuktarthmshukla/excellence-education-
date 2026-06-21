import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const services = [
  { label: "Student Visa", href: "/services" },
  { label: "Visitor Visa", href: "/services" },
  { label: "Work Permit", href: "/services" },
  { label: "IELTS Coaching", href: "/services" },
  { label: "PTE Coaching", href: "/services" },
  { label: "Spoken English", href: "/services" },
];

const countries = ["🇬🇧 United Kingdom", "🇺🇸 United States", "🇨🇦 Canada", "🇦🇺 Australia", "🇩🇪 Germany"];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF8C42] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-black text-base leading-tight">Excellence</div>
                <div className="text-[#FF8C42] text-xs font-semibold leading-tight">Education & Visa</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your trusted partner for visa consultancy and English language coaching. Serving 50,000+ students since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF8C42] flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/miteshshukla21/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF8C42] flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF8C42] flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-[#FF8C42] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF8C42] inline-block" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Countries We Cover</h3>
            <ul className="space-y-2.5">
              {countries.map((c) => (
                <li key={c} className="text-sm text-gray-400">{c}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#FF8C42] shrink-0 mt-0.5" />
                <span>City Mall-2, S.F 14-26, Navjivan Mill Compound, Memon Market, Kalol, Gujarat 382721</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#FF8C42] shrink-0" />
                <a href="tel:09712086301" className="hover:text-[#FF8C42] transition-colors">097120 86301</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#FF8C42] shrink-0" />
                <a href="mailto:excvisa@gmail.com" className="hover:text-[#FF8C42] transition-colors">excvisa@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Excellence Education and Visa Consultancy. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#FF8C42] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#FF8C42] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
