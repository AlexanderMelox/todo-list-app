import React from 'react';
import './TodoHeader.css';

const TodoHeader = props => (
  <div className="TodoHeader">
    <span className="TodoHeader__text TodoHeader__text--active">To-do</span>
    <span className="TodoHeader__text">Done</span>
  </div>
);

export default TodoHeader;
