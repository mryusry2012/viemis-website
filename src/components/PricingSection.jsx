import { useEffect, useState } from "react";
import { CheckCircle, Truck, CalendarDays, SprayCan, Users, Star, Clock } from "lucide-react";

export default function PricingSection() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 2);
    endTime.setMinutes(endTime.getMinutes() + 15);

    const interval = setInterval(() => {
      const now = new Date();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown("Tawaran Tamat");
      } else {
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setCountdown(`${hours}j ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pricingPlans = [
    {
      id: 1,
      title: "1 Pack Viemis",
      originalPrice: 35,
      price: 28,
      features: [
        { text: "Free Postage", icon: <Truck className="text-orange-600 w-5 h-5" /> },
        { text: "Penghantaran Cepat", icon: <CheckCircle className="text-orange-600 w-5 h-5" /> },
        { text: "Jimat RM7", icon: <Star className="text-orange-600 w-5 h-5" /> },
        { text: "Tempoh: ~1 Bulan", icon: <CalendarDays className="text-orange-600 w-5 h-5" /> },
        { text: "Penggunaan: 2x sehari", icon: <SprayCan className="text-orange-600 w-5 h-5" /> },
        { text: "Sesuai semua umur", icon: <Users className="text-orange-600 w-5 h-5" /> },
        { text: "Terbukti berkesan!", icon: <CheckCircle className="text-orange-600 w-5 h-5" /> },
      ],
      tags: ["Stok Terhad"],
    },
    {
      id: 2,
      title: "3 Pack Viemis",
      originalPrice: 105,
      price: 84,
      features: [
        { text: "Free Postage", icon: <Truck className="text-orange-600 w-5 h-5" /> },
        { text: "Penghantaran Cepat", icon: <CheckCircle className="text-orange-600 w-5 h-5" /> },
        { text: "Jimat RM21", icon: <Star className="text-orange-600 w-5 h-5" /> },
        { text: "Tempoh: ~3 Bulan", icon: <CalendarDays className="text-orange-600 w-5 h-5" /> },
        { text: "Penggunaan: 2x sehari", icon: <SprayCan className="text-orange-600 w-5 h-5" /> },
        { text: "Sesuai semua umur", icon: <Users className="text-orange-600 w-5 h-5" /> },
        { text: "Pilihan Ramai Pelanggan!", icon: <Star className="text-orange-600 w-5 h-5" /> },
      ],
      tags: ["🔥 Hot Item", "⭐ Terlaris"],
      bestSelling: true,
    },
    {
      id: 3,
      title: "5 Pack Viemis",
      originalPrice: 175,
      price: 140,
      features: [
        { text: "Free Postage", icon: <Truck className="text-orange-600 w-5 h-5" /> },
        { text: "Penghantaran Cepat", icon: <CheckCircle className="text-orange-600 w-5 h-5" /> },
        { text: "Jimat RM35", icon: <Star className="text-orange-600 w-5 h-5" /> },
        { text: "Tempoh: ~5 Bulan", icon: <CalendarDays className="text-orange-600 w-5 h-5" /> },
        { text: "Penggunaan: 2x sehari", icon: <SprayCan className="text-orange-600 w-5 h-5" /> },
        { text: "Sesuai semua umur", icon: <Users className="text-orange-600 w-5 h-5" /> },
        { text: "Keluarga & stok simpan", icon: <Users className="text-orange-600 w-5 h-5" /> },
      ],
      tags: ["Paling Jimat"],
    },
  ];

  return (
    <section className="bg-[#fef3c7] py-20 px-6 sm:px-10 md:px-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-orange-700 mb-8 sm:mb-12 lg:mb-16">Pakej Harga Viemis</h2>

        <div className="mb-16 sm:mb-20 flex justify-center">
          <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-3xl text-lg font-semibold shadow-lg animate-pulse max-w-xs sm:max-w-md md:max-w-lg w-full">
            <Clock size={28} className="text-white" />
            <span className="flex-1 text-center">Tawaran Promosi Tamat Dalam: <span className="font-extrabold">{countdown}</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 lg:gap-16 mt-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-10 rounded-3xl shadow-2xl flex flex-col justify-between border mb-12 md:mb-0 ${
                plan.bestSelling
                  ? "border-orange-600 bg-gradient-to-br from-orange-50 to-orange-100 scale-105 hover:scale-110 transition-transform duration-300"
                  : "border-gray-200 bg-white transition-transform duration-300"
              }`}
              style={plan.bestSelling ? { animation: "pulse-slow 2.5s infinite" } : {}}
            >
              {plan.bestSelling && (
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Best Selling
                </span>
              )}

              <h3 className={`text-2xl font-bold ${plan.bestSelling ? "text-orange-700" : "text-gray-700"} mb-4`}>{plan.title}</h3>

              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-lg">RM{plan.originalPrice}</span>
                <span className={`text-5xl font-extrabold ${plan.bestSelling ? "text-orange-700" : "text-gray-700"}`}>RM{plan.price}</span>
              </div>

              <hr className="border-t border-gray-200 my-4" />

              <ul className="space-y-4 text-left mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
