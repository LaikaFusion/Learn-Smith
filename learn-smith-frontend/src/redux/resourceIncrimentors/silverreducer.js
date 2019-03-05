import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "../reducerCountLogic";

const silverincrement = createAction("silver/increment");
const silverdecrement = createAction("silver/decrement");

const silverReducer = createReducer(0, {
  [silverincrement]: (state, action) => add(state, action.payload),
  [silverdecrement]: (state, action) => subtract(state, action.payload)
});

export { silverReducer, silverincrement, silverdecrement };
