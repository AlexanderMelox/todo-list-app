import React from 'react';
import classnames from 'classnames';
import './Todo.css';

import CheckmarkIcon from '../../../assets/svg/CheckmarkIcon';

const Todo = ({ todo, handleTodoClick }) => {
  return (
    <div className={classnames('Todo', { 'Todo--done': todo.done })} onClick={() => handleTodoClick(todo.id)}>
      <div className="Todo-text">{todo.text}</div>
      <div className="Todo-checkbox">{todo.done && <CheckmarkIcon />}</div>
    </div>
  );
};

export default Todo;
