import "./Home.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Resume from "./components/Resume";
import MyWorks from "./components/MyWorks";

import useIsMobile from "../utils/UseIsMobile";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  const [isDocked, setIsDocked] = useState(false);
  const [activeSection, setActiveSection] = useState();

  const isMobile = useIsMobile();

  const handleSelectSection = (section) => {
    setIsDocked(true); // triggers duck animation to top
    setActiveSection(section); // shows the selected section
  };

  const handleReset = () => {
    setIsDocked(false);
    setActiveSection(); // Hide all sections (show main)
  };

  return (
    <>
      <div className="relative bg-apple-green dark:bg-reseda-green w-full h-screen text-white text-center font-mono items-center flex flex-col">
        <AnimatePresence>
          {!isDocked && (
            <motion.div
              key="header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
            </motion.div>
          )}
        </AnimatePresence>

        {activeSection === "resume" && <Resume />}
        {activeSection === "works" && <MyWorks />}

        <Main
          isDocked={isDocked}
          isMobile={isMobile}
          onSelect={handleSelectSection}
          onReset={handleReset}
        />

        <Footer />
      </div>
    </>
  );
}
export default Home;
