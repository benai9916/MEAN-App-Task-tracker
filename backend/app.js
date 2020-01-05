const express = require('./node_modules/express');
const app = express();
const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.json());

app.listen(3000, () => console.log("backend is listening to 3000"));