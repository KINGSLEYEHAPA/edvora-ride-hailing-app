import React from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";
import { user } from "../ride";

const NearestRides = () => {
  const availableRideFromFilter = useSelector((state) => state.availableRide);

  availableRideFromFilter.length !== 0 &&
    availableRideFromFilter.map((availableRideItem, rideIndex) => {
      const distanceDiff = availableRideItem.station_path.map((station) => {
        return [station - user.station_code, rideIndex];
      });
      console.log(distanceDiff);
    });

  return (
    <div className="lg:flex lg:flex-col lg:px-9 space-y-4  lg:bg-neutral-700 lg:pb-16">
      {availableRideFromFilter.map((item, index) => {
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
