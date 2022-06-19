import "./intro.css";
import yvonne1 from "./img/yvonne1.png";
import React from "react";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Yvonne Mvududu</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                Aspiring to be a Fullstack Developer
              </div>
              <div className="i-title-item">IT support Intern</div>
            </div>
          </div>
          <div className="i-desc">
            <p>
              I am familiar with the following programming languages Python and
              SQL. I have finally mastered the basics of HTML and using
              JavaScript for my Vue application in the front-end. I have also
              made some fun projects using React and Vue.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={yvonne1} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
