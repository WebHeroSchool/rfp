import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import RadioFilters from '../RadioFilters/RadioFilters';
import Footer from '../Footer/Footer';
import styles from './TodoList.module.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          value: ' Important',
          isDone: false,
          id: 1
        },
        {
          value: ' Urgent',
          isDone: false,
          id: 2
        },
        {
          value: ' Miscellaneous',
          isDone: true,
          id: 3
        },
        {
          value: ' The rest',
          isDone: true,
          id: 4
        }
      ],
      count: 4
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

  onClickDelete = id =>
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.id !== id)
    });

  onClickAdd = value =>
    this.setState(state => ({
      todoItems: [
        ...state.todoItems,
        {
          value,
          isDone: false,
          id: state.count + 1
        }
      ],
      count: state.count + 1
    }));

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Todo list</h1>
          <div className={styles['add-form']}>
            <InputItem onClickAdd={this.onClickAdd} />
          </div>
          <RadioFilters />
          <ItemList
            todoItems={this.state.todoItems}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
        </div>
        <Footer todoCount={this.state.count} />
      </div>
    );
  }
}

export default TodoList;
