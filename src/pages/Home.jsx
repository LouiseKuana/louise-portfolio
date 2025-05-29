import "../styles/global.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./About";
import MyWorks from "./MyWorks";
import ContactMe from "./ContactMe";
import NavbarButton from "../components/NavbarButton";
import RefButton from "../components/RefButton";
import HeaderFlowers from "../components/HeaderFlowers";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  // When clicking on the menu, the navbar animation starts + gif rising
  const handleNavClick = (section) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsAnimating(false);
    }, 700); // animation duration
  };

  // return to home screen
  const resetPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsAnimating(false);
    }, 700);
  };

  return (
    <div className="min-h-[100svh] flex flex-col items-center bg-reseda-green relative overflow-x-hidden">
      {/* HEADER FLOWERS */}
      <HeaderFlowers />

      {/* NAVBAR ANIMATED - starts in the middle of the screen and goes up */}
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
        {/* GIF + HEADER - go up with the navbar, GIF disappears at the end */}
        <motion.div
          className="flex flex-col items-center mt-10 px-4 max-w-xl w-full"
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
                  {/* HEADER */}
                  <Header />
                </motion.header>
                <motion.img
                  src="/src/assets/louiseAndDuck.gif"
                  alt="Animated GIF"
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

        {/* NAVBAR */}
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
            title="Contact Me"
            icon={EnvelopeSimple}
            onClick={() => handleNavClick("email")}
          />
          <RefButton
            title="Github"
            icon={GithubLogo}
            onClick={() =>
              window.open("https://github.com/LouiseKuana", "_blank")
            }
          />
          <RefButton
            title="LinkedIn"
            icon={LinkedinLogo}
            onClick={() =>
              window.open("https://www.linkedin.com/in/louise-kuana/", "_blank")
            }
          />
        </motion.nav>
      </motion.div>

      {/* SECTION CONTENT - appears after animation */}
      <AnimatePresence>
        {activeSection && !isAnimating && (
          <motion.div
            className="mt-30 lg:mt-35 text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {activeSection === "about" && <About />}
            {activeSection === "works" && !isAnimating && <MyWorks />}
            {activeSection === "email" && <ContactMe />}

            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.button
                    onClick={resetPage}
                    className="btn-3d  my-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CaretDoubleDown className="custom-size-button-icon" />
                  </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="bottom"
                    className="custom-button-title animate-fade-in"
                    sideOffset={8}
                  >
                    Back Home
                    <Tooltip.Arrow className="custom-button-title-arrow" />
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
