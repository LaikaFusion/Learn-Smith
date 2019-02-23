import { createReducer, createAction } from "redux-starter-kit";

const silverincrement = createAction("silver/increment");
const silverdecrement = createAction("silver/decrement");

const silverReducer = createReducer(0, {
  [silverincrement]: (state, action) => state + action.payload,
  [silverdecrement]: (state, action) => state - action.payload
});

export { silverReducer, silverincrement, silverdecrement };
