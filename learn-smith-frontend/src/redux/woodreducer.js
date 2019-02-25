import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const woodincrement = createAction("wood/increment");
const wooddecrement = createAction("wood/decrement");

const woodReducer = createReducer(0, {
  [woodincrement]: (state, action) => add(state, action.payload),
  [wooddecrement]: (state, action) => subtract(state, action.payload)
});

export { woodReducer, woodincrement, wooddecrement };
