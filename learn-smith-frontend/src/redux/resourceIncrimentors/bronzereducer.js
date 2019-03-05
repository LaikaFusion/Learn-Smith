import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "../reducerCountLogic";

const bronzeincrement = createAction("bronze/increment");
const bronzedecrement = createAction("bronze/decrement");

const bronzeReducer = createReducer(0, {
  [bronzeincrement]: (state, action) => add(state, action.payload),
  [bronzedecrement]: (state, action) => subtract(state, action.payload)
});

export { bronzeReducer, bronzeincrement, bronzedecrement };
