import axios from "axios";
import React, { useEffect, useState } from "react";
import tvd8 from "../images/season8.jpg";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { Link, useNavigate } from "react-router-dom";
import BigMovieDetails from "./MovieDetails";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const OneMovie = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cardMovie"
      id="oneMovie"
      style={{ width: 18 + "rem", height: 11 + "rem" }}
    >
      <Link to={`/detail/${movie.id}`}>
        <img
          src={movie.picture}
          className="card-img-top"
          id="moviePicture"
          loading="lazy"
        />
      </Link>

      <div className="card-body-movie">
        {/* <lord-icon
          src="https://cdn.lordicon.com/xryjrepg.json"
          trigger="hover"
          colors="primary:#e50914 "
          style={{ width: "35px", height: "35px" }}
          id="heartIcon"
        ></lord-icon> */}
        <p className="card-title">{movie.title}</p>
      </div>
    </div>
  );
};

export default OneMovie;
