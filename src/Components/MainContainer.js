import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

const MainContainer = () => {
  const [todoInput, setTodoInput] = useState('');
  const [arrOfTodos, setTodos] = useState([]);
  const [todoID, setTodoID] = useState(1);
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='header' element={<Header />} />
        <Route
          path='header'
          element={
            <Form
              todoInput={todoInput}
              setTodoInput={setTodoInput}
              arrOfTodos={arrOfTodos}
              setTodos={setTodos}
              todoID={todoID}
              setTodoID={setTodoID}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MainContainer;
