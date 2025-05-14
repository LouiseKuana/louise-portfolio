import "../styles/Navbar.css";
import NavbarButton from "./NavbarButton.jsx";
import {
  User,
  FolderSimple,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "phosphor-react";

function Navbar() {
  return (
    <>
      <div className="bg-blue-green rounded-full px-8 py-2 w-88 justify-between items-center flex inset-shadow-navbar cursor-pointer">
        <NavbarButton icon={User} />
        <NavbarButton icon={FolderSimple} />
        <NavbarButton icon={GithubLogo} />
        <NavbarButton icon={LinkedinLogo} />
        <NavbarButton icon={EnvelopeSimple} />
      </div>
    </>
  );
}

export default Navbar;
