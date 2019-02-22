import { combineReducers } from "redux-starter-kit";
import { counterReducer } from "./counterreducer";

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
