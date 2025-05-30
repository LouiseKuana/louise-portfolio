import "../styles/global.css";
import louiseDraw from "@assets/louiseDraw.png";
import louisePhoto from "@assets/louise.jpg";
import { Laptop, Flower, Sparkle } from "phosphor-react";

export default function About() {
  return (
    <>
      <div className="page-container w-[min(90vw,520px)]">
        <div className="flex items-center justify-center gap-2 md:gap-6 flex-rap md:mb-6">
          {/* left side */}
          <div>
            <img
              src={louiseDraw}
              alt="Louise draw"
              className="hidden md:block md:relative scale-x-[-1] w-[min(50vw,200px)]"
            />
            <div className="profile-photo md:absolute md:-translate-y-20 md:-translate-x-4">
              <img
                src={louisePhoto}
                alt="Minha foto"
                className="w-full h-full object-cover object-[50%_10%]"
              />
            </div>
          </div>

          {/* right side */}
          <div className="text-center">
            <h2 className="page-heading">Louise Akemi Kuana</h2>
          </div>
        </div>

        {/* section above */}
        <section className="space-y-1 md:space-y-4">
          <div>
            <h3 className="about-heading">
              <span className="icon-inline-container">
                <Laptop className="icon-inline" />
              </span>
              What I do
            </h3>
            <p className="about-paragraph">
              I mostly work with Java and Python, and I have fun building
              systems that are clean, scalable, and easy to maintain.
            </p>
          </div>
          <div>
            <h3 className="about-heading">
              <span className="icon-inline-container">
                <Flower className="icon-inline" />
              </span>
              What I care about
            </h3>
            <p className="about-paragraph">
              I care about writing clear code, good team communication, and
              making sure things just work. And yes, I do believe good
              documentation can save the day more than once.
            </p>
          </div>
          <div>
            <h3 className="about-heading">
              <span className="icon-inline-container">
                <Sparkle className="icon-inline" />
              </span>
              Fun fact
            </h3>
            <p className="about-paragraph">
              Crochet, drawing, cooking, and nature walks keep me busy when I’m offline.
              I like to keep my mind active by learning new stuff whenever I
              can.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
