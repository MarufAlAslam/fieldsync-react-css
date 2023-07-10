import React from "react";

import avatar from "../../assets/images/avatar.svg";
import { FaAngleDown } from "react-icons/fa";
import Technicians from "../technicians";
import Jobs from "../jobs";

const RightSidebar = () => {
  return (
    <div className="sidebar-right">
      <div className="flex gap-10 justify-start align-center">
        <img src={avatar} alt="avatar" className="avatar" />
        <div>
          <p className="fs-16 medium text-blue flex align-center justify-start gap-3">
            Alexa Rogue <FaAngleDown className="mt-1" />
          </p>
          <p className="fs-13 op-42">Administrator</p>
        </div>
      </div>

      <Technicians />
      <Jobs />
    </div>
  );
};

export default RightSidebar;
