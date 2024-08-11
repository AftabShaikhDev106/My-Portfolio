import { useEffect, useRef, useState } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import HomeCom from "./Components/HomeCom";
import useLocoScroll from "./useLocoScroll";
import gsap from "gsap";

function App() {
  useLocoScroll(true);

  const [complete, setComplete] = useState(false);
  // const [navComplete, setNavComplete] = useState(false);
  const mouseDets = useRef({ x: 0, y: 0 });

  const handleAnimationCompleteLoader = async (text) => {
    setComplete(true);
  };

  // const handleAnimationCompleteNav = async (text) => {
  //   setNavComplete(true);
  // };

  useEffect(() => {
    gsap.set(".nav-info", {
      y: "-100%",
    });

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const handleMouseMove = (e) => {
      mouseDets.current = { x: e.clientX, y: e.clientY };

      gsap.to(".mouse", {
        x: `${e.clientX - 6}px`,
        y: `${e.clientY - 6 + window.scrollY}px`,
        ease: "expo.out",
        opacity: 1,
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(".mouse", {
        opacity: 0,
        ease: "expo.out",
      });
    };

    const handleScroll = () => {
      gsap.to(".mouse", {
        y: `${mouseDets.current.y - 6 + window.scrollY}px`,
        ease: "expo.out",
        overwrite: "auto",
      });
    };

    let main = document.querySelector(".main");
    main.addEventListener("mousemove", handleMouseMove);
    main.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    let linkItems = document.querySelectorAll(".link-cover");
    linkItems.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const dims = item.getBoundingClientRect();
        const rangeX = gsap.utils.mapRange(
          dims.x,
          dims.x + dims.width,
          0,
          1,
          e.clientX
        );
        const rangeY = gsap.utils.mapRange(
          dims.y,
          dims.y + dims.height,
          0,
          1,
          e.clientY
        );

        gsap.to(".mouse", {
          scale: 10,
          duration: 0.5,
        });

        gsap.to(item, {
          x: lerp(-20, 20, rangeX),
          y: lerp(-20, 20, rangeY),
          fontWeight: 700,
          overwrite: "auto",
        });
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(".link-cover", {
          zIndex: 50,
        });

        gsap.to(".mouse", {
          scale: 10,
          duration: 0.5,
          overwrite: "auto",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(".mouse", {
          scale: 1,
          duration: 0.5,
          overwrite: "auto",
        });

        gsap.to(".link-cover", {
          zIndex: 1,
        });

        gsap.to(item, {
          x: 0,
          y: 0,
          ease: "elastic.out",
          duration: 1.5,
          overwrite: "auto",
        });
      });
    });

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
      main.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let buttons = document.querySelectorAll(".button-v1");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(".mouse", {
          scale: 5,
          duration: 0.5,
          mixBlendMode: "difference",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(".mouse", {
          scale: 1,
          duration: 0.5,
          mixBlendMode: "normal",
        });
      });
    });
  }, []);

  return (
    <>
      <div
        id="main"
        className={`main ${
          complete ? "h-fit" : "h-[100svh]"
        } w-full relative bg-darkGray overflow-hidden ${
          complete ? "lg:h-fit" : "lg:h-[100vh]"
        }`}
        data-scroll
        data-scroll-section
      >
        <div className="mouse h-3 w-3 scale-1 opacity-0 hidden bg-white z-[3] absolute rounded-full select-none pointer-events-none lg:block"></div>

        <Loader complete={handleAnimationCompleteLoader} />
        <Navbar complete={complete} />
        <HomeCom complete={complete} />
      </div>
    </>
  );
}

export default App;
