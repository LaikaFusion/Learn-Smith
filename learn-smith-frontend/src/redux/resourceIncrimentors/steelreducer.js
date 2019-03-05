import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "../reducerCountLogic";

const steelincrement = createAction("steel/increment");
const steeldecrement = createAction("steel/decrement");

const steelReducer = createReducer(0, {
  [steelincrement]: (state, action) => add(state, action.payload),
  [steeldecrement]: (state, action) => subtract(state, action.payload)
});

export { steelReducer, steelincrement, steeldecrement };
