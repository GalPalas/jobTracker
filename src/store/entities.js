import { combineReducers } from "redux";
import trackerReducer from "./trackerSlice";

export default combineReducers({
  tracker: trackerReducer,
});
