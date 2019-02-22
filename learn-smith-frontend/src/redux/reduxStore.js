import { configureStore } from "redux-starter-kit";
import rootReducer from "./rootReducers";

const preloadedState = {
  counter: 0
};

const store = configureStore({ reducer: rootReducer, preloadedState });

export default store;
