import { useEffect, useState, useMemo } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ShoppingBag, MessageCircle } from "lucide-react"

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  const symptoms = useMemo(() => [
    <span className="text-orange-600 font-semibold">Kerap bersin setiap pagi?</span>,
    <span className="text-orange-600 font-semibold">Hidung mudah tersumbat?</span>,
    <span className="text-orange-600 font-semibold">Gatal hidung berpanjangan?</span>
  ], [])

  const [currentSymptom, setCurrentSymptom] = useState(0)
  const [showHighlight, setShowHighlight] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymptom((prev) => (prev + 1) % symptoms.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [symptoms])

  useEffect(() => {
    const timer = setTimeout(() => setShowHighlight(true), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#fef3c7] min-h-screen flex items-center justify-center px-6 sm:px-8 py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Teks */}
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center md:text-left space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug text-orange-700 min-h-[4rem]">
            {symptoms[currentSymptom]}
            <br />
            <span className="text-neutral-700">Mungkin itu tanda awal anda sedang alami</span>{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-neutral-900 relative z-10">masalah resdung</span>
              <span
                className={`absolute left-0 bottom-[0.4em] sm:bottom-[0.12em] md:bottom-[0.15em] h-[0.75em] sm:h-[0.6em] md:h-[0.65em] bg-orange-400 rounded-sm z-0 transition-all duration-1000 ease-in-out ${showHighlight ? 'w-full' : 'w-0'}`}
                style={{ transitionDelay: "2.4s", transformOrigin: "left" }}
              ></span>
            </span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Viemis ialah semburan harian berasaskan bahan semula jadi yang dirumus khas untuk <strong>membantu melegakan ketidakselesaan akibat resdung</strong> — tanpa rasa pedih, dan sesuai untuk kegunaan jangka panjang.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-base font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
            >
              <ShoppingBag className="w-5 h-5" /> Tempah Sekarang
            </a>
            <a
              href="https://wa.me/60123456789?text=Hi,%20saya%20nak%20tanya%20tentang%20produk%20Viemis"
              className="inline-flex items-center gap-2 border border-orange-500 text-orange-600 text-base font-medium py-3 px-6 rounded-lg hover:bg-orange-50 transition duration-300"
            >
              <MessageCircle className="w-5 h-5" /> Pertanyaan WhatsApp
            </a>
          </div>
        </div>

        {/* Kanan: Gambar Produk */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center"
        >
          <img
            src="/images/viemis-box-only-small3.png"
            alt="Kotak Spray Viemis"
            className="max-w-xs w-full drop-shadow-2xl transition-all duration-1000 ease-in-out"
            loading="lazy"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
