import "./Home.css";

import Header from "./components/Header";
import Main from "./components/Main";
import NavbarWithDuck from "./components/Navbar";

function Home() {
  return (
    <>
      <div className="bg-apple-green w-full h-screen text-white text-center font-mono items-center flex flex-col">
        <Header />
        <Main />
        <NavbarWithDuck/>
      </div>
    </>
  );
}
export default Home;
