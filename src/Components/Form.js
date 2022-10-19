import React, { useState } from 'react';
const Form = ({
  todoInput,
  setTodoInput,
  arrOfTodos,
  setTodos,
  todoID,
  setTodoID,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(arrOfTodos);
    const todo = { content: todoInput, completed: false, id: todoID };
    setTodos([...arrOfTodos, todo]);
    setTodoInput('');
    setTodoID(() => todoID + 1);
    console.log(arrOfTodos);
  };

  return (
    <div>
      <form id='todo-form'>
        <div>
          <input
            value={todoInput}
            type='text'
            className='todo-input'
            placeholder='Add task here!'
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button onClick={handleOnClick} type='submit' className='todo-button'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
