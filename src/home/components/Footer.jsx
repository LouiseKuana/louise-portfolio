import "../Home.css";
import { Heart } from "phosphor-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <img
        className="hidden md:block fixed bottom-0 left-0 z-0"
        src="src/assets/leafs.png"
        alt="Leaf left side"
      />

      <img
        className="hidden md:block fixed bottom-50 left-60 z-0 w-[64px]"
        src="src/assets/cherryFlower.png"
        alt="Cherry Flower left side"
      />

      <img
        className="hidden md:block fixed bottom-0 right-0 scale-x-[-1] z-0"
        src="src/assets/leafs.png"
        alt="Leaf right side"
      />

        <img
        className="hidden md:block fixed bottom-50 right-60 scale-x-[-1] z-0 w-[64px]"
        src="src/assets/cherryFlower.png"
        alt="Cherry Flower right side"
      />

      <div className="items-center flex text-center text-[min(3vw,12px)] mt-auto py-4 text-white">
        <img
          className="w-[var(--spacing-lion-widht)]"
          src="src/assets/lionFlower.gif"
          alt="Lion Flower left side"
        ></img>
        <div className="flex flex-col items-center">
          <p className="flex">
            Made with{" "}
            <Heart
              weight="fill"
              className="mx-[2px] text-fuchsia-rose dark:text-amaranth-pink text-[min(3vw,16px)]"
            />{" "}
            and matcha
          </p>
          <p className="flex">© {currentYear} Louise Akemi Kuana</p>
        </div>

        <img
          className="w-[var(--spacing-lion-widht)]"
          src="src/assets/lionFlower.gif"
          alt="Lion Flower right side"
        ></img>
      </div>
    </>
  );
}

export default Footer;
