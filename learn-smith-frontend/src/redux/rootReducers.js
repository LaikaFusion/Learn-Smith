import { combineReducers } from "redux-starter-kit";
import { counterReducer } from "./counterreducer";
import { incrimenterReducer } from "./incrimentorreducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  incrimenter: incrimenterReducer
});

export default rootReducer;
