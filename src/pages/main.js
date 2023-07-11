import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/left-sidebar";
import Main from "../components/main";
import RightSidebar from "../components/right-sidebar";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolBarOpen, setToolBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [toolLayVisible, setToolLayVisible] = useState(false);

  // if window size is less than 1100px, set menuOpen to false
  useEffect(() => {
    if (windowWidth < 1100) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  // if window size is less than 650px, set toolBarOpen to false
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth < 800) {
      setToolBarOpen(false);
    }
  }, [windowWidth]);

  const menuToggler = () => {
    setMenuOpen(!menuOpen);
    setOverlayVisible(!overlayVisible);
  };

  const toolbarToggler = () => {
    setToolBarOpen(!toolBarOpen);
    setToolLayVisible(!toolLayVisible);
  };
  return (
    <div className="flex w-full">
      {overlayVisible && (
        <div
          className="overlay"
          onClick={() => {
            setMenuOpen(false);
            setOverlayVisible(false);
          }}
        ></div>
      )}
      {toolLayVisible && (
        <div
          className="overlay"
          onClick={() => {
            setToolBarOpen(false);
            setToolLayVisible(false);
          }}
        ></div>
      )}
      <div className={`left-sidebar ${menuOpen ? "active" : ""}`}>
        <LeftSidebar />
      </div>
      <div className="main">
        <Main menuToggler={menuToggler} toolbarToggler={toolbarToggler} />
      </div>
      <div className={`right-sidebar ${toolBarOpen ? "active" : ""}`}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
