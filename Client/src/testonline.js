import React, { useState, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";

import { connect } from "react-redux";
import download from "downloadjs";

import JsxParser from "react-jsx-parser";

import axios from "axios";

const Res = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.code.stateObject);
  }, []);
  console.log(props);

  const st = {};

  const obj = {};
  if (props.code.arrObject) {
    props.code.arrObject.forEach((a) => {
      obj[a] = data[a];
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
    const da = axios.post("/post", {
      name: JSON.stringify(ls),
    });

    //get request to download file
    const res = await fetch("http://localhost:8000/");
    const blob = await res.blob();
    //here format type need to be same with the format we are getting from backend

    download(blob, "test.html");
  };

  let onChan = (event) => {
    console.log(event.target.placeholder);
    const { name, value } = event.target;
    const ob = {};
    ob[name] = value;
    setData({ ...data, ...ob });
  };

  return (
    <div>
      <div className="creationArea">
        <div>
          {props.code
            ? props.code.htmlForm.map((a) => (
                <div>
                  <span>{a.name} = </span>
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
              ))
            : ""}
        </div>

        <div>{jsxStr}</div>
      </div>
      <button onClick={onClick}>Download</button>
    </div>

    // name:"name",placeholder="name",onChange:onChan()
  );
};
const mapStateToProps = (state) => {
  return { code: state.code };
};

export default connect(mapStateToProps)(Res);
