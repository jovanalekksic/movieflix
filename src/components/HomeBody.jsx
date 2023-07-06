import React from "react";
import tv from "../images/tv.png";
import phone from "../images/phone.png";
import devices from "../images/devices.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HomeBody = () => {
  return (
    <div className="slika">
      <div className="homeBody">
        <div className="title">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p style={{ fontSize: 32 }}>Plans now start at EUR4.99/month</p>
          <button type="button" className="btn btn-danger" id="buttonJoin">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              JOIN
            </Link>
          </button>
        </div>
      </div>
      <div className="tv">
        <div className="tvtext">
          <h1>Enjoy on your TV.</h1>
          <p style={{ fontSize: 32 }}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="imagetv">
          <img src={tv} />
        </div>
      </div>

      <div className="phone">
        <div className="imagephone">
          <img src={phone} />
        </div>
        <div className="phoneText">
          <h1>Download your shows to watch offline.</h1>
          <p style={{ fontSize: 32 }}>
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="tv">
        <div className="tvtext">
          <h1>Watch everywhere.</h1>
          <p style={{ fontSize: 32 }}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
        <div className="imagetv">
          <img src={devices} />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
