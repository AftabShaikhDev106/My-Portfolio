import React, { useEffect, useState } from "react";
import Buttonv1 from "./Buttonv1";
import { MdDownload } from "react-icons/md";
import gsap from "gsap";
import heroImage from "../images/hero-image.png";

function HeroPage(props) {
  const [random, setRandom] = useState(0);
  const oneliner = [
    "Build Elegant Solutions",
    "Craft Effective Interfaces",
    "Design Dynamic Websites",
    "Create Innovative Experiences",
    "Shape Seamless Interactions",
    "Code User Journeys",
    "Develop Cutting-Edge Platforms",
    "Transform Digital Landscapes",
    "Enhance Web Performance",
    "Engineer Engaging Experiences",
  ];

  useEffect(() => {
    const randomNum = () => {
      setRandom(Math.floor(Math.random() * oneliner.length));
    };

    randomNum();
  }, []);

  useEffect(() => {
    console.log(props.complete);

    gsap.set(".oneliner", {
      y: "100",
      opacity: 0,
    });
    gsap.set(".cv-btn button", {
      scale: 0,
      opacity: 0,
    });

    if (props.complete) {
      const tl = gsap.timeline();

      tl.to(
        ".hero-image",
        {
          height: "100%",
          duration: 1,
        },
        "a"
      );

      tl.to(
        ".oneliner",
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 1,
        },
        "a"
      );

      tl.to(".cv-btn button", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.inOut",
      });
    }
  }, [props.complete]);

  return (
    <>
      <div className="section page1 flex flex-col justify-end px-[6vw] w-full md:justify-center lg:px-[4vw]">
        <div className="top-content h-[35vh] w-full  flex flex-col justify-center gap-5 lg:h-[80vh] lg:z-[2] lg:justify-between ">
          <div className="top-dialogue h-fit w-full">
            {oneliner[random].split(" ").map((line, index) => (
              <h4 className="h-fit w-full overflow-hidden">
                <span
                  key={index}
                  className={`oneliner oneliner-${
                    index + 1
                  } block font-spaceGrotesk text-[8vw] leading-[8.5vw] uppercase text-white tracking-wider font-medium md:text-[6vw] md:leading-[6.5vw] lg:text-[5vw] lg:leading-[5vw]`}
                >
                  {line}
                </span>
              </h4>
            ))}
          </div>
          <div className="cv-btn h-fit w-full flex justify-end">
            <Buttonv1 text={"Download CV"} icon={<MdDownload />} />
          </div>
        </div>
        <div className="bottom-content h-[55vh] w-full relative flex items-end lg:absolute lg:top-0 lg:h-full lg:left-0 lg:z-[1]">
          <div className="image hero-image relative h-0 w-full bottom-0 ">
            <img
              className="w-full h-full object-cover object-top"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
