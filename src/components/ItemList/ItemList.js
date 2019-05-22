import React from 'react'
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (
    <ol>
        {
            todoItems.map(item => <Item value = {item.value} />)
        }
    </ol>
);

export default ItemList