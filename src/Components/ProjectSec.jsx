import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import logo1 from "../images/brand-logo-1.png";
import projectImage1 from "../images/project-1-image.webp";
import projectHover1 from "../images/project-1-hover.png";
import Projects from "./Projects";
import DeviceAnimationSetting from "../DeviceAnimationSetting";
import Buttonv1 from "./Buttonv1";
import { GoArrowUpRight } from "react-icons/go";

function ProjectSec() {
  const isLargeScreen = DeviceAnimationSetting(1024);

  const projects = [
    {
      company: "Yousco Trading LLC",
      type: "Client",
      image: projectImage1,
      hoverImage: projectHover1,
      link: "https://www.youscotrading.com/",
    },
  ];

  const isOdd = projects.length % 2 !== 0;

  const hoverElem = useRef([]);

  useEffect(() => {
    const projectShowcase = document.querySelectorAll(".project-showcase");

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
        },
        stagger: 0.03,
        color: "white",
        overwrite: "auto",
        textShadow: "0px 0px 5px white",
      }
    );

    gsap.to(".animated-border", {
      scrollTrigger: {
        scroller: "body",
        trigger: ".animated-border",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 2,
      },
      width: "100%",
      ease: "power2.out",
      duration: 1,
    });

    if (isLargeScreen) {
      projectShowcase.forEach((show, index) => {
        show.addEventListener("mouseenter", () => {
          gsap.to(hoverElem.current[index], {
            width: "100%",
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(show, {
            outline: "2px solid white",
            duration: 0,
            textShadow: "0px 0px 2px white",
          });
        });

        // gsap.to(hoverElem.current, {
        //   width: "100%",
        //   duration: 0.5,
        //   ease: "power2.out",
        // });

        // Hover out
        show.addEventListener("mouseleave", () => {
          gsap.to(hoverElem.current[index], {
            width: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(show, {
            outline: "none",
            duration: 0,
            textShadow: "none",
          });
        });
      });
    }

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
      <div className="section page3 h-fit p-[7vw] bg-charcoal relative z-[1] lg:min-h-screen lg:py-[4vw] lg:px-[6vw] flex flex-col gap-10">
        <div className="animated-border h-[1.5px] w-0 bg-line absolute top-0 left-1/2 -translate-x-1/2"></div>
        <h1 className="font-bold font-spaceGrotesk text-[8vw] leading-[10vw] lg:text-[2.5vw] lg:leading-[2.5vw]">
          {"Projects".split("").map((letter, index) => (
            <span key={index} className="animated-word">
              {letter}
            </span>
          ))}
        </h1>

        <div
          className={`project-container h-fit w-full grid grid-cols-1  ${
            isOdd ? "place-items-center" : ""
          } gap-10 lg:grid-cols-2`}
        >
          {projects.map((pro, index) => (
            <Projects
              key={index}
              object={pro}
              index={index}
              fullObj={projects}
              isOdd={isOdd}
              ref={(el) => el && hoverElem.current.push(el)}
            />
          ))}
        </div>

        <div className="button-container w-full h-fit flex justify-center">
          <Buttonv1 text={"More"} icon={<GoArrowUpRight />} download={false} />
        </div>
      </div>
    </>
  );
}

export default ProjectSec;
