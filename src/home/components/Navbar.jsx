import "../styles/Navbar.css";
import {
  User,
  FolderSimple,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  CaretDoubleDown,
} from "phosphor-react";
import { useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../utils/UseIsMobile";
import Resume from "./Resume"

// export default function NavbarWithDuck() {
//   return (
//     <div className="relative w-[var(--spacing-img-duck-width)]">
//       <div className="w-full h-auto">
//         <img src="src/assets/louise+duck.gif" alt="Louise Duck"></img>
//       </div>
//       <div className="absolute bottom-0 w-full">
//         <Navbar />
//       </div>
//     </div>
//   );
// }

export default function NavbarWithDuck() {
  const [isDocked, setIsDocked] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const isMobile = useIsMobile();

  const handleDock = () => {
    setIsDocked(true);
    setShowResume(true);
  };

  const handleReset = () => {
    setIsDocked(false);
    setShowResume(false);
  };

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
      <div
        className={`w-[var(--spacing-img-duck-width)] ${
          isDocked ? "hidden" : ""
        }`}
      >
        <img src="src/assets/louise+duck.gif" alt="Louise Duck" />
      </div>
      <div className="mt-2">
        <Navbar onClick={handleDock} />
      </div>

      {/* ✅ Show this only if docked */}
      {isDocked && (
        <div className="mt-4">
          <NavbarButton icon={CaretDoubleDown} onClick={handleReset} />
        </div>
      )}
      {showResume && (
        <div className="mt-1">
          {" "}
          {/* add margin to avoid overlapping */}
          <Resume />
        </div>
      )}
    </motion.div>
  );
}

function Navbar({ onClick }) {
  return (
    <>
      <div className="bg-blue-green rounded-full px-8 py-2 w-[var(--spacing-img-duck-width)] justify-between items-center flex inset-shadow-navbar cursor-pointer">
        <NavbarButton icon={User} onClick={onClick} />
        <NavbarButton icon={FolderSimple} onClick={onClick} />
        <NavbarButton icon={GithubLogo} onClick={onClick} />
        <NavbarButton icon={LinkedinLogo} onClick={onClick} />
        <NavbarButton icon={EnvelopeSimple} onClick={onClick} />
      </div>
    </>
  );
}

function NavbarButton({ icon: Icon, onClick }) {
  return (
    <>
      <button className="btn-3d" id="btn-3d" onClick={onClick}>
        <Icon className="w-6 h-6 " />
      </button>
    </>
  );
}
