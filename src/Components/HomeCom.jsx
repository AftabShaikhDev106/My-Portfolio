import React from "react";
import HeroPage from "./HeroPage";
import AboutSec from "./AboutSec";

function HomeCom(props) {
  return (
    <>
      <HeroPage complete={props.complete} />
      <AboutSec />
    </>
  );
}

export default HomeCom;
