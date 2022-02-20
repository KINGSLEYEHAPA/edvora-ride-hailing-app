import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import filterMenu from "./assets/images/Vector.png";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-700">
      <Header />
      <div className="lg:w-full lg:h-20 lg:flex lg:justify-between lg:items-center lg:p-6 lg:text-white lg:px-9">
        <div className="lg:space-x-4">
          <Link to="/nearest-rides">Nearest Rides </Link>
          <Link to="/upcoming-rides">Upcoming Rides(5) </Link>
          <Link to="/past-rides">Past Rides(10) </Link>
        </div>
        <div className="lg:flex lg:gap-2 lg:cursor-pointer">
          <img className="lg:w-5 lg:h-5 lg:pt-2" src={filterMenu} alt="" />
          <h4>Filters</h4>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
