import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [decimalValue, setDecimalValue] = useState(null);
  const [warning, setWarning] = useState("");

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const isValid = /^[01]*$/.test(userInput);

    setWarning(isValid ? "" : "Input should contain only 0s and 1s");
    setDecimalValue(isValid ? toDecimalConverter(userInput) : null);
  };

  const toDecimalConverter = (v) => {
    const binary = v.split("").reverse();
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
      decimal += binary[i] * Math.pow(2, i);
    }

    return decimal;
  };
  return (
    <div className="App">
      <h1>Bin2Dec</h1>
      <p>Enter a binary number, get a decimal conversion.</p>
      <input
        type="text"
        maxlength="20"
        value={inputValue}
        onChange={handleInputChange}
      />
      {warning && <p className="warning">{warning}</p>}
      {decimalValue !== null && <p>Decimal value: {decimalValue}</p>}
    </div>
  );
}
// Test update commit
