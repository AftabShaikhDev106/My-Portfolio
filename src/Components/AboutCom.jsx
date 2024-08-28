import React from "react";
import AboutHero from "./AboutHero";
import AboutMain from "./AboutMain";
import AboutSkill from "./AboutSkill";
import AboutTimeline from "./AboutTimeline";
import Transition from "../Transition.jsx";

function AboutCom(props) {
  return (
    <>
      <AboutHero complete={props.complete} />
      <AboutMain />
      <AboutTimeline />
      <AboutSkill />
    </>
  );
}

export default Transition(AboutCom);
