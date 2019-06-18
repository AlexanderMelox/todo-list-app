import React from 'react';
import './App.css';

import IPhoneX from './components/iPhoneX/iPhoneX';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <IPhoneX>
        <TodoApp />
      </IPhoneX>
    </div>
  );
}

export default App;
