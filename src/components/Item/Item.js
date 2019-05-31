import React from "react";
import classnames from "classnames";
import styles from "./Item.module.css";
import CheckboxLabels from "../CheckboxLabels/CheckboxLabels";
import DeleteButton from "../DeleteButton/DeleteButton";

const Item = ({ value, isDone, onClickDone, id }) => (
  <div
    className={classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })}
  >
    <CheckboxLabels
      value={value}
      checked={isDone}
      onClickDone={onClickDone}
      isDone={isDone}
      id={id}
    />
    <DeleteButton />
  </div>
);

export default Item;
