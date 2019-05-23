import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import styles from './App.module.css';


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
    <div className={styles.wrapper}>
        <h1 className={styles.heading}>Todo list</h1>
        <ItemList todoItems = { todoItems }/>
        <Footer todoCount = {4} />
    
    </div>
)};

export default App;