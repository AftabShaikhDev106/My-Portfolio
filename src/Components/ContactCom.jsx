import React, { useEffect } from "react";
import BottomFooter from "./BottomFooter";
import contactImage from "../images/contact-img.png";
import Transition from "../Transition.jsx";
import gsap from "gsap";

function ContactCom(props) {
  useEffect(() => {
    const tl = gsap.timeline();

    if (props.complete) {
      tl.fromTo(
        ".contact-image-anim",
        {
          width: 0,
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
        }
      )
        .fromTo(
          ".contact-title",
          {
            width: 0,
            opacity: 0,
          },
          {
            width: "100%",
            opacity: 1,
          }
        )
        .fromTo(
          ".contact-left-title",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            opacity: 1,
            x: "0",
            stagger: 0.3,
          }
        )
        .fromTo(
          ".contact-detail-text",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );
    }

    return () => {};
  }, [props.complete]);

  return (
    <>
      <div className="section contact-page h-fit w-full relative  z-[3]">
        <div className="main-contact-con h-[100svh] lg:h-screen gap-5 lg:gap-0 flex flex-col lg:flex-row p-[6vw] ">
          <div className="left-contact-content h-auto w-full aspect-square md:h-auto md:w-full md:aspect-video lg:h-full lg:w-1/2 relative flex justify-end lg:justify-start items-end ">
            <div className="image-padding-container  md:pr-0 lg:pr-[6vw] h-full md:h-full lg:h-[88%] w-[100%] absolute top-0 left-0 z-[3]">
              <div className="image-top contact-image-anim h-full w-full relative">
                <img
                  src={contactImage}
                  className="h-full w-full object-cover rounded"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-container pr-9 lg:pl-9">
              <div className="text-stroke absolute text-white text-[15vw]  lg:text-[8.5vw] leading-none font-spaceGrotesk font-extrabold z-[4]">
                <h1 className="contact-title overflow-hidden whitespace-nowrap">
                  Contact
                </h1>
              </div>
              <div className="contact-text text-white text-[15vw]  lg:text-[8.5vw] leading-none font-spaceGrotesk font-extrabold">
                <h1 className="contact-title overflow-hidden whitespace-nowrap">
                  Contact
                </h1>
              </div>
            </div>
          </div>
          <div className="right-contact-content h-[55%] lg:h-full border-t-2 lg:border-t-0 lg:border-l-2 border-line lg:w-1/2 lg:px-[6vw] flex flex-col justify-center gap-8 lg:gap-10">
            <div className="combine-dets overflow-hidden flex flex-col gap-4">
              <h4 className="contact-left-title text-line font-spaceGrotesk font-medium text-base">
                Contact Detail
              </h4>
              <div className="info-dets flex flex-col gap-3 ">
                <h4 className="contact-detail-text text-white font-spaceGrotesk font-semibold lg:text-lg leading-none flex flex-row gap-2 lg:gap-3">
                  Email:{" "}
                  <a href="mailto:shaikhaftab7861234@gmail.com">
                    shaikhaftab7861234@gmail.com
                  </a>
                </h4>
                <h4 className="contact-detail-text text-white font-spaceGrotesk font-semibold lg:text-lg flex flex-row leading-none gap-2 lg:gap-3">
                  Phone:{" "}
                  <a href="tel:+917208239032" className="flex gap-2">
                    <span>+91-72082</span>
                    <span>39032</span>
                  </a>
                </h4>
              </div>
            </div>

            <div className="combine-dets overflow-hidden flex flex-col gap-4">
              <h4 className="contact-left-title text-line font-spaceGrotesk font-medium text-base">
                Location
              </h4>
              <div className="info-dets flex flex-col gap-5 lg:gap-3">
                <h4 className="contact-detail-text text-white font-spaceGrotesk font-semibold lg:text-lg leading-none flex gap-3">
                  Country: <span>India (Mumbai)</span>
                </h4>
              </div>
            </div>
            <div className="combine-dets overflow-hidden hidden lg:flex flex-col gap-4">
              <h4 className="contact-left-title text-line font-spaceGrotesk font-medium text-base">
                Socials
              </h4>
              <div className="info-dets flex flex-col gap-2 ">
                <ul className="flex flex-row lg:flex-col gap-2">
                  {props.social &&
                    ["Instagram", "LinkedIn", "Github"].map((social, index) => (
                      <a key={index} href={props.social[social]}>
                        <li className="contact-detail-text text-white font-spaceGrotesk font-semibold text-lg leading-none">
                          {social}
                        </li>
                      </a>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <BottomFooter social={props.social} />
      </div>
    </>
  );
}

export default Transition(ContactCom);
