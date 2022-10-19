const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/solo-project'));

app.get('/', (req, res) => {
  res.json({ hello: 'from' });
});

app.post('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log('Server started on port 4000');
});
