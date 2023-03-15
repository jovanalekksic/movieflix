import axios from "axios";
import React, { useEffect, useState } from "react";
import tvd8 from "../images/season8.jpg";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const OneMovie = () => {
  return (
    <div className="cardMovie" id="oneMovie" style={{ width: 18 + "rem" }}>
      <img src={tvd8} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <lord-icon
          src="https://cdn.lordicon.com/xryjrepg.json"
          trigger="hover"
          colors="primary:#c71f16"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </div>
    </div>
  );
};

export default OneMovie;
