import "../styles/global.css";
import { Laptop, Flower, Sparkle } from "phosphor-react";

export default function About() {
  return (
    <>
      <div className="flex flex-col font-menlo text-white items-center justify-center text-center w-[min(90vw,520px)]">
        <div className="flex items-center justify-center gap-2 md:gap-6 flex-rap md:mb-6">
          {/* left side */}
          <div>
            <img
              src="src/assets/louiseDraw.png"
              alt="Louise draw"
              className="hidden md:block md:relative scale-x-[-1] w-[min(50vw,200px)]"
            />
            <div className="profile-photo md:absolute md:-translate-y-20 md:-translate-x-4">
              <img
                src="src/assets/louise.jpg"
                alt="Minha foto"
                className="w-full h-full object-cover object-[50%_10%]"
              />
            </div>
          </div>

          {/* right side */}
          <div className="text-white text-center">
            <h2 className="text-xl font-bold">Louise Akemi Kuana</h2>
          </div>
        </div>

        {/* section above */}
        <section className="space-y-1 md:space-y-4 text-white text-sm">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-orchid-pink">
              <span className="inline-flex items-center align-middle ml-1">
                <Laptop className="text-[min(4vw,16px)] mx-2" />
              </span>
              What I do
            </h3>
            <p className="text-xs md:text-base">
              I mostly work with Java and Python, and I have fun building
              systems that are clean, scalable, and easy to maintain.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-orchid-pink">
              <span className="inline-flex items-center align-middle ml-1">
                <Flower className="text-[min(4vw,16px)] mx-2" />
              </span>
              What I care about
            </h3>
            <p className="text-xs md:text-base">
              I care about writing clear code, good team communication, and
              making sure things just work. And yes, I do believe good
              documentation can save the day more than once.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-orchid-pink">
              <span className="inline-flex items-center align-middle ml-1">
                <Sparkle className="text-[min(4vw,16px)] mx-2" />
              </span>
              Fun fact
            </h3>
            <p className="text-xs md:text-base">
              Crochet, cooking, and nature walks keep me busy when I’m offline.
              I like to keep my mind active by learning new stuff whenever I
              can.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
