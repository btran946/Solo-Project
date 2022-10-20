import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
const server = axios.create({
  baseURL: 'http://localhost:4000/',
});

const NavBar = ({ currentUser, previousTodoLists, setPreviousTodoLists }) => {
  const handleClick = (e) => {
    e.preventDefault();
    server
      .post('/allTodoLists', { username: currentUser })
      .then((res) => {
        console.log(res.data);
        setPreviousTodoLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='navBarContainer'>
      <nav>
        <div>
          what<a>ToDo?</a>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link to='/previousLists' onClick={handleClick}>
              Previous ToDo's
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
