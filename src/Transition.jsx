import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

const Transition = (Component) => {
  return (props) => {
    const location = useLocation();
    const [showFirstAnimation, setShowFirstAnimation] = useState(true);
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const [prevComponent, setPrevComponent] = useState(null);

    useEffect(() => {
      let scrollInstance;

      const projectShowcase = document.querySelectorAll(".project-showcase");
      const buttons = document.querySelectorAll(".button-v1");

      const handleProjectMouseEnter = () => {
        if (props.mouseRef.current) {
          gsap.to(props.mouseRef.current, {
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
        }
      };

      const handleProjectMouseLeave = () => {
        gsap.to(props.mouseRef.current, {
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
      };

      const handleButtonMouseEnter = () => {
        gsap.to(".mouse", {
          scale: 5,
          duration: 0.5,
          mixBlendMode: "difference",
          immediateRender: false,
        });
      };

      const handleButtonMouseLeave = () => {
        gsap.to(".mouse", {
          scale: 1,
          duration: 0.5,
          mixBlendMode: "normal",
          immediateRender: false,
        });
      };

      // Attach event listeners
      projectShowcase.forEach((show) => {
        show.addEventListener("mouseenter", handleProjectMouseEnter);
        show.addEventListener("mouseleave", handleProjectMouseLeave);
      });

      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", handleButtonMouseEnter);
        btn.addEventListener("mouseleave", handleButtonMouseLeave);
      });

      if (location.pathname === "/contact") {
        gsap.set(".mouse", {
          scale: 1,
          duration: 0.5,
          mixBlendMode: "normal",
          immediateRender: false,
        });
      }

      if (isAnimating) {
        if (scrollInstance) {
          scrollInstance.destroy();
        }

        const timer = setTimeout(() => {
          setIsAnimating(true);
        }, 1000); // Adjust timing based on your animation duration

        return () => clearTimeout(timer);
      } else {
        // Reinitialize Locomotive Scroll after transitions
        scrollInstance = new LocomotiveScroll({
          el: document.querySelector("#main"),
          smooth: true,
        });
      }

      // Clean up when component unmounts
      return () => {
        if (scrollInstance) {
          scrollInstance.destroy();
        }
        projectShowcase.forEach((show) => {
          show.removeEventListener("mouseenter", handleProjectMouseEnter);
          show.removeEventListener("mouseleave", handleProjectMouseLeave);
        });

        buttons.forEach((btn) => {
          btn.removeEventListener("mouseenter", handleButtonMouseEnter);
          btn.removeEventListener("mouseleave", handleButtonMouseLeave);
        });
      };
    }, [isAnimating]);

    useEffect(() => {
      return () => {};
    }, [location.pathname]);

    return (
      <>
        <motion.div
          className="slide-in fixed top-0 left-0 z-[100] h-[100svh] flex justify-center items-center text-8xl lg:h-screen w-full bg-line origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Slide in */}
        </motion.div>

        <motion.div
          className="slide-out fixed top-0 left-0 z-[100] flex justify-center items-center text-8xl h-[100svh] lg:h-screen w-full bg-line origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          onAnimationStart={() => setIsAnimating(false)}
        >
          {/* Slide-out */}
        </motion.div>

        {!isAnimating && <Component {...props} />}
      </>
    );
  };
};

export default Transition;
