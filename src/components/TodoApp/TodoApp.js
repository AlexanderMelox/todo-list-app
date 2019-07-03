import React, { useState } from 'react';
import './TodoApp.css';

import TodoList from '../TodoList/TodoList';
import TodoHeader from '../TodoHeader/TodoHeader';
import AddButton from '../AddButton/AddButton';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

const TodoApp = props => {
  const [showDone, setShowDone] = useState(false);
  const [showNewTodo, setShowNewTodo] = useState(false);

  const handleShowTodoForm = () => {
    setShowNewTodo(!showNewTodo);
  };

  const handleDoneFilter = () => {
    setShowDone(!showDone);
  };

  return (
    <div className="TodoApp">
      <TodoHeader showDone={showDone} handleDoneFilter={handleDoneFilter} />
      <TodoList showDone={showDone} />
      <NewTodoForm showNewTodo={showNewTodo} handleShowTodoForm={handleShowTodoForm} />
      <AddButton handleShowTodoForm={handleShowTodoForm} />
    </div>
  );
};

export default TodoApp;
