import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RideCard from "./RideCard";
import { user } from "../ride";
import { myActions } from "../redux/actions/actionTypes";

const NearestRides = () => {
  const availableRideFromFilter = useSelector((state) => state.availableRide);

  const distanceFromStationArray = availableRideFromFilter.map(
    (availableRideItem, rideIndex) => {
      const distanceDiff = availableRideItem.station_path.map((station) => {
        return station - user.station_code;
      });

      return distanceDiff;
    }
  );

  const newSortedDiffInDistance = distanceFromStationArray.map((distance) => {
    const sorted = distance.sort(function (a, b) {
      return a - b;
    });

    const positiveDistances = sorted.filter((sort) => {
      return sort >= 0;
    });

    return positiveDistances;
  });

  const lowestDistanceToStation = newSortedDiffInDistance.map(
    (lowestDistance) => {
      return lowestDistance[0];
    }
  );

  const lowestDistanceToStationAndIndex = lowestDistanceToStation.map(
    (item, index) => {
      return [item, index];
    }
  );

  lowestDistanceToStationAndIndex.sort((a, b) => a[0] - b[0]);
  const indexArray = [];
  lowestDistanceToStationAndIndex.forEach((item) => {
    indexArray.push(item[1]);
  });
  const sortedNearestRide = indexArray.map((item) => {
    return availableRideFromFilter[item];
  });
  sortedNearestRide.forEach((item, index, arr) => {
    item.distance = lowestDistanceToStationAndIndex[index][0];
  });
  console.log(sortedNearestRide);

  const dispatch = useDispatch();
  dispatch({
    type: myActions.NEAREST_RIDES_UPDATE,
    payload: sortedNearestRide.length,
  });

  return (
    <div className="   flex flex-col px-9 lg:flex lg:flex-col lg:px-9 space-y-4  bg-neutral-700 lg:pb-16 pb-8">
      {sortedNearestRide.map((item, index) => {
        return (
          <RideCard
            key={index}
            id={item.id}
            origin_station_code={item.origin_station_code}
            station_path={item.station_path}
            city={item.city}
            state={item.state}
            rideDate={item.date}
            distance={item.distance}
          />
        );
      })}
    </div>
  );
};

export default NearestRides;
