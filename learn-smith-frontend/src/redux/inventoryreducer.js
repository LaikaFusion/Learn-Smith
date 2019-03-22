import { createReducer, createAction } from "redux-starter-kit";

const inventoryadd = createAction("inventory/add");
const inventoryremove = createAction("inventory/remove");

const inventoryReducer = createReducer([], {
  [inventoryadd]: (state, action) => {
    const toPush = action.payload;
    toPush.id = state.curID;
    // eslint-disable-next-line no-param-reassign
    state.curID += 1;
    state.list.push(toPush);
    state.list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  },
  [inventoryremove]: (state, action) => {
    console.log(state.list);
    state.list = state.list.filter((e) => {
      if (e.id === action.payload) {
        return false;
      }
      return true;
    });
  }
});

export { inventoryReducer, inventoryadd, inventoryremove };
