import React from 'react';
import './App.css';

import IPhoneX from './components/iPhoneX/iPhoneX';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <IPhoneX className="example">
        <TodoList />
      </IPhoneX>
    </div>
  );
}

export default App;
