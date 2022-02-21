import React from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";
import { user } from "../ride";

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

  console.log(sortedNearestRide);

  return (
    <div className="lg:flex lg:flex-col lg:px-9 space-y-4  lg:bg-neutral-700 lg:pb-16">
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
            distance
          />
        );
      })}
    </div>
  );
};

export default NearestRides;
