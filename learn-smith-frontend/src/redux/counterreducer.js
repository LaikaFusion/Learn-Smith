import { createReducer, createAction } from "redux-starter-kit";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state.counter + action.payload,
  [decrement]: (state, action) => state.counter - action.payload
});

export { counterReducer, increment, decrement };
