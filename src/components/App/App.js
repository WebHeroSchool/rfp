import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const todoItem = ['Important', 'Urgent', 'Miscellaneous']

const App = () => (
    <body>
        <h1>Todo list</h1>
        <ItemList todoItem = { todoItem}/>
        <Footer todoCount = {3} />
    
    </body>
);

export default App;