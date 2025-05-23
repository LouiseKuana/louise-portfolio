import "./Home.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Resume from "./components/Resume";
import MyWorks from "./components/MyWorks";
import NavbarButton from "./components/NavbarButton";
import HeaderFlowers from "./components/HeaderFlowers";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  User,
  FolderSimple,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  CaretDoubleDown,
} from "phosphor-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Ao clicar no menu, inicia animação da navbar + gif subindo
  const handleNavClick = (section) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsAnimating(false);
    }, 700); // duração da animação
  };

  // Voltar para tela inicial
  const resetPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsAnimating(false);
    }, 700);
  };

  return (
    <div className="min-h-[100svh] flex flex-col items-center bg-apple-green dark:bg-reseda-green relative overflow-x-hidden">
      <HeaderFlowers />
      {/* NAVBAR ANIMADA - inicia no meio da tela e sobe */}
      <motion.div
        className="w-full flex flex-col justify-center items-center z-30
             fixed left-0 right-0
             sm:top-[5%] sm:translate-y-[-5%] sm:absolute
             md:top-0 md:translate-y-0 md:fixed"
        initial={false}
        animate={{
          top: isAnimating || activeSection ? 0 : undefined,
          position: isAnimating || activeSection ? "fixed" : undefined,
          translateY: isAnimating || activeSection ? "0%" : undefined,
        }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        {/* GIF + HEADER - sobem junto com a navbar, GIF desaparece no fim */}
        <motion.div
          className="flex flex-col items-center mt-10 sm:mt-8 md:mt-10 px-4 max-w-xl w-full"
          initial={false}
          animate={{
            y: isAnimating || activeSection ? -100 : 0,
            opacity: isAnimating || activeSection ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
        >
          <AnimatePresence>
            {!activeSection && !isAnimating && (
              <>
                <motion.header
                  className="h-10 text-xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Header />
                </motion.header>

                <motion.img
                  src="/src/assets/louise+duck.gif"
                  alt="GIF animado"
                  className="w-[min(76vw,375px)] mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.nav className="flex gap-4 px-6 py-3 bg-blue-green inset-shadow-navbar rounded-full cursor-pointer">
          <NavbarButton
            title="About"
            icon={User}
            onClick={() => handleNavClick("about")}
          />
          <NavbarButton
            title="My Projects"
            icon={FolderSimple}
            onClick={() => handleNavClick("works")}
          />
          <NavbarButton
            title="Email"
            icon={EnvelopeSimple}
            onClick={() => handleNavClick("email")}
          />
          <NavbarButton
            title="Github"
            icon={GithubLogo}
            onClick={() => window.open("https://github.com", "_blank")}
          />
          <NavbarButton
            title="LinkedIn"
            icon={LinkedinLogo}
            onClick={() => window.open("https://linkedin.com", "_blank")}
          />
        </motion.nav>
      </motion.div>

      {/* CONTEÚDO DA SEÇÃO - aparece após animação */}
      <AnimatePresence>
        {activeSection && !isAnimating && (
          <motion.div
            className="mt-24 sm:mt-24 md:mt-32 lg:mt-40 text-center px-4 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {activeSection === "about" && (
              <p className="text-lg">Sobre mim...</p>
            )}
            {activeSection === "works" && !isAnimating && (
              <div>
                <p className="text-lg text-pink-700 mb-4 font-delius">
                  Veja meus projetos fofinhos 💖
                </p>

                <MyWorks />
              </div>
            )}
            {activeSection === "email" && (
              <p className="text-lg">email@email.com</p>
            )}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.button
                    onClick={resetPage}
                    className="btn-3d"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CaretDoubleDown className="w-6 h-6" />
                  </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="bottom"
                    className="bg-apple-green dark:bg-reseda-green text-lemon-chiffon text-xs rounded-xl px-3 py-2 shadow-lg font-menlo animate-fade-in z-50 border border-lemon-chiffon"
                    sideOffset={8}
                  >
                    Back Home
                    <Tooltip.Arrow className="fill-lemon-chiffon" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
