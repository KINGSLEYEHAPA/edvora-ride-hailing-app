import React, { useEffect, useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { myActions } from "../redux/actions/actionTypes";
import { ride } from "../ride";

const Filter = () => {
  const [iconStateOne, setIconStateOne] = useState(false);
  const [iconStateTwo, setIconStateTwo] = useState(false);
  const [filterByState, setFilterByState] = useState("");
  const [filterByCity, setFilterByCity] = useState("");
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filterModuleOpen);

  const availableRideFilteredByState = ride.filter((rideItem) => {
    return filterByState === rideItem.state;
  });
  const availableRideFilteredByCity = ride.filter((rideItem) => {
    return filterByCity === rideItem.city;
  });

  useEffect(() => {
    if (
      availableRideFilteredByState.length > 0 &&
      availableRideFilteredByCity.length === 0
    ) {
      dispatch({
        type: myActions.SORT_BY_STATE,
        payload: availableRideFilteredByState,
      });
    } else if (
      availableRideFilteredByCity.length > 0 &&
      availableRideFilteredByState.length === 0
    ) {
      dispatch({
        type: myActions.SORT_BY_CITY,
        payload: availableRideFilteredByCity,
      });
    } else if (
      availableRideFilteredByState.length > 0 &&
      availableRideFilteredByCity.length > 0
    ) {
      const stateAndCitySort = ride.filter((combineData) => {
        return (
          combineData.state === filterByState &&
          combineData.city === filterByCity
        );
      });
      dispatch({
        type: myActions.STATE_AND_CITY_SEARCH,
        payload: stateAndCitySort,
      });
    } else if (
      availableRideFilteredByState.length === 0 &&
      availableRideFilteredByCity.length === 0
    ) {
      dispatch({ type: myActions.RIDE_DATA, payload: ride });
    }
  }, [
    dispatch,
    filterByCity,
    filterByState,
    availableRideFilteredByCity.length,
    availableRideFilteredByState.length,
  ]);

  let uniqueRideDataByState = [
    ...new Map(ride.map((item) => [item["state"], item])).values(),
  ];
  let uniqueRideDataByCity = [
    ...new Map(ride.map((item) => [item["city"], item])).values(),
  ];

  return (
    <div>
      {filterState && (
        <div className="absolute  w-48 h-44 flex flex-col top-6 right-24 right-4 shadow  bg-neutral-900 justify-between space-y-5 py-4 px-5 lg:right-4 shadow px-5  rounded-xl">
          <h2 className="text-neutral-700  text-md">Filters</h2>
          <hr className="text-neutral-700 border-t-3 border-neutral-700 relative bottom-3"></hr>
          <div className="flex relative">
            <select
              onClick={() => {
                setIconStateOne(!iconStateOne);
              }}
              onChange={(e) => {
                setFilterByState(e.target.value);
              }}
              name="state"
              id="state"
              className=" w-full bg-neutral-700 p-1 text-sm outline-none rounded appearance-none px-2"
            >
              <option value="state">State</option>

              {uniqueRideDataByState.map((stateItem, index) => {
                return (
                  <option key={index} value={stateItem.state}>
                    {stateItem.state}
                  </option>
                );
              })}
            </select>
            <span className="absolute text-white  top-1 right-1">
              {iconStateOne && <VscTriangleUp />}
            </span>
            <span className="absolute text-white  top-1 right-1">
              {!iconStateOne && <VscTriangleDown />}
            </span>
          </div>
          <div className="flex relative">
            <select
              onChange={(e) => {
                setFilterByCity(e.target.value);
              }}
              onClick={() => {
                setIconStateTwo(!iconStateTwo);
              }}
              name="city"
              id="city"
              className=" w-full bg-neutral-700 p-1 text-sm outline-none rounded appearance-none px-2"
            >
              <option value="city">City</option>
              {uniqueRideDataByCity.map((cityItem) => {
                return (
                  <option key={cityItem.id} value={cityItem.city}>
                    {cityItem.city}
                  </option>
                );
              })}
            </select>
            <span className="absolute text-white  top-1 right-1">
              {iconStateTwo && <VscTriangleUp />}
            </span>
            <span className="absolute text-white  top-1 right-1">
              {!iconStateTwo && <VscTriangleDown />}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
