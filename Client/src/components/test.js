import React, { useState, useEffect, useRef } from "react";
import Header from "./HeaderFooter/Header/Header";
import ReactDOMServer from "react-dom/server";
import { serialize, deserialize } from "react-serialize";
import reactElementToJSXString from "react-element-to-jsx-string";

import axios from "axios";

const Tes = () => {
  const [dat, setDat] = useState(null);
  const [testing, setTest] = useState("kaam ho gya");
  const [va, setVa] = useState(null);
  const body = {
    name: dat,
  };
  // let data;
  // useEffect(async () => {
  //   data = await axios.post("/post", dat);
  //   setVa(data);
  //   console.log(data);
  // }, []);
  const name = useRef(4);
  const profes = useRef();

  const twist = () => console.log(name.current);

  const aj = [
    <div>
      <h1 style={{ background: "lightblue" }}>
        <input ref={name} type="text" name="name" />
        <div> shashank</div>
        <div>45</div>
        <input ref={profes} type="text" name="prof" />

        <div onClick={() => twist}>
          <h1>EVENTER</h1>
        </div>

        <div>jssw == </div>
        <button onClick={twist}>button</button>
        <div> angular js developer</div>
      </h1>
    </div>,
  ];
  const myhandler = () => {
    console.log("hander");
  };

  const htmlForm = () => {
    return (
      <form>
        <div> name</div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={obj.name}
          onChange={myhandler}
          readOnly={true}
        />
        <div> profession</div>
        <input
          type="text"
          name="profession"
          placeholder="profession"
          value={obj.profession}
          onChange={myhandler}
          readOnly={true}
        />
        <div>experiance</div>
        <input
          type="text"
          name="experiance"
          placeholder="experiance"
          value={obj.experiance}
          onChange={myhandler}
          readOnly={true}
        />
      </form>
    );
  };

  const htmlCSSForm = () => {
    return (
      // <form style={{ background: "yellow" }}>
      //   <div> name</div>
      //   <div>{obj.name}</div>
      //   <div> profession</div>
      //   <div>{obj.profession}</div>
      //   <div>experiance</div>
      //   <div>{obj.experiance}</div>
      // </form>
      <form
        style={{
          display: "flex",
          backgroundColor: "wheat",
          width: "595px",
          height: "842px",
          padding: "5px 10px 0 10px",
          border: "2px red solid",
        }}
      >
        <h1 style={{ margin: "0" }}>{obj.name}</h1>

        <span>
          {obj.address} &nbsp; &nbsp; {obj.phone} &nbsp; &nbsp; {obj.email}
        </span>

        <br />
        <div>summary</div>
        <p>{obj.summary}</p>
        <span>
          {obj.address} &nbsp; &nbsp; {obj.phone} &nbsp; &nbsp; {obj.email}
        </span>
      </form>
    );
  };
  const nas = "shashank";
  let obj = { name: "shashank", age: 80 };

  const inp = (
    <div>
      <h1 style={{ background: "lightblue" }}>
        <input type="text" />
        <div> shashank</div>
        <div>45</div>
        <div onClick={(e) => console.log(e)}>
          <h1>EVENTER</h1>
        </div>
        <div> angular js developer</div>
      </h1>
    </div>
  );
  // const ff = ReactDOMServer.renderToStaticMarkup(inp);
  // console.log(ff);
  // const jsn = serialize(inp);
  // console.log("json", jsn);
  const serial = serialize(inp);
  const ob = async (e) => {
    // console.log(inp);
    // console.log(e.target.toString())
    // const da = await axios.post("/post", { name: JSON.stringify(ff) });
    // setDat(da);
    // console.log(da);
  };
  // const aj = [
  //   <div>
  //     <h1 style={{ background: "lightblue" }}>
  //       <input type="text" />
  //       <div> shashank</div>
  //       <div>45</div>
  //       <div onClick={(e) => console.log(e)}>
  //         <h1>EVENTER</h1>
  //       </div>
  //       <div> angular js developer</div>
  //     </h1>
  //   </div>,
  // ];

  // console.log(aj);
  // console.log(typeof va.data);
  let a = dat;
  // console.log(a);

  //building form React.createElement
  let asw = [
    { name: "name", placeholder: "name" },

    {
      name: "profession",
      placeholder: "profession",
    },

    {
      name: "experiance",
      placeholder: "experiance",
    },
  ];
  console.log(JSON.stringify(asw));

  //

  //

  return (
    <div>
      <Header />
      {/* <div dangerouslySetInnerHTML={{ __html: va.data }} /> */}
      {inp}
      <div onClick={(e) => ob(e)}> i am test</div>
      {/* {console.log(<div> shashank</div>)} */}
      {/* {ff} */}
      {/* {console.log(JSON.stringify(serial))} */}
      {console.log(
        reactElementToJSXString(
          <div>
            <h1 style={{ background: "lightblue" }}>
              <input type="text" />
              <div> shashank</div>
              <div>45</div>
              <div onClick={() => console.log("hello")}>
                <h1>EVENTER</h1>
              </div>
              <div> angular js developer</div>
            </h1>
          </div>
        )
      )}

      {aj}
    </div>
  );
};

