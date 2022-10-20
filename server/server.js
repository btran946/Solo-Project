const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const usersController = require('./usersController');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.static(__dirname + '/solo-project'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ hello: 'from' });
});

app.post('/signup', usersController.addUser, (req, res) => {
  console.log('user created');
  res.status(200).json(res.locals.newUser);
  // return res.status(200).json(res.locals.newUser);
});

app.post('/login', usersController.verifyUser, (req, res) => {
  console.log('user login sucessful');
  return res.status(200).json(res.locals.userFound);
});

app.post('/save', usersController.saveTodoList, (req, res) => {
  return res.status(200);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server started on port 4000');
});
