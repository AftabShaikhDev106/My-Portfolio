import React from "react";
import ProjectHome from "./ProjectHome";
import Transition from "../Transition.jsx";

function ProjectCom(props) {
  return (
    <>
      <ProjectHome project={props.project} complete={props.complete} />
    </>
  );
}

export default Transition(ProjectCom);
