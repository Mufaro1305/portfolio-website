import React from "react";
import "../about/about.css";
import developer from "../img/developer.jpeg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={developer} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I love reading books, running and doing fun activities that get my
          adrenaline pumping. Favourite books I like reading mostly are fiction
          books and sometimes I do read non-fiction books. I love running
          because it's the best way of stress relief and after I run I always
          get a clear mind. If l have problem I will be able to think through it
          with a clear mind. I am tech savvy always improving my knowledge when it
          comes to technology. I also love the ocean and the nature. Lastly l
          love helping others either its work or just even a stranger needing
          help.
        </p>
      </div>
    </div>
  );
};
export default About;
