import React, { useEffect, useState } from "react";

function AboutTimeline() {
  const [width, setWidth] = useState(0);

  const procceses = [
    {
      year: "2020 - 2022",
      processName: "Completed College",
      From: "Mother Teressa High School & Jr.College",
      flow: "up",
    },
    {
      year: "2022 - 2023",
      processName: "Completed BCA 1st Year",
      From: "Tilak Maharashtra Vidhyapeeth",
      flow: "down",
    },
    {
      year: "2023 - Till now",
      processName: "Freelancing websites",
      From: "Web developer /  React Developer",
      flow: "up",
    },
    {
      year: "2023 - 2024",
      processName: "Completed BCA 2nd Year",
      From: "Tilak Maharashtra Vidhyapeeth",
      flow: "down",
    },
    {
      year: "2024 - Till now",
      processName: "Started 3rd Year",
      From: "Tilak Maharashtra Vidhyapeeth",
      flow: "up",
    },
  ];

  function calculateLineWidth(data) {
    return data.width * data.length + data.unit;
  }

  const widthStyle = {
    width: calculateLineWidth({
      width: 17.6,
      length: procceses.length + 0.69,
      unit: "vw",
    }),
  };

  const heightStyle = {
    width: calculateLineWidth({
      width: 17.6,
      length: procceses.length + 0.69,
      unit: "vh",
    }),
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", null);
    };
  }, []);

  return (
    <>
      <div data-scroll
        data-scroll-section
        className={`section about-timeline h-fit lg:h-screen w-full gap-5 lg:gap-0 ${
          procceses.length > 5 ? "lg:overflow-x-scroll" : "lg:overflow-hidden"
        }  p-[6vw] bg-darkGray relative z-[2] flex flex-col lg:flex-row border-b-2 border-line`}
      >
        <div
          className={`time-line-con absolute min-h-full lg:min-w-full hidden justify-center py-[6vw] lg:justify-start lg:items-center top-0 left-1/2 -translate-x-1/2 lg:flex lg:min-h-fit lg:top-1/2 lg:-translate-x-0 lg:left-0 lg:-translate-y-1/2 lg:py:[0] lg:px-[6vw] z-10`}
          style={width < 1024 ? heightStyle : widthStyle}
        >
          <div className="time-line min-h-full w-[2px] bg-line lg:w-full lg:h-[2px] "></div>
        </div>

        {procceses.map((pro, index) => (
          <div
            key={index}
            className={`process h-[17.6vh] w-full lg:h-full lg:w-[17.6vw] flex ${
              pro.flow === "up" ? "justify-start" : "justify-end"
            } lg:justify-center ${
              pro.flow === "up" ? "lg:items-start" : "lg:items-end"
            } relative flex-shrink-0`}
          >
            <div className="line-processed absolute w-full h-[2px] hidden lg:h-1/2 lg:w-[2px] bg-line z-[1] lg:block"></div>
            <div
              className={`info-con h-full bg-charcoal lg:bg-darkGray w-[80%] ${
                pro.flow === "up"
                  ? "rounded-e-full text-left items-start justify-center border-[1.5px] border-gray lg:border-none"
                  : "rounded-s-full text-right items-end justify-center border-[1.5px] border-gray lg:border-none"
              } lg:h-fit lg:w-full text-[3vw] p-5 flex flex-col lg:items-center lg:rounded-none relative lg:text-[1.2vw] z-[2] lg:text-center text-white`}
            >
              <h4>{pro.year}</h4>
              <h4>{pro.processName}</h4>
              <h4>{pro.From}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutTimeline;
