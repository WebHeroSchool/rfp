import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

import TodoList from '../TodoList/TodoList';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';

import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <Paper className={styles.sidebar}>
      <MenuList>
        <MenuItem>About me</MenuItem>
        <MenuItem>Tasks</MenuItem>
        <MenuItem>Contacts</MenuItem>
      </MenuList>
    </Paper>
    <Paper className={styles.main}>
      <TodoList />
    </Paper>
  </div>
);

export default App;
