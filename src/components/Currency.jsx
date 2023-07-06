import React from "react";
import "../Currency.css";

const Currency = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <div className="inputs">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="form-select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
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
