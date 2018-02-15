const express = require('express');
const render = require('server-jsx');
const app = express();
const fs = require('fs');
const path = require('path');

var APP_DIR = path.resolve(__dirname, '../client');


var obj = {
  playerOneScore: 0,
  playerTwoScore: 0
}


app.use(express.static('../client'));

app.get('/', (req, res) => {
  res.send('getttttt');
});




app.listen(3000, () => {
  console.log('server is up');
})

