import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const ironincrement = createAction("iron/increment");
const irondecrement = createAction("iron/decrement");

const ironReducer = createReducer(0, {
  [ironincrement]: (state, action) => add(state, action.payload),
  [irondecrement]: (state, action) => subtract(state, action.payload)
});

export { ironReducer, ironincrement, irondecrement };
