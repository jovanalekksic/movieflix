import React from "react";
import OneFavorite from "./OneFavorite";
import { Outlet } from "react-router-dom";

const Favorites = ({ token }) => {
  const decodeToken = (token) => {
    if (!token) {
      return null;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const { sub: userId } = JSON.parse(jsonPayload);
    return userId;
  };

  const user_id = token ? decodeToken(token) : null;
  console.log(user_id);

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
