import React from "react";
import { Leaf, CheckCircle, FlaskConical, HeartPulse, Globe2, Star } from "lucide-react";

function WhyViemis() {
  return (
    <section className="bg-[#fef3c7] py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700">
            Kenapa Pilih Viemis?
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Diformulasi khas untuk bantu kelegaan resdung dengan gabungan herba tradisional & sains moden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
            <Leaf className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">100% Bahan Semula Jadi</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Herba terpilih tanpa bahan kimia agresif. Selamat digunakan setiap hari.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
            <FlaskConical className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">Sains & Herba Tradisional</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Teknologi nano bantu penyerapan pantas & ramuan terbukti secara tradisi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
            <HeartPulse className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">Disahkan Selamat</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Bebas alkohol & paraben. Sesuai untuk kegunaan jangka panjang.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
            <Globe2 className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">Buatan Malaysia</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Diformulasi & diuji oleh pakar tempatan. Produk lokal yang dipercayai.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="500">
            <CheckCircle className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">Mudah Digunakan</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Cuma sembur ke kawasan sasaran — tidak melekit & cepat meresap.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="600">
            <Star className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-700 mb-1">Ramai Pengguna Berpuas Hati</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ribuan maklum balas positif — ramai alami kelegaan dalam beberapa minit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyViemis;
