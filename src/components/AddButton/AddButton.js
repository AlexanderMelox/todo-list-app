import React from 'react';
import './Addbutton.css';

const AddButton = ({ handleShowTodoForm }) => {
  return (
    <button onClick={handleShowTodoForm} className="AddButton">
      <span>&#43;</span>
    </button>
  );
};

export default AddButton;
