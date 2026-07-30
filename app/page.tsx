import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HighlightBar from "@/components/HighlightBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ExampleChat from "@/components/ExampleChat";
import ForWhom from "@/components/ForWhom";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <HighlightBar />
        <HowItWorks />
        <Features />
        <ExampleChat />
        <ForWhom />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
