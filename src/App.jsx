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
    const lerp = (x, y, a) => x * (1 - a) + y * a;

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

    let linkItem = document.querySelectorAll(".link-cover");
    linkItem.forEach((item, index) => {
      item.addEventListener("mousemove", (e) => {
        var dims = item.getBoundingClientRect();
        var xStart = dims.x;
        var xEnd = dims.x + dims.width;

        var yStart = dims.y;
        var yEnd = dims.y + dims.height;

        var rangeX = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX);
        var rangeY = gsap.utils.mapRange(yStart, yEnd, 0, 1, e.clientY);

        gsap.to(".mouse", {
          scale: 7,
        });
        gsap.to(".link-cover", {
          zIndex: 60,
        });

        gsap.to(item, {
          x: lerp(-30, 30, rangeX),
          y: lerp(-30, 30, rangeY),
          fontWeight: 700,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(".mouse", {
          scale: 1,
        });

        gsap.to(".link-cover", {
          zIndex: 1,
        });

        gsap.to(item, {
          x: 0,
          y: 0,
          ease: "elastic.out",
        });
      });
    });
  }, []);

  return (
    <>
      <div
        id="main"
        className="main h-fit min-h-screen w-full relative bg-darkGray overflow-hidden "
      >
        <div className="mouse h-5 w-5 scale-1 opacity-0 hidden bg-white absolute z-40 rounded-full select-none pointer-events-none lg:block"></div>

        <Loader complete={handleAnimationComplete} />
        <Navbar complete={complete} />
      </div>
    </>
  );
}

export default App;
