import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/MyWorks.css";

import { Heart, Star } from "phosphor-react";

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
    <div className="w-full max-w-4xl mx-auto px-4">
      <h1 className="font-menlo text-2xl mb-6 text-lemon-chiffon">
        Meus Trabalhos Kawaii
      </h1>
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
              className="w-48 md:w-80 aspect-[3/4] bg-pink-100 border-4 border-pink-200 rounded-3xl p-3 hover:shadow-pink-300 transition-all duration-300 flex flex-col items-center mx-auto"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto object-cover rounded-2xl mb-2 shadow-md"
              />
              <h3 className="text-lg font-bold text-pink-700 font-kawaii mb-1 text-center">
                {work.title}
              </h3>
              <p className="text-pink-600 text-xs text-center">
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
