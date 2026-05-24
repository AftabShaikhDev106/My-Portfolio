import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const [click, setClick] = useState(true);
  const [clickable, setClickable] = useState(true);
  const tl = gsap.timeline({ paused: true });
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

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

    let links = document.querySelectorAll(".link");

    links.forEach((link, index) => {
      link.addEventListener("click", () => {
        navUp();
      });
    });
  }, []);

  const navDown = async () => {
    setClickable(false);
    tl.clear(); // Clear any existing animations to avoid stacking

    let stickCon = document.querySelector(".stick-cover");
    let stick1 = document.querySelector(".stick1");
    let stick2 = document.querySelector(".stick2");

    let stickStyle1 = window.getComputedStyle(stick1);
    let stickConStyle = window.getComputedStyle(stickCon);

    let stick1HalfWidth = parseInt(stickStyle1.width) / 2;
    let stick1HalfHeight = parseInt(stickStyle1.height) / 2;

    let stickStyle2 = window.getComputedStyle(stick2);
    let stick2HalfWidth = parseInt(stickStyle2.width) / 2;
    let stick2HalfHeight = parseInt(stickStyle2.height) / 2;

    tl.to(".stick2", {
      x: "-105%",
      duration: 0.2,
    });

    tl.to(
      ".stick1",
      {
        top: `calc(50% - ${stick1HalfHeight}px)`,
        left: `calc(50% - ${stick1HalfWidth}px)`,
      },
      "b"
    );

    tl.to(
      ".stick3",
      {
        bottom: `calc(50% - ${stick1HalfHeight}px)`,
        right: `calc(50% - ${stick1HalfWidth}px)`,
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
        onComplete: () => setClickable(true),
      },
      "d"
    );

    setClick(false);
    tl.play();
  };

  const navUp = async () => {
    setClickable(false);
    tl.clear(); // Clear any existing animations to avoid stacking

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
        top: 0,
        left: 0,
      },
      "c"
    );

    tl.to(
      ".stick3",
      {
        bottom: 0,
        right: 0,
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
      onComplete: () => {
        setClickable(true);
        setClick(true);
      },
    });

    tl.play();
  };

  const handleMenu = async () => {
    if (clickable) {
      if (click) {
        navDown();
      } else {
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
              <Link key={index} to={link.path} className=" w-full ">
                <div className="link py-3 h-fit w-full flex items-center gap-3">
                  <h4 className={`font-spaceGrotesk text-[15vw] pl-8 w-full flex items-center leading-none tracking-tight overflow-hidden md:text-[13vw] ${location.pathname === link.path ? 'text-limeGreen' : 'text-white'}`}>
                    {link.name.split("").map((li, index) => (
                      <span
                        key={index}
                        className="link-span bright-sm translate-y-full py-2"
                      >
                        {li}
                      </span>
                    ))}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full h-fit flex items-center  p-[10vw] border-t-2 border-gray">
            <div className="profile-con w-full h-fit flex items-center overflow-hidden">
              <div className="personal-info-image h-[18vw] aspect-square bg-slate-50 rounded-full">
                <div className="img h-full w-full"></div>
              </div>
              <div className="content w-[80%] h-full flex flex-col items-start justify-center pl-[5vw]">
                <h4 className="font-bold font-spaceGrotesk text-[5.5vw] h-fit leading-none bright-sm text-white overflow-hidden">
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
        className=" py-[7vw] w-full px-[8vw] relative z-[2] flex items-center justify-between md:py-[2vw] md:px-[4vw] lg:py-[1vw] lg:px-[6vw] lg:z-[3]"
        data-scroll
        data-scroll-section
      >
        <Link to={"/"} className="logo flex flex-col">
          <span className="overflow-hidden">
            <h4 className="logo-text translate-y-full bright-sm text-white uppercase select-none font-spaceGrotesk text-[5.3vw] leading-[6vw] tracking-wider font-medium md:text-[4vw] md:leading-tight lg:text-[1.5vw] lg:leading-tight cursor-pointer">
              Aftab{" "}
            </h4>
          </span>
          <span className="overflow-hidden">
            <h4 className="logo-text translate-y-full bright-sm text-white uppercase select-none font-spaceGrotesk text-[5.3vw] leading-[6vw] tracking-wider font-medium md:text-[4vw] md:leading-tight lg:text-[1.5vw] lg:leading-tight cursor-pointer">
              Shaikh{" "}
            </h4>
          </span>
        </Link>

        <div className="links hidden h-full items-center lg:flex">
          <ul className="flex gap-[4.5vw] items-center">
            {links.map((li, index) => (
              <li
                key={index}
                className="link-cover h-full overflow-hidden relative"
              >
                <Link
                  to={li.path}
                  className="h-full flex items-center justify-center"
                  onMouseEnter={() => {
                    const isActive = location.pathname === li.path;
                    gsap.to(".mouse", {
                      scale: 4,
                      backgroundColor: isActive ? "#A3E635" : "white",
                      mixBlendMode: "normal",
                      duration: 0.3,
                      immediateRender: false,
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(".mouse", {
                      scale: 1,
                      backgroundColor: "white",
                      mixBlendMode: "difference",
                      duration: 0.3,
                      immediateRender: false,
                    });
                  }}
                >
                  <span className={`link-item bright-sm font-spaceGrotesk uppercase font-bold text-[1.1vw] py-1 relative cursor-pointer transition-colors ease-linear duration-300 flex justify-center align-center translate-y-full opacity-0 ${location.pathname === li.path ? 'text-limeGreen hover:text-white' : 'text-white hover:text-limeGreen'}`}>
                    {li.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="menu flex items-center relative z-40  h-[8vw] md:h-[6vw] lg:hidden"
          onClick={handleMenu}
        >
          <div className="stick-cover h-full flex flex-col items-center w-[11vw] justify-center relative z-20 overflow-hidden md:w-[9vw]">
            <div className="stick stick1 h-[1vw] bg-zinc-100 w-1/2 absolute top-0 left-0 md:h-[.8vw] origin-center"></div>
            <div className="stick stick2 h-[1vw]  bg-zinc-100 w-full md:h-[.8vw]"></div>
            <div className="stick stick3 h-[1vw] bg-zinc-100 w-1/2 absolute bottom-0 right-0 md:h-[.8vw] origin-center"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
