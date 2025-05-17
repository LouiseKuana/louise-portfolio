import "./Home.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NavbarWithDuck from "./components/Navbar";
import Resume from "./components/Resume";
import MyWorks from "./components/MyWorks";
import useIsMobile from "../utils/UseIsMobile";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CaretDoubleDown } from "phosphor-react";

function Home() {
  const [isDocked, setIsDocked] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showMain, setShowMain] = useState(true);
  const [activeSection, setActiveSection] = useState("main");

  const isMobile = useIsMobile();

  const handleSelectSection = (section) => {
    setIsDocked(true); // triggers duck animation to top
    setActiveSection(section); // shows the selected section
    setShowHeader(false); // hides Header
    setShowMain(false); // hides Main
  };

  const handleReset = () => {
    setIsDocked(false);
    setActiveSection("main"); // Hide all sections (show main)
    setShowHeader(true); // shoe Header
    setShowMain(true); // show Main
  };

  return (
    <>
      <div className="relative bg-apple-green dark:bg-reseda-green w-full h-screen text-white text-center font-mono items-center flex flex-col">
        <AnimatePresence>
          {!isDocked && (
            <>
              <motion.div
                key="header"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Header />
              </motion.div>

              {activeSection === "main" && (
                <motion.div
                  key="main"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Main />
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

        {activeSection === "resume" && <Resume />}
        {activeSection === "myWorks" && <MyWorks />}

        <div className="flex-grow relative">
          <NavbarWithDuck
            isDocked={isDocked}
            isMobile={isMobile}
            onSelect={handleSelectSection}
            onReset={handleReset}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Home;
