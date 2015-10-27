var feathers = require('feathers');
var app = feathers();
var bodyParser = require('body-parser');
var userService = require('./app/services/users');
var productService = require('./app/services/product');

var mongoose = require('mongoose');
//var db = require('../config/database');

mongoose.connect('mongodb://localhost:27017/test');

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');



app.configure(feathers.rest())
   .use(bodyParser.json())
  .use('/users',userService)
  .use('/product',productService)
  .listen(3000);
