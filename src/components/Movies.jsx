import axios from "axios";
import React, { useEffect, useState } from "react";
import OneMovie from "./OneMovie";
import { Outlet } from "react-router-dom";

const Movies = ({ movies, setMovies }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

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

  const handleGengreClick = (genre) => {
    setSelectedGenre(genre === selectedGenre ? null : genre);
  };
  return (
    <div>
      <div className="movies-wrap">
        <div className="genre-search">
          <h2 id="moviesTrending">Trending now</h2>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick(null)}
          >
            All
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Crime")}
          >
            Crime
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Drama")}
          >
            Drama
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Mystery")}
          >
            Mystery
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Romance")}
          >
            Romance
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Comedy")}
          >
            Comedy
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => handleGengreClick("Thriller")}
          >
            Thriller
          </button>
        </div>
        <div className="allMovies">
          {/* {movies == null ? (
            <></>
          ) : (
            movies.map((movie) => <OneMovie movie={movie} key={movie.id} />)
          )} */}
          {movies == null ? (
            <></>
          ) : (
            movies
              .filter((movie) =>
                selectedGenre ? movie.genre.name === selectedGenre : true
              )
              .map((movie) => <OneMovie movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Movies;
