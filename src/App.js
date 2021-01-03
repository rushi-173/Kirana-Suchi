import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [currentValue, setCurrentValue] = useState("");
  function changeHandler(e) {
    setCurrentValue(e.target.value);
    console.log(currentValue);
  }
  return (
    <div className="App">
      <h1>Kirana Suchi</h1>
      <div className="main">
        <div className="input-wrapper">
          <input type="text" value={currentValue} onChange={changeHandler} />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
