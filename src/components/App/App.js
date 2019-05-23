import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import './App.css';


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
    <div className='wrapper'>
        <h1 className='wrapper__heading'>Todo list</h1>
        <ItemList todoItems = { todoItems }/>
        <Footer todoCount = {4} />
    
    </div>
)};

export default App;