import React from "react";

// import card1 from "../../assets/images/card1.svg";
// import card2 from "../../assets/images/card2.svg";
// import card3 from "../../assets/images/card3.svg";
// import card4 from "../../assets/images/card4.svg";
// import card5 from "../../assets/images/card5.svg";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-25">
      <div className="col-span-2 card1 card-h">
        <p className="fs-24 text-white medium">New Work Order</p>
        <p className="text-white">Create a new work order</p>
      </div>
      <div className="card2 card-h">
        <p className="fs-24 text-white medium">Overview</p>
        <p className="text-white">Overview of all work orders</p>
      </div>
      <div className="card3 card-h">
        <p className="fs-24 text-white medium">Client list</p>
        <p className="text-white">Client list with details</p>
      </div>
      <div className="card4 card-h">
        <p className="fs-24 text-white medium">Calendar</p>
        <p className="text-white">Calendar overview</p>
      </div>
      <div className="card5 card-h">
        <p className="fs-24 text-white medium">Billing</p>
        <p className="text-white">Overview of invoices</p>
      </div>
    </div>
  );
};

export default Cards;
