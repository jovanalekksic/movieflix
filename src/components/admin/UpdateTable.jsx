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
    <div>
      <div className="loginReg">
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card  text-white" id="forms">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">
                        Update a movie
                      </h2>

                      <div className="form-outline form-white mb-4">
                        <input
                          placeholder="Title"
                          name="title"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div class="mb-3">
                        <label htmlFor="description" class="form-label">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="description"
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          placeholder="Rating"
                          name="rating"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          placeholder="Picture URL"
                          name="picture"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Outlet />
    </div>

    // <>
    //   <header>
    //     <h1>Update Movie</h1>
    //   </header>
    //   <div id="form">
    //     <form id="waterform">
    //       <div className="formgroup" id="name-form">
    //         <label htmlFor="email">Title</label>
    //         <input type="text" id="godina_izdanja" name="godina_izdanja" />
    //       </div>

    //       <div className="formgroup" id="email-form">
    //         <label htmlFor="opis">Description</label>
    //         <input type="text" id="opis" name="opis" />
    //       </div>
    //       <div className="formgroup" id="email-form">
    //         <label htmlFor="opis">Rating</label>
    //         <input type="text" id="opis" name="opis" />
    //       </div>
    //       <div className="formgroup" id="email-form">
    //         <label htmlFor="opis">Picture</label>
    //         <input type="text" id="opis" name="opis" />
    //       </div>

    //       <input type="submit" value="IZMENI" />
    //     </form>
    //   </div>
    //   <Outlet />
    // </>
  );
}

export default Update;
