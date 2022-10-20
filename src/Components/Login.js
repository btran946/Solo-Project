import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const server = axios.create({
  baseURL: 'http://localhost:4000/',
});

const Login = ({ isLoggedIn, setLoggedIn }) => {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleUsernameInput = (e) => {
    e.preventDefault();
    setUsernameLogin(e.target.value);
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPasswordLogin(e.target.value);
  };

  const handleLogin = (e) => {
    setUsernameLogin('');
    setPasswordLogin('');
    server
      .post('/login', {
        username: usernameLogin,
        password: passwordLogin,
      })
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form>
        <label htmlFor='usernameLogin'>Username</label>
        <input
          onChange={handleUsernameInput}
          name='usernameLogin'
          type='text'
        />
        <label htmlFor='passwordLogin'>Password</label>
        <input
          onChange={handlePasswordInput}
          name='passwordLogin'
          type='text'
        />
        <button onClick={handleLogin}>Login!</button>
      </form>

      <Link to='/signup'>Sign Up!</Link>
    </div>
  );
};

export default Login;
