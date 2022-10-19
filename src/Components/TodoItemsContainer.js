import React from 'react';
import TodoItems from './TodoItems';

const TodoItemsContainer = ({ arrOfTodos, setTodos }) => {
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
      />
    );
  });
  return <div>{todos}</div>;
};

export default TodoItemsContainer;
