import { CaretDoubleDown } from "phosphor-react";
import { motion } from "framer-motion";
import NavbarWithDuck from "./Navbar";
import NavbarButton from "./NavbarButton";

export default function Main({ isDocked, isMobile, onSelect , onReset}) {
  const offset = isMobile ? "-80rem" : window.innerHeight * 0.3;
  
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: isDocked ? (isMobile ? -offset : 0) : 0,
        scale: isDocked
          ? isMobile
            ? 0.8 // smaller for mobile
            : 0.9 // larger for desktop
          : 1,
      }}
      transition={{ type: "spring", stiffness: 80 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
    >
      <NavbarWithDuck isDocked={isDocked} onSelect={onSelect}/>

      {isDocked && (
        <div className="mt-4">
          <NavbarButton icon={CaretDoubleDown} onClick={onReset} />
        </div>
      )}
    </motion.div>
  );
}
