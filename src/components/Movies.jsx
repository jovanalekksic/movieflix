import axios from "axios";
import React, { useEffect, useState } from "react";
import OneMovie from "./OneMovie";
import { Outlet } from "react-router-dom";

const Movies = ({ movies, setMovies }) => {
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "api/movies",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    //  <div>
    //   <h3>These are all movies from the database.</h3>
    //   {movies==null ? (<></>):(movies.map((movie)=><OneMovie movie={movie} key={movie.id} />))}
    // </div>
    <div>
      <div className="movies-wrap">
        <h2 id="moviesTrending">Trending now</h2>
        <div className="allMovies">
          {movies == null ? (
            <></>
          ) : (
            movies.map((movie) => <OneMovie movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Movies;
