import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import NavBar from './NavBar';
import PreviousLists from './PreviousLists';

const MainContainer = () => {
  const [todoInput, setTodoInput] = useState('');
  const [arrOfTodos, setTodos] = useState([]);
  const [todoID, setTodoID] = useState(1);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [previousTodoLists, setPreviousTodoLists] = useState([]);

  return (
    <div className='mainContainer'>
      <Routes>
        <Route
          path='/previousLists'
          element={
            <>
              <div className='mainPage'>
                <NavBar currentUser={currentUser} />
                <Form
                  currentUser={currentUser}
                  todoInput={todoInput}
                  setTodoInput={setTodoInput}
                  arrOfTodos={arrOfTodos}
                  setTodos={setTodos}
                  todoID={todoID}
                  setTodoID={setTodoID}
                />
                <PreviousLists previousTodoLists={previousTodoLists} />
              </div>
            </>
          }
        />
        <Route
          path='/'
          element={
            isLoggedIn ? (
              <div className='mainPage'>
                <NavBar
                  currentUser={currentUser}
                  previousTodoLists={previousTodoLists}
                  setPreviousTodoLists={setPreviousTodoLists}
                />
                <Form
                  currentUser={currentUser}
                  todoInput={todoInput}
                  setTodoInput={setTodoInput}
                  arrOfTodos={arrOfTodos}
                  setTodos={setTodos}
                  todoID={todoID}
                  setTodoID={setTodoID}
                />
              </div>
            ) : (
              <Login
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
              />
            )
          }
        />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
