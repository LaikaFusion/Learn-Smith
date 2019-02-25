import { createReducer, createAction } from "redux-starter-kit";

const bronzeincrement = createAction("bronze/increment");
const bronzedecrement = createAction("bronze/decrement");

const bronzeReducer = createReducer(0, {
  [bronzeincrement]: (state, action) => state + action.payload,
  [bronzedecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { bronzeReducer, bronzeincrement, bronzedecrement };
