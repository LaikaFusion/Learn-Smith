import { createReducer, createAction } from "redux-starter-kit";

const forgeadd = createAction("forge/add");

const forgeReducer = createReducer([], {
  [forgeadd]: (state, action) => {
    const toPush = action.payload;
    toPush.id = state.curID;
    // eslint-disable-next-line no-param-reassign
    state.curID += 1;
    state.list.push(toPush);
    state.list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
});

export { forgeReducer, forgeadd };
