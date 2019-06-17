import React from 'react';
import './Todo.css';

const Todo = ({ todo }) => {
  return (
    <div className="Todo">
      <div className="Todo-text">{todo.text}</div>
      <div className="Todo-checkbox" />
    </div>
  );
};

export default Todo;
