import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import Tes from "./test";
import ResTemplatePage from "./ResTemplatePage/ResTemplatePage";
import Admin from "./Admin/Admin";
import Profile from "./profile/profile";

import ResCreator from "./ResCreator/ResCreator";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/auth"
        render={() => (isLoggedIn ? <Redirect to="/" /> : <Auth />)}
      />

      {/* {isLoggedIn ? (
        <Route exact path="/">
          <Home />
        </Route>
      ) : (
        <Route exact path="/auth">
          <Auth />
        </Route>
      )} */}

      <Route exact path="/test">
        <Tes />
      </Route>
      <Route exact path="/template">
        <ResTemplatePage />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/creator">
        <ResCreator />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};
export default AppRouter;
