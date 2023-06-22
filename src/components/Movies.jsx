import axios from "axios";
import React, { useEffect, useState } from "react";
import OneMovie from "./OneMovie";
import { Outlet } from "react-router-dom";

const Movies = ({ movies }) => {
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
