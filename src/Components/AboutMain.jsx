import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

function AboutMain() {
  useEffect(() => {
    gsap.set(".professional h4", {
      x: "-50%",
      opacity: 0,
    });

    gsap.set(".professional p", {
      x: "50%",
      opacity: 0,
    });

    gsap.set(".personal h4", {
      x: "-50%",
      opacity: 0,
    });

    gsap.set(".personal p", {
      x: "50%",
      opacity: 0,
    });

    gsap.to(".professional h4", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".professional h4",
        start: "top 70%",
        end: "end 65%",
        scrub: 2,
      },
      x: "0",
      opacity: 1,
    });

    gsap.to(".professional p", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".professional p",
        start: "top 70%",
        end: "end 65%",
        scrub: 2,
      },
      x: "0",
      opacity: 1,
    });

    gsap.to(".personal h4", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".personal h4",
        start: "top 70%",
        end: "end 65%",
        scrub: 2,
      },
      x: "0",
      opacity: 1,
    });

    gsap.to(".personal p", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".personal p",
        start: "top 70%",
        end: "end 65%",
        scrub: 2,
      },
      x: "0",
      opacity: 1,
    });

    return () => {};
  }, []);

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        className="section about-page2 h-fit flex flex-col justify-center items-center gap-10 border-t-2 border-b-2 border-line bg-darkGray relative z-[2] py-10 px-[6vw]"
      >
        <div className="professional h-fit w-full flex flex-col gap-3 py-5 lg:py-14 lg:block">
          <h4 className="uppercase text-white text-lg font-spaceGrotesk font-semibold lg:text-2xl">
            Profesionally:
          </h4>
          <p className="w-[100%] float-end text-gray text-xl leading-[25px] font-medium font-spaceGrotesk lg:font-semibold lg:leading-[38px] tracking-tight lg:w-[60%] lg:text-3xl">
            <span className=" inline-block w-36"></span>As a front-end
            developer, I excel in crafting smooth, engaging interactions using
            React, GSAP, Framer Motion, and Tailwind CSS. I focus on turning
            ideas into intuitive, visually appealing experiences, constantly
            exploring these tools to deliver dynamic and high-quality web
            solutions.
          </p>
        </div>
        <div className="line-about-con w-full absolute top-1/2 -translate-y-1/2 px-[6vw]">
          <div className="line-about h-[2px] bg-line"></div>
        </div>
        <div className="personal h-fit w-full flex flex-col gap-3 py-5 lg:py-14 lg:block">
          <h4 className="uppercase text-white text-lg font-spaceGrotesk font-semibold lg:text-2xl">
            personally:
          </h4>
          <p className="w-[100%] float-end text-gray text-xl leading-[25px] font-medium font-spaceGrotesk lg:font-semibold lg:leading-[38px] tracking-tight lg:w-[60%] lg:text-3xl">
            <span className=" inline-block w-36"></span>As a BCA (Bachelor of
            Computer Applications) student, I love coding websites and exploring
            new technologies. When I'm not coding, I'm probably wondering why my
            coffee goes cold during late-night sessions (must be the code's
            fault). I enjoy adding a bit of humor to my work—because a good
            laugh makes coding even better!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMain;
