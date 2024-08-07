import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import gsap from "gsap";

function App() {
  const [mouse, useMouse] = useState({ x: 0, y: 0 });
  const [complete, setComplete] = useState(false);
  const handleAnimationComplete = async (text) => {
    setComplete(true);
  };

  useEffect(() => {
    let main = document.querySelector(".main");
    document.addEventListener("mousemove", (e) => {
      gsap.to(".mouse", {
        x: `${e.clientX - 12}px`,
        y: `${e.clientY - 12}px`,
        ease: "expo.out",
        opacity: 1,
      });
    });

    main.addEventListener("mouseleave", () => {
      gsap.to(".mouse", {
        opacity: 0,
        ease: "expo.out",
      });
    });
  }, []);

  return (
    <>
      <div
        id="main"
        className="main h-fit min-h-screen w-full relative bg-darkGray overflow-hidden "
      >
        <div className="mouse h-5 w-5 opacity-0 bg-white absolute z-40 rounded-full select-none "></div>

        <Loader complete={handleAnimationComplete} />
        <Navbar complete={complete} />
      </div>
    </>
  );
}

export default App;
