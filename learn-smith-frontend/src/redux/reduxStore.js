import { configureStore } from "redux-starter-kit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["display"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const preloadedState = {
  counter: 0,
  incrimenter: 1,
  wood: 10,
  iron: 10,
  steel: 10,
  silver: 10,
  copper: 10,
  bronze: 10,
  obsidian: 10,
  gold: 0,
  display: "main",
  inventory: { curID: 0, list: [] },
  customers: []
};

const store = configureStore({ reducer: persistedReducer, preloadedState });
const persistor = persistStore(store);

export { store, persistor };
