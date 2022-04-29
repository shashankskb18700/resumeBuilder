import React, { useState } from "react";
import { authService } from "../../firebase/fbase";

import SignIn from "./SignInSignUp/SignIn";
import Logo from "../logo/logo";

import "./Auth.css";
import "./input.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const onChange = (event) => {
    // const {
    //   tareget: { name, value },
    // } = event;
    // console.log(event.target.name);
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const SignInSignUp = async () => {
    console.log("insideof singinign");
    const auth = authService.getAuth();
    let data;
    try {
      if (newUser) {
        data = await authService.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const socialAuth = async () => {
    const auth = authService.getAuth();
    const provider = new authService.GoogleAuthProvider();

    const data = await authService.signInWithPopup(auth, provider);
    console.log(data);
  };

  const toggle = () => {
    setNewUser((e) => !e);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const toggleCardSignIn = (e) => {
    setToggleLogin((e) => !e);
    setNewUser(false);
  };
  const toggleCardSignUp = (e) => {
    setToggleLogin((e) => !e);
    setNewUser(true);
  };

  return (
    <div className="auth">
      <div className="graphiti">
        <div className="lo">
          <Logo />
        </div>

        {/* <h2 className="title">Reedemer</h2> */}
      </div>
      <div className="slogan">
        {toggleLogin ? (
          <div className="form">
            <button className="closeToggled" onClick={toggleCardSignIn}>
              ✗
            </button>
            <form onSubmit={onSubmit}>
              <div className="inputbox">
                <input
                  type="email"
                  name="email"
                  // placeholder="entre your email"
                  value={email}
                  required
                  onChange={onChange}
                />
                <label className="labEmail">Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                  // placeholder="entre your password"
                />
                <label className="labPass">password</label>
              </div>
              <br />
              <button className="auth-butt" onClick={SignInSignUp}>
                {newUser ? "Sign Up" : "Sign In"}
              </button>
              <button className="auth-butt" onClick={socialAuth}>
                Google
              </button>
            </form>
            <br></br>
            <button className="user-toggle" onClick={toggle}>
              {newUser
                ? "Already a member please log in"
                : "new user ? please sign up"}
            </button>
          </div>
        ) : (
          <div className="slogan-text">
            <div className="Reed-titil">
              <h1 className="Reed">Reedemer</h1>
            </div>
            <h2 className="slog">JOIN TODAY, & BUILT MAGNIFICINT RESUME . </h2>
            <button onClick={toggleCardSignIn}>Sign In</button>
            <button onClick={toggleCardSignUp}>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
