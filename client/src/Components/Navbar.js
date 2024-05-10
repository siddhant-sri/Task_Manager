import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="container-fluid">
          <Link className="navbar-brand p-3" to="/main">
            Task Manager
          </Link>

          <div>
            <button
              className="btn btn-secondary fw-bold bg-gradient text-white"
              onClick={handleClick}
            >
              <i className="fa fa-sign-out"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
