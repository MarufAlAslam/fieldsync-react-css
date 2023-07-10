import React from "react";

import topShadow from "../../assets/images/top-shadow.svg";
import bottomShadow from "../../assets/images/bottom-shadow.svg";

import tech1 from "../../assets/images/tech1.svg";
import tech2 from "../../assets/images/tech2.svg";
import tech3 from "../../assets/images/tech3.svg";
import tech4 from "../../assets/images/tech4.svg";

import arrowDown from "../../assets/images/arrowDown.svg";

const Technicians = () => {
  const techData = [
    {
      id: 1,
      name: "Dennis Moore",
      avatar: tech1,
      time: "3:15:36",
      info: "At client",
    },
    {
      id: 2,
      name: "Quinn Terrell",
      avatar: tech2,
      time: "0:36:01",
      info: "On Route",
    },
    {
      id: 3,
      name: "Harrison Fields",
      avatar: tech3,
      time: "5:30:53",
      info: "Break",
    },
    {
      id: 4,
      name: "Rowan Young",
      avatar: tech4,
      time: "3:15:36",
      info: "On Route",
    },
    {
      id: 5,
      name: "Dennis Moore",
      avatar: tech1,
      time: "3:15:36",
      info: "At client",
    },
  ];
  return (
    <div className="tech">
      <p className="mb-28 text-blue fs-18 medium">Technicians in service</p>

      <div className="tech-card relative">
        <img src={topShadow} className="absolute w-full top-0 left-0" alt="" />
        <img
          src={bottomShadow}
          className="absolute w-full bottom-0 left-0"
          alt=""
        />

        <div className="tech-inner">
          {techData.map((tech) => (
            <div
              className="flex gap-10 align-center justify-between w-full mb-3"
              key={tech.id}
            >
              <div className="flex justify-start align-center">
                <img src={tech.avatar} alt="tech" className="avatar" />
                <div>
                  <p className="fs-16 medium text-blue flex align-center justify-start gap-3">
                    {tech.name}
                  </p>
                  <p className="fs-13 op-42">{tech.time}</p>
                </div>
              </div>
              <p className="fs-13 text-right">
                <span className="text-blue">{tech.info}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-holder">
        <img src={arrowDown} alt="arrow" className="arrow0" />
      </div>
    </div>
  );
};

export default Technicians;
