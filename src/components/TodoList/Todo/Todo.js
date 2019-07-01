import React from 'react';
import classnames from 'classnames';
import './Todo.css';

import Icon from '../../../assets/svg/Icon';

const Todo = ({ todo, handleTodoClick }) => {
  return (
    <div className={classnames('Todo', { 'Todo--done': todo.done })}>
      <div className="Todo-text">
        <Icon className="Todo-edit" name="pencil" />
        <span>{todo.text}</span>
      </div>
      <div onClick={() => handleTodoClick(todo.id)} className="Todo-checkbox">
        {todo.done && <Icon name="checkmark" />}
      </div>
    </div>
  );
};

export default Todo;
