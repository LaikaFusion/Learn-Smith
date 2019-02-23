import { createReducer, createAction } from "redux-starter-kit";

const ironincrement = createAction("iron/increment");
const irondecrement = createAction("iron/decrement");

const ironReducer = createReducer(0, {
  [ironincrement]: (state, action) => state + action.payload,
  [irondecrement]: (state, action) => state - action.payload
});

export { ironReducer, ironincrement, irondecrement };
