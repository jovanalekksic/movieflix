import axios from "axios";
import React, { useEffect, useState } from "react";
import tvd from "../images/tvd.jpg";

const OneMovie = () => {
  return (
    <div class="card" style={{ width: 18 + "rem" }}>
      <img src={tvd} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default OneMovie;
