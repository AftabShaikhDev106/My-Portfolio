import React, { useEffect } from "react";
import HeroPage from "./HeroPage";
import AboutSec from "./AboutSec";
import ProjectSec from "./ProjectSec.jsx";
import ContactSec from "./ContactSec.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomeCom(props) {
  return (
    <>
      <HeroPage complete={props.complete} />
      <AboutSec />
      <ProjectSec />
      <ContactSec />
    </>
  );
}

export default HomeCom;
