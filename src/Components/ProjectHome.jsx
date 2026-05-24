import React, { useEffect, useRef, useState } from "react";
import Projects from "./Projects";
import DeviceAnimationSetting from "../DeviceAnimationSetting";
import gsap from "gsap";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaClone } from "react-icons/fa";
import { stagger } from "framer-motion";
import { GiOfficeChair } from "react-icons/gi";

function ProjectHome(props) {
  const hover = useRef(null);
  const [index, setIndex] = useState(0);

  const isOdd = props.project.length % 2 !== 0;
  const isLargeScreen = DeviceAnimationSetting(1024);
  const fullLength = props.project.length;
  const client = props.project.filter((item) => item.type === "Client").length;
  const MyProject = props.project.filter((item) => item.type === "My").length;
  const Clone = props.project.filter((item) => item.type === "Clone").length;
  const Company = props.project.filter((item) => item.type === "Company")
    .length;

  const icon = [
    <AiOutlineAppstore />,
    <FaUserTie />,
    <GiOfficeChair />,
    <AiOutlineAppstore />,
    <FaClone />,
  ];

  const isMobile = 600;

  useEffect(() => {
    let allTypes = document.querySelectorAll(".types");
    allTypes.forEach((type, idx) => {
      type.addEventListener("click", () => {
        hover.current.style.left = `${idx * 20}%`;
        setIndex(idx);
      });
    });

    const projectShowcase = document.querySelectorAll(".project-showcase");

    if (isLargeScreen) {
      projectShowcase.forEach((show, idx) => {
        show.addEventListener("mouseenter", () => {
          gsap.to(show, {
            outline: "2px solid #A3E635",

            textShadow: "0px 0px 2px white",
            immediateRender: false,
            duration: 0.3,
          });
        });

        show.addEventListener("mouseleave", () => {
          gsap.to(show, {
            outline: "none",

            textShadow: "none",
            immediateRender: false,
            duration: 0.3,
          });
        });
      });
    }

    projectShowcase.forEach((show) => {
      show.addEventListener("mouseenter", () => {
        gsap.to(".mouse", {
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
      });

      show.addEventListener("mouseleave", () => {
        gsap.to(".mouse", {
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
      });
    });

    return () => {
      allTypes.forEach((type) => {
        type.removeEventListener("click", null);
      });

      if (isLargeScreen) {
        projectShowcase.forEach((show) => {
          show.removeEventListener("mouseenter", null);
          show.removeEventListener("mouseleave", null);
        });
      }
    };
  }, [index, isLargeScreen]);

  useEffect(() => {
    // Initialize styles immediately on mount to prevent element flash/flicker
    gsap.set(".top-title h1", { width: 0, opacity: 0 });
    gsap.set(".project-line", { width: 0 });
    gsap.set(".bottom-line-panel", { width: 0 });
    gsap.set(".types", { opacity: 0, y: 10 });
    gsap.set(".hover-select", { opacity: 0 });
    gsap.set(".project-show-link", { opacity: 0, y: 15 });

    const tl = gsap.timeline();
    if (props.complete) {
      tl.fromTo(
        ".top-title h1",
        {
          width: 0,
          opacity: 0,
        },
        {
          width: "100%",
          duration: 0.6,
          opacity: 1,
          delay: 0.1,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".project-line",
          {
            width: 0,
          },
          {
            width: "160px",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".bottom-line-panel",
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".types",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".hover-select",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.2,
          },
          "<"
        )
        .fromTo(
          ".project-show-link",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }

    return () => {};
  }, [props.complete]);

  // Animate project cards whenever the selected tab changes
  useEffect(() => {
    if (props.complete) {
      gsap.fromTo(
        ".project-show-link",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  return (
    <div
      data-scroll
      data-scroll-section
      className="section project-page-1 h-fit w-full bg-darkGray px-[6vw] relative z-[2] border-b-2 border-line"
    >
      <div className="top-title text-white font-spaceGrotesk font-medium text-[6vw] p-[6vw] pb-[4vw] leading-none w-full flex flex-col text-start">
        <h1 className="overflow-hidden whitespace-nowrap opacity-0 w-0">
          Innovative Solutions<span className="text-limeGreen">,</span>
        </h1>
        <h1 className="flex items-center gap-2 lg:gap-5 overflow-hidden whitespace-nowrap opacity-0 w-0">
          <span className="project-line inline-block w-0 lg:w-0 h-1 rounded-full bg-white"></span>
          Dynamic Creations
        </h1>
      </div>
      <div className="project-panel h-fit w-full">
        <div className="control-panel h-16 w-full relative">
          <div className="bottom-line-panel h-[.1vw] w-0 absolute bg-line -bottom-[.1vw]"></div>
          <ul className="h-full w-full lg:w-[70%]  flex relative bottom-0">
            <div
              ref={hover}
              className="hover-select absolute h-1 w-[20%] left-0 bottom-0 bg-limeGreen rounded-full transition-all duration-300 ease-in-out opacity-0"
            ></div>
            {["All", "Client", "Company's Project", "My Project"].map(
              (type, i) => (
                <li
                  key={i}
                  className="types w-[20%] h-full cursor-pointer text-sm text-center flex justify-center items-end lg:items-center font-spaceGrotesk text-white lg:text-xl opacity-0 translate-y-2"
                >
                  <h4 className="flex relative mb-2">
                    {window.innerWidth <= isMobile ? icon[i] : type}
                    <sup className=" absolute -top-3  -right-3  ml-1 w4 h-4 lg:w-6 text-line font-semibold text-xs lg:h-6 flex justify-center items-center aspect-square rounded-full">
                      {type === "All" && fullLength}
                      {type === "Client" && client}
                      {type === "Company's Project" && Company}
                      {type === "My project" && MyProject}
                    </sup>
                  </h4>
                </li>
              )
            )}
          </ul>
        </div>
        <div
          className={`project-display h-fit min-h-[100svh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 py-[6vw] gap-10 ${
            isOdd ? "place-items-center" : ""
          }`}
        >
          {index === 0 && props.project.length > 0 ? (
            props.project.map((pro, i) => (
              <Projects
                key={i}
                object={pro}
                index={i}
                fullObj={props.project}
                isOdd={isOdd}
              />
            ))
          ) : index === 1 && client > 0 ? (
            props.project
              .filter((item) => item.type === "Client")
              .map((pro, i) => (
                <Projects
                  key={i}
                  object={pro}
                  index={i}
                  fullObj={props.project}
                  isOdd={isOdd}
                />
              ))
          ) : index === 2 && Company > 0 ? (
            props.project
              .filter((item) => item.type === "Company")
              .map((pro, i) => (
                <Projects
                  key={i}
                  object={pro}
                  index={i}
                  fullObj={props.project}
                  isOdd={isOdd}
                />
              ))
          ) : index === 3 && MyProject > 0 ? (
            props.project
              .filter((item) => item.type === "My")
              .map((pro, i) => (
                <Projects
                  key={i}
                  object={pro}
                  index={i}
                  fullObj={props.project}
                  isOdd={isOdd}
                />
              ))
          ) : index === 4 && Clone > 0 ? (
            props.project
              .filter((item) => item.type === "Clone")
              .map((pro, i) => (
                <Projects
                  key={i}
                  object={pro}
                  index={i}
                  fullObj={props.project}
                  isOdd={isOdd}
                />
              ))
          ) : (
            <h4 className="col-span-2 text-center text-[#222222] text-8xl font-spaceGrotesk font-extrabold">
              Not Here Yet
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectHome;
