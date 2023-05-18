import React from "react";
import "../Currency.css";

const Currency = (props) => {
  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
