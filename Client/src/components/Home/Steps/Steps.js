import React from "react";

import pick from "../../../Assets/StepsTo/pickATemplate.png";
import fill from "../../../Assets/StepsTo/fillInDetailResum.png";
import download from "../../../Assets/StepsTo/downloadIT.png";

import "./Steps.css";
const Steps = () => {
  return (
    <div className="step">
      <div>
        <img src={pick} alt="pick" />
        <div className="pickText">
          {" "}
          <span>&#9312;</span>
          <br></br>Pick a template
        </div>
      </div>
      <div>
        <img src={fill} alt="fill" />
        <div className="fillText">
          <span>&#9313;</span>
          <br></br> fill in detail{" "}
        </div>
      </div>
      <div>
        <img src={download} alt="download" />
        <div className="downloadText">
          {" "}
          <span>&#9314;</span>
          <br></br>Download it
        </div>
      </div>
    </div>
  );
};
export default Steps;
