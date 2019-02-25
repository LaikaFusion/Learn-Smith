import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const incrimenterincrement = createAction("incrimenter/increment");
const incrimenterdecrement = createAction("incrimenter/decrement");

const incrimenterReducer = createReducer(0, {
  [incrimenterincrement]: (state, action) => add(state, action.payload),
  [incrimenterdecrement]: (state, action) => subtract(state, action.payload)
});

export { incrimenterReducer, incrimenterincrement, incrimenterdecrement };
