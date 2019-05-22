import React from 'react'
import Item from '../Item/Item';

const ItemList = ( { todoItem}) => (
    <ol>
        <Item todoItem = {todoItem[0]}/>
        <Item todoItem = {todoItem[1]}/>
        <Item todoItem = {todoItem[2]}/>
    </ol>
);

export default ItemList