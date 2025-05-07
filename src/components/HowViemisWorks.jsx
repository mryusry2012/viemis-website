import React from "react";
import { Atom, Droplets, Zap, Wind, ShieldCheck, Thermometer } from "lucide-react";

const cardStyle =
  "bg-white/80 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-orange-600 transition duration-300 flex flex-col items-start text-left text-sm sm:text-base text-gray-800 w-full max-w-xs cursor-pointer";

function HowViemisWorks() {
  return (
    <section className="bg-orange-50 py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700">
            Bagaimana Viemis Bertindak
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Dirumus dengan teknologi nano bersama 10 herba terpilih untuk bantu mengecutkan turbinate secara semula jadi.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
          {/* Left Cards */}
          <div className="flex flex-col gap-6">
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="100">
              <Atom className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">Teknologi Nano</h3>
              <p>Molekul halus serap 3x lebih pantas untuk kelegaan segera.</p>
            </div>
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="200">
              <Droplets className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">10 Herba Terpilih</h3>
              <p>Ramuan seperti saffron & halia bantu redakan keradangan.</p>
            </div>
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="300">
              <Thermometer className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">Penyerapan Pantas</h3>
              <p>Ringan dan cepat menyerap tanpa rasa melekit.</p>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center items-center w-full md:w-auto">
            <img
              src="/images/viemis-box-only-small3.png"
              alt="Ilustrasi Viemis"
              className="w-40 md:w-52 drop-shadow-xl z-10"
              data-aos="zoom-in"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="400">
              <Zap className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">Mengecutkan Turbinate</h3>
              <p>Membantu buka semula laluan pernafasan dengan lebih lancar.</p>
            </div>
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="500">
              <Wind className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">Pernafasan Lega</h3>
              <p>Tidur lebih lena dan rasa lebih segar sepanjang hari.</p>
            </div>
            <div className={cardStyle} data-aos="fade-up" data-aos-delay="600">
              <ShieldCheck className="text-orange-600 w-6 h-6 mb-2" />
              <h3 className="font-semibold text-orange-700 mb-1">Dipercayai Ramai</h3>
              <p>Ribuan pengguna harian mendapat kelegaan secara selamat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowViemisWorks;
