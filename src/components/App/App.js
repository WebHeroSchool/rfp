import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import RadioFilters from '../RadioFilters/RadioFilters';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todoItems: [
        {
          value: 'Important',
          isDone: false,
          id: 1
        },
        {
          value: 'Urgent',
          isDone: false,
          id: 2
        },
        {
          value: 'Miscellaneous',
          isDone: true,
          id: 3
        },
        {
          value: 'The rest',
          isDone: true,
          id: 4
        }
      ]
    };
  }
  

  onClickDone = id => {
    const newItemList = this.state.todoItems.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ todoItems: newItemList });
  };

  onClickDelete = id => this.setState({ todoItems: this.state.todoItems.filter(item => item.id !== id)});
  

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Todo list</h1>
        <InputItem />
        <RadioFilters />
        <ItemList
          todoItems={this.state.todoItems}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer todoCount={4} />
      </div>
    );
  }
}

export default App;
