import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Buttonv1 from "./Buttonv1";
import { GoArrowUpRight } from "react-icons/go";
import contactImage from "../images/model-contact.jpg";

function ContactSec() {
  const socialLinks = {
    Instagram: "https://www.instagram.com/s.af_106/",
    LinkedIn: "www.linkedin.com/in/aftab-shaikh-5364a2322",
    Github: "https://github.com/AftabShaikhDev106",
  };

  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-.6"
        className="section page4 w-full h-[100svh] relative z-0 lg:h-screen p-[5vw] lg:p-0 lg:flex lg:flex-col lg:items-center"
      >
        <div className="center w-full h-[75%] relative  lg:h-[90%] lg:w-1/2 lg:p-5">
          <div className="top-contact h-1/2 flex flex-col gap-2 overflow-hidden lg:gap-3">
            <div className="image-text-con flex items-end gap-3">
              <div className="contact-image image h-28 w-28 overflow-hidden bg-slate-950 rounded-xl lg:h-40 lg:w-40">
                <img src={contactImage} alt="" />
              </div>
              <h4 className="contact-text lets-text text-white font-spaceGrotesk text-[13vw] font-bold leading-[13vw] lg:text-[6vw] lg:leading-[4vw]">
                Let<span className=" text-limeGreen">'</span>s
              </h4>
            </div>
            <div className="second-line relative h-fit w-full overflow-hidden">
              <h4 className="contact-text connect-text relative flex items-center w-fit text-white font-spaceGrotesk text-[13vw] font-bold leading-[13vw] lg:text-[6vw] lg:leading-[4.8vw] ">
                Connect
              </h4>
              <div className="contact-line w-[36%] rounded-xl absolute h-[3px] bg-white top-1/2 right-0 -translate-y-1/2 lg:w-[45%]"></div>
            </div>
          </div>
          <div className="float-button absolute w-full rounded-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Buttonv1
              text={"Connect"}
              icon={<GoArrowUpRight />}
              download={false}
            />
          </div>
          <div className="bottom-contact border-line border-t-2 h-1/2 w-full flex flex-col justify-center gap-2 items-end lg:justify-end">
            <div className="contact-bottom-top-text-con flex items-end gap-5">
              <h4 className="text-white font-spaceGrotesk text-[13vw] leading-[13vw] font-bold lg:text-[6vw] lg:leading-[6vw]">
                And Work
              </h4>
              <div className="contact-bottom image hidden h-24 w-24 overflow-hidden bg-slate-950 rounded-xl lg:h-40 lg:w-40 lg:block"></div>
            </div>
            <div className="contact-bottom-bottom-text-con w-full flex justify-end gap-5 relative">
              <div className="contact-line w-[32%] rounded-xl absolute h-[3.5px] bg-white top-1/2 left-0 -translate-y-1/2 lg:w-[42%]"></div>
              <h4 className="text-white font-spaceGrotesk h-fit text-[13vw] leading-[13vw] font-bold lg:text-[6vw] lg:leading-[6vw]">
                Together
              </h4>
            </div>
          </div>
        </div>
        <div className="bottom w-full h-[25%] lg:h-[10%] lg:flex flex-row-reverse justify-between lg:px-[4vw]">
          <div className="socials w-full h-1/2 flex flex-col justify-center gap-2 lg:h-full lg:w-fit lg:gap-0">
            <h4 className="social-title font-spaceGrotesk text-gray font-semibold text-sm">
              Socials
            </h4>
            <div className="social-acc">
              <ul className="flex w-full gap-8">
                {["Instagram", "LinkedIn", "Github"].map((social, index) => (
                  <li key={index}>
                    <a
                      href={socialLinks[social]}
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
          <div className="code-by w-full h-1/2 flex  justify-between items-center text-white lg:h-full lg:w-fit lg:flex-col lg:justify-center lg:items-start">
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
      </div>
    </>
  );
}

export default ContactSec;
