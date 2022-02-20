import React from "react";
import RideCard from "./RideCard";

const NearestRides = () => {
  return (
    <div className="lg:flex lg:flex-col lg:px-9 space-y-3  lg:bg-neutral-700 lg:pb-16">
      <RideCard />
      <RideCard />
      <RideCard />
    </div>
  );
};

export default NearestRides;
