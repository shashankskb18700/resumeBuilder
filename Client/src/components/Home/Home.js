import React from "react";
import swal from "sweetalert";
import Header from "../HeaderFooter/Header/Header";
import Template from "./Template/Template";
import Steps from "./Steps/Steps";

import Footer from "../HeaderFooter/footer/Footer";

import { ReactComponent as Apple } from "../../Assets/brands/apple-brands.svg";
import { ReactComponent as Google } from "../../Assets/brands/google-brands.svg";
import { ReactComponent as Microsoft } from "../../Assets/brands/microsoft-brands.svg";
import { ReactComponent as Tesla } from "../../Assets/brands/Tesla.svg";
import { ReactComponent as Atlassian } from "../../Assets/brands/atlassian-brands.svg";

import "./Home.css";
const Home = () => {
  const newsletter = () => {
    // alert("thank you for joinin our news letter");
    swal("Thank you for joining our newsletter.");

    setTimeout(() => window.location.reload(), 2000);
    // window.location.reload();
  };
  return (
    <div>
      <Header />
      <div className="topBanner">
        <div className="typingAnimation">
          <div className="staticText">Build &nbsp;</div>

          <div className="combined">
            <div className="dynamicText">
              <li>
                <span>ASTOUNDING</span>
              </li>
              <li>
                <span>PERPLEXING</span>
              </li>
              <li>
                <span>IMPRESSIVE</span>
              </li>
              <li>
                <span>MARVELLOUS</span>
              </li>
            </div>
            <div className="staticText">&nbsp;résumé</div>
          </div>
          <br />

          <div style={{ fontWeight: "bold" }}>
            Build your brand-new resume in as little as 5 minutes.
          </div>
          <br />
          <div className="newsLet">
            <span>
              Join our newsletter to get resume tips every week !{" "}
              <span style={{ color: "red" }}>it's free</span>
            </span>
            <input type="email" placeholder="johnedoe@doe.com" style={{}} />
            <button onClick={() => newsletter()}>Join </button>
          </div>
        </div>
        <div className="pngImage"></div>
      </div>

      <div className="afterBanner">
        <div>Used by people to get hired at best companies</div>
        <div className="Brand">
          <Apple className="ico" style={{ marginBottom: "8px" }} />
          <Google className="ico" />
          <Microsoft className="ico" />
          <Tesla className="ico" />
          <Atlassian className="ico" />
        </div>
      </div>

      <div className="templateDes">
        <div
        // style={{ borderBottom: "4px solid linearGradient(white red white)" }}
        >
          Template for every carrier path
          <div className="bord"></div>
        </div>
        <p>
          Choose professional, elegant, creative, or modern resume templates &
          Convince hiring managers to set up an interview with you.
        </p>
        <div className="resumTemp">
          <Template />
        </div>
      </div>
      <div className="howToDo">
        <div className="howToText">
          {" "}
          Wanna create unrivalled résumé ! we got you{" "}
          <div className="howToBorder"></div>
          <p>create your dream resume in 3 easy steps</p>
        </div>
        <Steps />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
