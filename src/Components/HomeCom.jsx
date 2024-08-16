import React from "react";
import HeroPage from "./HeroPage";
import AboutSec from "./AboutSec";
import ProjectSec from "./ProjectSec.jsx";

function HomeCom(props) {
  return (
    <>
      <HeroPage complete={props.complete} />
      <AboutSec />
      <ProjectSec />
    </>
  );
}

export default HomeCom;
