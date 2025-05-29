import "../styles/global.css";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <>
      <div className="flex flex-col text-center font-menlo text-white">
        <h1 className="text-[min(6vw,1.875rem)] mb-4">
          hey there, I'm Louise!
        </h1>

        <span className="text-[min(4vw,1.25rem)]">
          <Typewriter
            words={[
              "Back-end Developer by profession",
              "Front-end Developer enthusiast",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </div>
    </>
  );
}