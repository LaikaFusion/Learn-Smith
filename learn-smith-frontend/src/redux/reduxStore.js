import { configureStore } from "redux-starter-kit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['display']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

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
  gold: 0,
  display: "main",
  inventory: []
};

const store = configureStore({ reducer: persistedReducer, preloadedState });
const persistor = persistStore(store);

export { store, persistor };
