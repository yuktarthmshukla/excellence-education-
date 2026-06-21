import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Excellence Education and Visa Consultancy | Kalol, Gujarat",
  description:
    "Excellence Education and Visa Consultancy — trusted by 50,000+ students. Expert visa services for UK, USA, Canada, Australia & Germany. IELTS, PTE, Duolingo & Spoken English coaching in Kalol, Gujarat.",
  keywords:
    "visa consultancy, IELTS coaching, PTE coaching, student visa, Kalol, Gujarat, UK visa, USA visa, Canada visa, Australia visa",
  openGraph: {
    title: "Excellence Education and Visa Consultancy",
    description: "Trusted by 50,000+ students. Expert visa & coaching services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(oswald.variable, poppins.variable)}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
