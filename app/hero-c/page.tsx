import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroC from "@/components/HeroC";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import ForHotels from "@/components/ForHotels";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Página temporal para comparar variantes del hero. Borrar al elegir una.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function HeroCPreview() {
  return (
    <div className="flex flex-1 flex-col">
      <Header tone="dark" />
      <main className="flex flex-1 flex-col">
        <HeroC />
        <HowItWorks />
        <Features />
        <Stats />
        <ForHotels />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
