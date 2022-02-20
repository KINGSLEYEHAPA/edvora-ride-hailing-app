import React from "react";
import mapImage from "../assets/images/image1.png";

const RideCard = () => {
  return (
    <div className="lg:bg-neutral-900 lg:flex lg:justify-between  lg:items-start lg:p-6 lg:rounded-xl lg:text-white">
      <div>
        <img src={mapImage} alt="" />
      </div>
      <div className="lg:flex-2 lg:ml-1 lg:space-y-2 lg:relative lg:right-48">
        <p className="lg:text-warmGray-300">
          Ride Id: <span className="lg:text-white">002</span>
        </p>
        <p className="lg:text-warmGray-300">
          Origin Station: <span className="lg:text-white">20</span>
        </p>
        <p className="lg:text-warmGray-300">
          station_path:{" "}
          <span className="lg:text-white">[20,39,40,42,54,63,72,88,98]</span>
        </p>
        <p className="lg:text-warmGray-300">
          Date: <span className="lg:text-white">15th feb 2022 16:33</span>
        </p>
        <p className="lg:text-warmGray-300">
          Distance: <span className="lg:text-white">1</span>
        </p>
      </div>
      <div className="lg:flex lg:gap-8">
        <p className="lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          City Name
        </p>
        <p className="lg:bg-black lg:px-2 lg:py-0.5 lg:text-sm lg:rounded-xl">
          State Name
        </p>
      </div>
    </div>
  );
};

export default RideCard;
