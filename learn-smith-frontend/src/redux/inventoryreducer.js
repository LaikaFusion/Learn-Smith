import { createReducer, createAction } from "redux-starter-kit";

const inventoryadd = createAction("inventory/add");
const inventoryremove = createAction("inventory/remove");

const inventoryReducer = createReducer([], {
  [inventoryadd]: (state, action) => {
    console.log(state);
    state.push(action.payload);
    state.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  },
  [inventoryremove]: (state, action) => {
    state.filter((e, i) => {
      if (e.id === action.payload.id) {
        return false;
      }
      return true;
    });
  }
});

export { inventoryReducer, inventoryadd, inventoryremove };
