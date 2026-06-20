import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesOverview from "@/components/ServicesOverview";
import CountriesSection from "@/components/CountriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Excellence Education and Visa Consultancy | Kalol, Gujarat",
  description:
    "Trusted by 50,000+ students. Expert visa consultancy for UK, USA, Canada, Australia & Germany plus IELTS, PTE, Duolingo and Spoken English coaching in Kalol, Gujarat.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <CountriesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
