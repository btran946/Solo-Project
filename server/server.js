const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const usersController = require('./usersController');

app.use(cors());
app.use(express.static(__dirname + '/solo-project'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ hello: 'from' });
});

app.post('/', usersController.addUser, (req, res) => {
  console.log('user created');
  return res.status(200).json({});
});

app.listen(PORT, () => {
  console.log('Server started on port 4000');
});
