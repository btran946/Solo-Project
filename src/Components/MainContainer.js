import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

const MainContainer = () => {
  const [todoInput, setTodoInput] = useState('');
  const [arrOfTodos, setTodos] = useState([]);
  const [todoID, setTodoID] = useState(1);
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            isLoggedIn ? (
              <Form
                todoInput={todoInput}
                setTodoInput={setTodoInput}
                arrOfTodos={arrOfTodos}
                setTodos={setTodos}
                todoID={todoID}
                setTodoID={setTodoID}
              />
            ) : (
              <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            )
          }
        />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
