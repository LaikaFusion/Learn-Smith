import { createReducer, createAction } from "redux-starter-kit";

const copperincrement = createAction("copper/increment");
const copperdecrement = createAction("copper/decrement");

const copperReducer = createReducer(0, {
  [copperincrement]: (state, action) => state + action.payload,
  [copperdecrement]: (state, action) => state - action.payload
});

export { copperReducer, copperincrement, copperdecrement };
