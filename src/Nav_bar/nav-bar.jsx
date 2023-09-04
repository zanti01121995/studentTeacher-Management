import { Link } from "react-router-dom";
import "./nav.css";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="search ">
          <form className="d-flex" role="search">
            <input
              className="form-control me-1"
              style={{ width: "300px" }}
              type="search"
              placeholder="Search for..."
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <Link to="/form">
          <button className="add-employee-button">Add Student</button>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
