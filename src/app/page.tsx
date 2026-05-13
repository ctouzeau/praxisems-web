import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhyPraxis from "@/components/WhyPraxis";
import Features from "@/components/Features";
import Outcomes from "@/components/Outcomes";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import TrustBand from "@/components/TrustBand";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhyPraxis />
        <Features />
        <Outcomes />
        <Screenshots />
        <HowItWorks />
        <TrustBand />
        <Comparison />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
