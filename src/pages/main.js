import React from "react";
import LeftSidebar from "../components/left-sidebar";
import Main from "../components/main";
import RightSidebar from "../components/right-sidebar";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
