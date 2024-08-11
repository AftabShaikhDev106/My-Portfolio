import React from "react";

function Buttonv1(props) {
  return (
    <>
      <button className="button-v1 flex items-center h-fit w-fit gap-5 font-spaceGrotesk text-[5vw] text-darkGray py-[1vw] px-[1vw] rounded-[5vw]  font-semibold bg-white md:text-[3.5vw] lg:text-[1vw] lg:py-[.5vw] lg:px-[.5vw]">
        <h4 className="ml-5">{props.text}</h4>
        <div className="icon p-[3vw] text-[6vw]  rounded-full bg-darkGray text-white md:p-[2vw] md:text-[4.5vw] lg:text-[1vw] lg:p-[.5vw]">
          {props.icon}
        </div>
      </button>
    </>
  );
}

export default Buttonv1;
