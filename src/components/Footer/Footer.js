import React from 'react';
import './Footer.css';

const Footer = ({ todoCount }) => (
    <footer className='footer'>Number of remaining todos: {todoCount}</footer>
);

export default Footer;