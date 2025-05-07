import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import CauseOfSinusSection from "./components/CauseOfSinusSection";
import HowViemisWorks from "./components/HowViemisWorks";
import WhyViemis from "./components/WhyViemis";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import HowToUse from "./components/HowToUse"; // Corrected import statement

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <CauseOfSinusSection />
      <HowViemisWorks />
      <WhyViemis />
      <HowToUse /> {/* Corrected component here */}
      <Testimonials />
      <PricingSection />
    </>
  );
}

export default App;
