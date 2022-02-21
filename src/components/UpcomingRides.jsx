import React from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";

const UpcomingRides = () => {
  const availableRideFromFilter = useSelector((state) => state.availableRide);

  const todayInSeconds = new Date(new Date()).getTime() / 1000;
  console.log(todayInSeconds);
  const upcomingRides = availableRideFromFilter.filter((item) => {
    return item.date > todayInSeconds;
  });

  console.log(upcomingRides);

  return (
    <div className="lg:flex lg:flex-col lg:px-9 space-y-4  lg:bg-neutral-700 lg:pb-16">
      {upcomingRides.map((item, index) => {
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

export default UpcomingRides;
