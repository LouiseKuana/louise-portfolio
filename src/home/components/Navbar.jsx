import "../styles/Navbar.css";
import {
  User,
  FolderSimple,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  CaretDoubleDown,
} from "phosphor-react";
import { motion } from "framer-motion";
import Duck from "./Duck";
import NavbarButton from "./NavbarButton";

export default function NavbarWithDuck({ isDocked, isMobile, onSelect , onReset}) {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: isDocked ? (isMobile ? -180 : -230) : 0,
        scale: isDocked
          ? isMobile
            ? 0.8 // smaller for mobile
            : 0.9 // larger for desktop
          : 1,
      }}
      transition={{ type: "spring", stiffness: 80 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
    >
      <div className="relative w-[var(--spacing-img-duck-width)]">
        <div className="w-full h-auto">
          <Duck isDocked={isDocked} />
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="bg-blue-green rounded-full px-8 py-2  justify-between items-center flex inset-shadow-navbar cursor-pointer">
            <NavbarButton icon={User} onClick={() => onSelect("resume")} />
            <NavbarButton
              icon={FolderSimple}
              onClick={() => onSelect("works")}
            />
            <NavbarButton
              icon={EnvelopeSimple}
              onClick={() => (window.location = "mailto:you@example.com")}
            />
          </div>
        </div>
      </div>
      {isDocked && (
        <div className="mt-4">
          <NavbarButton icon={CaretDoubleDown} onClick={onReset} />
        </div>
      )}
    </motion.div>
  );
}
