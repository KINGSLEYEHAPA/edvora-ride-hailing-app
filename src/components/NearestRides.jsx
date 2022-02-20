import React from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";

const NearestRides = () => {
  const availableRideFromFilter = useSelector((state) => state.availableRide);

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
