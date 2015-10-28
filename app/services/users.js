var User = require('../models/user');
var userController = require('../controllers/users');

module.exports = {

  find: userController.getAllUser,
  create: userController.signUp,
  patch: userController.login

}
