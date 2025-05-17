import "./Home.css";

import Header from "./components/Header";
import Main from "./components/Main";
import NavbarWithDuck from "./components/Navbar";
import Footer from "./components/Footer"

function Home() {
  return (
    <>
      <div className="relative bg-apple-green dark:bg-reseda-green w-full h-screen text-white text-center font-mono items-center flex flex-col">
        <Header />
        <Main />
        <div className="flex-grow relative">
<NavbarWithDuck/>
        </div>
        
        <Footer/>
      </div>
    </>
  );
}
export default Home;
