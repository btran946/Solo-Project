import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const server = axios.create({
  baseURL: 'http://localhost:4000/',
});

const Login = ({ isLoggedIn, setLoggedIn, setCurrentUser, currentUser }) => {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [loginAttempted, setLoginAttempted] = useState(false);

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
    e.preventDefault();
    setLoginAttempted(true);
    server
      .post('/login', {
        username: usernameLogin,
        password: passwordLogin,
      })
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res.data.username);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='login'>
      <h1>
        what<a>ToDo?</a>
      </h1>
      <form className='loginForm'>
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
        {loginAttempted ? <p>Try again.</p> : <></>}
        <div className='needAccount'>
          <p>Need an account?</p>
          <Link className='signUp' to='/signup'>
            Sign Up!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
