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
  console.log(dataConverter(rideDate));
  console.log(dataConverter(todayDate));

  return (
    <div className=" bg-neutral-900 flex justify-between h-44  items-start mx-8 lg:mx-0  p-6 rounded-xl text-white bg-neutral-900    lg:p-6  lg:flex  ">
      <div className="h-full">
        <img className="h-full md:w-full w-full" src={mapImage} alt="Map" />
      </div>
      <div className="  text-xs flex-2 ml-1 space-y-1  lg:text-sm  md:relative lg:relative md:right-20 lg:right-64 lg:ml-1 lg:space-y-2  lg:right-48">
        <p className="text-warmGray-300">
          Ride Id: <span className="lg:text-white">{id}</span>
        </p>
        <p className="text-warmGray-300">
          Origin Station:{" "}
          <span className="text-white">{origin_station_code}</span>
        </p>
        <p className="text-warmGray-300">
          station_path: <span className="lg:text-white">{station_path}</span>
        </p>
        <p className="text-warmGray-300">
          Date: <span className="text-white">{dataConverter(rideDate)}</span>
        </p>
        <p className="text-warmGray-300">
          Distance: <span className="text-white">{distance}</span>
        </p>
      </div>
      <div className="flex gap-8 w-44 ">
        <p className=" bg-black px-2 py-0.5 text-sm rounded-xl text-md  lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          {city}
        </p>
        <p className="  bg-black px-2 py-0.5 text-sm rounded-xl text-md  lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          {state}
        </p>
      </div>
    </div>
  );
};

export default RideCard;
