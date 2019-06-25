import React from 'react';
import classnames from 'classnames';
import './TodoHeader.css';

const TodoHeader = ({ handleDoneFilter, showDone }) => (
  <div className="TodoHeader">
    <span
      onClick={handleDoneFilter}
      className={classnames('TodoHeader__text', { 'TodoHeader__text--active': !showDone })}
    >
      To-do
    </span>
    <span
      onClick={handleDoneFilter}
      className={classnames('TodoHeader__text', { 'TodoHeader__text--active': showDone })}
    >
      Done
    </span>
  </div>
);

export default TodoHeader;
