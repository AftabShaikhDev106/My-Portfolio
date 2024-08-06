import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Loader() {
  const [color, setColor] = useState("white");
  const counterRef = useRef(null);
  const delay = 1000;

  function startCounter() {
    let counterVal = 0;

    function updateCounter() {
      if (counterVal === 100) {
        return;
      }
      counterVal += Math.floor(Math.random() * 10) + 1;

      let randomNum = Math.floor(Math.random() * 10);
      if (randomNum < 3) {
        setColor("white");
      } else {
        setColor("#A3E635");
      }

      if (counterVal > 100) {
        counterVal = 100;
      }

      if (counterRef.current) {
        counterRef.current.textContent = counterVal;
      }

      let delay = Math.floor(Math.random() * 100) + 50;
      setTimeout(updateCounter, delay);
    }
    updateCounter();
  }

  useEffect(() => {
    setTimeout(() => {
      startCounter();
    }, delay);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        ease: [0.25, 1, 0.5, 1],
        delay: 3.6,
        duration: 0.6,
      }}
      className="loader p-8 h-screen w-full fixed top-0 left-0 flex flex-col gap-x-0.5 justify-between bg-charcoal"
      id="loader"
    >
      <div className="name-holder relative flex flex-col justify-center">
        <div className="name-cover relative flex flex-col justify-center overflow-hidden">
          <motion.h4
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.25, 1, 0.5, 1], delay: 0.2, duration: 1 }}
            className="name text-white font-spaceGrotesk text-[10vw] leading-none uppercase tracking-wider font-semibold h-fit md:text-[6vw] lg:text-[4vw] xl:text-[3.5vw]"
          >
            Aftab
          </motion.h4>
        </div>
        <div className="name-cover relative flex flex-col justify-center overflow-hidden">
          <motion.h4
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.25, 1, 0.5, 1], delay: 0.2, duration: 1 }}
            className="name text-white font-spaceGrotesk text-[10vw] leading-none uppercase tracking-wider font-semibold h-fit md:text-[6vw] lg:text-[4vw] xl:text-[3.5vw]"
          >
            Shaikh
          </motion.h4>
        </div>
      </div>

      <div className="counter-holder flex justify-end items-center relative overflow-hidden">
        <motion.h4
          className="counter font-spaceGrotesk text-white font-extrabold text-[30vw] leading-[30vw] md:text-[20vw] md:leading-[20vw] lg:text-[14vw] lg:leading-[14vw]"
          ref={counterRef}
          style={{ color: color }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ ease: [0.25, 1, 0.5, 1], delay: 0.2, duration: 1 }}
        >
          0
        </motion.h4>
      </div>
    </motion.div>
  );
}

export default Loader;
