import React, { useEffect } from "react";
import movieflix2 from "../images/logo4.png";
import { Routes, Link, useNavigate, Navigate } from "react-router-dom";
import Register from "./Register";
import axios from "axios";
import { Outlet } from "react-router-dom";

const NavBar = ({ token, role }) => {
  let navigate = useNavigate();

  function handleLogout() {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
        navigate("/home");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="container" id="navbar">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  ">
          <Link
            to="/home"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img src={movieflix2} id="logo" />
          </Link>
          <ul
            className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0  "
            id="tabs"
          >
            <li>
              <Link to="/home" className="nav-link  px-2 ">
                Home
              </Link>
            </li>

            {token != null ? (
              <li>
                <Link to="/TVShows" className="nav-link  px-2 ">
                  TV Shows
                </Link>
              </li>
            ) : (
              <></>
            )}
            {token != null ? (
              <li>
                <Link to="/movies" className="nav-link  px-2 ">
                  Movies
                </Link>
              </li>
            ) : (
              <></>
            )}
            {token != null ? (
              <li>
                <Link to="/favorites" className="nav-link  px-2 ">
                  Your movies
                </Link>
              </li>
            ) : (
              <></>
            )}
            {token != null && role == "admin" ? (
              <li>
                <Link to="/table" className="nav-link  px-2 ">
                  Table
                </Link>
              </li>
            ) : (
              <></>
            )}
            <li>
              <Link to="/pricing" className="nav-link  px-2 ">
                Pricing
              </Link>
            </li>
            {/* <li>
            <Link to="/converter" className="nav-link  px-2 ">
              Converter
            </Link>
          </li> */}
            <li>
              <Link to="/about" className="nav-link   px-2 ">
                About
              </Link>
            </li>
          </ul>
          {/* Log in dugme  */}
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
      <Outlet />
    </div>
  );
};

export default NavBar;
