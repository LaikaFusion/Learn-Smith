import { createReducer, createAction } from "redux-starter-kit";

const customeradd = createAction("customer/add");
const customerremove = createAction("customer/remove");

const customerReducer = createReducer([], {
  [customeradd]: (state, action) => {
    state.push(action.payload);
  },
  [customerremove]: (state, action) => {
    state.filter((e, i) => {
      if (e.id === action.payload.id) {
        return false;
      }
      return true;
    });
  }
});

export { customerReducer, customeradd, customerremove };
