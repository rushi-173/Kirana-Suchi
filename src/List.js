import React, { useState } from "react";

function List(props) {
  return (
    <div className="item-list">
      {props.itemList.map((itemObj) => {
        return (
          <div className="item" key={itemObj.key}>
            <h3>{itemObj.item}</h3>
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