export default Tes;

// {/* <div style={{ backgroundColor: "red" }}>
//   <form>
//     <h1>{obj.name}</h1>

//     <span>
//       {obj.address} &nbsp; &nbsp; {obj.phone} &nbsp; &nbsp; {obj.email}
//     </span>

//     <br />
//     <div>summary</div>
//     <p>{obj.summary}</p>

//     <div>
//       <h3>Education</h3>
//       <div>
//         <h2>{obj.edu1Degree}</h2>
//         <span>
//           <span>{obj.edu1Name}</span> &#8226;
//           <span> {obj.edu1Location}</span>
//         </span>
//         <p></p>
//         <ul>
//           <li>{obj.edu1Summary1}</li>
//           <li>{obj.edu1Summary2} </li>
//         </ul>
//       </div>

//       <div>
//         <h2>{obj.edu2Degree}</h2>
//         <span> {obj.edu2Name} </span>
//         <ul>
//           <li>{obj.edu2Summary1}</li>
//           <li>{obj.edu2Summary2}</li>
//         </ul>
//       </div>
//     </div>

//     <div>
//       <h3>Experience</h3>
//       <div>
//         <h2>{obj.exp1Name}</h2>
//         <span>
//           <span>{obj.exp1Company}</span>&#8226; <span>{obj.exp1Location}</span>
//         </span>
//         <span>
//           <input type="date" style={{ width: "130px" }} />
//           <span> - to - </span>
//           <input type="date" style={{ width: "130px" }} />
//           {/* <span> present</span> */}
//         </span>
//         <ul>
//           <li>{obj.exp1Summary1}</li>
//           <li>{obj.exp1Summary2}</li>
//         </ul>
//       </div>
//       <div>yaha pe bhi hai </div>
//       <div>
//         <h2>{obj.exp2Name}</h2>
//         <span>
//           <span>{obj.exp2Company}</span>&#8226; <span>{obj.exp2Location}</span>
//         </span>
//         <span>
//           <input type="date" style={{ width: "130px" }} />
//           <span> - to - </span>
//           <input type="date" style={{ width: "130px" }} />
//         </span>
//         <ul>
//           <li>{obj.exp2Summary1}</li>
//           <li>{obj.exp2Summary2}</li>
//         </ul>
//       </div>
//     </div>

//     <div>
//       <h3>Skills</h3>
//       <div>
//         <ul>
//           <li>{obj.skill1}</li>
//           <li>{obj.skill2}</li>
//           <li>{obj.skill3}</li>
//           <li>{obj.skill4} </li>
//           <li>{obj.skill5}</li>
//           <li>{obj.skill6}</li>
//         </ul>
//       </div>
//     </div>
//     <div>yaha tak hai </div>
//   </form>
// </div>; */}

