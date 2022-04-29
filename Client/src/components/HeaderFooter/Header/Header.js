import React, { useState } from "react";
import { authService } from "../../../firebase/fbase";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const [re, setRe] = useState("");

  const SignOut = () => {
    const auth = authService.getAuth();
    authService.signOut(auth, () => {
      console.log("Sign out");
    });
  };

  const reloa = () => window.location.reload();

  return (
    <div className="heade">
      <div className="header-title">
        <h2>REEDEMER</h2>
      </div>
      <div className="utility">
        <Link
          to="/"
          style={{
            color: "wheat",
          }}
        >
          <i className="fas fa-home nav"></i>
        </Link>

        {/* <i className="fas fa-heart nav"></i> */}

        <Link
          to="/profile"
          style={{
            color: "wheat",
          }}
        >
          <i className="fas fa-user nav"></i>
        </Link>

        {authService.getAuth().currentUser ? (
          <button
            style={{
              backgroundColor: `inherit`,
              color: "white",
              outline: "none",
              border: "none",
            }}
            onClick={() => SignOut()}
          >
            <i
              className="fas fa-sign-out-alt  fa-lg nav"
              onClick={() => reloa()}
            ></i>
          </button>
        ) : (
          <Link
            to="/auth"
            style={{
              color: "wheat",
            }}
          >
            <i className="fas fa-sign-in-alt nav"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
