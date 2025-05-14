import "../styles/Navbar.css";
import { User, FolderSimple,  GithubLogo,  LinkedinLogo,  EnvelopeSimple} from "phosphor-react";

export default function NavbarWithDuck() {
  return (
    <div className="relative w-[min(96vw,375px)]">
      <div className=" w-full h-auto">
        <img src="src/assets/louise+duck.gif" alt="Louise Duck"></img>
      </div>
      <div className="absolute bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}

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

function NavbarButton({ icon: Icon }) {
  return (
    <>
      <button className="btn-3d" id="btn-3d">
        <Icon className="w-6 h-6 " />
      </button>
    </>
  );
}

