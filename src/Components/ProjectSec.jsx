import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Projects from "./Projects";
import DeviceAnimationSetting from "../DeviceAnimationSetting";
import Buttonv1 from "./Buttonv1";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function ProjectSec(props) {
  const isLargeScreen = DeviceAnimationSetting(1024);

  const displayedProjects = props.project.slice(0, 4);
  const isOdd = displayedProjects.length % 2 !== 0;

  useEffect(() => {
    const projectShowcase = document.querySelectorAll(".project-showcase");

    if (isLargeScreen) {
      projectShowcase.forEach((show, index) => {
        show.addEventListener("mouseenter", () => {
          gsap.to(show, {
            outline: "2px solid #A3E635",
            duration: 0.3,
            textShadow: "0px 0px 2px white",
            immediateRender: false,
            overflow: "auto",
          });
        });

        // gsap.to(hoverElem.current, {
        //   width: "100%",
        //   duration: 0.5,
        //   ease: "power2.out",
        // });

        // Hover out
        show.addEventListener("mouseleave", () => {
          gsap.to(show, {
            outline: "none",
            duration: 0.3,
            textShadow: "none",
            immediateRender: false,
            overwrite: "auto",
          });
        });
      });
    }

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

    gsap.to(".project-show-link", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-container",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });

    return () => {
      if (isLargeScreen) {
        projectShowcase.forEach((show) => {
          show.removeEventListener("mouseenter", null);
          show.removeEventListener("mouseleave", null);
        });
      }
    };
  }, []);
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        className="section page3 h-fit p-[7vw] bg-charcoal relative z-[1] lg:min-h-screen border-b-2 border-line lg:py-[4vw] lg:px-[6vw] flex flex-col gap-10"
      >
        <div className="animated-border h-[1.5px] w-0 bg-line absolute top-0 left-1/2 -translate-x-1/2"></div>
        <h1 className="font-bold font-spaceGrotesk text-[8vw] leading-[10vw] lg:text-[2.5vw] lg:leading-[2.5vw]">
          {"Projects".split("").map((letter, index) => (
            <span key={index} className="animated-word will-change-auto">
              {letter}
            </span>
          ))}
        </h1>

        <div
          className={`project-container h-fit w-full grid grid-cols-1  ${
            isOdd ? "place-items-center" : ""
          } gap-10 lg:grid-cols-2`}
        >
          {displayedProjects.map((pro, index) => (
            <Projects
              key={index}
              object={pro}
              index={index}
              fullObj={displayedProjects}
              isOdd={isOdd}
            />
          ))}
        </div>

        <div className="button-container w-full h-fit flex justify-center">
          <Link to={"/projects"}>
            <Buttonv1
              text={"More"}
              icon={<GoArrowUpRight />}
              download={false}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectSec;
