const express = require('express');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

const app = express();

// Parses all incoming requests, checks if they contain JSON data, and if so, it will be parsed and made available as a JS object on the req.body field
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Some middleware!');
  next();
});

app.use(todoRoutes);

app.listen(3000);
