import React, { useState, useEffect } from "react";
import { authService } from "../firebase/fbase";

import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import AppRouter from "./Router";
import Header from "./HeaderFooter/Header/Header";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(
      authService.getAuth(),
      (user) => {
        if (user) {
          setIsLoggedIn(true);
        }
        setInit(true);
      },
      []
    );
  });
  console.log(authService.getAuth().currentUser);
  return (
    <div>
      {/* {isLoggedIn ? <Header /> : ""} */}
      {/* {isLoggedIn ? <Home /> : <Auth />} */}
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
