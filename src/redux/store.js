import { createStore } from "redux";
import rideReducer from "./reducer";

const store = createStore(rideReducer);

export default store;
