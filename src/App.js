import React from 'react';
import './App.css';

import IPhoneX from './components/iPhoneX/iPhoneX';
import TodoList from './components/TodoList/TodoList';
import TodoHeader from './components/TodoHeader/TodoHeader';

function App() {
  return (
    <div className="App">
      <IPhoneX className="example">
        <TodoHeader />
        <TodoList />
      </IPhoneX>
    </div>
  );
}

export default App;
