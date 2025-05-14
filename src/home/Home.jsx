import "./Home.css";
import Navbar from "./components/Navbar";

// function Home() {
//   return (
//     <div className="flex w-full h-screen justify-center">
//       <div className="flex flex-col items-center justify-center content-center">
//         <WindowTab title="Home" />
//         <div className="flex rounded-b-lg w-[var(--spacing-window-width)] bg-green-light h-[var(--spacing-window-height)] items-center shadow-xl/30">

//         </div>
//       </div>
//     </div>
//   );
// }

function Home() {
  return (
    <>
      <div className="bg-apple-green w-full h-screen text-white text-center font-mono items-center flex flex-col">
        <div className="pt-[var(--spacing-title)] font-bold text-2xl">
          <h1>hey there, I'm Louise!</h1>
        </div>
        <div>
          <p className="text-lg">Back-end Developer by profession</p>
          <p className="text-base">Front-end Developer enthusiast</p>
        </div>
        <div className="relative w-[min(96vw,375px)]">
          <div className=" w-full h-auto">
            <img src="src/assets/louise+duck.gif" alt="Louise Duck"></img>
          </div>
          <div className="absolute bottom-0 w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
