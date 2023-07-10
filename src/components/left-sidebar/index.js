import React from "react";
import logo from "../../assets/images/logo.svg";

const LeftSidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-center menu-flex">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default LeftSidebar;
