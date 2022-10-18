const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/solo-project'));

app.get('/api', (req, res) => {
  res.send('hello from express');
});

app.listen(PORT, () => {
  console.log('Server started on port 5000');
});
