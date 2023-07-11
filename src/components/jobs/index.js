import React from "react";

import topShadow from "../../assets/images/top-shadow.svg";
import bottomShadow from "../../assets/images/bottom-shadow.svg";

import job1 from "../../assets/images/job1.svg";
import job2 from "../../assets/images/job2.svg";
import job3 from "../../assets/images/job3.svg";

import arrowDown from "../../assets/images/arrowDown.svg";
import arrowRight from "../../assets/images/arrowRight.svg";

const Jobs = () => {
  // clicking on down button, it will scroll the job inner section a bit
  const scrollDown = () => {
    const jobInner = document.querySelector(".job-inner");
    jobInner.scrollBy({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  };
  const jobData = [
    {
      id: 1,
      name: "De Decker Digital",
      avatar: job1,
      desc: "New installation of Camera equipment",
      assignedTo: "Harrison Fields",
    },
    {
      id: 2,
      name: "Vigor NV",
      avatar: job2,
      desc: "Repair of digital gate",
      assignedTo: "Quinn Terrell",
    },
    {
      id: 3,
      name: "Proximus",
      avatar: job3,
      desc: "bi-annual inspection",
      assignedTo: "Dennis Moore",
    },
    {
      id: 4,
      name: "High Classify",
      avatar: job1,
      desc: "New installation of Camera equipment",
      assignedTo: "Harrison Fields",
    },
    {
      id: 5,
      name: "Evergreene BV",
      avatar: job2,
      desc: "Repair of digital gate",
      assignedTo: "Quinn Terrell",
    },
    {
      id: 6,
      name: "Luminora",
      avatar: job3,
      desc: "bi-annual inspection",
      assignedTo: "Dennis Moore",
    },
    {
      id: 7,
      name: "De Decker Digital",
      avatar: job1,
      desc: "New installation of Camera equipment",
      assignedTo: "Harrison Fields",
    },
    {
      id: 8,
      name: "Vigor NV",
      avatar: job2,
      desc: "Repair of digital gate",
      assignedTo: "Quinn Terrell",
    },
    {
      id: 9,
      name: "Proximus",
      avatar: job3,
      desc: "bi-annual inspection",
      assignedTo: "Dennis Moore",
    },
    {
      id: 10,
      name: "High Classify",
      avatar: job1,
      desc: "New installation of Camera equipment",
      assignedTo: "Harrison Fields",
    },
    {
      id: 11,
      name: "Evergreene BV",
      avatar: job2,
      desc: "Repair of digital gate",
      assignedTo: "Quinn Terrell",
    },
    {
      id: 12,
      name: "Luminora",
      avatar: job3,
      desc: "bi-annual inspection",
      assignedTo: "Dennis Moore",
    },
  ];
  return (
    <div className="jobs">
      <p className="mb-28 text-blue fs-18 medium">Today’s jobs</p>

      <div className="tech-card relative">
        <img src={topShadow} className="absolute w-full top-0 left-0" alt="" />
        <img
          src={bottomShadow}
          className="absolute w-full bottom-0 left-0"
          alt=""
        />

        <div className="job-inner">
          {jobData.map((job) => (
            <div
              className="flex gap-10 align-center justify-between w-full my-3"
              key={job.id}
            >
              <div className="flex justify-start align-center">
                <img src={job.avatar} alt="tech" className="avatar" />
                <div>
                  <p className="fs-15 medium text-blue flex align-center justify-start gap-3">
                    {job.name}
                  </p>
                  <p className="fs-14 text-gray">{job.desc}</p>
                  <div className="flex w-full align-center justify-start gap-3">
                    <p className="fs-14 text-gray">Assigned to:</p>
                    <p className="fs-14 text-blue">{job.assignedTo}</p>
                  </div>
                </div>
              </div>
              <img src={arrowRight} alt="arrow" className="arrow-right" />
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-holder">
        <button className="down-btn" onClick={scrollDown}>
          <img src={arrowDown} alt="arrow" className="arrow0" />
        </button>
      </div>
    </div>
  );
};

export default Jobs;
