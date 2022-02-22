import { myActions } from "./actions/actionTypes";

const dataStore = {
  availableRide: [],

  filterModuleOpen: false,
  pastRideCount: "",
  upcomingRideCount: "",
  nearestRideCount: "",
};

const rideReducer = (state = dataStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case myActions.OPEN_FILTER:
      return { ...state, filterModuleOpen: !state.filterModuleOpen };
    case myActions.SORT_BY_STATE:
      return {
        ...state,
        availableRide: payload,
      };
    case myActions.SORT_BY_CITY:
      return {
        ...state,
        availableRide: payload,
      };
    case myActions.RIDE_DATA:
      return {
        ...state,
        availableRide: payload,
      };
    case myActions.STATE_AND_CITY_SEARCH:
      return {
        ...state,
        availableRide: payload,
      };
    case myActions.PAST_RIDES_UPDATE:
      return {
        ...state,
        pastRideCount: payload,
      };
    case myActions.UPCOMING_RIDES_UPDATE:
      return {
        ...state,
        upcomingRideCount: payload,
      };

    case myActions.NEAREST_RIDES_UPDATE:
      return {
        ...state,
        nearestRideCount: payload,
      };
    default:
      return state;
  }
};

export default rideReducer;
