import React from "react";
import Cards from "../cards";

import bell from "../../assets/images/bell.svg";

const Main = () => {
  return (
    <div className="main-panel">
      <div className="flex justify-between align-center">
        <p className="fs-24 medium text-blue mb-30">
          Monday - 3 July 2023 - 12:15:34
        </p>
        <img src={bell} alt="bell" className="bell" />
      </div>
      <h2 className="fs-28 text-blue medium">Dashboard</h2>

      <div className="cards-holder">
        <Cards />
      </div>
    </div>
  );
};

export default Main;
