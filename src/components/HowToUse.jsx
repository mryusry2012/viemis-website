import React, { useEffect } from "react";
import { SprayCan, Hand, Wind } from "lucide-react";
import { motion } from "framer-motion";

function HowToUseSection() {
  const steps = [
    {
      number: "Langkah 1",
      title: "Sembur di tapak tangan",
      icon: <SprayCan className="text-orange-600 w-16 h-16 mb-4" />, 
      description: "Semburkan Viemis di tapak tangan yang bersih untuk kesan terbaik."
    },
    {
      number: "Langkah 2",
      title: "Sapu di kawasan T-Sinus",
      icon: <Hand className="text-orange-600 w-16 h-16 mb-4" />, 
      description: "Sapu perlahan di hidung, pipi dan atas kening untuk kelegaan maksima."
    },
    {
      number: "Langkah 3",
      title: "Sedut aromaViemis untuk kelegaan",
      icon: <Wind className="text-orange-600 w-16 h-16 mb-4" />, 
      description: "Tarik nafas dalam-dalam untuk menikmati aroma segar Viemis."
    }
  ];

  // Kabus atau Angin Halus di Latar Belakang
  useEffect(() => {
    const container = document.querySelector("#particle-container");
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute bg-white opacity-30 rounded-full";
      particle.style.width = `${Math.random() * 10 + 4}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particle.style.animationTimingFunction = "ease-in-out";
      particle.style.filter = "blur(6px)";
      container.appendChild(particle);
    }
  }, []);

  return (
    <section className="py-20 px-6 sm:px-10 md:px-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 opacity-40 animate-pulse" />
      <div id="particle-container" className="absolute inset-0 pointer-events-none overflow-hidden z-0" />
      {/* Progress Indicator */}
      <div className="flex justify-center gap-4 mb-12 relative z-10">
        {steps.map((_, index) => (
          <div key={index} className="w-4 h-4 bg-orange-500 rounded-full opacity-80 hover:opacity-100 transition-all duration-300" />
        ))}
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-orange-700 mb-16 tracking-wide drop-shadow-lg">Cara Guna Viemis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white rounded-3xl shadow-2xl p-8 text-center relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-h-[380px] w-full max-w-[350px] mx-auto"
              whileHover={{ rotateY: 10, scale: 1.08 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-orange-600 text-white py-2 px-8 rounded-full text-sm font-bold mb-6 tracking-widest shadow-lg w-fit text-center">{step.number}</div>
              {step.icon}
              <h3 className="text-2xl font-semibold text-orange-700 mb-4 drop-shadow-md">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Call to Action Button */}
        <a href="#pricing" className="mt-16 inline-block bg-orange-600 text-white py-3 px-12 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-bounce">Dapatkan Sekarang</a>
      </div>
    </section>
  );
}

export default HowToUseSection;
