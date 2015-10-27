
var User = require('../models/user');
var userController = require('../controllers/users');

module.exports = {

  // Tries to get a single Todo by its id.
  // Throws an error if none can be found.
  getUser: function(id) {

    // If we didn't return yet we can throw an error
    throw new Error('Could not find Todo');
  },

  // Return all Todos
  find: function(params, callback) {

     User.find({}, function(err, users) {
       if (err) throw err;

       // object of all the users
       callback(null, users);
    });
 },

  // Returns a single Todo by id
  get: function(id, params, callback) {
    try {
      callback(null, this.getTodo(id));
    } catch(error) {
      callback(error);
    }
  },

  create: userController.signUp,

}
