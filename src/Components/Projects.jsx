import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <a
        href={props.object.link}
        target="_blank"
        className={`project-show-link border border-white/60 opacity-0 translate-y-[15px] ${
          props.index === props.fullObj.length - 1 && props.isOdd
            ? "w-full lg:w-1/2 "
            : "w-full lg:full "
        } h-fit cursor-pointer ${
          props.index === props.fullObj.length - 1 && props.isOdd
            ? "col-span-1 lg:col-span-2"
            : "col-span-1 lg:col-span-1"
        }`}
      >
        <div className={`project-showcase`}>
          <div className="image-con h-[30vh] w-full relative lg:h-[65vh] bg-blue-300">
            <img
              src={props.object.image}
              className="h-full w-full object-cover object-[50%,45%]"
              alt="Poster"
              loading="lazy"
            />
          </div>
          <div className="text-content flex justify-between py-5 px-3">
            <h4 className=" font-spaceGrotesk font-semibold text-white text-[3.5vw] lg:text-[1.3vw]">
              {props.object.company}
            </h4>
            <h4 className=" font-spaceGrotesk font-semibold text-white text-[3.5vw] lg:text-[1.3vw]">
              {props.object.type}
            </h4>
          </div>
        </div>
      </a>
    </>
  );
});

export default Projects;
