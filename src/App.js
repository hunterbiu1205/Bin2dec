import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [decimalValue, setDecimalValue] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertToDecimal = () => {
    const binary = inputValue.split("").reverse();
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
      decimal += binary[i] * Math.pow(2, i);
    }

    setDecimalValue(decimal);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h1>test</h1>
      <button onClick={convertToDecimal}>Convert</button>
      {decimalValue !== null && <p>Decimal value: {decimalValue}</p>}
    </div>
  );
}
