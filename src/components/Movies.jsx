import axios from "axios";
import React, { useEffect, useState } from "react";
import OneMovie from "./OneMovie";

const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    if (movies == null) {
      axios.get("api/movies").then((res) => {
        console.log(res.data);
        setMovies(res.data.movies);
      });
    }
  }, [movies]);

  return (
    //  <div>
    //   <h3>These are all movies from the database.</h3>
    //   {movies==null ? (<></>):(movies.map((movie)=><OneMovie movie={movie} key={movie.id} />))}
    // </div>
    <div>
      <OneMovie />
      <OneMovie />
      <OneMovie />
      <OneMovie />
    </div>
  );
};

export default Movies;
