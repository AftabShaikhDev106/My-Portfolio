import React, { useEffect } from "react";
import HeroPage from "./HeroPage";
import AboutSec from "./AboutSec";
import ProjectSec from "./ProjectSec.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Transition from "../Transition.jsx";

gsap.registerPlugin(ScrollTrigger);

function HomeCom(props) {
  return (
    <>
      <HeroPage complete={props.complete} />
      <AboutSec />
      <ProjectSec project={props.project} />
    </>
  );
}

export default Transition(HomeCom);
