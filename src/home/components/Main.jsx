import { CaretDoubleDown } from "phosphor-react";
import { motion } from "framer-motion";
import NavbarWithDuck from "./Navbar";
import NavbarButton from "./NavbarButton";
import { useEffect, useState } from "react";

export default function Main({ isDocked, isMobile, onSelect , onReset}) {
  const [offsetY, setOffsetY] = useState(0);

  // Calculate offset from center to top with margin
  useEffect(() => {
    const marginTop = -90; // px, adjust this for how far from top you want
    const windowHeight = window.innerHeight;
    // This is the distance from center (top 50%) to desired top margin
    setOffsetY(windowHeight / 2 - marginTop);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: isDocked ? -offsetY : 0,
        scale: isDocked
          ? isMobile
            ? 0.8 // smaller for mobile
            : 0.9 // larger for desktop
          : 1,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
       className={`absolute left-1/2 -translate-x-1/2 z-50 flex flex-col items-center ${
    isDocked ? "top-[10px]" : "top-1/2 -translate-y-1/2"
  }`}
    >
      <NavbarWithDuck isDocked={isDocked} onSelect={onSelect}/>

      {isDocked && (
         <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <NavbarButton icon={CaretDoubleDown} onClick={onReset} />
        </div>
      )}
    </motion.div>
  );
}
