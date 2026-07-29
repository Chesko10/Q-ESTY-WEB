import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <SectionDivider
          fromColor="var(--color-cream)"
          toColor="var(--color-brown-dark)"
        />
        <Stats />
        <SectionDivider
          fromColor="var(--color-brown-dark)"
          toColor="var(--color-cream-dark)"
        />
        <Problem />
        <HowItWorks />
        <Features />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SectionDivider
        fromColor="var(--color-cream-dark)"
        toColor="var(--color-brown-dark)"
      />
      <Footer />
    </div>
  );
}
