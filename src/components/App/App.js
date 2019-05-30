import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import RadioFilters from '../RadioFilters/RadioFilters';

import styles from './App.module.css';


class App extends React.Component {
    render() {
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
                <RadioFilters />
                <ItemList todoItems = { todoItems }/>
                <Footer todoCount = {4} />
        
            
            </div>
        )
    }
};


export default App;