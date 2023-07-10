import React from "react";
import logo from "../../assets/images/logo.svg";

// icons
import dashboardIcon from "../../assets/images/dashboard.svg";
import inventoryIcon from "../../assets/images/inventory.svg";
import documentIcon from "../../assets/images/document.svg";
import profileIcon from "../../assets/images/profile.svg";
import commentIcon from "../../assets/images/comment.svg";
import cogIcon from "../../assets/images/cog.svg";

// router
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const menuData = [
    {
      id: 1,
      name: "Dashboard",
      icon: dashboardIcon,
      link: "/",
    },
    {
      id: 2,
      name: "Inventory",
      icon: inventoryIcon,
      link: "/inventory",
    },
    {
      id: 2,
      name: "Documents",
      icon: documentIcon,
      link: "/docs",
    },
    {
      id: 2,
      name: "Communication",
      icon: profileIcon,
      link: "/communication",
    },
    {
      id: 2,
      name: "Internal Communication",
      icon: commentIcon,
      link: "/internal-communication",
    },
    {
      id: 2,
      name: "Settings",
      icon: cogIcon,
      link: "/settings",
    },
  ];
  return (
    <div className="sidebar">
      <div className="flex items-center justify-center menu-flex">
        <div className="w-full">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu">
            {menuData.map((item, index) => (
              <NavLink to={item.link} key={index} className="menu-item">
                <img src={item.icon} alt={item.name} className="menu-icon" />
                <span className="menu-text">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
