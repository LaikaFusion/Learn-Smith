import { createReducer, createAction } from "redux-starter-kit";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { counterReducer, increment, decrement };
