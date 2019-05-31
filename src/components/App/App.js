import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import RadioFilters from '../RadioFilters/RadioFilters';

import styles from './App.module.css';


class App extends React.Component {
    constructor (props) {
        super(props);
        
        this.state= {
            todoItems: [
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
            ],
        }    
    }
    
    render() {
            return (
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Todo list</h1>
                <InputItem />
                <RadioFilters />
                <ItemList todoItems = { this.state.todoItems }/>
                <Footer todoCount = {4} />
        
            
            </div>
        )
    }
};


export default App;