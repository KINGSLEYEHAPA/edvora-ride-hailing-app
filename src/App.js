import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-700">
      <Header />
      <div>
        <div>
          <Link to="/nearest-ride">Nearest rides </Link>
          <Link to="/nearest-ride"> </Link>
          <Link to="/nearest-ride"></Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
