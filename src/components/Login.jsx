import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const Login = ({ addToken, setRole, setMovies }) => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    // console.log(e);
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    // console.log(newUserData);
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          setRole(res.data.role);
          addToken(res.data.access_token);
          //navigate("/movies");
          if (res.data.role === "admin") {
            navigate("/table");
          } else {
            navigate("/home");
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your email and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          placeholder="Email"
                          name="email"
                          className="form-control form-control-lg"
                          onInput={handleInput}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          name="password"
                          placeholder="Password"
                          className="form-control form-control-lg"
                          onInput={handleInput}
                        />

                        {/* <label style={{ color: "red" }}>
                            Email or Password are not correct
                          </label> */}
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleLogin}
                      >
                        Login
                      </button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="/register" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
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
};

export default Login;
