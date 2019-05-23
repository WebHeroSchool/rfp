import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ todoCount }) => (
    <footer className={styles.footer}>Number of remaining todos: {todoCount}</footer>
);

export default Footer;