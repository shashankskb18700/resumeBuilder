import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
// import parse from "html-react-parser";
import { connect } from "react-redux";
import download from "downloadjs";
// import { serialize, deserialize } from "react-serialize";
import "./ResCreator.css";

// import Resume2 from "../../../src/tesResume";
// import Res from "../../../src/testonline";
import load from "../../Assets/loader/loader3.gif";

import JsxParser from "react-jsx-parser";

import Header from "../HeaderFooter/Header/Header";
import axios from "axios";
import Footer from "../HeaderFooter/footer/Footer";

const ResCreator = (props) => {
  const [data, setData] = useState({});
  const [arrD, setArrD] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [str, setStr] = useState("");

  // const [namee, setNamee] = useState({
  //   nam: "shahsnak",
  //   prof: "ijn",
  // });
  // const [profession, setProfession] = useState("");
  // const [experiance, setExperiance] = useState("");

  useEffect(() => {
    console.log("ran through this ");
    setData(props.code.stateObject);

    setArrD(props.code.htmlForm);
  }, [props.code]);

  console.log("running after it ");
  console.log(props);

  // const st = {};

  const obj = {};

  if (props.code.stateObject && data === undefined) {
    setData(props.code.stateObject);
  }

  if (props.code.arrObject) {
    props.code.arrObject.forEach((a) => {
      // console.log(data["name"]);
      // jab ye code chal raha hai tab state khali ra raha hai
      // ek baar ye chal ja raha hai lekin dobara nahi chalega ,aur dobala jab state aa chukka hogatab ye re run nahi hoga
      if (data !== undefined) {
        obj[a] = data[a];
      }
    });
  }

  const jsxStr = (
    <JsxParser
      jsx={props.code.htmlCssForm}
      bindings={{
        obj,
        st: props.code.st,
      }}
    />
  );
  const ls = ReactDOMServer.renderToStaticMarkup(jsxStr);
  console.log(jsxStr);

  const onClick = async () => {
    //both of post and get is not working together
    // setNamee(namee);
    //post request to write file
    // setInterval(() => setLoading(false), 2000);
    setLoading(true);
    setStr("yy");

    //

    //online

    //

    const da = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/post`, {
      name: JSON.stringify(ls),
    });

    // get request to download file
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/`);
    const blob = await res.blob();

    download(blob, "Resume.pdf");
    setLoading(false);

    //

    //

    //// offline

    //

    //

    // //post request to write file
    // const da = await axios.post("/post", {
    //   name: JSON.stringify(ls),
    // });

    // //get request to download file
    // const res = await fetch("http://localhost:8000/");

    // const blob = await res.blob();

    // download(blob, "Resume.pdf");
    // setLoading(false);

    //

    //

    //

    //here format type need to be same with the format we are getting from backend
    // window.print(ls);
    // download(blob, "Resume.pdf");
    // setLoading(false);
    // console.log(ds.data);

    // setTimeout(async () => {
    //   const res = await fetch("/");
    //   const blob = await res.blob();

    //   download(blob, "test.pdf");
    // }, 3000);
    // if (blob.size > 20000) {

    // }
  };

  let onChan = (event) => {
    console.log(event.target.placeholder);
    const { name, value } = event.target;
    const ob = {};
    ob[name] = value;
    setData({ ...data, ...ob });
  };

  let lod = () => {
    setTimeout(() => setLoading(!loading), 3000);
  };
  return (
    <div>
      <Header />
      <div className="creationArea">
        <div>
          {arrD
            ? arrD.map((a) => (
                <div className="filler">
                  <div>{a.name} ➡</div>
                  <div>
                    {React.createElement(
                      "input",
                      {
                        onChange: (e) => onChan(e),
                        placeholder: a.placeholder,
                        name: a.name,
                        defaultValue: a.defaultValue,
                      },
                      null
                    )}
                  </div>
                </div>
              ))
            : ""}
        </div>

        <div>{jsxStr}</div>
      </div>
      <div className="downloadBut">
        {/* onClick={() => setLoading(!loading)} */}
        {/* <div className={`pre ${str}`}></div>; */}
        {loading === false ? (
          <button onClick={onClick}>Download</button>
        ) : (
          <img src={load} style={{ width: "300px", height: "300px" }}></img>
        )}
        {/* <button onClick={onClick}>Download</button> */}
      </div>
      <Footer />
    </div>

    // name:"name",placeholder="name",onChange:onChan()
  );
};
const mapStateToProps = (state) => {
  return { code: state.code };
};

export default connect(mapStateToProps)(ResCreator);
