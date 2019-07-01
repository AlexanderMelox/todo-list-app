import React, { useRef } from 'react';
import classnames from 'classnames';
import './Todo.css';

import Icon from '../../../assets/svg/Icon';

const Todo = ({ todo, handleTodoClick, handleTodoChange }) => {
  const inputEl = useRef();

  const handleOnchange = event => {
    handleTodoChange(event.target.value, todo.id);
  };

  const handleEditClick = () => inputEl.current.focus();

  return (
    <div className={classnames('Todo', { 'Todo--done': todo.done })}>
      <div className="Todo-text">
        <Icon className="Todo-edit" name="pencil" onClick={handleEditClick} />
        <input ref={inputEl} className="Todo-input" type="text" value={todo.text} onChange={handleOnchange} />
      </div>
      <div onClick={() => handleTodoClick(todo.id)} className="Todo-checkbox">
        {todo.done && <Icon name="checkmark" />}
      </div>
    </div>
  );
};

export default Todo;
