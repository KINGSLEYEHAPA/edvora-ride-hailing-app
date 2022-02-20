import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NearestRides from "./NearestRides";
import PastRides from "./PastRides";
import UpcomingRides from "./UpcomingRides";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/nearest-rides" element={<NearestRides />} />
          <Route path="/upcoming-rides" element={<UpcomingRides />} />
          <Route path="/past-rides" element={<PastRides />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
