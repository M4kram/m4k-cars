import { legacy_createStore } from "redux";
import carReducer from "./reducers/carReducer";

const store = legacy_createStore(carReducer);

export default store;
