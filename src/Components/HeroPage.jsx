import React, { useEffect } from "react";
import Buttonv1 from "./Buttonv1";
import { MdDownload } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../images/hero-suit.png";

gsap.registerPlugin(ScrollTrigger);

function HeroPage({ complete }) {
  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".cv-btn button", { scale: 0, opacity: 0 })
      .set(".hero-image", { height: "0%" })
      .set(".hero-desc", { y: 20, opacity: 0 });

    let handleWheel, handleTouchStart, handleTouchMove, updateMarquee;

    if (complete) {
      tl.to(
        ".hero-image",
        { height: "100%", duration: 1, ease: "power2.out" },
        "a"
      )
        .to(
          ".cv-btn button",
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.inOut",
          },
          "a"
        )
        .to(
          ".hero-desc",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "a+=0.2"
        );

      // Infinite Marquee Animation (Ticker-based for flawless infinite reverse)
      let config = { speed: 0.028 }; // Default speed (Left to Right)
      let xPos = -50;
      
      updateMarquee = () => {
        xPos += config.speed * gsap.ticker.deltaRatio();
        
        // Wrap seamlessly
        if (xPos >= 0) xPos -= 50;
        else if (xPos <= -50) xPos += 50;
        
        gsap.set(".marquee-content", { xPercent: xPos });
      };

      gsap.ticker.add(updateMarquee);

      // Handle scroll direction to reverse marquee
      const handleDirection = (dir) => {
        // dir > 0 means scrolling down, dir < 0 means scrolling up
        if (dir > 0) {
          gsap.to(config, { speed: -0.028, duration: 0.25 });
        } else if (dir < 0) {
          gsap.to(config, { speed: 0.028, duration: 0.25 });
        }
      };

      handleWheel = (e) => handleDirection(e.deltaY);

      let lastTouchY = 0;
      handleTouchStart = (e) => {
        lastTouchY = e.touches[0].clientY;
      };
      handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        handleDirection(lastTouchY - currentY);
        lastTouchY = currentY;
      };

      window.addEventListener("wheel", handleWheel);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      tl.kill();
      if (updateMarquee) gsap.ticker.remove(updateMarquee);
      gsap.killTweensOf(".marquee-content");

      if (handleWheel) window.removeEventListener("wheel", handleWheel);
      if (handleTouchStart)
        window.removeEventListener("touchstart", handleTouchStart);
      if (handleTouchMove)
        window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [complete]);

  return (
    <div
      className="section page1 h-[100svh] relative z-[1] bg-darkGray flex flex-col justify-between px-[6vw] w-full md:justify-center will-change-transform overflow-hidden"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
    >
      {/* Filled Marquee - Behind Image (z-[1]) */}
      <div className="absolute bottom-[20%] md:bottom-[15%] lg:bottom-[10%] left-0 w-full z-[1] whitespace-nowrap flex pointer-events-none opacity-80">
        <div className="marquee-content flex w-max">
          <h1 className="text-[15vw] md:text-[10vw] font-spaceGrotesk uppercase font-bold text-white tracking-wider pr-4">
            FRONTEND DEVELOPER &bull; FRONTEND DEVELOPER &bull; FRONTEND
            DEVELOPER &bull;
          </h1>
          <h1 className="text-[15vw] md:text-[10vw] font-spaceGrotesk uppercase font-bold text-white tracking-wider pr-4">
            FRONTEND DEVELOPER &bull; FRONTEND DEVELOPER &bull; FRONTEND
            DEVELOPER &bull;
          </h1>
        </div>
      </div>

      {/* Hollow Marquee - In Front of Image (z-[3]) */}
      <div className="absolute bottom-[20%] md:bottom-[15%] lg:bottom-[10%] left-0 w-full z-[3] whitespace-nowrap flex pointer-events-none opacity-80">
        <div className="marquee-content flex w-max">
          <h1
            className="text-[15vw] md:text-[10vw] font-spaceGrotesk uppercase font-bold text-transparent tracking-wider pr-4"
            style={{ WebkitTextStroke: "2px white" }}
          >
            FRONTEND DEVELOPER &bull; FRONTEND DEVELOPER &bull; FRONTEND
            DEVELOPER &bull;
          </h1>
          <h1
            className="text-[15vw] md:text-[10vw] font-spaceGrotesk uppercase font-bold text-transparent tracking-wider pr-4"
            style={{ WebkitTextStroke: "2px white" }}
          >
            FRONTEND DEVELOPER &bull; FRONTEND DEVELOPER &bull; FRONTEND
            DEVELOPER &bull;
          </h1>
        </div>
      </div>

      <div className="top-content h-[35svh] w-full flex flex-col justify-center gap-5 lg:h-[60vh] lg:z-[4] lg:justify-between pt-10">
        <div className="top-text-section flex flex-col lg:flex-row justify-between w-full h-full pt-[5vh] lg:pt-[1vh]">
          <div className="flex flex-col lg:flex-row justify-between w-full h-fit gap-4 md:gap-7">
            <div className="left-info text-white/80 font-spaceGrotesk text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] max-w-[90%] lg:max-w-[35%] leading-relaxed flex flex-col gap-4">
              <p className="hero-desc font-medium">
                Creating modern digital experiences through{" "}
                <span className="text-limeGreen">clean</span> design,{" "}
                <span className="text-limeGreen">smooth</span> interactions, and{" "}
                <span className="text-limeGreen">scalable</span> frontend
                architecture.
              </p>
            </div>
            <div className="cv-btn self-end h-fit flex justify-start lg:justify-end">
              <Buttonv1
                text="Download CV"
                icon={<MdDownload />}
                download={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content h-[65svh] w-full relative flex items-end lg:absolute lg:top-0 lg:h-full lg:left-0 lg:z-[2] pointer-events-none">
        <div className="image hero-image relative w-full bottom-0 z-[2] flex justify-center items-end overflow-hidden pointer-events-auto">
          <img
            className="w-full md:w-auto md:h-full object-cover object-top "
            src={heroImage}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
