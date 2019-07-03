import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './NewTodoForm.css';

const NewTodoForm = ({ showNewTodo, handleShowTodoForm }) => {
  const [newTodo, setNewTodo] = useState('');
  const inputEl = useRef();

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  });

  const handleOnChange = event => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      {showNewTodo && (
        <div className={classnames('NewTodoForm', { 'adding-new': showNewTodo })}>
          <h1 className="NewTodoForm-title">Add a todo</h1>
          <input className="NewTodoForm-input" ref={inputEl} type="text" value={newTodo} onChange={handleOnChange} />
          <button className="NewTodoForm-button" onClick={handleShowTodoForm}>
            Add
          </button>
        </div>
      )}
    </>
  );
};

export default NewTodoForm;
