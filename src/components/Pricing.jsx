import React from "react";
import "../Pricing.css";
import Currency from "./Currency";
import { useState, useEffect } from "react";
import axios from "axios";

const Pricing = () => {
  //   const [amount1, setAmount1] = useState(1);
  //   const [amount2, setAmount2] = useState(1);
  //   const [currency1, setCurrency1] = useState("USD");
  //   const [currency2, setCurrency2] = useState("USD");
  //   const [rates, setRates] = useState([]);

  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "VtUgF2QPAcPBcllaPlrCWvLLqr3C5yaI");

  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //     headers: myHeaders,
  //   };
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "http://api.apilayer.com/fixer/latest?symbols=symbols&base=eur",
  //         requestOptions
  //       )
  //       .then((response) => {
  //         setRates(response.data.rates);
  //       });
  //     console.log(rates);
  //   }, []);

  return (
    <div className="pricing">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title-pricing">Basic</h5>
                  <small>Individual</small>
                  <br />
                  <br />
                  <span className="h2">$4.99</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Good video quality. Watch in 720p (HD). Downloads available.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Streaming Library with tons of TV episodes and movies
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Most new episodes the day after they air
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Watch on your favorite devices
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 + "px" }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title-pricing">Standard</h5>
                  <small>Duo</small>
                  <br />
                  <br />
                  <span className="h2">$7.99</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Great video quality. Watch in 1080p (Full HD). Downloads
                  available.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  No ads before 15 streamings
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Watch on your favorite devices
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Share with you loved one
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 + "px" }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title-pricing">Premium</h5>
                  <small>Family</small>
                  <br />
                  <br />
                  <span className="h2">$9.99</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Our best video quality. Watch in 4K (Ultra HD) and HDR.
                  Downloads available.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  No ads in streaming
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Download and watch
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Watch on 2 different screens at the same time
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 + "px" }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Currency />

      {/* <Currency
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <Currency
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      /> */}
    </div>
  );
};

export default Pricing;
