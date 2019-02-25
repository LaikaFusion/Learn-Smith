import { createReducer, createAction } from "redux-starter-kit";

const goldincrement = createAction("gold/increment");
const golddecrement = createAction("gold/decrement");

const goldReducer = createReducer(0, {
  [goldincrement]: (state, action) => state + action.payload,
  [golddecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { goldReducer, goldincrement, golddecrement };
