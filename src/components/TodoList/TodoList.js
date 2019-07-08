import React, { useState } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import cuid from 'cuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TodoList.css';
import Todo from './Todo/Todo';

const todosArray = [
  { text: 'Throw garbage', done: false },
  { text: 'Cut grass', done: false },
  { text: 'Meet friends', done: false },
  { text: 'Clean the room', done: false },
  { text: 'Wash clothes', done: false },
  { text: 'Make food', done: false }
];

todosArray.forEach(todo => (todo.id = cuid()));

const TodoList = ({ showDone, showNewTodo, handleShowTodoForm }) => {
  const [todos, setTodos] = useState(todosArray);

  const handleTodoChange = (text, todoId) => {
    let updatedTodos = [...todos];
    let todoItem = updatedTodos.find(el => el.id === todoId);
    todoItem.text = text;
    setTodos(updatedTodos);
  };

  const handleTodoClick = todoId => {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === todoId) {
          todo.done = !todo.done;
        }
        return todo;
      })
    ]);
  };

  const handleAddTodo = text => {
    const todo = {
      text,
      done: false,
      id: cuid()
    };
    setTodos([...todos, todo]);
  };

  const renderList = () => {
    let todoList;
    if (showDone) {
      todoList = [...todos.filter(todo => todo.done)];
    } else {
      todoList = todos;
    }
    return todoList.map(todo => (
      <CSSTransition timeout={200} classNames="item" key={todo.id}>
        <Todo todo={todo} handleTodoClick={handleTodoClick} handleTodoChange={handleTodoChange} />
      </CSSTransition>
    ));
  };

  return (
    <>
      <TransitionGroup className="TodoList">
        {todos.filter(todo => !todo.done).length === 0 ? (
          <div className="Todo-finished">
            <span>
              <span role="img" aria-label="celebration">
                🎉
              </span>
              You did it!
              <span role="img" aria-label="celebration">
                🎉
              </span>
            </span>
          </div>
        ) : (
          renderList()
        )}
      </TransitionGroup>
      <NewTodoForm showNewTodo={showNewTodo} handleShowTodoForm={handleShowTodoForm} addTodo={handleAddTodo} />
    </>
  );
};

export default TodoList;
