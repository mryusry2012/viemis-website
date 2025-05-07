import {
    ShieldAlert,
    ThermometerSnowflake,
    Droplets,
    Wind,
    Frown,
  } from "lucide-react";
  
  function CauseOfSinusSection() {
    return (
      <section className="relative bg-section-1 py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
        {/* ✅ Isi section tetap di atas layer */}
        <div
          className="relative z-10 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700 mb-4">
              Punca Sebenar Masalah Resdung
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Tahukah anda bahawa masalah resdung sering berpunca dari struktur kecil dalam hidung yang jarang kita sedari — <strong>turbinate</strong>.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white border-2 border-orange-300 rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-500">
                <img
                  src="/images/turbine.png"
                  alt="Ilustrasi pembengkakan turbinate dalam rongga hidung"
                  className="rounded-2xl w-full h-auto object-contain max-h-[400px] mx-auto lazyload"
                  loading="lazy"
                />
                <div className="mt-3 text-center text-sm text-orange-700 font-medium">
                  Ilustrasi struktur turbinate membengkak
                </div>
              </div>
            </div>
  
            <div className="md:w-1/2 space-y-6 text-orange-900 text-base md:text-lg leading-relaxed">
              <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
                <ShieldAlert className="w-6 h-6 text-orange-500 mt-1" />
                <p>
                  Turbinate ialah tisu penting yang membantu menapis dan melembapkan udara yang kita sedut setiap hari.
                </p>
              </div>
  
              <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
                <ThermometerSnowflake className="w-6 h-6 text-orange-500 mt-1" />
                <p>
                  Bila berlaku <span className="font-semibold text-orange-600">alahan, jangkitan atau pendedahan kepada habuk dan cuaca sejuk</span>, turbinate akan membengkak.
                </p>
              </div>
  
              <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="500">
                <Droplets className="w-6 h-6 text-orange-500 mt-1" />
                <p>
                  Keadaan ini menyekat aliran lendir semula jadi dan akhirnya menyebabkan lendir <strong>terkumpul dan bertakung</strong>.
                </p>
              </div>
  
              <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="600">
                <Wind className="w-6 h-6 text-orange-500 mt-1" />
                <p>
                  Anda mula rasa tidak selesa — hidung tersumbat, sakit muka, dan kadangkala lendir meleleh ke tekak tanpa henti.
                </p>
              </div>
  
              <p className="flex items-center gap-2 text-red-600 font-semibold mt-6" data-aos="fade-up" data-aos-delay="700">
                <Frown className="w-5 h-5" />
                Jika berlarutan tanpa tindakan, ia boleh menjejaskan tidur, mood dan aktiviti harian anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default CauseOfSinusSection;
  