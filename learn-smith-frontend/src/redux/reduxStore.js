import { configureStore } from "redux-starter-kit";
import rootReducer from "./rootReducers";

const preloadedState = {
  counter: 0,
  incrimenter: 1,
  wood: 0,
  iron: 0,
  steel: 0,
  silver: 0,
  copper: 0,
  bronze: 0,
  obsidian: 0,
  gold: 0
};

const store = configureStore({ reducer: rootReducer, preloadedState });

export default store;
