import { Link } from "react-router-dom";
import Home from "../asset/home.js";

function Navbar() {
  return (
    <div className="mb-4">
      <Link to="/">{Home}</Link>
    </div>
  );
}

export default Navbar;
