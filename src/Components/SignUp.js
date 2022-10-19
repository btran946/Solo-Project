import React, { useState } from 'react';
import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:4000/',
});

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const handleUsernameInput = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassWord(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    server
      .post('/', {
        username: userName,
        password: passWord,
      })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <label for='username'>Username</label>
        <input onChange={handleUsernameInput} name='username' type='text' />
        <label for='password'>Password</label>
        <input onChange={handlePasswordInput} name='password' type='text' />
        <button onClick={handleSignUp}>Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
