import React from "react";
import { authService } from "../firebase/fbase";

import Auth from "./Auth/Auth";

const App = () => {
  console.log(authService.getAuth().currentUser);
  return (
    <div>
      i am App
      <Auth />
    </div>
  );
};

export default App;
