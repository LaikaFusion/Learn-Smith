import { createReducer, createAction } from "redux-starter-kit";
import { add, subtract } from "../reducerCountLogic";

const obsidianincrement = createAction("obsidian/increment");
const obsidiandecrement = createAction("obsidian/decrement");

const obsidianReducer = createReducer(0, {
  [obsidianincrement]: (state, action) => add(state, action.payload),
  [obsidiandecrement]: (state, action) => subtract(state, action.payload)
});

export { obsidianReducer, obsidianincrement, obsidiandecrement };
