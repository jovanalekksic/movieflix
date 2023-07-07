import React from "react";

const OneShow = ({ show }) => {
  return (
    <div
      className="cardMovie"
      id="oneMovie"
      style={{ width: 15 + "rem", height: 21 + "rem" }}
    >
      <img src={show.i.imageUrl} className="card-img-top" id="showPicture" />

      <div className="card-body-movie">
        {/* <lord-icon
          src="https://cdn.lordicon.com/xryjrepg.json"
          trigger="hover"
          colors="primary:#e50914 "
          style={{ width: "35px", height: "35px" }}
          id="heartIcon"
        ></lord-icon> */}
        <p className="card-title-show">{show.l}</p>
      </div>
    </div>
  );
};

export default OneShow;
