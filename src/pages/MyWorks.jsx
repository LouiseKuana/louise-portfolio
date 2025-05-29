import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/global.css";
import { EggCrack, BookOpen, Warning, CaretCircleLeft, CaretCircleRight} from "phosphor-react";

export default function MyWorks() {
  const works = [
    {
      icon: (
        <EggCrack className="text-fuchsia-rose icon-inline" />
      ),
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: "src/assets/lionFlower.gif",
      isAvailable: false,
    },
    {
      icon: (
        <BookOpen className="text-fuchsia-rose icon-inline" />
      ),
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: "src/assets/lionFlower.gif",
      isAvailable: false,
    },
    {
      icon: <Warning className="text-fuchsia-rose icon-inline" />,
      title: "Coming soon",
      description: "Just a little patience — I'm working on it.",
      image: "src/assets/lionFlower.gif",
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
                className="w-[min(45vw,320px)] aspect-[3/4] bg-lavender-blush border-4 border-amaranth-pink rounded-3xl p-3 hover:shadow-pink-300 transition-all duration-300 flex flex-col items-center mx-auto"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-auto object-cover rounded-2xl mb-2 shadow-md"
                />
                <h3 className="text-base md:text-lg font-bold text-fuchsia-rose mb-1 text-center">
                  <span className="icon-inline-container">
                    {work.icon}
                  </span>
                  {work.title}
                </h3>
                <p className="text-fuchsia-rose text-xs text-center">
                  {work.description}
                </p>
              </a>
            ) : (
              <div className="w-[min(45vw,320px)] aspect-[3/4] bg-lavender-blush border-4 border-amaranth-pink rounded-3xl p-3 flex flex-col items-center mx-auto opacity-60 cursor-not-allowed">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-auto object-cover rounded-2xl mb-2 shadow-md"
                />
                <h3 className="text-base md:text-lg font-bold text-fuchsia-rose mb-1 text-center">
                  <span className="icon-inline-container">
                    {work.icon}
                  </span>
                  {work.title}
                </h3>
                <p className="text-fuchsia-rose text-xs text-center">
                  {work.description}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Botões de navegação personalizados */}
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
