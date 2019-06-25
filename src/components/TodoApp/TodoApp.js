import React from 'react';
import './TodoApp.css';

import TodoList from '../TodoList/TodoList';
import TodoHeader from '../TodoHeader/TodoHeader';
import AddButton from '../AddButton/AddButton';

const TodoApp = props => {
  return (
    <div className="TodoApp">
      <TodoHeader />
      <TodoList />
      <AddButton />
    </div>
  );
};

export default TodoApp;
