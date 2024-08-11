import gsap from "gsap";
import React, { useState, useEffect } from "react";

function Navbar(props) {
  const [click, setClick] = useState(true);
  const [clickable, setClickable] = useState(true);
  const tl = gsap.timeline();

  const links = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    gsap.set(".link-span", {
      y: "100%",
      opacity: 0,
    });

    gsap.set(".personal-info-text", {
      y: "100%",
      opacity: 0,
    });

    gsap.set(".personal-info-image", {
      scale: "0",
      opacity: 0,
    });
  }, []);

  const navDown = async () => {
    let stick = document.querySelector(".stick1");
    let stickCon = document.querySelector(".stick-cover");

    let stickStyle = window.getComputedStyle(stick);

    let stickConStyle = window.getComputedStyle(stickCon);

    let stickYSet =
      parseInt(stickConStyle.height) / 2 - parseInt(stickStyle.height) / 2;
    let stickXSet =
      parseInt(stickConStyle.width) / 2 - parseInt(stickStyle.width) / 2;

    tl.to(".stick2", {
      x: "-100%",
      duration: 0.2,
    });

    tl.to(
      ".stick1",
      {
        y: `${stickYSet}px`,
        x: `${stickXSet}px`,
      },
      "b"
    );

    tl.to(
      ".stick3",
      {
        y: `-${stickYSet}px`,
        x: `-${stickXSet}px`,
      },
      "b"
    );

    tl.to(
      ".nav-info",
      {
        y: "0",

        onComplete: () => {
          gsap.to("#main", {
            height: "90vh",
          });
          gsap.to(".link-span", {
            y: "0",
            stagger: 0.02,
            opacity: 1,
          });
          gsap.to(".personal-info-text", {
            y: 0,
            opacity: 1,
          });
          gsap.to(".personal-info-image", {
            scale: 1,
            opacity: 1,
          });
        },
      },
      "b"
    );

    tl.to(
      ".stick1",

      {
        transformOrigin: "center",
        rotate: "45deg",
      },
      "c"
    );

    tl.to(
      ".stick3",
      {
        transformOrigin: "center",
        rotate: "-45deg",
      },
      "c"
    );

    tl.to(
      ".stick1",
      {
        scale: 1.5,
      },
      "d"
    );

    tl.to(
      ".stick3",
      {
        scale: 1.5,

        onComplete: () => setClickable((c) => !c),
      },
      "d"
    );

    setClick((c) => !c);
  };

  const navUp = async () => {
    gsap.to("#main", {
      height: "fit-content",
    });

    gsap.to(".link-span", {
      y: "100%",
      stagger: 0.02,
      opacity: 0,
    });
    gsap.to(".personal-info-text", {
      y: "100%",
      opacity: 0,
    });

    gsap.to(".personal-info-image", {
      scale: 0,
      opacity: 0,
    });
    tl.to(
      ".stick1",
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      ".stick3",
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      ".stick1",
      {
        transformOrigin: "center",
        rotate: "0deg",
      },
      "b"
    );

    tl.to(
      ".stick3",
      {
        transformOrigin: "center",
        rotate: "0deg",
      },
      "b"
    );

    tl.to(
      ".stick1",
      {
        y: "0",
        x: "0",
      },
      "c"
    );

    tl.to(
      ".stick3",
      {
        y: "0",
        x: "0",
      },
      "c"
    );

    tl.to(
      ".nav-info",
      {
        y: "-100%",
      },
      "c"
    );

    tl.to(".stick2", {
      x: 0,

      duration: 0.2,
      onComplete: () => setClickable((c) => !c),
    });
    setClick((c) => !c);
  };

  const handleMenu = async () => {
    if (clickable) {
      if (click) {
        navDown();
      }
    } else {
      if (!click) {
        navUp();
      }
    }
  };

  useEffect(() => {
    if (props.complete) {
      gsap.to(".link-item", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        // ease: "expo.out",
      });

      gsap.to(".logo-text", {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1,
      });
    }
  }, [props.complete]);

  return (
    <>
      <div className="nav-info w-full h-[100svh] fixed z-30 bg-charcoal flex flex-col justify-start lg:hidden">
        <div className="nav-info-cover h-screen flex flex-col gap-[5vw] justify-end">
          <div className="nav-links w-full h-fit flex flex-col items-center justify-start">
            {links.map((link, index) => (
              <div
                key={index}
                className="link py-3 h-fit w-full flex items-center gap-3"
              >
                <h4 className="text-white font-spaceGrotesk text-[16vw] pl-8 w-full flex items-center leading-none tracking-tight overflow-hidden md:text-[13vw]">
                  {link.split("").map((li, index) => (
                    <span
                      key={index}
                      className="link-span translate-y-full py-2"
                    >
                      {li}
                    </span>
                  ))}
                </h4>
              </div>
            ))}
          </div>
          <div className="w-full h-fit flex items-center  p-[10vw] border-t-2 border-gray">
            <div className="profile-con w-full h-fit flex items-center overflow-hidden">
              <div className="personal-info-image h-[18vw] aspect-square bg-slate-50 rounded-full">
                <div className="img h-full w-full"></div>
              </div>
              <div className="content w-[80%] h-full flex flex-col items-start justify-center pl-[5vw]">
                <h4 className="font-bold font-spaceGrotesk text-[5.5vw] h-fit leading-none text-white overflow-hidden">
                  <span className="personal-info-text block">Aftab Shaikh</span>
                </h4>
                <h4 className=" font-semibold font-spaceGrotesk text-gray h-fit text-[4.5vw] overflow-hidden">
                  <span className="personal-info-text block">
                    FrontEnd Developer
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className=" py-[7vw] w-full px-[8vw] flex items-center justify-between md:py-[2vw] md:px-[4vw] lg:py-[1vw] lg:z-[3]"
        data-scroll
        data-scroll-section
      >
        <div className="logo flex flex-col">
          <span className="overflow-hidden">
            <h4 className="logo-text translate-y-full text-white uppercase select-none font-spaceGrotesk text-[5.3vw] leading-[6vw] tracking-wider font font-medium md:text-[4vw] md:leading-tight lg:text-[1.5vw] lg:leading-tight cursor-pointer">
              Aftab{" "}
            </h4>
          </span>
          <span className="overflow-hidden">
            <h4 className="logo-text translate-y-full text-white uppercase select-none font-spaceGrotesk text-[5.3vw] leading-[6vw] tracking-wider font-medium md:text-[4vw] md:leading-tight lg:text-[1.5vw] lg:leading-tight cursor-pointer">
              Shaikh{" "}
            </h4>
          </span>
        </div>

        <div className="links hidden h-full items-center lg:flex">
          <ul className="flex gap-[4.5vw] items-center">
            {links.map((li, index) => (
              <li
                key={index}
                className="link-cover h-full overflow-hidden relative "
              >
                <span className="link-item font-spaceGrotesk uppercase text-white font-bold text-[1.1vw] py-1 relative cursor-pointer hover:text-limeGreen transition-all ease-linear duration-[.3] flex justify-center align-center translate-y-full opacity-0">
                  {li}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="menu flex items-center relative z-40  h-[8vw] md:h-[6vw] lg:hidden"
          onClick={handleMenu}
        >
          <div className="stick-cover h-full flex flex-col items-center w-[11vw] justify-center relative z-20 overflow-hidden md:w-[9vw] ">
            <div className="stick stick1 h-[1vw] bg-zinc-100 w-[6.5vw] absolute top-0 left-0 md:w-[4.5vw] md:h-[.8vw]"></div>
            <div className="stick stick2 h-[1vw]  bg-zinc-100 w-full md:h-[.8vw]"></div>
            <div className="stick stick3 h-[1vw] bg-zinc-100 w-[6.5vw] absolute bottom-0 right-0 md:w-[4.5vw] md:h-[.8vw]"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
