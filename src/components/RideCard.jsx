import React from "react";
import mapImage from "../assets/images/image1.png";
import { dataConverter } from "../dateConverter";

const RideCard = ({
  id,
  origin_station_code,
  station_path,
  city,
  state,
  rideDate,
  distance,
}) => {
  let todayDate = new Date();

  return (
    <div className="lg:bg-neutral-900 lg:flex lg:justify-between  lg:items-start lg:p-6 lg:rounded-xl lg:text-white">
      <div>
        <img src={mapImage} alt="" />
      </div>
      <div className="lg:flex-2 lg:ml-1 lg:space-y-2 lg:relative lg:right-48">
        <p className="lg:text-warmGray-300">
          Ride Id: <span className="lg:text-white">{id}</span>
        </p>
        <p className="lg:text-warmGray-300">
          Origin Station:{" "}
          <span className="lg:text-white">{origin_station_code}</span>
        </p>
        <p className="lg:text-warmGray-300">
          station_path: <span className="lg:text-white">{station_path}</span>
        </p>
        <p className="lg:text-warmGray-300">
          Date: <span className="lg:text-white">{dataConverter(rideDate)}</span>
        </p>
        <p className="lg:text-warmGray-300">
          Distance: <span className="lg:text-white">{distance}</span>
        </p>
      </div>
      <div className="lg:flex lg:gap-8">
        <p className="lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          {city}
        </p>
        <p className="lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          {state}
        </p>
      </div>
    </div>
  );
};

export default RideCard;
