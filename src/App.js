import React, { useState } from "react";
import "./styles.css";
import List from "./List";

export default function App() {
  let [currentValue, setCurrentValue] = useState("");
  let [itemList, updateItemList] = useState([]);
  function changeHandler(e) {
    setCurrentValue(e.target.value);
  }
  function addToList() {
    updateItemList([...itemList, { item: currentValue, key: Date.now() }]);
    setCurrentValue("");
  }
  return (
    <div className="App">
      <h1>Kirana Suchi</h1>
      <div className="main">
        <div className="input-wrapper">
          <input type="text" value={currentValue} onChange={changeHandler} />
          <button onClick={addToList}>+</button>
        </div>
        <div className="list-wrapper">
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </div>
    </div>
  );
}
