import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Loader(props) {
  const counterRef = useRef(null);
  const [done, setDone] = useState(false);
  const delay = 1000; // Delay before starting the counter

  function startCounter() {
    let counterVal = 0;

    function updateCounter() {
      if (counterVal >= 100) {
        setDone(true);
        return;
      }
      counterVal += Math.floor(Math.random() * 10) + 1;
      counterVal = Math.min(counterVal, 100); // Cap the counter at 100

      if (counterRef.current) {
        counterRef.current.textContent = counterVal;
      }

      setTimeout(updateCounter, 200); // Update counter every 200ms
    }
    updateCounter();
  }

  useEffect(() => {
    // GSAP Timeline for animations
    const tl = gsap.timeline();

    // Initial animation settings
    tl.set(".counter", { y: "100%", opacity: 0 })
      .set(".name", { y: "100%", opacity: 0 })
      .to(".counter", { y: "0", opacity: 1, delay: 0.5, duration: 0.5 }, "a")
      .to(
        ".name",
        { y: "0", opacity: 1, delay: 0.5, duration: 0.5, stagger: 0.05 },
        "a"
      );

    return () => tl.kill(); // Clean up the timeline on component unmount
  }, []);

  useEffect(() => {
    if (done) {
      gsap.to(".name", {
        y: "-100%",
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".counter", {
        y: "-100%",
        opacity: 0,
        delay: 0.5,
        onComplete: () => {
          gsap.to(".loader", {
            y: "-100%",
            ease: "ease.inOut",
            onComplete: () => props.complete("Complete"),
          });
        },
      });
    }
  }, [done]);

  useEffect(() => {
    // Start counter after delay
    const timer = setTimeout(startCounter, delay);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div
      className="loader p-8 h-[100svh] w-full fixed top-0 left-0 z-50 flex flex-col gap-x-0.5 justify-between bg-charcoal"
      id="loader"
    >
      <div className="name-holder relative flex flex-col justify-center">
        <div className="name-cover relative flex flex-col justify-center overflow-hidden">
          <h4 className="name text-white font-spaceGrotesk text-[10vw] leading-none uppercase tracking-wider font-semibold h-fit md:text-[6vw] lg:text-[4vw] xl:text-[3.5vw]">
            Aftab
          </h4>
        </div>
        <div className="name-cover relative flex flex-col justify-center overflow-hidden">
          <h4 className="name text-white font-spaceGrotesk text-[10vw] leading-none uppercase tracking-wider font-semibold h-fit md:text-[6vw] lg:text-[4vw] xl:text-[3.5vw]">
            Shaikh
          </h4>
        </div>
      </div>

      <div className="counter-holder flex h-fit justify-end items-center relative overflow-hidden">
        <h4
          className="counter font-spaceGrotesk text-limeGreen font-extrabold text-[30vw] leading-[30vw] md:text-[20vw] md:leading-[20vw] lg:text-[14vw] lg:leading-[14vw]"
          ref={counterRef}
        >
          0
        </h4>
      </div>
    </div>
  );
}

export default Loader;
