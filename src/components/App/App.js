import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';


const App = () => {
const todoItems = [
    {
        value: 'Important',
        isDone: false,
    }, 
    {
        value: 'Urgent',
        isDone: false,
    }, 
    {
        value: 'Miscellaneous',
        isDone: true,
    },
    {
        value: 'The rest',
        isDone: true,
    }
];

    return (
    <div className={styles.wrapper}>
        <h1 className={styles.heading}>Todo list</h1>
        <InputItem />
        <ItemList todoItems = { todoItems }/>
        <Footer todoCount = {4} />
    
    </div>
)};

export default App;