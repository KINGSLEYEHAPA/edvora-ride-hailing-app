import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { myActions } from "../redux/actions/actionTypes";
import { ride, user } from "../ride";

const Filter = () => {
  const [iconStateOne, setIconStateOne] = useState(false);
  const [iconStateTwo, setIconStateTwo] = useState(false);
  const [filterByState, setFilterByState] = useState("");
  const [filterByCity, setFilterByCity] = useState("");
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filterModuleOpen);
  const reducerState = useSelector((state) => state);
  const availableRideFilteredByState = ride.filter((rideItem) => {
    return filterByState === rideItem.state;
  });
  const availableRideFilteredByCity = ride.filter((rideItem) => {
    return filterByCity === rideItem.city;
  });
  console.log(availableRideFilteredByState, availableRideFilteredByCity);

  return (
    <div>
      {filterState && (
        <div className="absolute lg:w-48 lg:h-44 lg:flex lg:flex-col lg:top-6 lg:right-2 shadow  bg-neutral-900 lg:justify-between lg:space-y-5 lg:py-4 px-5  rounded-xl">
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
              <option value="Maharashtra">Maharashtra</option>
              <option value="Lagos">Lagos</option>
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
              <option value="Panvel">Panvel</option>
              <option value="Lekki">Lekki</option>
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
