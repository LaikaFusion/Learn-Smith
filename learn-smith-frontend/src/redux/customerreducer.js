import { createReducer, createAction } from "redux-starter-kit";

const customeradd = createAction("customer/add");
const customerremove = createAction("customer/remove");

const customerReducer = createReducer([], {
  [customeradd]: (state, action) => {
    const toPush = action.payload;
    toPush.id = state.curID;
    // eslint-disable-next-line no-param-reassign
    state.curID += 1;
    state.list.push(toPush);
    
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
