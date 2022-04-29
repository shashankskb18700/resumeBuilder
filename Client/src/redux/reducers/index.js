import { combineReducers } from "redux";
import HtmlReducer from "./htmlReducer";

export default combineReducers({
  code: HtmlReducer,
});
