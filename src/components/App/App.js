import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

import TodoList from '../TodoList/TodoList';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';

import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrapper}>
      <Paper className={styles.sidebar}>
        <MenuList>
          <Link to='/' className={styles.link}>
            <MenuItem>About me</MenuItem>
          </Link>
          <Link to='/todo' className={styles.link}>
            <MenuItem>Tasks</MenuItem>
          </Link>
          <Link to='/contacts' className={styles.link}>
            <MenuItem>Contacts</MenuItem>
          </Link>
        </MenuList>
      </Paper>
      <Paper className={styles.main}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={TodoList} />
        <Route path='/contacts' component={Contacts} />
      </Paper>
    </div>
  </Router>
);

export default App;
