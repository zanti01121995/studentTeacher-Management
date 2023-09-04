import { Link } from "react-router-dom";
import "./side.css";

const Sidebar = () => {
  return (
    <div className={`sidebar`}>
      <div className="title">
        <h3>School Data</h3>
      </div>
      <hr className="line" />
      <div className="sidebar-contents">
        <Link to="/">
          <div className="subheads">
            <i className="fas fa-fw fa-tachometer-alt fa-sm"></i>
            <span
              style={{
                marginLeft: "10px",
                fontSize: "15px",
                fontFamily: "Verdana",
                fontWeight: "600",
              }}
            >
              Student Details
            </span>
          </div>
        </Link>
        <hr className="line" />
        <Link to="/teacher">
          <div className="subheads">
            <i className="fas fa-fw fa-tachometer-alt fa-sm"></i>
            <span
              style={{
                marginLeft: "10px",
                fontSize: "15px",
                fontFamily: "Verdana",
                fontWeight: "600",
              }}
            >
              Teacher Details
            </span>
          </div>
        </Link>
        <hr className="line" />
      </div>
    </div>
  );
};

export default Sidebar;
