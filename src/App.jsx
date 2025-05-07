import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import CauseOfSinusSection from "./components/CauseOfSinusSection";
import HowViemisWorks from "./components/HowViemisWorks";
import WhyViemis from "./components/WhyViemis";
import HowToUse from "./components/HowToUse"; 
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Fixed top navbar */}
      <Navbar />

      {/* Main content: remove top padding so Hero sits right under navbar */}
      <main>
        <Hero id="utama" />
        <ProblemSection id="gejala" />
        <CauseOfSinusSection id="rahsia" />
        <HowViemisWorks id="pakej" />
        <WhyViemis id="cara-guna" />
        <HowToUse id="testimoni" />
        <Testimonials id="faq" />
        <PricingSection id="hubungi-kami" />
      </main>
    </>
  );
}
