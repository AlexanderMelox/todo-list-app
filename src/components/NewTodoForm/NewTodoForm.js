import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './NewTodoForm.css';

const NewTodoForm = ({ showNewTodo, handleShowTodoForm, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const inputEl = useRef();

  useEffect(() => {
    if (inputEl.current) {
      setTimeout(() => inputEl.current.focus(), 200);
    }
  });

  const handleOnChange = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
    handleShowTodoForm();
  };

  return (
    <>
      {showNewTodo && (
        <div className={classnames('NewTodoForm', { 'adding-new': showNewTodo })}>
          <h1 className="NewTodoForm-title">Add a todo</h1>
          <form className="NewTodoForm-form" onSubmit={handleSubmit}>
            <input className="NewTodoForm-input" ref={inputEl} type="text" value={newTodo} onChange={handleOnChange} />
            <input type="submit" className="NewTodoForm-button" onClick={handleSubmit} value="Add" />
          </form>
        </div>
      )}
    </>
  );
};

export default NewTodoForm;
