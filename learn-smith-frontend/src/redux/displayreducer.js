import { createReducer, createAction } from "redux-starter-kit";

const switchDisplay = createAction("display/change");

const displayReducer = createReducer("main", {
  [switchDisplay]: (state, action) => {
    console.log(state);
    return action.payload;
  }
});

export { displayReducer, switchDisplay };
