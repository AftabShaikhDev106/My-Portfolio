import React from "react";
import { AiOutlineMobile } from "react-icons/ai";

import { RiDeviceLine } from "react-icons/ri";

import { MdAnimation } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

function AboutSkill() {
  useEffect(() => {
    gsap.set(".left-info h4", {
      width: "100%",
    });

    gsap.set(".skill", {
      scale: 1,
      opacity: 1,
    });

    gsap.from(".left-info h4", {
      scrollTrigger: {
        trigger: ".about-skill-page",
        start: "top 60%",
        end: "bottom 55%",

        scrub: 2,
      },
      width: 0,
    });

    gsap.from(".skill", {
      scrollTrigger: {
        trigger: ".about-skill-page",
        start: "top 60%",
        end: "50% 55%",
        scrub: 2,
      },
      scale: 0,
      opacity: 0,
      stagger: 0.3,
    });
    return () => {};
  }, []);

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        className="section about-skill-page min-h-[100svh] lg:min-h-[70vh] w-full bg-darkGray relative z-[2] p-[6vw] flex flex-col gap-20 lg:flex-row justify-center border-b-2 border-line lg:gap-10"
      >
        <div className="left-info w-full lg:min-h-full lg:w-[60%] overflow-hidden flex flex-col justify-center text-center text-white font-spaceGrotesk font-semibold text-[15vw] lg:text-[8vw] lg:text-start leading-none">
          <h4 className="whitespace-nowrap overflow-hidden">I can help</h4>
          <h4 className="whitespace-nowrap overflow-hidden">
            <span className="inline-block h-10 lg:w-16"></span>
            you with <span className=" text-limeGreen">.</span>
            <span className=" text-limeGreen opacity-75">.</span>
            <span className=" text-limeGreen opacity-50">.</span>
          </h4>
        </div>
        <div className="right-skills  w-full lg:min-h-full lg:w-fit flex justify-center">
          <div className="skill-con w-fit">
            <div className="skill skill-1 bg-line rounded-md gap-3 p-5 lg:gap-5">
              <div className="icon text-[5vw] p-5 bg-darkGray rounded-full lg:text-[1.5vw]">
                <FaCode />
              </div>
              <h4 className="text-white font-spaceGrotesk font-medium text-center text-[2.8vw] leading-[3.2vw] lg:text-[1.2vw] lg:leading-[1.4vw]">
                FrontEnd Development
              </h4>
            </div>
            <div className="skill skill-2 bg-line rounded-md gap-3 p-5 lg:gap-5">
              <div className="icon text-[5vw] p-5 bg-darkGray rounded-full lg:text-[1.5vw]">
                <MdAnimation />
              </div>
              <h4 className="text-white font-spaceGrotesk font-medium text-[2.8vw] leading-[3.2vw] lg:text-[1.2vw] text-center lg:leading-[1.4vw]">
                Smooth Animation
              </h4>
            </div>
            <div className="skill skill-3 bg-line rounded-md gap-3 p-5 lg:gap-5">
              <div className="icon text-[5vw] p-5 bg-darkGray rounded-full lg:text-[1.5vw]">
                <RiDeviceLine />
              </div>
              <h4 className="text-white font-spaceGrotesk font-medium text-[2.8vw] leading-[3.2vw] lg:text-[1.2vw] text-center lg:leading-[1.4vw]">
                Interactive Design
              </h4>
            </div>
            <div className="skill skill-4 bg-line rounded-md gap-3 p-5 lg:gap-5">
              <div className="icon text-[5vw] p-5 bg-darkGray rounded-full lg:text-[1.5vw]">
                <AiOutlineMobile />
              </div>
              <h4 className="text-white font-spaceGrotesk font-medium text-[2.8vw] leading-[3.2vw] lg:text-[1.2vw] text-center lg:leading-[1.4vw]">
                Responsive Experiences
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSkill;
