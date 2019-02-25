import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

const counterReducer = createReducer(0, {
  [increment]: (state, action) => add(state, action.payload),
  [decrement]: (state, action) => subtract(state, action.payload)
});

export { counterReducer, increment, decrement };
