import React from "react";

import bold from "../../../Assets/TemplateHome/boldResume.png";
import creative from "../../../Assets/TemplateHome/creativeResume.jpeg";
import exp from "../../../Assets/TemplateHome/experiance.png";
import fresher from "../../../Assets/TemplateHome/Freshe1.png";
import profes from "../../../Assets/TemplateHome/professanlresume.jpeg";

import "./Template.css";
const Template = () => {
  return (
    <div className="tempRes">
      {/* <div>
        <img src={bold} />
        <span>Bold Resume</span>
      </div> */}
      <div>
        <div className="temImg">
          <img src={creative} />

          <div>Creative</div>
        </div>
        <div className="temImg">
          <img src={exp} />

          <div>Experiance</div>
        </div>
      </div>

      <div>
        <div className="temImg">
          <img src={fresher} />

          <div>Freshers</div>
        </div>
        <div className="temImg">
          <img src={profes} />

          <div>Professional</div>
        </div>
      </div>
    </div>
  );
};

export default Template;
