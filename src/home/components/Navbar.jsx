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

export default function NavbarWithDuck({ isDocked, onSelect }) {
  return (
    <div className="relative w-[var(--spacing-img-duck-width)]">
      <div className="w-full h-auto">
        <Duck isDocked={isDocked} />
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="bg-blue-green rounded-full px-8 py-2  justify-between items-center flex inset-shadow-navbar cursor-pointer">
          <NavbarButton icon={User} onClick={() => onSelect("resume")} />
          <NavbarButton icon={FolderSimple} onClick={() => onSelect("works")} />
          <NavbarButton
            icon={EnvelopeSimple}
            onClick={() => (window.location = "mailto:you@example.com")}
          />
        </div>
      </div>
    </div>
  );
}
