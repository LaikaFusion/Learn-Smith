import { createReducer, createAction } from "redux-starter-kit";

const incrimenterincrement = createAction("incrimenter/increment");
const incrimenterdecrement = createAction("incrimenter/decrement");

const incrimenterReducer = createReducer(0, {
  [incrimenterincrement]: (state, action) => state + action.payload,
  [incrimenterdecrement]: (state, action) => state - action.payload
});

export { incrimenterReducer, incrimenterincrement, incrimenterdecrement };
