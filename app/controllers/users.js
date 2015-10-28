var User = require('../models/user');
var formidable = require('formidable');

module.exports.getAllUser = function(params,callback){
   User.find({}, function(err, users) {
     if (err) throw err;

     // object of all the users
     callback(null, users);
   });
}

module.exports.registerAction = function(data){

};

module.exports.signUp = function(data,params,callback){
   //var form = new formidable.IncomingForm();

   var user = new User({
      name: data.name,
      username: data.username,
      password: data.password
   });

   user.save(function(err) {
      if (err) throw err;

      callback(null, data);
   });

};

module.exports.logInUser= function(req,res){

};
