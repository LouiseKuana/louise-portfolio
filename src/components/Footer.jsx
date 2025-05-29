import "../styles/global.css";
import { Heart } from "phosphor-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <img
        className="custom-leafs-position left-0"
        src="src/assets/leafs.png"
        alt="Leaf left side"
      />

      <img
        className="custom-leafs-position right-0 scale-x-[-1] "
        src="src/assets/leafs.png"
        alt="Leaf right side"
      />

      <div className="items-center flex text-center text-[min(3vw,12px)] mt-auto py-4 text-white">
        <img
          className="custom-lion-flower-position"
          src="src/assets/lionFlower.gif"
          alt="Lion Flower left side"
        ></img>
        <div className="flex flex-col items-center font-menlo">
          <p className="flex">
            Made with{" "}
            <Heart
              weight="fill"
              className="icon-inline text-amaranth-pink"
            />{" "}
            and matcha
          </p>
          <p className="flex">© {currentYear} Louise Akemi Kuana</p>
        </div>

        <img
          className="custom-lion-flower-position"
          src="src/assets/lionFlower.gif"
          alt="Lion Flower right side"
        ></img>
      </div>
    </>
  );
}

