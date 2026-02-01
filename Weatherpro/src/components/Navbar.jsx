import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>Weather App</h2>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/add">
          Add City
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
