import { combineReducers } from "redux";
import todoReducer from "./Pages/List/reducers";

export default combineReducers({
  todo: todoReducer,
});
