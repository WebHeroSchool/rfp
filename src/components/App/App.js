import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const App = () => {
const todoItems = [
    {
        value: 'Important',
    }, 
    {
        value: 'Urgent',
    }, 
    {
        value: 'Miscellaneous',
    },
    {
        value: 'The rest',
    }
];

    return (
    <div>
        <h1>Todo list</h1>
        <ItemList todoItems = { todoItems }/>
        <Footer todoCount = {4} />
    
    </div>
)};

export default App;