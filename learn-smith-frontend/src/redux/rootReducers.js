import { combineReducers } from "redux-starter-kit";
import { counterReducer } from "./counterreducer";
import { incrimenterReducer } from "./incrimentorreducer";
import { woodReducer } from "./resourceIncrimentors/woodreducer";
import { ironReducer } from "./resourceIncrimentors/ironreducer";
import { steelReducer } from "./resourceIncrimentors/steelreducer";
import { silverReducer } from "./resourceIncrimentors/silverreducer";
import { copperReducer } from "./resourceIncrimentors/copperreducer";
import { bronzeReducer } from "./resourceIncrimentors/bronzereducer";
import { obsidianReducer } from "./resourceIncrimentors/obsidianreducer";
import { goldReducer } from "./resourceIncrimentors/goldreducer";
import { displayReducer } from "./displayreducer";
import { inventoryReducer } from "./inventoryreducer";
import { customerReducer } from "./customerreducer";

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
  gold: goldReducer,
  display: displayReducer,
  inventory: inventoryReducer,
  customer: customerReducer
});

export default rootReducer;
