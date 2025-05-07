import {
    AlertCircle,
    Eye,
    Wind,
    Droplet,
    Frown,
    Zap,
    Skull,
    Flame,
    Smile,
    Activity,
    CloudDrizzle,
    Thermometer,
  } from "lucide-react";
  
  function ProblemSection() {
    const problems = [
      {
        text: "Setiap pagi bangun dengan hidung yang tersumbat dan sukar bernafas?",
        icon: <Wind className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Mata gatal dan berair tanpa henti, mengganggu aktiviti harian?",
        icon: <Eye className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Asyik bersin tanpa henti terutamanya pada waktu pagi atau malam?",
        icon: <Droplet className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Rasa berat atau tekanan kuat di muka dan dahi bila tunduk?",
        icon: <AlertCircle className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Lendir dari tekak atau hidung meleleh dan susah dikawal?",
        icon: <CloudDrizzle className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Nafas berbau walaupun kebersihan mulut sudah dijaga?",
        icon: <Frown className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Sakit kepala yang menekan sekitar pipi, dahi dan mata?",
        icon: <Zap className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Tidur tidak lena kerana sukar bernafas atau rasa sesak?",
        icon: <Activity className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Kerap rasa letih dan tidak bertenaga walaupun cukup tidur?",
        icon: <Thermometer className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Gatal di bahagian dalam telinga atau langit mulut yang menjengkelkan?",
        icon: <Flame className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Suara sengau terutamanya waktu pagi atau selepas bangun tidur?",
        icon: <Smile className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
      {
        text: "Simptom resdung berulang dan menjejaskan kehidupan harian?",
        icon: <Skull className="w-6 h-6 transition-colors duration-300 group-hover:text-white text-orange-500" />,
      },
    ];
  
    return (
      <section className="relative bg-section-2 bg-[url('/pattern.svg')] bg-no-repeat bg-cover bg-center section-padding">
        <div className="max-w-6xl mx-auto relative text-center z-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-700 mb-4">
              Pernah alami masalah seperti ini?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Kenali tanda-tanda awal resdung — jangan biarkan ia menjejaskan kehidupan seharian anda.
            </p>
          </div>
  
          <div className="grid gap-5 md:grid-cols-3 text-left relative z-20">
            {problems.map((item, i) => (
              <div
                key={i}
                className="h-[150px] flex flex-col gap-3 items-start group border border-orange-200 bg-white/40 backdrop-blur-xl rounded-xl px-4 py-4 transition duration-300 hover:shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={(i % 3) * 150 + Math.floor(i / 3) * 100}
              >
                <div className="p-2 bg-white rounded-full shadow-md group-hover:bg-white/20 transition duration-300">
                  {item.icon}
                </div>
                <p className="text-base text-orange-800 group-hover:text-white leading-snug font-semibold text-left transition duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProblemSection;
  