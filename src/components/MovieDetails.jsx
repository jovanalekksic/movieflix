import React from "react";
import { Outlet, useParams } from "react-router-dom";
import playButton from "../images/baseline_play_circle_outline_white_36dp.png";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  console.log(id);
  const m = movies.find((movie) => movie.id == id);
  console.log(m);
  return (
    <div>
      <div
        className="poster"
        style={{
          backgroundImage: `linear-gradient(0deg,transparent 50%,rgba(0,0,0,.7)),radial-gradient(50% 100%,transparent 0,rgba(0,0,0,.7) 100%),url(${m.picture})`,
        }}
      >
        <img src={playButton} id="play" />
        {/* <div
        className="bigImage"
      >
        <img src={m.picture} className="posterImage" />
      </div> */}
        <div className="posterDetails">
          <h1 className="posterTitle">{m.title}</h1>
          <h3 className="posterGenre">{m.genre.name}</h3>
          <p className="posterDesc">{m.description}</p>
          <p className="posterProduction">{m.studio.name}</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
