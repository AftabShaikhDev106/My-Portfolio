import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import gsap from "gsap";
import HeroPage from "./Components/HeroPage";

function App() {
  const [complete, setComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleAnimationComplete = async (text) => {
    setComplete(true);
  };

  useEffect(() => {
    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      gsap.to(".mouse", {
        x: `${e.clientX - 12}px`,
        y: `${e.clientY + scrollY - 12}px`,
        ease: "expo.out",
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(".mouse", {
        opacity: 0,
        ease: "expo.out",
      });
    };

    let main = document.querySelector(".main");
    main.addEventListener("mousemove", handleMouseMove);
    main.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", updateScrollY);

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
          scale: 6,
        });

        gsap.to(".link-cover", {
          zIndex: 5,
        });

        gsap.to(item, {
          x: lerp(-25, 25, rangeX),
          y: lerp(-25, 25, rangeY),
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

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
      main.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollY]);

  return (
    <>
      <div
        id="main"
        className={`main ${
          complete ? "h-fit" : "h-screen"
        } w-full relative bg-darkGray overflow-hidden `}
      >
        <div className="mouse h-5 w-5 scale-1 opacity-0 hidden bg-black absolute z-40 rounded-full select-none pointer-events-none lg:block"></div>

        <Loader complete={handleAnimationComplete} />
        <Navbar complete={complete} />
        <HeroPage complete={complete} />
      </div>
    </>
  );
}

export default App;
