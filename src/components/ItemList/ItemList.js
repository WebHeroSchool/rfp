import React from 'react'
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ todoItems }) => (
    <ul className={styles['item-list']}>
        {
            todoItems.map(item => <li key={item.value}><Item value = {item.value} isDone={item.isDone} /></li>)
        }
    </ul>
);

export default ItemList;