import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myActions } from "../redux/actions/actionTypes";
import RideCard from "./RideCard";

const PastRides = () => {
  const dispatch = useDispatch();
  const availableRideFromFilter = useSelector((state) => state.availableRide);

  const todayInSeconds = new Date(new Date()).getTime() / 1000;
  console.log(todayInSeconds);

  const pastRides = availableRideFromFilter.filter((item) => {
    return item.date < todayInSeconds;
  });

  useEffect(() => {
    dispatch({
      type: myActions.PAST_RIDES_UPDATE,
      payload: pastRides.length,
    });
  }, [dispatch, PastRides]);

  return (
    <div className="  lg:flex lg:flex-col lg:px-9 space-y-4  lg:bg-neutral-700 lg:pb-16">
      {pastRides.map((item, index) => {
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

export default PastRides;
