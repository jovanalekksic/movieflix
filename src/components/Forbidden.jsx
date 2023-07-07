import React from "react";
import { Outlet } from "react-router-dom";

const Forbidden = () => {
  return (
    <div>
      <div class="title">
        <h1 style={{ color: "#E50914" }}>403</h1>
        <h1>You are not authorized.</h1>
      </div>
      <div class="title">
        <p style={{ fontSize: 32 }}>
          You tried to access a page you did not have prior authorization for.
        </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Forbidden;
