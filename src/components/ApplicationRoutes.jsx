import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NearestRides from "./NearestRides";
import PastRides from "./PastRides";
import UpcomingRides from "./UpcomingRides";
import { Provider } from "react-redux";
import store from "../redux/store";

const ApplicationRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<NearestRides />} />
            <Route path="/nearest-rides" element={<NearestRides />} />
            <Route path="/upcoming-rides" element={<UpcomingRides />} />
            <Route path="/past-rides" element={<PastRides />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default ApplicationRoutes;
