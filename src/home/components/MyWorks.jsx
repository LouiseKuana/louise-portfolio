import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/MyWorks.css";

export default function MyWorks() {
  const works = [
    {
      title: "🐱 Portfolio Fofinho",
      description: "Um portfólio super kawaii com cores pastel.",
      image: "/src/assets/petals.png",
      link: "https://meuportfolio.com",
    },
    {
      title: "🍓 Loja de Morangos",
      description: "E-commerce temático de doces.",
      image: "/src/assets/petals.png",
      link: "https://lojadomorango.com",
    },
    {
      title: "🌸 App Sakura",
      description: "Aplicativo para acompanhar flores de cerejeira.",
      image: "/src/assets/petals.png",
      link: "https://appsakura.com",
    },
  ];

  return (
    <div className="w-[min(98vw,420px)] flex flex-col mx-auto font-menlo">
      <h1 className="text-xl text-white mb-2 font-bold">
        Tiny projects, big dreams
      </h1>
      <p className="text-xs text-lemon-chiffon mb-2 italic">
        This is just the beginning… stay cozy and curious
      </p>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={10}
        slidesPerView={1}
        className="relative w-[99vw] max-w-md mx-auto"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 md:w-80 aspect-[3/4] bg-lavender-blush border-4 border-amaranth-pink rounded-3xl p-3 hover:shadow-pink-300 transition-all duration-300 flex flex-col items-center mx-auto"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto object-cover rounded-2xl mb-2 shadow-md"
              />
              <h3 className="text-lg font-bold text-fuchsia-rose font-kawaii mb-1 text-center">
                {work.title}
              </h3>
              <p className="text-fuchsia-rose text-xs text-center">
                {work.description}
              </p>
            </a>
          </SwiperSlide>
        ))}

        {/* Botões de navegação personalizados */}
        <div className="swiper-button-prev custom-swiper-button-prev">
        </div>
        <div className="swiper-button-next custom-swiper-button-next">
        </div>
      </Swiper>
    </div>
  );
}
