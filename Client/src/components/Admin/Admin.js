import React, { useState, useRef, Children } from "react";
import Header from "../HeaderFooter/Header/Header";
import { dbService } from "../../firebase/fbase";
import reactElementToJSXString from "react-element-to-jsx-string";
import "./Admin.css";

const Admin = () => {
  const [template, setTemplate] = useState("");
  const [id, setId] = useState("");
  const [htmlForm, setHtmlForm] = useState("");
  const [htmlCssForm, setHtmlCssForm] = useState("");

  const jj = [
    <div>
      <h1 style={{ background: "wheat" }}>
        <input type="text" />
        <div> shashank</div>
        <div>45</div>
        <div onClick={(e) => console.log(e)}>
          <h1>EVENTER</h1>
        </div>
        <div> angular js developer</div>
      </h1>
    </div>,
  ];
  const onClickTemplate = () => {
    const { addDoc, collection } = dbService;
    addDoc(collection(dbService.getFirestore(), "formTemp"), {
      value: template,
      id: id,
    });
  };

  // const onClickForm = () => {
  //   const { addDoc, collection } = dbService;

  //   addDoc(collection(dbService.getFirestore(), id), {
  //     htmlForm: htmlForm,
  //     htmlCssForm: htmlCssForm,
  //   });
  // };

  const onClickForm = () => {
    const { addDoc, collection } = dbService;

    addDoc(collection(dbService.getFirestore(), id), {
      htmlForm: [
        { name: "name", placholder: "name", defaultValue: "EMMA WATSON" },
        {
          name: "title",
          placholder: "title",
          defaultValue: "YOUR PROFESSIONAL TITLE",
        },
        { name: "phone", placholder: "phone", defaultValue: "123-456-7890" },
        {
          name: "email",
          placholder: "email",
          defaultValue: "Jhondoe@doe.com",
        },
        {
          name: "address",
          placholder: "address",
          defaultValue: "New York",
        },
        {
          name: "linkedIn",
          placholder: "linkedIn",
          defaultValue: "linkedin.com/jhonDoe",
        },
        {
          name: "degName1",
          placholder: "degName1",
          defaultValue: "YOUR DEGREE NAME /MAJOR",
        },
        {
          name: "university1",
          placholder: "university1",
          defaultValue: "University Name",
        },

        {
          name: "year1",
          placholder: "year1",
          defaultValue: "2012-2014",
        },
        {
          name: "degName2",
          placholder: "degName2",
          defaultValue: "YOUR DEGREE NAME /MAJOR",
        },
        {
          name: "university2",
          placholder: "university2",
          defaultValue: "University name",
        },
        {
          name: "year2",
          placholder: "year2",
          defaultValue: "2012-2014",
        },

        {
          name: "skill1",
          placholder: "skill1",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill1",
          placholder: "skill1",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill2",
          placholder: "skill2",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill3",
          placholder: "skill3",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill4",
          placholder: "skill4",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill5",
          placholder: "skill5",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill6",
          placholder: "skill6",
          defaultValue: "Relevent skill",
        },
        {
          name: "skill7",
          placholder: "skill7",
          defaultValue: "Relevent skill",
        },
        {
          name: "profileSum",
          placholder: "profileSum",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed tempus urna et pharetra pharetra massa massa.Purus sit amet luctus venenatis lectus. Auctor neque vitae tempus quam pellentesque nec nam. Lacus sed viverra tellus in hac habitasse platea.Fames ac turpis",
        },
        {
          name: "title1",
          placholder: "title1",
          defaultValue: "WRITE YOUR JOB TITLE HERE",
        },
        {
          name: "company1",
          placholder: "company1",
          defaultValue: "Company name ",
        },
        {
          name: "cityState1",
          placholder: "cityState1",
          defaultValue: "City state",
        },
        {
          name: "date1",
          placholder: "date1",
          defaultValue: "Beginnig Date- End date",
        },
        {
          name: "jobDesc1",
          placholder: "jobDesc1",
          defaultValue:
            "In 2 lines,summarize your main responsibility using past tense and provide information about the organisation",
        },
        {
          name: "jobPoint11",
          placholder: "jobPoint11",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint12",
          placholder: "jobPoint12",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint13",
          placholder: "jobPoint13",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint14",
          placholder: "jobPoint14",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },

        {
          name: "title2",
          placholder: "title2",
          defaultValue: "WRITE YOUR JOB TITLE HERE",
        },
        {
          name: "company2",
          placholder: "company2",
          defaultValue: "Company name ",
        },
        {
          name: "cityState2",
          placholder: "cityState2",
          defaultValue: "City state",
        },
        {
          name: "date2",
          placholder: "date2",
          defaultValue: "Beginnig Date- End date",
        },
        {
          name: "jobDesc2",
          placholder: "jobDesc2",
          defaultValue:
            "In 2 lines,summarize your main responsibility using past tense and provide information about the organisation",
        },
        {
          name: "jobPoint21",
          placholder: "jobPoint11",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint22",
          placholder: "jobPoint12",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint23",
          placholder: "jobPoint13",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },
        {
          name: "jobPoint24",
          placholder: "jobPoint14",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        },

        {
          name: "projectDesc",
          placholder: "Description",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero",
        },
      ],
      htmlCssForm: htmlCssForm,
      stateObject: {
        name: "EMMA WATSON",
        title: "YOUR PROFESSIONAL TITLE",
        phone: "123-456-7890",
        email: "Jhondoe@doe.com",
        address: "New York",
        linkedIn: "linkedin.com/jhonDoe",
        degName1: "YOUR DEGREE NAME /MAJOR",
        university1: "University Name",
        year1: "2012-2014",

        degName2: "YOUR DEGREE NAME /MAJOR",
        university2: "University Name",
        year2: "2012-2014",
        skill1: "Relevent skill",
        skill2: "Relevent skill",
        skill3: "Relevent skill",
        skill4: "Relevent skill",
        skill5: "Relevent skill",
        skill6: "Relevent skill",
        skill7: "Relevent skill ",
        profileSum:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed tempus urna et pharetra pharetra massa massa.Purus sit amet luctus venenatis lectus. Auctor neque vitae tempus quam pellentesque nec nam. Lacus sed viverra tellus in hac habitasse platea.Fames ac turpis",
        title1: "WRITE YOUR JOB TITLE HERE",
        company1: "Company name ",
        cityState1: "City state",
        date1: "Beginnig Date- End date",
        jobDesc1:
          "In 2 lines,summarize your main responsibility using past tense and provide information about the organisation",
        jobPoint11:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint12:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint13:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint14:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        title2: "WRITE YOUR JOB TITLE HERE",
        company2: "Company name ",
        cityState2: "City state",
        date2: "Beginnig Date- End date",
        jobDesc2:
          "In 2 lines,summarize your main responsibility using past tense and provide information about the organisation",
        jobPoint21:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint22:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint23:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        jobPoint24:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero",
      },
      arrObject: [
        "name",
        "title",
        "phone",
        "email",
        "address",
        "linkedIn",
        "degName1",
        "university1",
        "year1",
        "degName2",
        "university2",
        "year2",
        "skill1",
        "skill2",
        "skill3",
        "skill4",
        "skill5",
        "skill6",
        "skill7",
        "profileSum",
        "title1",
        "company1",
        "cityState1",
        "date1",
        "jobDesc1",
        "jobPoint11",
        "jobPoint12",
        "jobPoint13",
        "jobPoint14",
        "title2",
        "company2",
        "cityState2",
        "date2",
        "jobDesc2",
        "jobPoint21",
        "jobPoint22",
        "jobPoint23",
        "jobPoint24",
        "projectDesc",
      ],

      st: {
        style1: {
          width: "595px",
          height: "833px",
          border: "2px solid red",
          padding: "3px",
          fontFamily: "Lato",
          fontSize: "12px",
          margin: "0",
          padding: "0",
          boxSizing: "borderBox",
        },
        style2: {
          fontSize: "29px",
          fontWeight: "300",
          fontSpacing: "20px",
          color: "wheat",
          textAlign: "center",
          fontFamily: "Cormorant Garamond",
          letterSpacing: "15px",

          paddingTop: "25px",
        },
        style3: {
          backgroundColor: "rgb(35,46,70)",
          height: "120px",
          color: "wheat",
          textAlign: "center",
        },
        style4: {
          fontSize: "10px",
          letterSpacing: "4px",
          paddingTop: "5px",
        },
        style5: {
          display: "flex",
          height: "700px",
          marginTop: "20px",
          justifyContent: "space-around",
          width: "92%",
          marginLeft: "4%",
          marginRight: "4%",

          // backgroundColor: "cyan",
        },
        style6: {
          borderRight: "2px solid wheat",
          width: "40%",
          height: "98%",
        },
        style7: {
          width: "67%",
          marginLeft: "3%",
        },
        style8: {
          display: "inline-block",
          width: "21px",
          height: "21px",
          marginRight: "15px",
          marginTop: "5px",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIKdmlld0JveD0iMCAwIDUwIDUwIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGQ9Ik0gMTQgMy45OTAyMzQ0IEMgOC40ODg2NjYxIDMuOTkwMjM0NCA0IDguNDc4OTAwOCA0IDEzLjk5MDIzNCBMIDQgMzUuOTkwMjM0IEMgNCA0MS41MDE1NjggOC40ODg2NjYxIDQ1Ljk5MDIzNCAxNCA0NS45OTAyMzQgTCAzNiA0NS45OTAyMzQgQyA0MS41MTEzMzQgNDUuOTkwMjM0IDQ2IDQxLjUwMTU2OCA0NiAzNS45OTAyMzQgTCA0NiAxMy45OTAyMzQgQyA0NiA4LjQ3ODkwMDggNDEuNTExMzM0IDMuOTkwMjM0NCAzNiAzLjk5MDIzNDQgTCAxNCAzLjk5MDIzNDQgeiBNIDE4LjAwNTg1OSAxMi4wMzMyMDMgQyAxOC42MzM4NTkgMTIuMDYwMjAzIDE5LjIxMDU5NCAxMi40MTQwMzEgMTkuNTU4NTk0IDEyLjk1NzAzMSBDIDE5Ljk1NDU5NCAxMy41NzUwMzEgMjAuNTY5MTQxIDE0LjUzNDE1NiAyMS4zNjkxNDEgMTUuNzg1MTU2IEMgMjIuMDk5MTQxIDE2LjkyNjE1NiAyMi4xNTAwNDcgMTguMzk5ODQ0IDIxLjQ5ODA0NyAxOS41ODk4NDQgTCAyMC4wMzMyMDMgMjEuNjczODI4IEMgMTkuNjM3MjAzIDIyLjIzNzgyOCAxOS41NTgyMTkgMjIuOTU5NzAzIDE5LjgyNDIxOSAyMy41OTU3MDMgQyAyMC4yMzgyMTkgMjQuNTg1NzAzIDIxLjA0MDc5NyAyNi4xMDcyMDMgMjIuNDY2Nzk3IDI3LjUzMzIwMyBDIDIzLjg5Mjc5NyAyOC45NTkyMDMgMjUuNDE0Mjk3IDI5Ljc2MTc4MSAyNi40MDQyOTcgMzAuMTc1NzgxIEMgMjcuMDQwMjk3IDMwLjQ0MTc4MSAyNy43NjIxNzIgMzAuMzYyNzk3IDI4LjMyNjE3MiAyOS45NjY3OTcgTCAzMC40MTAxNTYgMjguNTAxOTUzIEMgMzEuNjAwMTU2IDI3Ljg0OTk1MyAzMy4wNzM4NDQgMjcuOTAxODU5IDM0LjIxNDg0NCAyOC42MzA4NTkgQyAzNS40NjU4NDQgMjkuNDMwODU5IDM2LjQyNDk2OSAzMC4wNDU0MDYgMzcuMDQyOTY5IDMwLjQ0MTQwNiBDIDM3LjU4NTk2OSAzMC43ODk0MDYgMzcuOTM5Nzk3IDMxLjM2NjE0MSAzNy45NjY3OTcgMzEuOTk0MTQxIEMgMzguMTIwNzk3IDM1LjU1ODE0MSAzNS4zNTk2NDEgMzcuMDAxOTUzIDM0LjU1NjY0MSAzNy4wMDE5NTMgQyAzNC4wMDA2NDEgMzcuMDAxOTUzIDI3LjMxNjM0NCAzNy43NjE2NTYgMTkuNzc3MzQ0IDMwLjIyMjY1NiBDIDEyLjIzODM0NCAyMi42ODM2NTYgMTIuOTk4MDQ3IDE1Ljk5OTM1OSAxMi45OTgwNDcgMTUuNDQzMzU5IEMgMTIuOTk4MDQ3IDE0LjY0MDM1OSAxNC40NDE4NTkgMTEuODc5MjAzIDE4LjAwNTg1OSAxMi4wMzMyMDMgeiI+PC9wYXRoPjwvc3ZnPg==) 50% 50% no-repeat",
          backgroundSize: "100%",
        },
        style9: {
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        },

        style10: {
          display: "inline-block",
          width: "21px",
          height: "21px",
          marginRight: "15px",
        },

        style11: {
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        },
        style12: {
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        },
        style13: {
          display: "inline-block",
          width: "21px",
          height: "21px",
          marginRight: "15px",
          // background: "black",
          // color: "inherit",
        },
        style14: {
          display: "inline-block",
          width: "25px",
          height: "25px",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTQxLDRIOUM2LjI0LDQsNCw2LjI0LDQsOXYzMmMwLDIuNzYsMi4yNCw1LDUsNWgzMmMyLjc2LDAsNS0yLjI0LDUtNVY5QzQ2LDYuMjQsNDMuNzYsNCw0MSw0eiBNMTcsMjB2MTloLTZWMjBIMTd6IE0xMSwxNC40N2MwLTEuNCwxLjItMi40NywzLTIuNDdzMi45MywxLjA3LDMsMi40N2MwLDEuNC0xLjEyLDIuNTMtMywyLjUzQzEyLjIsMTcsMTEsMTUuODcsMTEsMTQuNDd6IE0zOSwzOWgtNmMwLDAsMC05LjI2LDAtMTAgYzAtMi0xLTQtMy41LTQuMDRoLTAuMDhDMjcsMjQuOTYsMjYsMjcuMDIsMjYsMjljMCwwLjkxLDAsMTAsMCwxMGgtNlYyMGg2djIuNTZjMCwwLDEuOTMtMi41Niw1LjgxLTIuNTYgYzMuOTcsMCw3LjE5LDIuNzMsNy4xOSw4LjI2VjM5eiI+PC9wYXRoPjwvc3ZnPg==) 50% 50% no-repeat",
          backgroundSize: "100%",
          marginRight: "11px",
        },
        style15: {
          display: "flex",
          alignItems: "center",
        },
        style16: {},
        style17:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFQUlEQVR4nO3bW4hVZRQH8N+kYaOOFZRFWpFadiMqraCegnyo6KGgiOiGdvMp6KEiKYt6CKQ3ISm60UNiBpXdVLJMiYoKEoK0C1FZzlgPjjZkeelhfeOZTmfO3mfO3vscsz+sh5n9XdZ/nf19a31rfZtDHD0VznUiTsNsHIeJmJKeDWII27AlyY8V6lYKTsJCrMAA9rcoA6nvXcJ4BwV6cSvWYa/WSY8me/FuGru3MjYtYDLuxlbFkW72ZjyMoyphloEeLMB25RNvZIj5qt3H/oEz8GETBauSjTi9ZK7/ws3Y1abiRcoQbiuVccJ4PF0xuVZkGcaVRX4CVnYBySx5XQmeohfvdwG5vPJekUYYh1e6gFSrskos2bbRzWs+S55sl/ytXUCiXbl5rOTP1F2ubqyyUxzAWkKP7ghyipINWowYb+sCpYuWWxoRbWSVKfgWx+Q01jaswfciIqsCE3EK5uH4nH0GMAO/j/xnIzexUD7yX+N+vIp9OAxH5lSmXewYMefVeByzMvpMFbmFJ5o16hW/aNbr9Cb6BOHF+DIpVNXrvC/N+VDSYQreytHvZxzRzAB53N6HIwa5Bn9USLxe/kg6SDp9lKNPU7e4LqPzbsxM8pDYQy5GfwfI96e5e5IuM0XO8c+MfmtHI3+S7DTWs6ntmvT3SrEhnYxNFZLflOacqHZAeyfp9nxG372Y3sgAC3NMfIUIKkb+7zNME3vCqgrIr0pzTUtzj3x2Kq7KMcYdjQywIkfHaRrHCFsxVxyclpRIfkma4wKN84/zRQY5a5zl9eR75EtdH45FozwbwnVpvPlivyiK+O40pjTH0CjtFiUds8brVxcD5bHa/tRpcZPn+4RP7sElitkcf8Olacz7NN+nFqd2ecY9YaQBLivIAMOyQmxQM4S/Hiv5LWLPmYAXc7RvxQCXEpEU4T6KxLXCpQ4JV7V6DGOsFmt9EB/gxsK0C8ymZoCpBQ8OF+ETEbNfKXz1Xzn6/YUHU58Z+BgXlqDfcdQM0FfCBMTeslGcxB7F2XhKFFLqsV1kdc/CYyIq3aC8umAftcPQ5JImgUl4RoSsj+BOEXOcJv0KalXh/eLNeQuXl6gTdQaoAlcm+VSEo58LLwHniF98HuZUqNMBA+yqcM65STqNQWp7QJUG6BbspGaA/iYN/6sYoGaAzR1UpFP4ikPbAJupGWCrxr65HuOxpyyNCsAe+Txbv3C9BwywXxQ/szB1uGOX4mf5ssTvCc4HDEDE7lk4F+tb16syvI/zcrRryPVE2Smx51LbtzPadULeSLq9kNFuj0jsNMS7GZ3/FGmnWeKc3mnSw/KrODjNFoepZm1HTYqSLy3+kUhBzxG3OTtN/gecL2oan+Ro3zQt3otfcgzytihI9Ik01CbFpsCyZDe+wAPiIHekyApn9cssjMC9OZX4RiQ+hjfSHhxdkQzn8w4TOcLvcup8Tz3ZRsXRPlEcPTbLUgkDYl19p67wWCImiTU/T/5kTr8onuTScYHOr+2i5aachkK8GQfTrbAsafmCBHH9dGcXKN+uDGoj6Xt9FxBoV9rOJi/rAhJjlaXtkidqcQfDFdl6eU2BOc9etRPUwSDr5Ah4WsUEvNwF5LLkVSV+VjNOXD/tNMnRZKkSr8uPxI26y0XuxA2lMm6A2SLA6DT59Yov7uZGj6j7deKS1DYR3nbso6mRmCQ+m/tJ+cT7xWdzw1+ddhWOEAmHtYr/cHJNGrtw91YWpovbWMuNbYlsw0u4XZMcXruocv1MExvncFl8ktrd4h2iPjkgChabRfbmf5SNvwG8r52cGV9/HgAAAABJRU5ErkJggg==",
        style18:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACtElEQVRogeWazYuNURzHPzNoyCWJxmSKRAnlWelaWthosLOh/ANWLCw1kyZbbrqGBVsbJVlIibxLpCzIQiQ1eRu5V/cyXhbnPN1x5758z3PPOU/41K+m7u/5nu93nuc559znufCP0OdZbxEwAmwDEmA1sMR+NgW8BJ4A14DLwBfP4/fMEFAGqsAvsarAGWBtDn5nMQCMARX0AM31DThmtXJhGXCjg0HXugOsiJoA2AS87tF4q3pltaMwGCjEzDCDoUPMx1wCoUKkdZvA98xYhBBpjYcKMURvs5Nr1YE1IYKUI4ZIa8J3iAJmFY4dpGLH7kq/GGSnKmipAyeAoj2uYP8u2c9UFgI7HPq7chr9v/gG2NxBK7E9qt4pn0EeiIPWuoRISWyvonnPYw7eiYMed9AsiZqTXhJY6uKgWxw0i6JmzUsCi3oZuEwIBVHzqyKmzlpTDgZVvI6tin0S+zaIfS69H5UmNcgLsW+f2AewV+x77qDZlXH0GzMR9BL0CWTUYw72iIOmC2KnMK4L4i6fQZYDPxwGr2PWiZlblK00tiiqzndgsc8gAI8dDPiqm6o59WYHuOTQ64uLIUTXE/ds/ARWhQgC8ChikOsuxlwuLTBPBmNRDilewGwZQp+Nt8A8F2OuZ6QCnHU8JgsnMVNvUIbRd8NZ6jONJ/gyrmcEzKp8LsNxKiXC7LZbspIwz7g+AEtjhUgZ9WC8uQ5ETWBZgN+H2c9wnKl8sl8wqNZIZO9/0A88bGHKta7GNt6KBPP6LGuIKrAuuus2qN8gW9XBHPy2ZQB4inuI+8CcHPx2pAhMo4eoARtzcSpwFD3IoZw8SswFbtE9xBWybY+iMgy8p32IScxrvL+C3Zivqs0hpoHtOfrKxBFmBzmcq6OM9AHnaYS4gP9fI0WjgHnjdBe3Vw7/L78ByP0EVSkVHdcAAAAASUVORK5CYII=",
        style19: {
          width: "90%",
          height: "168.539px",
        },
      },
    });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "templateUrl") {
      setTemplate(value);
    } else if (name === "templateId") {
      setId(value);
    } else if (name === "htmlForm") {
      setHtmlForm(value);
    } else {
      setHtmlCssForm(value);
    }
  };
  const onChan = () => console.log();

  return (
    <div>
      <Header />
      <div> i am a admin</div>
      <div className="adminForm">
        <div>
          <h1>for template add </h1>
          <div>
            <div> url</div>
            <input
              type="text"
              name="templateUrl"
              value={template}
              placeholder="url"
              onChange={(event) => onChange(event)}
            />

            <div> Id</div>
            <input
              type="text"
              name="templateId"
              value={id}
              placeholder="Id"
              onChange={(event) => onChange(event)}
            />

            <button onClick={onClickTemplate}>submit</button>
          </div>
        </div>

        <div>
          <h1>for resume upload</h1>
          <div> Id</div>
          <input
            type="text"
            name="templateId"
            value={id}
            placeholder="Id"
            onChange={(event) => onChange(event)}
          />
          <div>htmlForm</div>
          <input
            type="text"
            name="htmlForm"
            value={htmlForm}
            placeholder="htmlForm"
            onChange={(event) => onChange(event)}
          />
          <div>htmlCssForm</div>
          <input
            type="text"
            name="htmlCssFrom"
            value={htmlCssForm}
            placeholder="htmlCssForm"
            onChange={(event) => onChange(event)}
          />

          <button onClick={onClickForm}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
