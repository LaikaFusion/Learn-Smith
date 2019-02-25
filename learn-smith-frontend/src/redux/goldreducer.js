import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const goldincrement = createAction("gold/increment");
const golddecrement = createAction("gold/decrement");

const goldReducer = createReducer(0, {
  [goldincrement]: (state, action) => add(state, action.payload),
  [golddecrement]: (state, action) => subtract(state, action.payload)
});

export { goldReducer, goldincrement, golddecrement };
