import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ todoCount }) => (
  <footer className={styles.footer}>
    Number of remaining todos: {todoCount}
  </footer>
);

Footer.propTypes = {
  todoCount: PropTypes.number.isRequired
};

export default Footer;
