import "../Home.css";
import { Heart } from "phosphor-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="items-center flex text-center text-[min(3vw,12px)] mt-auto py-6 text-white">
          <img className="w-[var(--spacing-lion-widht)]" src="src/assets/lionFlower.gif" alt="Lion Flower left side"></img>
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
          
          <img className="w-[var(--spacing-lion-widht)]" src="src/assets/lionFlower.gif" alt="Lion Flower right side"></img>
      </div>
    </>
  );
}

export default Footer;
