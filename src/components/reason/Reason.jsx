import React from "react";
import code from "../img/code.jpeg";
import "../reason/Reason.css";
const Reason = () => {
  return (
    <div className="r">
      <div className="r-left">
        <h1 className="r-title">Why do you want to work at Sovtech</h1>
        <p className="r-sub">
          I want to work at SovTech because my goals align with the mission of
          the company being able to make client's life easier by building
          software that helps them grow their business. I did a lot of research
          on your company work ethics is something I admired being able to work
          in a place that embrace employees uniqueness and also knowing that
          every employee matters to the growth of SovTech is important to me. I
          am also excited to learn new tech and being able to also explore other
          position is going to be intriguing to me. I am ready to learn, make
          new friends and have fun making real projects that will impact
          people's life.
        </p>
      </div>
      <div className="r-right">
        <div className="r-card bg"></div>
        <div className="r-card">
          <img src={code} alt="" className="r-img" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
