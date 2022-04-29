import React from "react";

const Resume2 = () => {
  const st = {
    style1: {
      width: "595px",
      height: "833px",
      border: "2px solid red",
      padding: "3px",
      fontFamily: "Lato",
      fontSize: "12px",
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
      width: "69%",
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
  };
  const obj = {
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
  };
  const arr = [
    { name: "name", placholder: "name", defaultValue: "EMMA WATSON" },
  ];
  return (
    <div style={st.style1}>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@200&display=swap"
        rel="stylesheet"
      ></link>

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <form>
        <div style={st.style3}>
          <div style={st.style2}>{obj.name}</div>
          <div style={st.style4}>{obj.title}</div>
        </div>

        <div style={st.style5}>
          <br />
          <div style={st.style6}>
            <div style={st.style19}>
              {" "}
              <h3 style={st.style16}>Contacts</h3>
              <br />
              <div style={st.style9}>
                <div style={st.style8}></div>
                <span>{obj.phone}</span>
              </div>
              <div style={st.style11}>
                <img style={st.style10} src={st.style17} />
                <span> {obj.email}</span>
                <div></div>
              </div>
              <div style={st.style12}>
                <div></div>
                <img style={st.style13} src={st.style18} />
                <div>{obj.address}</div>
              </div>
              <div style={st.style15}>
                <div style={st.style14}></div>
                <span>{obj.linkedIn}</span>
              </div>
            </div>

            <br />
            <div>
              <h3>EDUCATION</h3>
              <br></br>
              <br />
              <div>
                <div>{obj.degName1}</div>
                <div>EDUCATION</div>
                <div>{obj.university1}</div>
                <div>{obj.year1}</div>
              </div>
              <br />
              <div>
                <div>{obj.degName2}</div>
                <div>EDUCATION</div>
                <div>{obj.university2}</div>
                <div>{obj.year2}</div>
              </div>
            </div>
            <br />
            <div>
              <h3>Skills</h3>
              <br />
              <div>
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
                <li>Relevent skill</li>

                <br />
              </div>
            </div>
          </div>
          <div style={st.style7}>
            <div style={st.style19}>
              <h3>PROFILE</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero.
                Sed tempus urna et pharetra pharetra massa massa.
                <br></br>
                Purus sit amet luctus venenatis lectus. Auctor neque vitae
                tempus quam pellentesque nec nam. Lacus sed viverra tellus in
                hac habitasse platea. Fames ac turpis egestas maecenas pharetra
                convallis posuere. Eget sit amet tellus cras adipiscing{" "}
              </div>
            </div>
            <br></br>

            <h3>PROFESSIONAL EXPERIENCE</h3>

            <div>
              <div>
                <div>WRITE YOUR JOB TITLE HERE</div>
                <div>
                  Company name &#124; City state &#124; Beginnig Date- End date
                </div>
                <br></br>
                <div>
                  In 2 lines,summarize your main responsibility using past tense
                  and provide information about the organisation{" "}
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                </div>
              </div>
              <br></br>
              <div>
                <div>WRITE YOUR JOB TITLE HERE</div>
                <div>
                  Company name &#124; City state &#124; Beginnig Date- End date
                </div>
                <br></br>
                <div>
                  In 2 lines,summarize your main responsibility using past tense
                  and provide information about the organisation{" "}
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </li>
                </div>
              </div>
            </div>

            <div>
              <h3>PROJECTS</h3>
              <br></br>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero.
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resume2;
