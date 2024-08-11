import React, { useEffect, useState } from "react";
import Buttonv1 from "./Buttonv1";
import { MdDownload } from "react-icons/md";
import gsap from "gsap";
import heroImage from "../images/hero-image.png";

function HeroPage({ complete }) {
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

  // Set a random oneliner on mount
  useEffect(() => {
    setRandom(Math.floor(Math.random() * oneliner.length));
  }, [oneliner.length]);

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".oneliner", { y: "100%", opacity: 0 })
      .set(".cv-btn button", { scale: 0, opacity: 0 })
      .set(".hero-image", { height: "0%" });

    if (complete) {
      tl.to(".hero-image", { height: "100%", duration: 1 }, "a")
        .to(".oneliner", { y: 0, opacity: 1, stagger: 0.03, duration: 1 }, "a")
        .to(".cv-btn button", {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.inOut",
        });
    }

    return () => {
      tl.kill(); // Clean up the timeline on component unmount
    };
  }, [complete]);

  return (
    <div
      className="section page1 h-[100svh] relative flex flex-col justify-between px-[6vw] w-full md:justify-center"
      data-scroll
      data-scroll-speed="-.6"
    >
      <div className="top-content h-[35svh] w-full flex flex-col justify-center gap-5 lg:h-[60vh] lg:z-[2] lg:justify-between">
        <div className="top-dialogue h-fit w-full">
          {oneliner[random].split(" ").map((word, index) => (
            <h4 key={index} className="h-fit w-full overflow-hidden">
              <span
                className={`oneliner oneliner-${
                  index + 1
                } block font-spaceGrotesk text-[8vw] leading-[8.5vw] uppercase text-white tracking-wider font-medium md:text-[6vw] md:leading-[6.5vw] lg:text-[4.5vw] lg:leading-[4.5vw]`}
              >
                {word}
              </span>
            </h4>
          ))}
        </div>
        <div className="cv-btn h-fit w-full flex justify-end">
          <Buttonv1 text="Download CV" icon={<MdDownload />} />
        </div>
      </div>
      <div className="bottom-content h-[65svh] w-full relative flex items-end lg:absolute lg:top-0 lg:h-full lg:left-0 lg:z-[1]">
        <div className="image hero-image relative w-full bottom-0 z-[2] flex justify-center items-end">
          <img
            className="w-full h-full object-cover object-top lg:w-[70%]"
            src={heroImage}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
