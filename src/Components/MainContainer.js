import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import TodoItemsContainer from './TodoItemsContainer';
const MainContainer = () => {
  const [todoInput, setTodoInput] = useState('');
  const [arrOfTodos, setTodos] = useState([]);
  const [todoID, setTodoID] = useState(1);
  return (
    <div>
      <Header />
      <Form
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        arrOfTodos={arrOfTodos}
        setTodos={setTodos}
        todoID={todoID}
        setTodoID={setTodoID}
      />
      <TodoItemsContainer arrOfTodos={arrOfTodos} />
    </div>
  );
};

export default MainContainer;
