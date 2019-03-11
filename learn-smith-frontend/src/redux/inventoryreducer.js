import { createReducer, createAction } from "redux-starter-kit";

const inventoryadd = createAction("inventory/add");
const inventoryremove = createAction("inventory/remove");

const inventoryReducer = createReducer(0, {
  [inventoryadd]: (state, action) => state.push(action.payload),
  [inventoryremove]: (state, action) => {
    state.filter((e,i)=>{
      if (e.id===action.payload.id){
        return false
      }
      return true
    })
  }
});

export { inventoryReducer, inventoryadd, inventoryremove };
