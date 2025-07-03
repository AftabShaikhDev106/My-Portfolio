import React from "react";

function Buttonv1(props) {
  return (
    <button className="button-v1 flex items-center h-fit w-fit font-spaceGrotesk py-[1vw] px-[1vw] rounded-full font-semibold bg-white lg:py-[.5vw] lg:px-[.5vw]">
      {props.download ? (
        <a
          href="/Aftab_Resume.pdf"
          download="Aftab-CV.pdf"
          className="flex items-center gap-5 h-fit w-fit text-[5vw] text-darkGray md:text-[3.5vw] lg:text-[1vw]"
        >
          <h4 className="ml-5">{props.text}</h4>
          <div className="icon p-[3vw] text-[6vw] rounded-full bg-darkGray text-white md:p-[2vw] md:text-[4.5vw] lg:text-[1vw] lg:p-[.5vw]">
            {props.icon}
          </div>
        </a>
      ) : (
        <div className="flex items-center gap-5 h-fit w-fit text-[5vw] text-darkGray md:text-[3.5vw] lg:text-[1vw]">
          <h4 className="ml-5">{props.text}</h4>
          <div className="icon p-[3vw] text-[6vw] rounded-full bg-darkGray text-white md:p-[2vw] md:text-[4.5vw] lg:text-[1vw] lg:p-[.5vw]">
            {props.icon}
          </div>
        </div>
      )}
    </button>
  );
}

export default Buttonv1;
