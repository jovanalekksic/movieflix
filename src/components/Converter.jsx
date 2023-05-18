import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import "../Currency.css";

const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  //   console.log(currencyOptions);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  var requestURL = "https://api.exchangerate.host/latest";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  useEffect(() => {
    request.onload = function () {
      var response = request.response;
      //   console.log(response);
      const firstCurrency = Object.keys(response.base)[0];
      setCurrencyOptions([response.base, ...Object.keys(response.rates)]);
      setFromCurrency(response.base);
      setToCurrency(firstCurrency);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <h1>Convert</h1>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <div className="equals">=</div>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Converter;
