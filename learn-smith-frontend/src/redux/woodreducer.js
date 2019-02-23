import { createReducer, createAction } from "redux-starter-kit";

const woodincrement = createAction("wood/increment");
const wooddecrement = createAction("wood/decrement");

const woodReducer = createReducer(0, {
  [woodincrement]: (state, action) => state + action.payload,
  [wooddecrement]: (state, action) => state - action.payload
});

export { woodReducer, woodincrement, wooddecrement };
