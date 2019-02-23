import { createReducer, createAction } from "redux-starter-kit";

const obsidianincrement = createAction("obsidian/increment");
const obsidiandecrement = createAction("obsidian/decrement");

const obsidianReducer = createReducer(0, {
  [obsidianincrement]: (state, action) => state + action.payload,
  [obsidiandecrement]: (state, action) => state - action.payload
});

export { obsidianReducer, obsidianincrement, obsidiandecrement };
