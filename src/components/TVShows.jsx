import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import OneShow from "./OneShow";

const TVShows = () => {
  const [show, setShow] = useState([]);

  const options = {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/auto-complete",
    params: { q: "last of us" },
    headers: {
      "X-RapidAPI-Key": "3a6e5ebd10mshf45c280bc1b99bep1f4f17jsnfb6dfd8cec22",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.d[0].l);
        // console.log(response.data.d);
        setShow(response.data.d);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(show);
  // console.log(show.d);
  return (
    <div className="movies-wrap">
      <h2 id="moviesTrending">Trending now</h2>
      <div className="allMovies">
        {show.map((item, index) => (
          <OneShow show={item} key={index} />
        ))}
      </div>
      {/* {show.map(({ l, s, y, i: { height, imageUrl } }, index) => {
        return (
          <div key={index}>
            <h2>{l}</h2>
            <h3>{s}</h3>
            <h3>{y}</h3>
            <h3>{height}</h3>
            <h3>{imageUrl}</h3>
          </div>
        );
      })} */}
    </div>
  );
};

export default TVShows;
