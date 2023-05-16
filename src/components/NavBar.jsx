import React from "react";
import movieflix2 from "../images/movieflix2.png";
import { Routes, Link } from "react-router-dom";
import Register from "./Register";
import axios from "axios";

const NavBar = ({ token }) => {
  function handleLogout() {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container" id="navbar">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={movieflix2} id="logo" />
        </Link>

        <ul
          className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0  "
          id="tabs"
        >
          <li>
            <Link to="/" className="nav-link  px-2 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/TVShows" className="nav-link  px-2 ">
              TV Shows
            </Link>
          </li>
          {/* <li>
            <Link to="/login" className="nav-link px-2 link-dark">
              Login
            </Link>
          </li> */}
          <li>
            <Link to="/movies" className="nav-link  px-2 ">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-link  px-2 ">
              Your movies
            </Link>
          </li>
          <li>
            <Link to="/table" className="nav-link  px-2 ">
              Table
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link   px-2 ">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          {token == null ? (
            <button
              type="button"
              className="btn btn-danger me-2"
              id="buttonLogin"
              onClick={(event) => (window.location.href = "/login")}
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger me-2"
              id="buttonLogin"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger"
            id="buttonSignup"
            onClick={(event) => (window.location.href = "/register")}
          >
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
