import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/global.css";
import { EggCrack, BookOpen, Warning, CaretCircleLeft, CaretCircleRight} from "phosphor-react";
import lionFlower from "@assets/lionFlower.gif";

export default function MyWorks() {
  const works = [
    {
      icon: (
        <EggCrack className="text-fuchsia-rose icon-inline" />
      ),
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: lionFlower,
      isAvailable: false,
    },
    {
      icon: (
        <BookOpen className="text-fuchsia-rose icon-inline" />
      ),
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: lionFlower,
      isAvailable: false,
    },
    {
      icon: <Warning className="text-fuchsia-rose icon-inline" />,
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: lionFlower,
      isAvailable: false,
    },
  ];

  return (
    <div className="page-container w-[min(98vw,420px)] mx-auto">
      <h2 className="page-heading mb-2">
        Tiny projects, big dreams
      </h2>
      <p className="text-xs text-lemon-chiffon mb-2 italic">
        This is just the beginning… stay cozy and curious
      </p>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        spaceBetween={10}
        slidesPerView={1}
        className="relative w-[99vw] max-w-md mx-auto"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {work.isAvailable ? (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-container hover:shadow-pink-300 transition-all duration-300 "
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="card-image"
                />
                <h3 className="card-title">
                  <span className="icon-inline-container">
                    {work.icon}
                  </span>
                  {work.title}
                </h3>
                <p className="card-description">
                  {work.description}
                </p>
              </a>
            ) : (
              <div className="card-container opacity-60 cursor-not-allowed">
                <img
                  src={work.image}
                  alt={work.title}
                  className="card-image"
                />
                <h3 className="card-title">
                  <span className="icon-inline-container">
                    {work.icon}
                  </span>
                  {work.title}
                </h3>
                <p className="card-description">
                  {work.description}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-button-prev">
          <CaretCircleLeft size={50}/>
        </div>
        <div className="custom-swiper-button-next">
            <CaretCircleRight size={50}/>
        </div>
      </Swiper>
    </div>
  );
}
