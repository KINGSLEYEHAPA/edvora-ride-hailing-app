import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import filterMenu from "./assets/images/Vector.png";
import Filter from "./components/Filter";
import { myActions } from "./redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const nearestRideCount = reducerState.nearestRideCount;
  const pastRideCount = reducerState.pastRideCount;
  const upcomingRideCount = reducerState.upcomingRideCount;

  return (
    <div className="w-full min-h-screen bg-neutral-700 lg:min-w-screen w-screen">
      <Header />
      <div className=" w-screen h-20 flex flex-row justify-between items-center p-6 text-white text-md px-9  md:flex md:flex-row md: md:items-center md:p-6 md:text-white  md:justify-between lg:flex lg:justify-between lg:items-center lg:p-6 lg:text-white lg:px-9 lg:text-xl">
        <div className=" text-xs space-x-4 text-stone-300 w-88 md:text-md md:ml-4 ">
          <NavLink
            to="/nearest-rides"
            className=" px- 0 lg:px-0 lg:text-lg"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Nearest Rides ({nearestRideCount})
          </NavLink>
          <NavLink
            className=" px- 0 lg:px-0 lg:text-lg"
            to="/upcoming-rides"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Upcoming Rides ({upcomingRideCount}){" "}
          </NavLink>
          <NavLink
            to="/past-rides"
            className=" px- 0 lg:px-0 lg:text-lg"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                color: isActive ? "white" : "",
                paddingBottom: isActive ? " 3px" : "",
              };
            }}
          >
            Past Rides ({pastRideCount}){" "}
          </NavLink>
        </div>
        <div
          onClick={() => {
            dispatch({ type: myActions.OPEN_FILTER });
          }}
          className=" relative flex  gap-2 cursor-pointer pr-8  lg:gap-2 cursor-pointer lg:gap-2 md:cursor-pointer md:relative md:left-80 md:mr-10 lg:flex lg:gap-2 lg:cursor-pointer lg:relative lg:left-96  "
        >
          <img
            className=" w-4 h-4 lg:w-5 lg:h-5 lg:pt-2"
            src={filterMenu}
            alt=""
          />
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
