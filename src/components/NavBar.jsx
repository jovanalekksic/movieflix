import React from "react";
import movieflix2 from "../images/movieflix2.png";
import { Link } from "react-router-dom";
import Register from "./Register";

const NavBar = () => {
  return (
    <div className="container" id="navbar">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          {/* <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg> */}
          <img src={movieflix2} id="logo" />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link px-2 link-dark">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link px-2 link-dark">
              Login
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
