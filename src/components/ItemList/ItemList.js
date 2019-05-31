import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ todoItems, onClickDone }) => (
  <ul className={styles["item-list"]}>
    {todoItems.map(item => (
      <li key={item.id}>
        <Item
          value={item.value}
          isDone={item.isDone}
          onClickDone={onClickDone}
          id={item.id}
        />
      </li>
    ))}
  </ul>
);

export default ItemList;
