import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },

      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
};

export default useLocoScroll;
