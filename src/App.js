import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import filterMenu from "./assets/images/Vector.png";
import Filter from "./components/Filter";
import { myActions } from "./redux/actions/actionTypes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen bg-neutral-700 lg:min-w-screen">
      <Header />
      <div className="lg:w-full lg:h-20 lg:flex lg:justify-between lg:items-center lg:p-6 lg:text-white lg:px-9">
        <div className="lg:space-x-4 lg:text-warmGray-300">
          <NavLink
            to="/nearest-rides"
            className="lg:px-0"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Nearest Rides{" "}
          </NavLink>
          <NavLink
            className="lg:px-0"
            to="/upcoming-rides"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Upcoming Rides (5){" "}
          </NavLink>
          <NavLink
            to="/past-rides"
            className="lg:px-0"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Past Rides (10){" "}
          </NavLink>
        </div>
        <div
          onClick={() => {
            dispatch({ type: myActions.OPEN_FILTER });
          }}
          className="lg:flex lg:gap-2 lg:cursor-pointer lg:relative lg:left-96"
        >
          <img className="lg:w-5 lg:h-5 lg:pt-2" src={filterMenu} alt="" />
          <h4>Filters</h4>
        </div>
        <div className="relative">
          <Filter />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
