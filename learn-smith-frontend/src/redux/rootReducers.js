import { combineReducers } from "redux-starter-kit";
import { counterReducer } from "./counterreducer";
import { incrimenterReducer } from "./incrimentorreducer";
import { woodReducer } from "./woodreducer";
import { ironReducer } from "./ironreducer";
import { steelReducer } from "./steelreducer";
import { silverReducer } from "./silverreducer";
import { copperReducer } from "./copperreducer";
import { bronzeReducer } from "./bronzereducer";
import { obsidianReducer } from "./obsidianreducer";
import { goldReducer } from "./goldreducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  incrimenter: incrimenterReducer,
  wood: woodReducer,
  iron: ironReducer,
  steel: steelReducer,
  silver: silverReducer,
  copper: copperReducer,
  bronze: bronzeReducer,
  obsidian: obsidianReducer,
  gold: goldReducer
});

export default rootReducer;
