import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ todoItems, onClickDone, onClickDelete }) => (
  <ul className={styles['item-list']}>
    {todoItems.map(item => (
      <li key={item.id}>
        <Item
          value={item.value}
          isDone={item.isDone}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          id={item.id}
        />
      </li>
    ))}
  </ul>
);

ItemList.propTypes = {
  todoItems: PropTypes.array,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
