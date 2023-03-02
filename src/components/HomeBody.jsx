import React from "react";

const HomeBody = () => {
  return (
    <div className="homeBody">
      <div className="title">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p style={{ fontSize: 32 }}>Plans now start at EUR4.99/month</p>
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
          <img src="images/tv.png" />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
