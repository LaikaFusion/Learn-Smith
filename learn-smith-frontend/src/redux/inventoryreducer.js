import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "./reducerCountLogic";

const inventoryadd = createAction("inventory/add");
const inventoryremove = createAction("inventory/remove");

const incrimenterReducer = createReducer(0, {
  [inventoryadd]: (state, action) => add(state, action.payload),
  [inventoryremove]: (state, action) => subtract(state, action.payload)
});

export { incrimenterReducer, incrimenterincrement, incrimenterdecrement };
