var feathers = require('feathers');
var app = feathers();
var bodyParser = require('body-parser');
var todoService = require('./services/todos');
var userService = require('./services/users');
var mongoose = require('mongoose');
//var db = require('../config/database');

mongoose.connect('mongodb://localhost:27017/test');

app.configure(feathers.rest())
   .use(bodyParser.json())
  .use('/todos', todoService)
  .use('/users',userService)
  .listen(3000);
