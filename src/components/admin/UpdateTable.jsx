import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("api/admin/movies/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  // function Update({ movie }) {
  //   const [movieData, setMovieData] = useState({
  //     //id:movie.id,
  //     title: movie.title,
  //     description: movie.description,
  //     rating: movie.rating,
  //     picture: movie.picture,
  //     //user_id:movie.user.id,
  //   });
  //   function handleInput(e) {
  //     let newMovieData = movieData;

  //     newMovieData[e.target.name] = e.target.value;
  //     console.log(newMovieData);
  //     setMovieData(newMovieData);
  //   }
  //   let navigate = useNavigate();

  //   function handleUpdate(e) {
  //     e.preventDefault();

  //     var config = {
  //       method: "put",
  //       url: "api/admin/movies/" + movie.id,
  //       data: movieData,
  //       headers: {
  //         Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
  //       },
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(response);

  //         alert("USPESNO");
  //         navigate("/table");
  //       })
  //       .catch(function (error) {
  //         if (error.response) {
  //           console.log(error.response.data);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         } else if (error.request) {
  //           console.log(error.request);
  //         } else {
  //           console.log("Error", error.message);
  //         }
  //       });
  //   }

  return (
    <>
      <header>
        <h1>Update Movie</h1>
      </header>
      <div id="form">
        <form id="waterform">
          <div className="formgroup" id="name-form">
            <label for="email">Title</label>
            <input type="text" id="godina_izdanja" name="godina_izdanja" />
          </div>

          <div className="formgroup" id="email-form">
            <label for="opis">Description</label>
            <input type="text" id="opis" name="opis" />
          </div>
          <div className="formgroup" id="email-form">
            <label for="opis">Rating</label>
            <input type="text" id="opis" name="opis" />
          </div>
          <div className="formgroup" id="email-form">
            <label for="opis">Picture</label>
            <input type="text" id="opis" name="opis" />
          </div>

          <input type="submit" value="IZMENI" />
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default Update;
