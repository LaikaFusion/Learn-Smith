import { createReducer, createAction } from "redux-starter-kit";

const obsidianincrement = createAction("obsidian/increment");
const obsidiandecrement = createAction("obsidian/decrement");

const obsidianReducer = createReducer(0, {
  [obsidianincrement]: (state, action) => state + action.payload,
  [obsidiandecrement]: (state, action) => {
    if (state > 0) {
      return state - action.payload;
    }
    return 0;
  }
});

export { obsidianReducer, obsidianincrement, obsidiandecrement };
