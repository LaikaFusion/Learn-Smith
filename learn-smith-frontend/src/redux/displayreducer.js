import { createReducer, createAction } from "redux-starter-kit";

const switchDisplay = createAction("incrimenter/increment");

const displayReducer = createReducer(0, {
  [switchDisplay]: (state, action) => action.payload
});

export { displayReducer, switchDisplay };
