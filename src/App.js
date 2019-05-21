import React from 'react';

const ItemList = () => (
  <ol>
      <li>Important</li>
      <li>Urgent</li>
      <li>Miscellaneous</li>
  </ol>
);
const App = () => (
  <main>
      <h1>Todo list</h1>
      <ItemList />;
  </main>
);

export default App;
