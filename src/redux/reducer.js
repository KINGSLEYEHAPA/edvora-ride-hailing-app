import { myActions } from "./actions/actionTypes";

const dataStore = {
  availableRide: [],
  filterModuleOpen: false,
};

const rideReducer = (state = dataStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case myActions.OPEN_FILTER:
      return { ...state, filterModuleOpen: !state.filterModuleOpen };
    default:
      return state;
  }
};

export default rideReducer;
