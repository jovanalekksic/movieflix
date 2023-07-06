import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: "",
    description: "",
    rating: "",
    picture: "",
    genre_id: "",
    studio_id: "",
  });

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "api/admin/movies/" + id,
      data: values,
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
        setValues({
          ...values,
          title: res.data.title,
          description: res.data.description,
          rating: res.data.rating,
          picture: res.data.picture,
          genre_id: res.data.genre_id,
          studio_id: res.data.studio_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "api/admin/movies/" + id,
      data: values,
      headers: {
        ContentTyoe: "application/json",
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setValues({
          ...values,
          title: res.data.title,
          description: res.data.description,
          rating: res.data.rating,
          picture: res.data.picture,
          genre_id: res.data.genre_id,
          studio_id: res.data.studio_id,
        });
        navigate("/table");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
                        <label htmlFor="title" class="form-label">
                          Title
                        </label>
                        <input
                          placeholder="Title"
                          name="title"
                          className="form-control form-control-lg"
                          value={values.title}
                          onChange={(e) =>
                            setValues({ ...values, title: e.target.value })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" class="form-label">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="description"
                          rows="3"
                          value={values.description}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label htmlFor="rating" class="form-label">
                          Rating
                        </label>
                        <input
                          placeholder="Rating"
                          name="rating"
                          className="form-control form-control-lg"
                          value={values.rating}
                          onChange={(e) =>
                            setValues({ ...values, rating: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label htmlFor="Picture url" class="form-label">
                          Picture url
                        </label>
                        <input
                          placeholder="Picture URL"
                          name="picture"
                          className="form-control form-control-lg"
                          value={values.picture}
                          onChange={(e) =>
                            setValues({ ...values, picture: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label htmlFor="Genre id" class="form-label">
                          Genre id
                        </label>
                        <input
                          placeholder="Genre id"
                          name="genre_id"
                          className="form-control form-control-lg"
                          value={values.genre_id}
                          onChange={(e) =>
                            setValues({ ...values, genre_id: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label htmlFor="Studio id" class="form-label">
                          Studio id
                        </label>
                        <input
                          placeholder="Studio id"
                          name="studio_id"
                          className="form-control form-control-lg"
                          value={values.studio_id}
                          onChange={(e) =>
                            setValues({ ...values, studio_id: e.target.value })
                          }
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleSubmit}
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
  );
}

export default Update;
