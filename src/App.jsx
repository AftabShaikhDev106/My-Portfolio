import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from "./useLocoScroll";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import HomeCom from "./Components/HomeCom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaArrowUpLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import AboutCom from "./Components/AboutCom";
import ProjectCom from "./Components/ProjectCom";
import ContactCom from "./Components/ContactCom";
import LocomotiveScroll from "locomotive-scroll";
import ContactSec from "./Components/ContactSec";
import { AnimatePresence } from "framer-motion";
import projectImage1 from "./images/project-1-hover.webp";
import ScrollToTop from "./ScrollToTop";
import HideFooter from "./Components/HideFooter";
import Buttonv1 from "./Components/Buttonv1";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useLocoScroll(true);

  const location = useLocation();

  const [complete, setComplete] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const mouseDets = useRef({ x: 0, y: 0 });
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [clickMenu, setClickMenu] = useState(true);
  const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const projects = [
    {
      company: "Yousco Trading LLC",
      type: "Client",
      image: projectImage1,
      link: "https://www.youscotrading.com/",
    },
  ];

  const socialLinks = {
    Instagram: "https://www.instagram.com/s.af_106/",
    LinkedIn: "www.linkedin.com/in/aftab-shaikh-5364a2322",
    Github: "https://github.com/AftabShaikhDev106",
  };

  const scrollTriggersRef = useRef([]);
  const scrollBackBtn = useRef(null);
  const mouseRef = useRef(null);
  const number = useRef(null);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const tl = gsap.timeline();

  const handleAnimationCompleteLoader = () => {
    setComplete(true);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const killScrollTrigger = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearMatchMedia();
  };

  const createScrollTriggers = () => {
    const tl = gsap.timeline({ paused: true });

    if (location.pathname !== "/contact") {
      scrollTriggersRef.current = [
        ScrollTrigger.create({
          trigger: "nav",
          start: "top -30%",
          end: "bottom -30%",
          scrub: 2,
          immediateRender: false,
          onUpdate: (self) => {
            if (self.progress > 0.5) {
              gsap.to(".second-nav-control", {
                scale: 1,
                opacity: 1,
                immediateRender: false,
                onComplete: () => {
                  tl.clear();
                  tl.to(
                    ".top-lid",
                    {
                      top: "-100%",
                      duration: 2, // Smooth transition
                      ease: "power2.out", // Smooth easing function
                      immediateRender: false,
                    },
                    "a"
                  );
                  tl.to(
                    ".bottom-lid",
                    {
                      bottom: "-100%",
                      duration: 2, // Smooth transition
                      ease: "power2.out", // Smooth easing function
                    },
                    "a"
                  );
                  tl.play();
                },
              });
            } else {
              gsap.to(".second-nav-control", {
                scale: 0,
                opacity: 0,
                immediateRender: false,
                onComplete: () => {
                  tl.clear();
                  tl.to(
                    ".top-lid",
                    {
                      top: 0,
                      duration: 0, // Smooth transition
                      ease: "power2.out", // Smooth easing function
                      immediateRender: false,
                    },
                    "a"
                  );
                  tl.to(
                    ".bottom-lid",
                    {
                      bottom: 0,
                      duration: 0, // Smooth transition
                      ease: "power2.out", // Smooth easing function
                      immediateRender: false,
                    },
                    "a"
                  );
                  tl.play();
                },
              });
            }
          },
        }),
      ];
    }

    if (location.pathname === "/" || location.pathname === "/home") {
      gsap.fromTo(
        ".animated-letters",
        { color: "#1A1A1A", textShadow: "0px 0px 0px transparent" }, // Starting state (color gray)
        {
          color: "white", // Ending state (color white)
          scrollTrigger: {
            scroller: "body",
            trigger: ".animated-letters",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 2,
          },
          stagger: 0.03,
          overwrite: "auto",
          textShadow: "0px 0px 5px white",
        }
      );

      gsap.fromTo(
        ".animated-word",
        { color: "#1A1A1A", textShadow: "0px 0px 0px transparent" },
        {
          scrollTrigger: {
            scroller: "body",
            trigger: ".animated-word",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 2,
            immediateRender: false,
          },
          stagger: 0.03,
          color: "white",
          textShadow: "0px 0px 5px white",
          overwrite: "auto",
        }
      );

      gsap.to(".animated-border", {
        scrollTrigger: {
          scroller: "body",
          trigger: ".animated-border",
          start: "top 80%",
          end: "bottom 70%",
          scrub: 2,
          immediateRender: false,
        },
        width: "100%",
        ease: "power2.out",
        duration: 1,
        overflow: "auto",
      });
    }
  };

  useEffect(() => {
    killScrollTrigger();
    createScrollTriggers();

    console.log("laga");

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 0);

    return () => {
      killScrollTrigger();
    };
  }, [location.pathname]);

  const toggleBigNav = () => {
    if (clickMenu) {
      if (!navOpen) {
        setScrollPosition({
          top: window.scrollY,
          left: window.scrollX,
        });

        killScrollTrigger();
        setIsScrollLocked(!isScrollLocked);
        setNavOpen(!navOpen);
      } else {
        createScrollTriggers();

        setIsScrollLocked(!isScrollLocked);
        setNavOpen(!navOpen);
      }
    }
  };

  useEffect(() => {
    const initializeScroll = () => {
      const element = document.querySelector("#main");
      if (!element) {
        return;
      }
      const scroll = new LocomotiveScroll({
        el: element,
        smooth: true,
        getDirection: true,
        inertia: 1,
      });

      return scroll;
    };

    const onLoad = () => {
      const scroll = initializeScroll();

      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    };

    const cleanup = onLoad();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    const projectShowcase = document.querySelectorAll(".project-showcase");
    const buttons = document.querySelectorAll(".button-v1");

    // Define handlers outside to easily remove them later
    const handleProjectMouseEnter = () => {
      if (mouseRef.current) {
        gsap.to(mouseRef.current, {
          scale: 8,
          backgroundColor: "#A3E635",
          duration: 0.5,
          ease: "power2.out",
          immediateRender: false,
          onStart: () => {
            gsap.set(".mouse-text", {
              scale: 0.13,
              immediateRender: false,
            });

            gsap.to(".mouse-text", {
              opacity: 1,
              duration: 0.3,
              immediateRender: false,
            });
          },
        });
      }
    };

    const handleProjectMouseLeave = () => {
      gsap.to(mouseRef.current, {
        scale: 1,
        backgroundColor: "white",
        duration: 0.5,
        ease: "power2.out",
        immediateRender: false,
        onStart: () => {
          gsap.to(".mouse-text", {
            opacity: 0,
            duration: 0,
            immediateRender: false,
          });
        },
      });
    };

    const handleButtonMouseEnter = () => {
      gsap.to(".mouse", {
        scale: 5,
        duration: 0.5,
        mixBlendMode: "difference",
        immediateRender: false,
      });
    };

    const handleButtonMouseLeave = () => {
      gsap.to(".mouse", {
        scale: 1,
        duration: 0.5,
        mixBlendMode: "normal",
        immediateRender: false,
      });
    };

    // Attach event listeners
    projectShowcase.forEach((show) => {
      show.addEventListener("mouseenter", handleProjectMouseEnter);
      show.addEventListener("mouseleave", handleProjectMouseLeave);
    });

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleButtonMouseEnter);
      btn.addEventListener("mouseleave", handleButtonMouseLeave);
    });

    // Locomotive Scroll initialization
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    if (location.pathname === "/contact") {
      gsap.set(".mouse", {
        scale: 1,
        duration: 0.5,
        mixBlendMode: "normal",
        immediateRender: false,
      });
    }

    // Cleanup event listeners and Locomotive Scroll when component unmounts or path changes
    return () => {
      projectShowcase.forEach((show) => {
        show.removeEventListener("mouseenter", handleProjectMouseEnter);
        show.removeEventListener("mouseleave", handleProjectMouseLeave);
      });

      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleButtonMouseEnter);
        btn.removeEventListener("mouseleave", handleButtonMouseLeave);
      });

      if (scroll) scroll.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    let mainElement = document.querySelector("#main");

    if (isScrollLocked) {
      setClickMenu(false);
      gsap.to(".big-nav", {
        right: 0,
        ease: "expo.out",
        duration: 0.8,
        immediateRender: false,
        onComplete: () => {
          mainElement.style.position = "fixed";
          mainElement.style.top = `-${scrollPosition.top}px`;
          mainElement.style.left = `-${scrollPosition.left}px`;

          tl.to(
            ".line",
            {
              width: "100%",
              immediateRender: false,
            },
            "a"
          );

          tl.to(
            ".cylinder-btn",
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              immediateRender: false,
            },
            "a"
          );

          tl.to(".big-link-span", {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            immediateRender: false,
          });

          tl.to(".count", {
            opacity: 1,
            duration: 0.3,
            immediateRender: false,
            onComplete: () => {
              setClickMenu(true);
            },
          });
        },
      });
    } else {
      // Revert the body styles and scroll to the original position
      mainElement.style.position = "";
      mainElement.style.top = "0";
      mainElement.style.left = "0";
      window.scrollTo(scrollPosition.left, scrollPosition.top);

      setClickMenu(false);

      tl.to(".count", {
        opacity: 0,
        duration: 0.3,
        immediateRender: false,
      });

      tl.to(".big-link-span", {
        y: "100%",
        opacity: 0,
        immediateRender: false,
      });

      tl.to(
        ".line",
        {
          width: 0,
          immediateRender: false,
        },
        "a"
      );

      tl.to(
        ".cylinder-btn",
        {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          immediateRender: false,
        },
        "a"
      );

      tl.to(".big-nav", {
        right: "-100%",
        ease: "expo.out",
        duration: 0.8,
        immediateRender: false,
        onComplete: () => {
          setClickMenu(true);
        },
      });

      ScrollTrigger.refresh();
    }
  }, [isScrollLocked, scrollPosition]);

  useEffect(() => {
    gsap.set(".nav-info", { y: "-100%" });

    gsap.set(".top-lid", {
      top: 0,
    });

    gsap.set(".second-nav-control", {
      scale: 0,
      opacity: 0,
    });

    gsap.set(".bottom-lid", {
      bottom: 0,
    });

    gsap.set(".scroll-back", {
      scale: 0,
      opacity: 0,
    });

    // const tl = gsap.timeline({ paused: true });

    // scrollTriggersRef.current = [
    //   ScrollTrigger.create({
    //     trigger: "nav",
    //     start: "top -30%",
    //     end: "bottom -30%",
    //     scrub: 2,
    //     immediateRender: false,
    //     onUpdate: (self) => {
    //       if (self.progress > 0.5) {
    //         gsap.to(".second-nav-control", {
    //           scale: 1,
    //           opacity: 1,
    //           immediateRender: false,
    //           onComplete: () => {
    //             tl.clear();
    //             tl.to(
    //               ".top-lid",
    //               {
    //                 top: "-100%",
    //                 duration: 2,
    //                 ease: "power2.out",
    //               },
    //               "a"
    //             );
    //             tl.to(
    //               ".bottom-lid",
    //               {
    //                 bottom: "-100%",
    //                 duration: 2,
    //                 ease: "power2.out",
    //               },
    //               "a"
    //             );

    //             tl.play();
    //           },
    //         });
    //       } else {
    //         gsap.to(".second-nav-control", {
    //           scale: 0,
    //           opacity: 0,
    //           immediateRender: false,
    //           onComplete: () => {
    //             tl.clear();
    //             tl.to(
    //               ".top-lid",
    //               {
    //                 top: 0,
    //                 duration: 0,
    //                 ease: "power2.out",
    //               },
    //               "a"
    //             );
    //             tl.to(
    //               ".bottom-lid",
    //               {
    //                 bottom: 0,
    //                 duration: 0,
    //                 ease: "power2.out",
    //               },
    //               "a"
    //             );
    //             tl.to(".eye-cover", {
    //               x: 0,
    //               y: 0,
    //               duration: 0,
    //               ease: "power2.out",
    //             });

    //             tl.play();
    //           },
    //         });
    //       }
    //     },
    //   }),
    // ];

    gsap.to(".scroll-back", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".scroll-back",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 2,
      },
      scale: 1,
      opacity: 1,
      immediateRender: false,
    });

    const handleMouseMove = (e) => {
      mouseDets.current = { x: e.clientX, y: e.clientY };

      gsap.to(mouseRef.current, {
        x: `${e.clientX - 6}px`,
        y: `${e.clientY - 6 + window.scrollY}px`,
        ease: "expo.out",
        opacity: 1,
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mouseRef.current, {
        opacity: 0,
        ease: "expo.out",
        immediateRender: false,
      });
    };

    const handleScroll = () => {
      gsap.to(mouseRef.current, {
        y: `${mouseDets.current.y - 6 + window.scrollY}px`,
        ease: "expo.out",
        overwrite: "auto",
        immediateRender: false,
      });
    };

    const main = document.querySelector(".main");
    main.addEventListener("mousemove", handleMouseMove);
    main.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    const linkItems = document.querySelectorAll(".link-cover");
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

        // gsap.to(mouseRef.current, {
        //   scale: 10,
        //   duration: 0.5,
        //   immediateRender: false,
        // });

        gsap.to(item, {
          x: gsap.utils.interpolate(-20, 20, rangeX),
          y: gsap.utils.interpolate(-20, 20, rangeY),
          fontWeight: 700,
          overwrite: "auto",
          immediateRender: false,
        });
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(".link-cover", {
          zIndex: 50,
          immediateRender: false,
          duration: 0,
        });

        gsap.to(mouseRef.current, {
          scale: 10,
          duration: 0.5,
          overwrite: "auto",
          immediateRender: false,
        });

        gsap.to(mouseRef.current, {
          zIndex: 3,
          duration: 0,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(mouseRef.current, {
          scale: 1,
          duration: 0.5,
          overwrite: "auto",
          immediateRender: false,
        });

        gsap.to(mouseRef.current, {
          zIndex: 70,
          duration: 0,
        });

        gsap.to(".link-cover", {
          zIndex: 1,
          immediateRender: false,
          duration: 0,
        });

        gsap.to(item, {
          x: 0,
          y: 0,
          ease: "elastic.out",
          duration: 1.5,
          overwrite: "auto",
          immediateRender: false,
        });
      });
    });

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
      main.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      // scrollTriggersRef.current.forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (complete) {
      ScrollTrigger.refresh(); // Refresh ScrollTrigger after layout is complete
    }
  }, [complete]);

  useEffect(() => {
    let circleBtn = document.querySelector(".second-nav-control");
    let btnText = document.querySelector(".eye-cover");

    const handleMouseLeave = () => {
      gsap.to(circleBtn, {
        scale: 1,
        immediateRender: false,
      });

      gsap.to(btnText, {
        x: 0,
        y: 0,
        ease: "elastic.out",
        duration: 1.5,
        immediateRender: false,
      });

      gsap.to(circleBtn, {
        x: 0,
        y: 0,
        ease: "elastic.out",
        duration: 1.5,
        immediateRender: false,
      });
    };

    const handleMouseMove = (e) => {
      gsap.to(circleBtn, {
        scale: 1.2,
        immediateRender: false,
      });

      const dims = circleBtn.getBoundingClientRect();
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

      gsap.to(btnText, {
        x: lerp(-10, 10, rangeX),
        y: lerp(-10, 10, rangeY),
        immediateRender: false,
      });

      gsap.to(circleBtn, {
        x: lerp(-20, 20, rangeX),
        y: lerp(-20, 20, rangeY),
        immediateRender: false,
      });
    };

    circleBtn.addEventListener("mousemove", handleMouseMove);
    circleBtn.addEventListener("mouseleave", handleMouseLeave);

    const bigLinks = document.querySelectorAll(".big-links");
    const tl = gsap.timeline({ paused: true });

    bigLinks.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        number.current.innerText = index + 1;
      });

      link.addEventListener("click", () => {
        setIsScrollLocked(false);
        setNavOpen(false);
        createScrollTriggers();
      });
    });

    return () => {
      circleBtn.removeEventListener("mousemove", handleMouseMove);
      circleBtn.removeEventListener("mouseleave", handleMouseLeave);

      bigLinks.forEach((link) => {
        link.addEventListener("mouseenter", null);
        link.addEventListener("click", null);
      });

      killScrollTrigger();
    };
  }, []);

  return (
    <>
      <div
        ref={mouseRef}
        className="mouse h-3 w-3 scale-1 opacity-0 hidden bg-white z-[70] absolute rounded-full lg:flex justify-center items-center select-none pointer-events-none origin-center transform translate-z-0 transition-transform duration-300 ease-out backface-hidden"
      >
        <div className="mouse-text bright-sm font-spaceGrotesk text-white origin-center font-semibold text-[1.2vw] opacity-0 leading-none ">
          Visit
        </div>
      </div>

      <div className="big-nav z-50 h-screen w-full fixed top-0 -right-full hidden lg:flex justify-center items-center bg-charcoal p-20 will-change-[transform,opacity]">
        <div className="count absolute p-5 flex gap-2 opacity-0">
          <span className="static-zero text-[50vw] font-spaceGrotesk text-line leading-none font-extrabold">
            0
          </span>
          <span
            ref={number}
            className="change-num text-[50vw] font-spaceGrotesk text-line leading-none font-extrabold"
          >
            1
          </span>
        </div>
        <div className="cover-container h-full w-full">
          <ul className="big-nav-ul h-full w-full flex flex-col justify-center">
            {links.map((li, index) => (
              <Link key={index} to={li.path} className="h-[20%]">
                <li
                  className={`big-links h-full w-full border-gray flex justify-between relative capitalize items-center pl-12 cursor-pointer overflow-hidden text-gray `}
                >
                  <div className="line bg-gray h-[2px] w-0 absolute bottom-0 right-0 rounded-3xl"></div>

                  <h1 className=" font-spaceGrotesk font-bold text-[5vw] leading-none">
                    {li.name.split("").map((letter, index) => (
                      <span className="big-link-span opacity-0" key={index}>
                        {letter}
                      </span>
                    ))}
                  </h1>

                  <div className="cylinder-btn  relative overflow-hidden border-2 border-inherit px-7 py-2 rounded-full text-[1.5vw] ">
                    <GoArrowRight />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={toggleBigNav}
        className="second-nav-control bg-charcoal fixed top-[4.3vw] hidden right-[4.6vw] cursor-pointer items-center justify-center z-[51] box-content h-[8vw] aspect-square overflow-hidden rounded-full py-4 px-4 will-change-[transform,opacity] shadow-[0_0_30px_8px_rgba(0,0,0,0.5)] md:h-[6vw] lg:top-[3vw] lg:right-[3vw] lg:flex lg:box-content lg:h-[3vw] active:bg-charcoal"
      >
        <div className="top-lid absolute h-1/2 w-full bg-charcoal z-10"></div>
        <div className="eye-ball overflow-hidden bg-white h-full w-full aspect-square bright-lg rounded-full flex justify-center items-center">
          <div className="eye-cover w-1/2 h-1/2 origin-center bg-charcoal rounded-full"></div>
        </div>
        <div className="bottom-lid absolute h-1/2 w-full bg-charcoal z-10"></div>
      </div>

      <div
        className="scroll-back lg:hidden h-16 w-16 bg-charcoal fixed rounded-full bottom-5 right-5 z-20 flex justify-center items-center text-white font-spaceGrotesk text-lg shadow-[0_0_30px_8px_rgba(0,0,0,0.5)]"
        onClick={scrollUp}
      >
        <FaArrowUpLong />
      </div>

      <div
        id="main"
        ref={scrollBackBtn}
        className={`main ${
          complete ? "h-fit" : "h-[100svh]"
        } w-full relative bg-darkGray overflow-hidden ${
          complete ? "lg:h-fit" : "lg:h-[100vh] will-change-transform"
        } `}
        data-scroll
        data-scroll-section
      >
        <Loader complete={handleAnimationCompleteLoader} />
        <Navbar complete={complete} />
        <HideFooter />

        <AnimatePresence mode="wait">
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <HomeCom
                  complete={complete}
                  mouseRef={mouseRef}
                  project={projects}
                />
              }
            ></Route>
            <Route
              path="/about"
              element={<AboutCom mouseRef={mouseRef} complete={complete} />}
            ></Route>
            <Route
              path="/projects"
              element={
                <ProjectCom
                  project={projects}
                  complete={complete}
                  mouseRef={mouseRef}
                />
              }
            ></Route>
            <Route
              path="/contact"
              element={<ContactCom complete={complete} social={socialLinks} />}
            ></Route>
          </Routes>
        </AnimatePresence>
        {location.pathname !== "/contact" && (
          <ContactSec social={socialLinks} />
        )}
      </div>
    </>
  );
}

export default App;
