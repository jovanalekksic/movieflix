import React from "react";
import "../Pricing.css";
import Currency from "./Currency";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Currency.css";
import { Outlet } from "react-router-dom";

const Pricing = () => {
  // const [currencyOptions, setCurrencyOptions] = useState([]);
  // //   console.log(currencyOptions);
  // const [fromCurrency, setFromCurrency] = useState();
  // const [toCurrency, setToCurrency] = useState();
  // const [exchangeRate, setExchangeRate] = useState();
  // const [amount, setAmount] = useState(1);
  // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // let toAmount, fromAmount;
  // if (amountInFromCurrency) {
  //   fromAmount = amount;
  //   toAmount = amount * exchangeRate;
  // } else {
  //   toAmount = amount;
  //   fromAmount = amount / exchangeRate;
  // }

  // // console.log(exchangeRate);

  // var requestURL = "https://api.exchangerate.host/latest";

  // var request = new XMLHttpRequest();
  // request.open("GET", requestURL);
  // request.responseType = "json";
  // request.send();

  // useEffect(() => {
  //   request.onload = function () {
  //     var response = request.response;
  //     console.log(response);
  //     const firstCurrency = Object.keys(response.rates)[0];
  //     // console.log(firstCurrency);
  //     setCurrencyOptions([response.base, ...Object.keys(response.rates)]);
  //     setFromCurrency(response.base);
  //     setToCurrency(firstCurrency);
  //     setExchangeRate(response.rates[firstCurrency]);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (fromCurrency != null && toCurrency != null) {
  //     fetch(`${requestURL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //       .then((res) => res.json())
  //       .then((data) => setExchangeRate(data.rates[toCurrency]));
  //   }
  // }, [fromCurrency, toCurrency]);

  // function handleFromAmountChange(e) {
  //   setAmount(e.target.value);
  //   setAmountInFromCurrency(true);
  // }
  // function handleToAmountChange(e) {
  //   setAmount(e.target.value);
  //   setAmountInFromCurrency(false);
  // }

  return (
    <div>
      <div className="pricing">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card h-100 shadow-lg" id="kartice">
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
              <div className="card h-100 shadow-lg" id="kartice">
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
              <div className="card h-100 shadow-lg" id="kartice">
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

        {/* <div className="main">
          <h1>Convert</h1>
          <Currency
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
          <div className="equals">=</div>
          <Currency
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Pricing;
