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

  return (
    <div className="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
