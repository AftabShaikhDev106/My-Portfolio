import React, { useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa6";

function BottomFooter(props) {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        className=" bottom w-full h-[25%] lg:h-[10%]  px-[4vw] py-[5vw] lg:py-[0vw] lg:flex flex-row-reverse justify-between lg:px-[4vw] "
      >
        <div className="socials w-full h-1/2 flex flex-col justify-center gap-2 lg:h-full lg:w-fit lg:gap-0">
          <h4 className="social-title font-spaceGrotesk text-line font-semibold text-sm">
            Socials
          </h4>
          <div className="social-acc">
            <ul className="flex w-full gap-8">
              {props.social &&
                ["Instagram", "LinkedIn", "Github"].map((social, index) => (
                  <li key={index}>
                    <a
                      href={props.social[social]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-spaceGrotesk text-base"
                    >
                      {social}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="code-by w-full h-1/2 flex justify-between items-center text-white lg:h-full lg:w-fit lg:flex-col lg:justify-center lg:items-start">
          <h4 className="made-by text-white font-spaceGrotesk font-semibold text-sm">
            Design by Me
          </h4>
          <span className="block lg:hidden">
            <FaRegCopyright />
          </span>
          <h4 className="made-by text-white font-spaceGrotesk font-semibold text-sm">
            Developed by Me
          </h4>
        </div>
      </div>
    </>
  );
}

export default BottomFooter;
