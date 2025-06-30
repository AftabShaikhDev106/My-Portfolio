import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

import aboutImage from "../images/about-page.jpeg";

function AboutHero(props) {
  useEffect(() => {
    const isMobile = 600;
    const tl = gsap.timeline();

    if (props.complete) {
      tl.fromTo(
        ".image",
        { width: 0, height: 0 },
        {
          width: `${window.innerWidth <= isMobile ? "90%" : "50%"}`,
          height: "70%",
          duration: 1,
        }
      )
        .fromTo(
          ".normal-text-about",
          { width: 0, opacity: 0 },
          {
            width: "100%",
            duration: 1,
            opacity: 1,
          },
          "a"
        )
        .fromTo(
          ".stroke-about-text ",
          { width: 0, opacity: 0 },
          {
            width: "100%",
            duration: 1,
            opacity: 1,
          },
          "a"
        )
        .fromTo(
          ".danda",
          {
            width: 0,
            duration: 1,
            opacity: 0,
          },
          {
            width: "20vw",
            duration: 1,
            opacity: 1,
          }
        );
    }

    return () => {};
  }, [props.complete]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.6"
        className="section about-page1 w-full h-[100svh] z-[2] relative lg:h-[100vh] flex flex-col py-[3vw] items-start select-none pointer-events-none lg:justify-center lg:items-center bg-darkGray"
      >
        <div className="h-fit flex flex-col justify-start mt-20 text-white font-spaceGrotesk font-medium tracking-tighter relative z-[1] text-center lg:justify-center pl-6 lg:pl-0 lg:mt-0">
          <h1 className="normal-text-about text-[22vw] leading-[22vw] lg:text-[15vw] lg:leading-[14vw] whitespace-nowrap  w-0 opacity-0 overflow-hidden">
            About
          </h1>{" "}
          <h1 className="normal-text-about flex items-center gap-10 text-[22vw] leading-[22vw] lg:text-[15vw] lg:leading-[14vw] whitespace-nowrap  w-0 opacity-0 overflow-hidden">
            <span className="danda inline-block w-[0]"></span>Me{" "}
          </h1>
        </div>

        <div className="h-fit flex flex-col justify-start mt-20 absolute font-spaceGrotesk font-medium tracking-tighter z-[3] text-center lg:justify-center pl-6 lg:pl-0 lg:mt-0">
          <h1 className="stroke-about-text text-[22vw] leading-[22vw] lg:text-[15vw] lg:leading-[14vw] whitespace-nowrap  w-0 opacity-0 overflow-hidden">
            About
          </h1>{" "}
          <h1 className="stroke-about-text flex items-center gap-10 text-[22vw] leading-[22vw] lg:text-[15vw] lg:leading-[14vw] whitespace-nowrap w-0 opacity-0 overflow-hidden">
            <span className="danda inline-block w-0"></span>Me{" "}
          </h1>
        </div>

        <div className="image absolute bottom-0 right-0 z-[2] w-[0%] h-[0%]  aspect-square rounded-lg overflow-hidden ">
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={aboutImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutHero;