// [
//   <div
//     style={{
//       margin: "0",
//       padding: "0",
//       boxSizing: "border-box",
//       fontSize: "12.5px",
//     }}
//   >
//     <link
//       href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
//       rel="stylesheet"
//     ></link>
//     <form
//       style={{
//         // justifyContent: "center",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "595px",
//         height: "842px",
//         padding: "5px 10px 0 10px",
//         border: "2px red solid",
//         fontFamily: "PT Serif, cursive",
//       }}
//     >
//       <h1 style={{ margin: "0" }}>{obj.name}</h1>

//       <span>
//         {obj.address} &nbsp; &nbsp; {obj.phone} &nbsp; &nbsp; {obj.email}
//       </span>

//       <br />
//       <div>summary</div>
//       <p>{obj.summary}</p>

//       <div
//         style={{
//           // justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h3 style={{ margin: "0", marginBottom: "10px" }}>Education</h3>
//         <div
//           style={{
//             // display: "flex",
//             // justifyContent: "flex-start",
//             // alignContent: "flex-start",
//             flexDirection: "column",
//             width: "595px",
//             // alignItems: "center",
//           }}
//         >
//           <h2 style={{ margin: "0" }}>{obj.edu1Degree}</h2>
//           <span>
//             <span>{obj.edu1Name}</span> &#8226;
//             <span> {obj.edu1Location}</span>
//           </span>
//           <p></p>
//           <ul>
//             <li>{obj.edu1Summary1}</li>
//             <li>{obj.edu1Summary2} </li>
//           </ul>
//         </div>

//         <div
//           style={{
//             // display: "flex",
//             // justifyContent: "flex-start",
//             // alignContent: "flex-start",
//             flexDirection: "column",
//             width: "595px",
//             // alignItems: "center",
//           }}
//         >
//           <h2 style={{ margin: "0" }}>{obj.edu2Degree}</h2>
//           <span> {obj.edu2Name} </span>
//           <ul>
//             <li>{obj.edu2Summary1}</li>
//             <li>{obj.edu2Summary2}</li>
//           </ul>
//         </div>
//       </div>

//       <div
//         style={{
//           // justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h3 style={{ margin: "0", marginBottom: "10px" }}>Experience</h3>
//         <div
//           style={{
//             // justifyContent: "center",
//             flexDirection: "column",
//             // alignItems: "center",
//             width: "595px",
//           }}
//         >
//           <h2 style={{ margin: "0" }}>{obj.exp1Name}</h2>
//           <span>
//             <span>{obj.exp1Company}</span>&#8226;{" "}
//             <span>{obj.exp1Location}</span>
//           </span>
//           <span>
//             <input type="date" style={{ width: "130px" }} />
//             <span> - to - </span>
//             <input type="date" style={{ width: "130px" }} />
//             {/* <span> present</span> */}
//           </span>
//           <ul>
//             <li>{obj.exp1Summary1}</li>
//             <li>{obj.exp1Summary2}</li>
//           </ul>
//         </div>

//         <div
//           style={{
//             // alignItems: "center",
//             width: "595px",
//           }}
//         >
//           <h2 style={{ margin: "0" }}>{obj.exp2Name}</h2>
//           <span>
//             <span>{obj.exp2Company}</span>&#8226;{" "}
//             <span>{obj.exp2Location}</span>
//           </span>
//           <span>
//             <input type="date" style={{ width: "130px" }} />
//             <span> - to - </span>
//             <input type="date" style={{ width: "130px" }} />
//           </span>
//           <ul>
//             <li>{obj.exp2Summary1}</li>
//             <li>{obj.exp2Summary2}</li>
//           </ul>
//         </div>
//       </div>

//       <div
//         style={{
//           // justifyContent: "center",
//           flexDirection: "column",
//           // alignItems: "center",
//           width: "595px",
//         }}
//       >
//         <h3 style={{ margin: "0" }}>Skills</h3>
//         <div>
//           <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//             <li>{obj.skill1}</li>
//             <li>{obj.skill2}</li>
//             <li>{obj.skill3}</li>
//             <li>{obj.skill4} </li>
//             <li>{obj.skill5}</li>
//             <li>{obj.skill6}</li>
//           </ul>
//         </div>
//       </div>
//     </form>
//   </div>,
// ];
