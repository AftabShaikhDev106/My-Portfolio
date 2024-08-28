import React, { useEffect, useRef } from "react";

import Buttonv1 from "./Buttonv1";
import { GoArrowUpRight } from "react-icons/go";
import contactImage from "../images/model-contact.webp";
import LocomotiveScroll from "locomotive-scroll";
import BottomFooter from "./BottomFooter";
import { Link } from "react-router-dom";

function ContactSec(props) {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        className="overlay-contact relative h-screen w-full"
      ></div>
      <div
        data-scroll
        data-scroll-section
        className="section page4 w-full h-[100svh] fixed bottom-0 z-0 lg:min-h-screen lg:flex lg:flex-col lg:items-center will-change-transform"
      >
        <div className="center w-full h-[75%] relative p-[5vw] lg:h-[90%] lg:w-1/2 lg:p-5 ">
          <div className="top-contact h-1/2 flex flex-col gap-2 overflow-hidden lg:gap-3">
            <div className="image-text-con flex items-end gap-3">
              <div className="contact-image h-28 w-28 overflow-hidden rounded-xl lg:h-40 lg:w-40 bg-slate-950">
                {/* <img loading="lazy" src={contactImage} className="height" alt="" /> */}
              </div>
              <h4 className="contact-text lets-text text-white font-spaceGrotesk text-[13vw] font-bold leading-[13vw] lg:text-[5vw] lg:leading-[5vw]">
                Let<span className="text-limeG  reen">'</span>s
              </h4>
            </div>
            <div className="second-line relative h-fit w-full overflow-hidden">
              <h4 className="contact-text connect-text relative flex items-center w-fit text-white font-spaceGrotesk text-[13vw] font-bold leading-[13vw] lg:text-[5vw] lg:leading-[5vw]">
                Connect
              </h4>
              <div className="contact-line w-[36%] rounded-xl absolute h-[3px] bg-white top-1/2 right-0 -translate-y-1/2 lg:w-[45%]"></div>
            </div>
          </div>
          <div className="float-button absolute w-full rounded-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to={"/contact"}>
              <Buttonv1
                text={"Connect"}
                icon={<GoArrowUpRight />}
                download={false}
              />
            </Link>
          </div>
          <div className="bottom-contact border-line border-t-2 h-1/2 w-full flex flex-col justify-center gap-2 items-end lg:justify-end">
            <div className="contact-bottom-top-text-con w-full flex justify-end items-end gap-5">
              <h4 className="text-white font-spaceGrotesk text-[13vw] leading-[13vw] whitespace-nowrap font-bold lg:text-[5vw] lg:leading-[5vw]">
                And Work
              </h4>
              <div className="contact-bottom hidden h-24 w-24 overflow-hidden bg-slate-950 rounded-xl lg:h-40 lg:w-40 lg:block">
                {/* <img loading="lazy" src={contactImage} alt="" /> */}
              </div>
            </div>
            <div className="contact-bottom-bottom-text-con w-full flex justify-end gap-5 relative">
              <div className="contact-line w-[32%] rounded-xl absolute h-[3.5px] bg-white top-1/2 left-0 -translate-y-1/2 lg:w-[42%]"></div>
              <h4 className="text-white font-spaceGrotesk h-fit text-[13vw] leading-[13vw] font-bold lg:text-[5vw] lg:leading-[5vw]">
                Together
              </h4>
            </div>
          </div>
        </div>
        <BottomFooter social={props.social} />
      </div>
    </>
  );
}

export default ContactSec;
