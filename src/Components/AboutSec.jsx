import React, { useEffect } from "react";
import AboutImg from "../images/about-img.png";
import gsap from "gsap";
import { Link } from "react-router-dom";
// import loca

function AboutSec() {
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const aboutText =
    "I’m a front-end web developer from India with experience in building responsive and user-friendly websites. I specialize in creating seamless web experiences using various frameworks and libraries, always striving to deliver polished and efficient solutions.";

  useEffect(() => {
    let circleBtn = document.querySelector(".circle-btn");
    let btnText = document.querySelector(".btn-text");
    // let image = document.querySelector(".increase-size-img");

    function handleMouseLeave() {
      gsap.to(".increase-size-img", {
        scale: 1,
      });

      gsap.to(btnText, {
        x: 0,
        y: 0,
        ease: "elastic.out",
        duration: 1.5,
      });

      gsap.to(circleBtn, {
        x: 0,
        y: 0,
        ease: "elastic.out",
        duration: 1.5,
      });
    }

    function handleMouseMove(e) {
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
      });

      gsap.to(circleBtn, {
        x: lerp(-20, 20, rangeX),
        y: lerp(-20, 20, rangeY),
      });
    }

    circleBtn.addEventListener("mouseleave", handleMouseLeave);

    circleBtn.addEventListener("mousemove", handleMouseMove);

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

    return () => {
      circleBtn.removeEventListener("mouseleave", handleMouseLeave);

      circleBtn.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect(() => {

  //   return () => {};
  // }, [location.pathname]);
  return (
    <>
      <div
        className="section page2 p-[7vw] h-fit w-full relative z-[1] overflow-hidden flex flex-col gap-10 md:gap-20 lg:py-[4vw] lg:px-[6vw] lg:gap-14 bg-charcoal rounded-t-lg"
        data-scroll
        data-scroll-section
      >
        <div className="left-info pt-[8vw] w-full lg:pt-[2vw] lg:w-[60%]">
          <h4 className="flex flex-wrap text-center">
            {aboutText.split(" ").map((word, index) => (
              <span
                key={index}
                className="flex ml-1 font-normal font-spaceGrotesk text-[4.5vw] leading-[6.75vw] md:text-[3.5vw] md:leading-[5.25vw] lg:text-[2vw] lg:leading-[2.4vw] lg:ml-2"
              >
                {word.split("").map((letter, index) => (
                  <span key={index} className="animated-letters">
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h4>
        </div>
        <div className="right-image flex justify-end h-[40svh] w-full relative md:h-[50vh] lg:h-[60vh]">
          <div className="image-pos  relative flex flex-col justify-between items-end w-full lg:w-1/2">
            <div className="image w-[85%] h-[85%] rounded-md overflow-hidden border-none lg:w-[90%]">
              <img
                data-scroll
                data-scroll-section
                data-scroll-speed=".09"
                className="increase-size-img h-[120%] w-full object-cover will-change-[transform,opacity]"
                src={AboutImg}
                alt=""
              />
            </div>
            <Link to={"/about"}>
              <button className="circle-btn button absolute z-[1] overflow-hidden bottom-0 left-0 h-[34vw] w-[34vw] bg-darkGray rounded-full md:h-[25vw] md:w-[25vw] lg:w-[10vw] lg:h-[10vw] will-change-transform">
                <h4 className="btn-text bright-sm text-white text-[5vw] leading-[5.3vw] font-medium tracking-wide md:text-[4vw] md:leading-[4.3vw] lg:text-[1.5vw] lg:leading-[1.5vw]">
                  About <br />
                  Me
                </h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSec;
