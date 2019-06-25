import React, { useState } from 'react';
import cuid from 'cuid';

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

const TodoList = props => {
  const [todos, setTodos] = useState(todosArray);

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

  return (
    <div className="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
      ))}
    </div>
  );
};

export default TodoList;
