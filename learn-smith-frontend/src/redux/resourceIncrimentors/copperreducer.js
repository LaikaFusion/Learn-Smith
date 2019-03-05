import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "../reducerCountLogic";

const copperincrement = createAction("copper/increment");
const copperdecrement = createAction("copper/decrement");

const copperReducer = createReducer(0, {
  [copperincrement]: (state, action) => add(state, action.payload),
  [copperdecrement]: (state, action) => subtract(state, action.payload)
});

export { copperReducer, copperincrement, copperdecrement };
