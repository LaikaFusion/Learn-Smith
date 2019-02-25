import { createReducer, createAction } from "redux-starter-kit";

const incrimenterincrement = createAction("incrimenter/increment");
const incrimenterdecrement = createAction("incrimenter/decrement");

const incrimenterReducer = createReducer(0, {
  [incrimenterincrement]: (state, action) => state + action.payload,
  [incrimenterdecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { incrimenterReducer, incrimenterincrement, incrimenterdecrement };
