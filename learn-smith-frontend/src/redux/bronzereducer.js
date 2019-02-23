import { createReducer, createAction } from "redux-starter-kit";

const bronzeincrement = createAction("bronze/increment");
const bronzedecrement = createAction("bronze/decrement");

const bronzeReducer = createReducer(0, {
  [bronzeincrement]: (state, action) => state + action.payload,
  [bronzedecrement]: (state, action) => state - action.payload
});

export { bronzeReducer, bronzeincrement, bronzedecrement };
