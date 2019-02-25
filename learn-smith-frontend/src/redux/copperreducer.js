import { createReducer, createAction } from "redux-starter-kit";

const copperincrement = createAction("copper/increment");
const copperdecrement = createAction("copper/decrement");

const copperReducer = createReducer(0, {
  [copperincrement]: (state, action) => state + action.payload,
  [copperdecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { copperReducer, copperincrement, copperdecrement };
