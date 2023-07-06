import React from "react";
import OneFavorite from "./OneFavorite";
import { Outlet } from "react-router-dom";

const Favorites = ({ token }) => {
  return (
    <div>
      <div className="allMovies">
        <OneFavorite />
        <OneFavorite />
      </div>
      <Outlet />
    </div>
  );
};

export default Favorites;
