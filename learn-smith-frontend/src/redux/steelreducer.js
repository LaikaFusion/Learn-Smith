import { createReducer, createAction } from "redux-starter-kit";

const steelincrement = createAction("steel/increment");
const steeldecrement = createAction("steel/decrement");

const steelReducer = createReducer(0, {
  [steelincrement]: (state, action) => state + action.payload,
  [steeldecrement]: (state, action) => state - action.payload
});

export { steelReducer, steelincrement, steeldecrement };
