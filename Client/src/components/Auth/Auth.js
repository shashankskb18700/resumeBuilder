import React, { useState } from "react";

import SignIn from "./SignInSignUp/SignIn";
import { authService } from "../../firebase/fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="entre your email"
          value={email}
          required
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          placeholder="entre your password"
        />
        <button onClick={SignInSignUp}>
          {newUser ? "Sign Up" : "Sign In"}
        </button>
        <button onClick={socialAuth}>Google</button>
        <button onClick={toggle}>
          {newUser
            ? "Already a member please log in"
            : "new user ? please sign up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
