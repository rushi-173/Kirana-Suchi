import React, { useState } from "react";

function List(props) {
  function deleteFromList(itemKey) {
    let newList = props.itemList.filter((item) => {
      return item.key !== itemKey;
    });
    props.updateItemList(newList);
  }
  return (
    <div className="item-list">
      {props.itemList.map((itemObj) => {
        return (
          <div className="item" key={itemObj.key}>
            <h3>{itemObj.item}</h3>
            <button onClick={() => deleteFromList(itemObj.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
