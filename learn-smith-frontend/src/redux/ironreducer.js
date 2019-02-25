import { createReducer, createAction } from "redux-starter-kit";

const ironincrement = createAction("iron/increment");
const irondecrement = createAction("iron/decrement");

const ironReducer = createReducer(0, {
  [ironincrement]: (state, action) => state + action.payload,
  [irondecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { ironReducer, ironincrement, irondecrement };
