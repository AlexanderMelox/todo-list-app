import React, { useState } from 'react';
import './TodoApp.css';

import TodoList from '../TodoList/TodoList';
import TodoHeader from '../TodoHeader/TodoHeader';
import AddButton from '../AddButton/AddButton';

const TodoApp = props => {
  const [showDone, setShowDone] = useState(false);

  const handleDoneFilter = () => {
    setShowDone(!showDone);
  };

  return (
    <div className="TodoApp">
      <TodoHeader showDone={showDone} handleDoneFilter={handleDoneFilter} />
      <TodoList showDone={showDone} />
      <AddButton />
    </div>
  );
};

export default TodoApp;
