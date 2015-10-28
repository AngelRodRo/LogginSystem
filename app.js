var Todo = {
    schema: {
        title: {type: String, required: true},
        description: {type: String},
        dueDate: {type: Date, 'default': Date.now},
        complete: {type: Boolean, 'default': false, index: true}
    },
    statics: {
    },
    virtuals: {
    },
    indexes: [
        {'dueDate': -1, background: true}
    ]
};

var feathers = require('feathers'),
  bodyParser = require('body-parser'),
  mongooseService = require('feathers-mongoose');

var app = feathers()
  // Setup the public folder.
  .use(feathers.static(__dirname + '/public'))
  // Enable Socket.io
  .configure(feathers.socketio())
  // Enable REST services
  .configure(feathers.rest())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({extended: true}))

// Connect to the db, create and register a Feathers service.
app.use('todos', new mongooseService('todo', Todo,{db:'test'}));

// Start the server.
var port = 8080;
app.listen(port, function() {
    console.log('Feathers server listening on port ' + port);
});
