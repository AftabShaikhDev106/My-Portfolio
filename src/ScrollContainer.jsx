import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
