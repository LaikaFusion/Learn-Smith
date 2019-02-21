import { configureStore } from "redux-starter-kit";
import rootReducer from "./rootReducers";

const store = configureStore({ reducer: rootReducer });

export default store;
