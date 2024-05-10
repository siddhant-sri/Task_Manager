import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('https://telegra.ph/file/abbea308d79b704d847ad.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="card p-5">
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-md-6 text-center">
            <div
              className="logo-container "
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            >
              <img
                src="https://cdn.dribbble.com/users/4659373/screenshots/19409817/media/fa1777005678a90e0f0af335af515170.png"
                className="img-fluid"
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <button className="btn btn-success fw-bold w-100 bg-gradient m-2">
              <Link
                className="text-white text-decoration-none"
                to="/registration"
              >
                Register
              </Link>
            </button>
            <button className="btn btn-success fw-bold w-100 bg-gradient m-2">
              <Link className="text-white text-decoration-none" to="/login">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
