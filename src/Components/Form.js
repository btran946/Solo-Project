import React, { useState } from 'react';
import TodoItems from './TodoItems';
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

  const handleOnAdd = (e) => {
    e.preventDefault();
    console.log(arrOfTodos);
    const todo = { content: todoInput, completed: false, id: todoID };
    setTodos([...arrOfTodos, todo]);
    setTodoInput('');
    setTodoID(() => todoID + 1);
    console.log(arrOfTodos);
  };

  const todos = [];
  arrOfTodos.forEach((todo) => {
    todos.push(
      <TodoItems
        content={todo.content}
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        arrOfTodos={arrOfTodos}
        setTodos={setTodos}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        // for each todo, we are passing in itself as a prop to check its ID for delete/complete/functionality
        todo={todo}
      />
    );
  });

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
          <button onClick={handleOnAdd} type='submit' className='todo-button'>
            Add
          </button>
        </div>
      </form>
      <div>{todos}</div>
      {arrOfTodos.length !== 0 ? <button>Save</button> : <></>}
    </div>
  );
};

export default Form;
