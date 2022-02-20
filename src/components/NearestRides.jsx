import React from "react";
import { useSelector } from "react-redux";
import RideCard from "./RideCard";

const NearestRides = () => {
  const availableRideFromFilter = useSelector((state) => state.availableRide);

  return (
    <div className="lg:flex lg:flex-col lg:px-9 space-y-4  lg:bg-neutral-700 lg:pb-16">
      <RideCard />
    </div>
  );
};

export default NearestRides;
