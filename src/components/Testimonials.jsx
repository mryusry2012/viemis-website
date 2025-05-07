import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    { name: "Aisyah", location: "Kuala Lumpur", text: "Lepas guna Viemis, saya boleh tidur lebih lena & hidung tak tersumbat lagi." },
    { name: "Zul", location: "Shah Alam", text: "Gatal hidung & bersin setiap pagi dah berkurang banyak. Berkesan untuk saya." },
    { name: "Siti", location: "Johor Bahru", text: "Anak saya pun suka bau dia. Tak kuat & lembut je, senang sapu." },
    { name: "Amir", location: "Seremban", text: "Spray ni cepat sangat menyerap. Memang rasa ringan kat muka lepas guna." },
    { name: "Farah", location: "Ipoh", text: "Saya dah cuba banyak produk, tapi Viemis paling selesa setakat ni." },
    { name: "Hakim", location: "Kota Bharu", text: "Sakit kepala & rasa berat kat pipi berkurang lepas seminggu guna." },
    { name: "Nora", location: "Melaka", text: "Saya guna waktu pagi & malam. Memang buat saya rasa segar je." },
    { name: "Faizal", location: "Kuantan", text: "Spray ni tak pedih langsung, bau pun best. Recommended!" },
    { name: "Syafiqah", location: "Alor Setar", text: "Pek dia kecil & mudah bawa ke mana-mana. Memang saya pakai harian." },
  ];

  return (
    <section className="bg-orange-50 py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700">
            Apa Kata Pengguna?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-orange-100 transition duration-300 hover:shadow-lg hover:shadow-orange-600/50 hover:border-orange-600"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-once="true"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">“{item.text}”</p>
              <div className="text-sm text-orange-600 font-semibold">{item.name} — {item.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
